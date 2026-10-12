/*
 * sight — formulario de contacto (carta).
 * Recibe el mensaje del sitio, lo guarda en public.contactos y lo envía por correo:
 * un correo a SIGHT y, si la persona eligió correo, una confirmación para ella.
 *
 * Envío por Gmail (mientras SIGHT no tenga dominio propio).
 * Secretos (Supabase → Edge Functions → Secrets):
 *   GMAIL_CONTRASENA   contraseña de aplicación de Google (16 letras) de la cuenta de SIGHT
 *   GMAIL_USUARIO      (opcional) cuenta que envía; por defecto hola.sightcrea@gmail.com
 *   SIGHT_CORREO       (opcional) a dónde llegan los mensajes, separados por coma; por defecto la cuenta de Gmail
 *
 * Cuando haya dominio propio se puede pasar a Resend: borra GMAIL_CONTRASENA y agrega
 *   RESEND_API_KEY y SIGHT_REMITENTE, ej. "SIGHT <hola@tudominio.com>"
 *
 *   ORIGENES           (opcional) dominios extra permitidos, separados por coma
 */
import { createClient } from 'npm:@supabase/supabase-js@2';
import nodemailer from 'npm:nodemailer@6.9.16';
import { asuntoCliente, asuntoSight, filasSight, textoCliente, type Mensaje } from './plantillas.ts';

const ORIGENES = [
  'https://sightlaboratorio.myshopify.com',
  'https://sight-rkn3ptxh.myshopify.com',
  ...(Deno.env.get('ORIGENES') ?? '').split(',').map((o) => o.trim()).filter(Boolean),
];
const permitido = (o: string) =>
  ORIGENES.includes(o) || /^https:\/\/[a-z0-9-]+\.shopifypreview\.com$/.test(o) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o);

const cors = (origen: string) => ({
  'Access-Control-Allow-Origin': permitido(origen) ? origen : ORIGENES[0],
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type, authorization, apikey, x-client-info',
  'Vary': 'Origin',
});

const CANALES = ['WhatsApp', 'correo', 'llamada'] as const;
const INTERESES = [
  'entender hacia dónde van mi sector y mis clientes',
  'encontrar nuevas oportunidades para crecer',
  'mejorar la experiencia de mis clientes',
  'conversar, aún no lo tengo claro',
];

const texto = (v: unknown, max: number) => {
  const s = typeof v === 'string' ? v.replace(/\s+/g, ' ').trim() : '';
  return s ? s.slice(0, max) : null;
};
const esCorreo = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/* Celular o fijo de Colombia (10 dígitos, con o sin +57) o número internacional con + */
function telefono(v: string): string | null {
  const limpio = v.replace(/[\s().-]/g, '');
  const co = limpio.replace(/^(\+?57)(?=\d{10}$)/, '');
  if (/^(3\d{9}|60\d{8})$/.test(co)) return `+57 ${co.slice(0, 3)} ${co.slice(3, 6)} ${co.slice(6)}`;
  if (/^\+\d{8,15}$/.test(limpio)) return limpio;
  return null;
}
function instagram(v: string | null): string | null {
  if (!v) return null;
  const m = v.match(/instagram\.com\/([A-Za-z0-9._]+)/i);
  const h = (m ? m[1] : v).replace(/^@+/, '');
  return /^[A-Za-z0-9._]{1,30}$/.test(h) ? '@' + h : null;
}
function web(v: string | null): string | null {
  if (!v) return null;
  const url = /^https?:\/\//i.test(v) ? v : 'https://' + v;
  try {
    const u = new URL(url);
    return u.hostname.includes('.') ? u.href.replace(/\/$/, '') : null;
  } catch {
    return null;
  }
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

const GMAIL_USUARIO = Deno.env.get('GMAIL_USUARIO') ?? 'hola.sightcrea@gmail.com';
const GMAIL_CONTRASENA = (Deno.env.get('GMAIL_CONTRASENA') ?? '').replace(/\s+/g, '');
const usaGmail = !!GMAIL_CONTRASENA;

type Correo = { from: string; to: string[]; subject: string; text: string; html?: string; reply_to?: string };

/* Supabase no deja salir por el puerto 587: Gmail se usa por el 465 (SSL) */
const gmail = usaGmail
  ? nodemailer.createTransport({ host: 'smtp.gmail.com', port: 465, secure: true, auth: { user: GMAIL_USUARIO, pass: GMAIL_CONTRASENA } })
  : null;

async function enviar(c: Correo) {
  if (gmail) {
    await gmail.sendMail({ from: c.from, to: c.to, subject: c.subject, text: c.text, html: c.html, replyTo: c.reply_to });
    return;
  }
  const clave = Deno.env.get('RESEND_API_KEY');
  if (!clave) throw new Error('Falta GMAIL_CONTRASENA (o RESEND_API_KEY)');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${clave}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(c),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text()}`);
}

Deno.serve(async (req) => {
  const origen = req.headers.get('origin') ?? '';
  const h = { ...cors(origen), 'Content-Type': 'application/json' };
  const responder = (estado: number, datos: unknown) => new Response(JSON.stringify(datos), { status: estado, headers: h });

  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors(origen) });
  if (req.method !== 'POST') return responder(405, { ok: false });

  let d: Record<string, unknown>;
  try {
    d = await req.json();
  } catch {
    return responder(400, { ok: false, error: 'json' });
  }

  /* Campo trampa: las personas no lo ven, los robots lo llenan */
  if (texto(d.empresa_web, 10)) return responder(200, { ok: true });

  const canal = CANALES.find((c) => c === d.canal);
  const contactoBruto = texto(d.contacto, 200) ?? '';
  const contacto = canal === 'correo'
    ? (esCorreo(contactoBruto) ? contactoBruto.toLowerCase() : null)
    : telefono(contactoBruto);
  const interes = texto(d.interes, 200);

  const m: Mensaje = {
    nombre: texto(d.nombre, 120) ?? '',
    cargo: texto(d.cargo, 120),
    marca: texto(d.marca, 160) ?? '',
    instagram: instagram(texto(d.instagram, 80)),
    web: web(texto(d.web, 300)),
    interes: interes && INTERESES.includes(interes) ? interes : null,
    reto: typeof d.reto === 'string' ? d.reto.trim().slice(0, 4000) || null : null,
    canal: canal ?? 'correo',
    contacto: contacto ?? '',
    fecha: new Intl.DateTimeFormat('es-CO', { dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Bogota' }).format(new Date()),
    pagina: texto(d.pagina, 500),
  };

  const faltan: string[] = [];
  if (!m.nombre) faltan.push('nombre');
  if (!m.marca) faltan.push('marca');
  if (!m.instagram && !m.web) faltan.push('red');
  if (!canal) faltan.push('canal');
  if (!contacto) faltan.push('contacto');
  if (d.acepta_datos !== true) faltan.push('datos');
  if (faltan.length) return responder(422, { ok: false, faltan });

  /* 1. Guardar */
  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  const { data: fila, error: errGuardar } = await sb.from('contactos').insert({
    nombre: m.nombre, cargo: m.cargo, marca: m.marca, instagram: m.instagram, web: m.web,
    interes: m.interes, reto: m.reto, canal: m.canal, contacto: m.contacto,
    acepta_datos: true, pagina: m.pagina,
  }).select('id').single();
  if (errGuardar) console.error('No se guardó el contacto', errGuardar);

  /* 2. Correo a SIGHT */
  const destino = (Deno.env.get('SIGHT_CORREO') ?? (usaGmail ? GMAIL_USUARIO : '')).split(',').map((c) => c.trim()).filter(Boolean);
  /* Gmail solo deja enviar desde la propia cuenta */
  const remitente = usaGmail ? `SIGHT <${GMAIL_USUARIO}>` : (Deno.env.get('SIGHT_REMITENTE') ?? 'SIGHT <onboarding@resend.dev>');
  const filas = filasSight(m);
  let enviado = false;
  try {
    if (!destino.length) throw new Error('Falta SIGHT_CORREO');
    await enviar({
      from: remitente,
      to: destino,
      subject: asuntoSight(m),
      ...(m.canal === 'correo' ? { reply_to: m.contacto } : {}),
      text: filas.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">${
        filas.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#6b7080;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#2f3440;white-space:pre-wrap">${esc(v)}</td></tr>`).join('')
      }</table>`,
    });
    enviado = true;
    if (fila) await sb.from('contactos').update({ correo_enviado: true }).eq('id', fila.id);
  } catch (e) {
    console.error('No se envió el correo a SIGHT', e);
  }

  /* Si no quedó ni guardado ni enviado, el mensaje se perdería: avisamos al sitio */
  if (errGuardar && !enviado) return responder(502, { ok: false });

  /* 3. Confirmación al cliente */
  if (m.canal === 'correo') {
    try {
      await enviar({
        from: remitente,
        to: [m.contacto],
        subject: asuntoCliente(m),
        ...(destino.length ? { reply_to: destino[0] } : {}),
        text: textoCliente(m),
      });
    } catch (e) {
      console.error('No se envió la confirmación al cliente', e);
    }
  }

  return responder(200, { ok: true });
});
