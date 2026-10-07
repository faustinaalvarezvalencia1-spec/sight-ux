/* sight — espacio de clientes. Inicio de sesión y dashboard conectados a Supabase. */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const raiz = document.getElementById('espacio-clientes');
const cfg = raiz.dataset;

/* El tipo de enlace (invitación o recuperación) se lee antes de que Supabase limpie la URL */
const hashInicial = new URLSearchParams(location.hash.replace(/^#/, ''));
const tipoEnlace = hashInicial.get('type');
const errorEnlace = hashInicial.get('error_description');

/* "Recordarme": con la casilla apagada la sesión vive solo en esta pestaña */
const recuerdame = {
  get() { try { return localStorage.getItem('sight-recordar') !== 'no'; } catch (e) { return true; } },
  set(v) { try { localStorage.setItem('sight-recordar', v ? 'si' : 'no'); } catch (e) { /* sin almacenamiento */ } }
};
const almacen = {
  getItem(k) { try { return localStorage.getItem(k) ?? sessionStorage.getItem(k); } catch (e) { return null; } },
  setItem(k, v) { try { (recuerdame.get() ? localStorage : sessionStorage).setItem(k, v); } catch (e) { /* sin almacenamiento */ } },
  removeItem(k) { try { localStorage.removeItem(k); sessionStorage.removeItem(k); } catch (e) { /* sin almacenamiento */ } }
};

const sb = createClient(cfg.url, cfg.key, {
  auth: { storage: almacen, persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

/* ---------- utilidades ---------- */
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const esCorreo = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const DIA = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const partes = (iso) => String(iso).slice(0, 10).split('-').map(Number);
const fechaCorta = (iso) => { if (!iso) return ''; const [, m, d] = partes(iso); return `${d} ${MES[m - 1]}`; };
const fechaLarga = (iso) => (iso ? `${fechaCorta(iso)} ${partes(iso)[0]}` : '');
const diaCorto = (iso) => { const [y, m, d] = partes(iso); return `${DIA[new Date(Date.UTC(y, m - 1, d)).getUTCDay()].toLowerCase()} ${d} ${MES[m - 1]}`; };
/* Colombia no cambia de horario: UTC−5 todo el año */
const enBogota = (ts) => new Date(new Date(ts).getTime() - 5 * 36e5);
const diaReunion = (ts) => { const b = enBogota(ts); return `${DIA[b.getUTCDay()]} ${b.getUTCDate()} ${MES[b.getUTCMonth()]}`; };
const horaReunion = (ts) => {
  const b = enBogota(ts); const h = b.getUTCHours();
  return `${h % 12 || 12}:${String(b.getUTCMinutes()).padStart(2, '0')} ${h >= 12 ? 'p. m.' : 'a. m.'}`;
};
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const num = (v) => { const n = Number(v) || 0; return Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ','); };
const slug = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const enlaceSeguro = (u) => (/^https:\/\//i.test(u || '') ? u : '');
const flecha = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"></path><path d="M8 7h9v9"></path></svg>';
const flechaDer = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>';

const traducir = (m = '') => {
  if (/invalid login/i.test(m)) return 'El correo o la contraseña no coinciden.';
  if (/not confirmed/i.test(m)) return 'Confirma tu correo antes de entrar: revisa el enlace que te enviamos.';
  if (/rate limit|too many/i.test(m)) return 'Demasiados intentos. Espera un momento y vuelve a intentarlo.';
  if (/same password|different from the old/i.test(m)) return 'Usa una contraseña distinta a la anterior.';
  if (/at least|weak|short/i.test(m)) return 'La contraseña es muy corta o fácil de adivinar.';
  if (/expired|invalid|not found/i.test(m)) return 'El enlace venció o ya se usó. Pide uno nuevo.';
  return 'Algo salió mal. Intenta de nuevo.';
};

/* Avisos flotantes */
const avisoEl = document.createElement('div');
avisoEl.className = 'ec-aviso';
avisoEl.setAttribute('role', 'status');
avisoEl.hidden = true;
document.body.appendChild(avisoEl);
let avisoTimer;
function aviso(texto, error = false) {
  avisoEl.textContent = texto;
  avisoEl.classList.toggle('ec-aviso--error', error);
  avisoEl.hidden = false;
  clearTimeout(avisoTimer);
  avisoTimer = setTimeout(() => { avisoEl.hidden = true; }, error ? 7000 : 4500);
}

/* Selector de archivos compartido */
const selector = document.createElement('input');
selector.type = 'file';
selector.hidden = true;
document.body.appendChild(selector);
let destino = null;
selector.addEventListener('change', () => {
  const f = selector.files[0];
  selector.value = '';
  if (f && destino) subir(f, destino);
});

/* ---------- estado ---------- */
const S = {
  pantalla: 'cargando', correo: '', clave: '', clave2: '', ver: false, intento: false, error: '', ocupado: false,
  usuario: null, perfil: null, proyectos: [], pid: null, d: null,
  vista: 'resumen', fase: 0, hover: null, off: {}, abierta: 0, ev: 0, kpi: 0
};

const ESTADO_FASE = {
  completada: { k: 'done', t: 'Completada', tag: '#ffb6c0', edge: '#ff4864' },
  en_curso: { k: 'current', t: 'En curso', tag: '#e2fa83', edge: '#2f3440' },
  proxima: { k: 'next', t: 'Próxima', tag: '#f2f1ee', edge: '#c9ccd2' }
};
const ESTADO_MUESTRA = {
  entregado: { k: 'done', t: 'Entregado', m: '✓' },
  revision: { k: 'review', t: 'En revisión', m: '' },
  pendiente: { k: 'pending', t: 'Pendiente', m: '' }
};
const indiceActual = (fases) => {
  let i = fases.findIndex((f) => f.estado === 'en_curso');
  if (i < 0) i = fases.findIndex((f) => f.estado === 'proxima');
  return i < 0 ? Math.max(0, fases.length - 1) : i;
};

/* ---------- datos ---------- */
async function entrar(usuario) {
  S.usuario = usuario;
  S.pantalla = 'cargando';
  pintar();
  const [rPerfil, rProyectos] = await Promise.all([
    sb.from('perfiles').select('nombre, cargo, rol, empresa_id').eq('id', usuario.id).maybeSingle(),
    sb.from('proyectos').select('*, empresas(*)').eq('activo', true).order('fecha_inicio', { ascending: false })
  ]);
  if (rProyectos.error) {
    aviso('No pudimos cargar tu proyecto. Recarga la página.', true);
  }
  S.perfil = rPerfil.data || { rol: 'cliente' };
  S.proyectos = rProyectos.data || [];
  if (!S.proyectos.length) { S.pantalla = 'sin'; pintar(); return; }
  let guardado = null;
  try { guardado = localStorage.getItem('sight-proyecto'); } catch (e) { /* sin almacenamiento */ }
  S.pid = S.proyectos.some((p) => p.id === guardado) ? guardado : S.proyectos[0].id;
  await cargarProyecto();
}

async function cargarProyecto() {
  S.pantalla = 'cargando';
  pintar();
  const id = S.pid;
  const q = (t) => sb.from(t).select('*').eq('proyecto_id', id);
  const desde = new Date(Date.now() - 3 * 36e5).toISOString();
  const r = await Promise.all([
    q('fases').order('orden'),
    q('horas').order('semana'),
    q('muestras').order('orden'),
    q('hallazgos').order('fecha'),
    q('reuniones').gte('inicia', desde).order('inicia').limit(6),
    q('infografias').order('orden'),
    q('indicadores').order('orden'),
    q('areas').order('orden'),
    sb.from('proyecto_miembros').select('miembros_sight(id, nombre, rol, inicial)').eq('proyecto_id', id),
    listarExtras(id)
  ]);
  if (r.some((x) => x.error)) aviso('Parte de la información no cargó. Recarga la página.', true);
  const [fases, horas, muestras, hallazgos, reuniones, infos, inds, areas, equipo, extras] = r.map((x) => x.data || []);
  S.d = {
    proyecto: S.proyectos.find((p) => p.id === id), fases, horas, muestras, hallazgos, reuniones, infos, inds, areas,
    equipo: equipo.map((e) => e.miembros_sight).filter(Boolean), extras
  };
  Object.assign(S, { fase: indiceActual(fases), ev: 0, kpi: 0, abierta: 0, hover: null, off: {}, pantalla: 'app' });
  pintar();
}

async function listarExtras(id) {
  const r = await sb.storage.from('muestras').list(`${id}/adicionales`, { sortBy: { column: 'created_at', order: 'desc' } });
  return { data: (r.data || []).filter((f) => f.id && !f.name.startsWith('.')), error: r.error };
}

async function subir(file, dest) {
  if (file.size > 50 * 1024 * 1024) { aviso('El archivo pesa más de 50 MB. Compártelo por enlace con tu equipo sight.', true); return; }
  const limpio = file.name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\w.-]+/g, '-').slice(-80);
  const carpeta = dest.tipo === 'muestra' ? dest.id : 'adicionales';
  const path = `${S.pid}/${carpeta}/${Date.now()}-${limpio}`;
  aviso(`Subiendo ${file.name}…`);
  const up = await sb.storage.from('muestras').upload(path, file, { contentType: file.type || 'application/octet-stream' });
  if (up.error) { aviso('No pudimos subir el archivo. Intenta de nuevo.', true); return; }
  if (dest.tipo === 'muestra') {
    const { error } = await sb.from('muestras').update({ archivo_path: path, archivo_nombre: file.name, estado: 'revision' }).eq('id', dest.id);
    if (error) { aviso('El archivo subió, pero no pudimos marcar la muestra. Escríbenos.', true); return; }
    const { data } = await sb.from('muestras').select('*').eq('proyecto_id', S.pid).order('orden');
    if (data) S.d.muestras = data;
    aviso(`Listo: ${file.name} quedó en revisión.`);
  } else {
    S.d.extras = (await listarExtras(S.pid)).data;
    aviso(`Recibimos ${file.name}.`);
  }
  pintar();
}

async function abrir(bucket, path, nombre) {
  const { data, error } = await sb.storage.from(bucket).createSignedUrl(path, 120, { download: nombre || true });
  if (error || !data) { aviso('No pudimos abrir el archivo.', true); return; }
  location.assign(data.signedUrl);
}

function descargarIcs(r) {
  const f = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const t = (s) => String(s || '').replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
  const ini = new Date(r.inicia);
  const lineas = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//sight//Espacio de clientes//ES', 'BEGIN:VEVENT',
    `UID:${r.id}@sight`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(ini)}`, `DTEND:${f(new Date(ini.getTime() + 36e5))}`,
    `SUMMARY:${t(r.titulo)} · sight`, `LOCATION:${t(r.lugar)}`, `DESCRIPTION:${t(r.detalle)}`,
    enlaceSeguro(r.enlace) ? `URL:${r.enlace}` : '', 'END:VEVENT', 'END:VCALENDAR'
  ].filter(Boolean);
  const url = URL.createObjectURL(new Blob([lineas.join('\r\n')], { type: 'text/calendar' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: `${slug(r.titulo)}.ics` });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ---------- acceso ---------- */
function cargando() {
  return `<div class="ec-cargando" role="status"><img src="${cfg.logo}" alt="sight" width="120" height="40"><span>Cargando tu espacio…</span></div>`;
}

function acceso(forma) {
  return `<div class="ec-acceso">
<header class="ec-acceso__top"><a href="${cfg.sitio}" aria-label="sight, ir al sitio"><img src="${cfg.logo}" alt="sight" width="120" height="40"></a><a class="ec-acceso__back" href="${cfg.sitio}">← Volver al sitio</a></header>
<main class="ec-acceso__main">
<div class="ec-portada">
<div class="ec-portada__sol" aria-hidden="true"></div>
<div class="ec-portada__ojo" aria-hidden="true"><span></span></div>
<p class="ec-eyebrow ec-eyebrow--blanco">Espacio de clientes</p>
<div class="ec-portada__cuerpo">
<h2 class="ec-portada__titulo"><i>Tu marca,</i>vista con <mark>claridad</mark>.</h2>
<p class="ec-portada__texto">Consulta el avance de tu diagnóstico, los hallazgos y las decisiones de cada etapa en un solo lugar.</p>
</div>
<img class="ec-portada__logo" src="${cfg.logoClaro}" alt="" width="96" height="32">
</div>
<div class="ec-formas">${forma}</div>
</main>
</div>`;
}

const campoError = (t) => (t ? `<span class="ec-error" role="alert">${t}</span>` : '');

function formLogin() {
  const okC = esCorreo(S.correo), okK = S.clave.length > 0;
  const eC = S.intento && !okC ? (S.correo.trim() ? 'Ese correo no parece válido. Ejemplo: tu@marca.com' : 'Escribe tu correo.') : '';
  const eK = S.intento && !okK ? 'Escribe tu contraseña.' : '';
  return `<form class="ec-forma" data-form="login" novalidate>
<div class="ec-forma__cab"><p class="ec-eyebrow ec-eyebrow--pink">Acceso</p><h1 class="ec-h1">Inicia sesión</h1><p>Entra con el correo que registraste con tu equipo de sight.</p></div>
<label class="ec-campo"><span>Correo</span><input class="ec-input" type="email" name="correo" autocomplete="email" placeholder="tu@marca.com" value="${esc(S.correo)}" aria-invalid="${!!eC}">${campoError(eC)}</label>
<div class="ec-campo"><label for="ec-clave">Contraseña</label><span class="ec-clave"><input class="ec-input" id="ec-clave" type="${S.ver ? 'text' : 'password'}" name="clave" autocomplete="current-password" placeholder="Tu contraseña" value="${esc(S.clave)}" aria-invalid="${!!eK}"><button type="button" data-act="ver-clave" aria-pressed="${S.ver}">${S.ver ? 'Ocultar' : 'Mostrar'}</button></span>${campoError(eK)}</div>
<div class="ec-fila"><label class="ec-check"><input type="checkbox" name="recordar"${recuerdame.get() ? ' checked' : ''}>Recordarme en este equipo</label><button type="button" class="ec-linkbtn" data-act="ir" data-p="recuperar">¿Olvidaste tu contraseña?</button></div>
${S.error ? `<p class="ec-error" role="alert">${esc(S.error)}</p>` : ''}
<button type="submit" class="ec-entrar"${S.ocupado ? ' disabled' : ''}>${S.ocupado ? 'Entrando…' : 'Entrar →'}</button>
<p class="ec-nota">¿Aún no trabajas con nosotros? <a href="${cfg.contacto}">Hablemos</a></p>
</form>`;
}

function formRecuperar() {
  const e = S.intento && !esCorreo(S.correo) ? (S.correo.trim() ? 'Ese correo no parece válido. Ejemplo: tu@marca.com' : 'Escribe tu correo.') : '';
  return `<form class="ec-forma" data-form="recuperar" novalidate>
<div class="ec-forma__cab"><p class="ec-eyebrow ec-eyebrow--pink">Acceso</p><h1 class="ec-h1">Recupera tu contraseña</h1><p>Te enviamos un enlace para crear una nueva.</p></div>
<label class="ec-campo"><span>Correo</span><input class="ec-input" type="email" name="correo" autocomplete="email" placeholder="tu@marca.com" value="${esc(S.correo)}" aria-invalid="${!!e}">${campoError(e)}</label>
${S.error ? `<p class="ec-error" role="alert">${esc(S.error)}</p>` : ''}
<button type="submit" class="ec-entrar ec-entrar--ink"${S.ocupado ? ' disabled' : ''}>${S.ocupado ? 'Enviando…' : 'Enviar enlace'}</button>
<button type="button" class="ec-linkbtn" data-act="ir" data-p="login">← Volver a iniciar sesión</button>
</form>`;
}

function formEnviado() {
  return `<div class="ec-forma" role="status">
<div class="ec-enviado"><p class="ec-eyebrow ec-eyebrow--pink">Enlace enviado</p><p class="ec-enviado__t">Revisa tu correo.</p><p class="ec-enviado__x">Si <strong>${esc(S.correo)}</strong> está registrado, en unos minutos te llega el enlace para crear una nueva contraseña.</p></div>
<button type="button" class="ec-linkbtn" data-act="ir" data-p="login">← Volver a iniciar sesión</button>
</div>`;
}

function formNueva() {
  const invitacion = tipoEnlace === 'invite';
  const e1 = S.intento && S.clave.length < 8 ? 'Usa al menos 8 caracteres.' : '';
  const e2 = S.intento && !e1 && S.clave !== S.clave2 ? 'Las contraseñas no coinciden.' : '';
  return `<form class="ec-forma" data-form="nueva" novalidate>
<div class="ec-forma__cab"><p class="ec-eyebrow ec-eyebrow--pink">${invitacion ? 'Bienvenida' : 'Acceso'}</p><h1 class="ec-h1">${invitacion ? 'Crea tu contraseña' : 'Crea una nueva contraseña'}</h1><p>${invitacion ? 'Tu equipo de sight te dio acceso. Elige una contraseña para entrar cuando quieras.' : 'Elige una contraseña que no hayas usado antes.'}</p></div>
<p class="ec-texto">Cuenta: <strong>${esc(S.usuario?.email)}</strong></p>
<label class="ec-campo"><span>Contraseña nueva</span><input class="ec-input" type="password" name="clave" autocomplete="new-password" placeholder="Mínimo 8 caracteres" value="${esc(S.clave)}" aria-invalid="${!!e1}">${campoError(e1)}</label>
<label class="ec-campo"><span>Repítela</span><input class="ec-input" type="password" name="clave2" autocomplete="new-password" value="${esc(S.clave2)}" aria-invalid="${!!e2}">${campoError(e2)}</label>
${S.error ? `<p class="ec-error" role="alert">${esc(S.error)}</p>` : ''}
<button type="submit" class="ec-entrar"${S.ocupado ? ' disabled' : ''}>${S.ocupado ? 'Guardando…' : 'Guardar y entrar →'}</button>
</form>`;
}

async function enviarLogin() {
  S.intento = true; S.error = '';
  if (!esCorreo(S.correo) || !S.clave) { pintar(); return; }
  S.ocupado = true; pintar();
  const { data, error } = await sb.auth.signInWithPassword({ email: S.correo.trim(), password: S.clave });
  S.ocupado = false;
  if (error) { S.error = traducir(error.message); pintar(); return; }
  S.clave = ''; S.intento = false;
  await entrar(data.user);
}

async function enviarRecuperar() {
  S.intento = true; S.error = '';
  if (!esCorreo(S.correo)) { pintar(); return; }
  S.ocupado = true; pintar();
  const { error } = await sb.auth.resetPasswordForEmail(S.correo.trim(), { redirectTo: location.origin + location.pathname });
  S.ocupado = false;
  if (error && /rate limit|too many/i.test(error.message)) { S.error = traducir(error.message); pintar(); return; }
  S.intento = false; S.pantalla = 'enviado'; pintar();
}

async function enviarNueva() {
  S.intento = true; S.error = '';
  if (S.clave.length < 8 || S.clave !== S.clave2) { pintar(); return; }
  S.ocupado = true; pintar();
  const { data, error } = await sb.auth.updateUser({ password: S.clave });
  S.ocupado = false;
  if (error) { S.error = traducir(error.message); pintar(); return; }
  S.clave = ''; S.clave2 = ''; S.intento = false;
  history.replaceState(null, '', location.pathname);
  aviso('Contraseña guardada.');
  await entrar(data.user);
}

/* ---------- dashboard ---------- */
function smooth(pts) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

function tarjetaHoras() {
  const d = S.d;
  const semanas = [...new Set(d.horas.map((h) => h.semana))].sort((a, b) => a - b).slice(-4);
  const cab = (total) => `<div class="ec-cab"><div><p class="ec-eyebrow">${semanas.length ? `Últimas ${semanas.length} semanas` : 'Horas'}</p><h2 class="ec-h2"><span class="ec-mk">Intensidad</span> de horas</h2></div>${total}</div>`;
  if (!semanas.length) return `<section class="ec-card ec-horas" id="ec-horas">${cab('')}<p class="ec-vacio">Aún no hay horas registradas.</p></section>`;
  const FIJO = { 'Investigación': '#ff4864', 'Estrategia': '#2f3440', 'Diseño': '#9cbf2b' };
  const COL = ['#ff7c6f', '#721f34', '#ade6e6'];
  const frentes = [...new Set(d.horas.map((h) => h.frente))]
    .sort((a, b) => (Object.keys(FIJO).indexOf(a) + 1 || 99) - (Object.keys(FIJO).indexOf(b) + 1 || 99));
  let extra = 0;
  const series = frentes.map((f) => ({
    f, color: FIJO[f] || COL[extra++ % COL.length],
    v: semanas.map((s) => Number(d.horas.find((h) => h.frente === f && h.semana === s)?.horas || 0))
  }));
  const n = semanas.length;
  const MAX = Math.ceil(Math.max(4, ...series.flatMap((s) => s.v)) / 4) * 4;
  const y = (v) => 20 + (1 - v / MAX) * 210;
  const xc = (i) => (i + 0.5) * (1000 / n);
  const vis = series.filter((s) => !S.off[s.f]);
  const total = series.reduce((a, s) => a + s.v.reduce((b, v) => b + v, 0), 0);
  const h = S.hover;
  const lineas = vis.map((s) => `<path d="${smooth([[0, y(s.v[0])], ...s.v.map((v, i) => [xc(i), y(v)]), [1000, y(s.v[n - 1])]])}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>`).join('');
  const puntos = vis.map((s) => s.v.map((v, i) => {
    const on = h === i, t = on ? 16 : 10;
    return `<span class="ec-graf__punto" style="left:${(i + 0.5) * 100 / n}%;top:${Math.round(y(v))}px;width:${t}px;height:${t}px;background:${on ? '#ffffff' : s.color};border-color:${s.color}"></span>`;
  }).join('')).join('');
  const zonas = semanas.map((s, i) => `<div class="ec-graf__zona" data-i="${i}" style="left:${i * 100 / n}%;width:${100 / n}%"></div>`).join('');
  const tip = h !== null && h < n
    ? `<div class="ec-graf__guia" style="left:${(h + 0.5) * 100 / n}%"></div><div class="ec-graf__tip" role="status" style="left:${(h + 0.5) * 100 / n}%"><strong>Semana ${semanas[h]}</strong><span>${vis.map((s) => `${esc(s.f)} ${num(s.v[h])} h`).join(' · ') || 'Sin frentes visibles'}</span></div>`
    : '';
  return `<section class="ec-card ec-horas" id="ec-horas">
${cab(`<p class="ec-horas__total"><strong>${num(total)} h</strong> dedicadas a tu marca</p>`)}
<div class="ec-graf">
<svg viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
${[20, 72.5, 125, 177.5].map((v) => `<line x1="0" x2="1000" y1="${v}" y2="${v}" stroke="#e6e7e9" stroke-width="1" vector-effect="non-scaling-stroke"></line>`).join('')}
<line x1="0" x2="1000" y1="230" y2="230" stroke="#c9ccd2" stroke-width="1" vector-effect="non-scaling-stroke"></line>
${lineas}
</svg>
${puntos}${zonas}${tip}
</div>
<div class="ec-graf__ejes">${semanas.map((s) => `<span>Semana ${s}</span>`).join('')}</div>
<div class="ec-leyenda">
${series.map((s) => `<button type="button" data-act="serie" data-f="${esc(s.f)}" aria-pressed="${!S.off[s.f]}"><i style="background:${s.color}"></i>${esc(s.f)} · ${num(s.v.reduce((a, v) => a + v, 0))} h</button>`).join('')}
<small>Pasa el cursor por una semana · clic en la leyenda para aislar un frente</small>
</div>
</section>`;
}

function repintarHoras() {
  const el = raiz.querySelector('#ec-horas');
  if (!el) return;
  el.outerHTML = tarjetaHoras();
  enlazarHoras();
}
function enlazarHoras() {
  const g = raiz.querySelector('.ec-graf');
  if (!g) return;
  g.querySelectorAll('.ec-graf__zona').forEach((z) => {
    const fijar = () => { const i = Number(z.dataset.i); if (S.hover !== i) { S.hover = i; repintarHoras(); } };
    z.addEventListener('mouseenter', fijar);
    z.addEventListener('click', fijar);
  });
  g.addEventListener('mouseleave', () => { if (S.hover !== null) { S.hover = null; repintarHoras(); } });
}

function nota(m) {
  return esc(m.nota) + (m.estado === 'pendiente' && m.fecha_limite ? ` Antes del ${diaCorto(m.fecha_limite)}.` : '');
}

function tarjetaMuestra(m) {
  const e = ESTADO_MUESTRA[m.estado] || ESTADO_MUESTRA.pendiente;
  return `<div class="ec-mu-card">
<div><span class="ec-marca ec-marca--${e.k}" aria-hidden="true">${e.m}</span><span class="ec-estado ec-estado--${e.k}">${e.t}</span></div>
<strong>${esc(m.nombre)}</strong>
<p>${nota(m)}</p>
${m.estado === 'pendiente' ? `<button type="button" class="ec-pill" data-act="adjuntar" data-id="${m.id}">Adjuntar archivo</button>` : ''}
</div>`;
}

function metodo() {
  const { fases } = S.d;
  if (!fases.length) return '';
  const n = fases.length, step = n > 1 ? (320 - 110) / (n - 1) : 0;
  const tamanos = fases.map((_, k) => Math.round(320 - k * step));
  const orden = fases.map((_, i) => n - 1 - i);
  const arcos = orden.map((i, k) => {
    const f = fases[i], e = ESTADO_FASE[f.estado] || ESTADO_FASE.proxima, t = tamanos[k];
    const bg = e.k === 'done' ? '#ff4864' : e.k === 'current' ? '#e2fa83' : (i % 2 === 0 ? '#f4efe6' : '#f2f1ee');
    return `<button type="button" class="ec-arco${S.fase === i ? ' is-on' : ''}" data-act="arco" data-i="${i}" aria-label="${esc(f.nombre)}, ${e.t.toLowerCase()}" aria-pressed="${S.fase === i}" style="width:${t}px;height:${t}px;border-top-right-radius:${t}px;background:${bg}"></button>`;
  }).join('');
  const etiquetas = orden.map((i, k) => {
    const f = fases[i], e = ESTADO_FASE[f.estado] || ESTADO_FASE.proxima;
    const pos = Math.round(((tamanos[k] + (tamanos[k + 1] || 0)) / 2) * 0.7071);
    return `<span class="ec-arco__t${S.fase === i ? ' is-on' : ''}" style="left:${pos}px;bottom:${pos}px;color:${e.k === 'done' ? '#ffffff' : '#2f3440'}">${esc(f.nombre)}</span>`;
  }).join('');
  const f = fases[S.fase] || fases[0], e = ESTADO_FASE[f.estado] || ESTADO_FASE.proxima;
  return `<section class="ec-card ec-metodo">
<div class="ec-metodo__izq">
<div><p class="ec-eyebrow">Método sight</p><h2 class="ec-h2">De observar a accionar</h2></div>
<div class="ec-arcos">${arcos}${etiquetas}</div>
</div>
<div class="ec-metodo__det">
<p class="ec-eyebrow ec-eyebrow--pink">Fase ${String(f.orden).padStart(2, '0')} · ${e.t.toLowerCase()}</p>
<h3>${esc(f.nombre)}</h3>
<p class="ec-muted" style="font-size:14px;font-weight:500">${fechaCorta(f.fecha_inicio)} – ${fechaCorta(f.fecha_fin)}</p>
<p class="ec-soft" style="font-size:16px;line-height:1.4;letter-spacing:-0.02em">${esc(f.descripcion)}</p>
<div class="ec-tags">${(f.items || []).map((it) => `<span class="ec-tag">${esc(it)}</span>`).join('')}</div>
<div class="ec-entregable">
<span class="ec-eyebrow">Entregable</span>
<span style="font-size:16px;font-weight:600">${esc(f.entregable)}</span>
<span class="ec-barra"><span style="width:${f.avance}%;background:${e.k === 'done' ? '#ff4864' : '#2f3440'}"></span></span>
<span class="ec-muted" style="font-size:13px">${f.avance}% de la fase</span>
</div>
</div>
</section>`;
}

function calendario() {
  const rs = S.d.reuniones;
  const meses = [...new Set(rs.map((r) => cap(MES[enBogota(r.inicia).getUTCMonth()])))].slice(0, 3).join(' · ');
  const items = rs.map((r, i) => {
    const abierta = S.abierta === i, link = enlaceSeguro(r.enlace);
    return `<li>
<div class="ec-agenda__fila">
<div class="ec-agenda__fecha"><small>${diaReunion(r.inicia)}</small><b>${horaReunion(r.inicia)}</b></div>
<div class="ec-agenda__t"><b>${esc(r.titulo)}</b><small>${esc(r.lugar)}</small></div>
<button type="button" class="ec-ext" data-act="reunion" data-i="${i}" aria-expanded="${abierta}" aria-label="Detalles de ${esc(r.titulo)}">${flecha}</button>
</div>
${abierta ? `<div class="ec-agenda__det">${r.detalle ? `<p>${esc(r.detalle)}</p>` : ''}<div>${link ? `<a class="ec-pill ec-pill--pink" href="${esc(link)}" target="_blank" rel="noopener">${esc(r.cta || 'Abrir enlace')}</a>` : ''}<button type="button" class="ec-pill" data-act="ics" data-i="${i}">Agregar a mi calendario</button></div></div>` : ''}
</li>`;
  }).join('');
  return `<section class="ec-card">
<div class="ec-cab ec-cab--fila"><h2 class="ec-h2 ec-h2--sm"><span class="ec-mk ec-mk--salt">Calendario</span></h2>${meses ? `<span class="ec-chip">${meses}</span>` : ''}</div>
${rs.length ? `<ul class="ec-agenda">${items}</ul>` : '<p class="ec-vacio">No hay sesiones agendadas por ahora.</p>'}
</section>`;
}

function semanasFaltan(p) {
  if (!p.fecha_entrega) return Math.max(0, (p.total_semanas || 0) - (p.semana_actual || 0));
  const [y, m, d] = partes(p.fecha_entrega);
  return Math.max(0, Math.ceil((Date.UTC(y, m - 1, d) - Date.now()) / (7 * 864e5)));
}

function escalera() {
  const { fases, proyecto: p } = S.d;
  if (!fases.length) return '';
  const n = fases.length, ancho = 100 / n, paso = 160 / n;
  const actual = fases[indiceActual(fases)];
  const peldanos = fases.map((f, i) => {
    const e = ESTADO_FASE[f.estado] || ESTADO_FASE.proxima, top = 26 + i * paso;
    return `<div class="ec-escalera__peldano" style="left:${i * ancho}%;width:${ancho}%;top:${top}px;background:${e.k === 'done' ? '#ff4864' : e.k === 'current' ? '#e2fa83' : '#f2f1ee'};border-top-color:${e.k === 'next' ? '#c9ccd2' : '#2f3440'}"><span style="color:${e.k === 'done' ? '#ffffff' : '#2f3440'}">${esc(f.nombre)}</span></div>`
      + (e.k === 'current' ? `<div class="ec-escalera__aqui" style="left:${i * ancho + ancho / 2}%;top:${top - 2}px"><b>Estamos aquí</b><i aria-hidden="true"></i></div>` : '');
  }).join('');
  const faltan = semanasFaltan(p);
  return `<section class="ec-card" style="display:flex;flex-direction:column;gap:16px">
<div class="ec-cab ec-cab--fila"><h2 class="ec-h2 ec-h2--sm">¿En qué <span class="ec-mk ec-mk--salmon">vamos</span>?</h2><button type="button" class="ec-ghost ec-ghost--sm" data-act="vista" data-v="avance">Detalle →</button></div>
<div class="ec-escalera">
${p.fecha_inicio ? `<span class="ec-escalera__ini">Inicio · ${fechaCorta(p.fecha_inicio)}</span>` : ''}
${peldanos}
${p.fecha_entrega ? `<span class="ec-escalera__fin">Entrega final · ${fechaLarga(p.fecha_entrega)}</span>` : ''}
</div>
<p class="ec-texto">Vamos en la fase <strong>${esc(actual.nombre)}</strong>${faltan ? `: faltan ${faltan} ${faltan === 1 ? 'semana' : 'semanas'} para la entrega consolidada.` : '.'}</p>
</section>`;
}

function vistaResumen() {
  const d = S.d, p = d.proyecto;
  const actual = d.fases[indiceActual(d.fases)] || { nombre: '' };
  const progreso = d.fases.length ? Math.round(d.fases.reduce((a, f) => a + (f.avance || 0), 0) / d.fases.length) : 0;
  const primerNombre = (S.perfil?.nombre || '').trim().split(/\s+/)[0];
  const esSight = S.perfil?.rol === 'sight';
  const prioridad = { pendiente: 0, revision: 1, entregado: 2 };
  const top = [...d.muestras].sort((a, b) => (prioridad[a.estado] - prioridad[b.estado]) || (a.orden - b.orden)).slice(0, 3);
  return `<div class="ec-col">
<section class="ec-card ec-saludo">
<div class="ec-ojo" aria-hidden="true"><span></span></div>
<div><h1>Hola${primerNombre ? `, ${esc(primerNombre)}` : ''}</h1><p>${esSight ? `${esc(p.empresas?.nombre)} · ` : ''}${esc(p.nombre)} · semana ${p.semana_actual ?? '—'} de ${p.total_semanas ?? '—'}${actual.nombre ? ` · fase ${esc(actual.nombre)}` : ''}</p></div>
<div class="ec-saludo__der"><span class="ec-progreso">${progreso}% del proyecto</span><button type="button" class="ec-pill ec-pill--pink" data-act="vista" data-v="muestras">Adjuntar muestra</button></div>
</section>
${tarjetaHoras()}
<section class="ec-card" style="display:flex;flex-direction:column;gap:20px">
<div class="ec-cab"><div><p class="ec-eyebrow">Lo que necesitamos de tu equipo</p><h2 class="ec-h2">Muestras <span class="ec-mk ec-mk--salmon">diagnósticas</span></h2></div><button type="button" class="ec-ghost" data-act="vista" data-v="muestras">Ver todas →</button></div>
${top.length ? `<div class="ec-mu-grid">${top.map(tarjetaMuestra).join('')}</div>` : '<p class="ec-vacio">No hay muestras pedidas por ahora.</p>'}
</section>
${metodo()}
</div>
<aside class="ec-aside">
${calendario()}
${escalera()}
${p.siguiente_paso ? `<section class="ec-card ec-siguiente"><div><p class="ec-eyebrow">Siguiente paso</p><p>${esc(p.siguiente_paso)}</p>${p.siguiente_cta ? `<button type="button" class="ec-pill ec-pill--lime" data-act="vista" data-v="muestras">${esc(p.siguiente_cta)}</button>` : ''}</div></section>` : ''}
${d.equipo.length ? `<section class="ec-card ec-equipo"><p class="ec-eyebrow">Tu equipo sight</p>${d.equipo.map((t) => `<div class="ec-persona"><span class="ec-avatar ec-avatar--lg" aria-hidden="true">${esc(t.inicial || (t.nombre || '?')[0])}</span><span><b>${esc(t.nombre)}</b><small>${esc(t.rol)}</small></span></div>`).join('')}</section>` : ''}
</aside>`;
}

function cabVista(eyebrow, titulo, texto, extra = '') {
  return `<div class="ec-cab"><div class="ec-vista__cab"><p class="ec-eyebrow ec-eyebrow--pink">${eyebrow}</p><h1 class="ec-h1">${titulo}</h1>${texto ? `<p class="ec-lead">${texto}</p>` : ''}</div>${extra}</div>`;
}

function vistaAvance() {
  const { fases, hallazgos } = S.d;
  const grupos = fases.map((f) => ({ f, items: hallazgos.filter((h) => h.fase_id === f.id) }))
    .filter((g) => g.items.length || g.f.estado !== 'proxima');
  const sinFase = hallazgos.filter((h) => !h.fase_id);
  const bloque = (titulo, e, items) => `<div class="ec-hallazgo" style="border-top-color:${e.edge}">
<div><b>${esc(titulo)}</b><span class="ec-estado-tag" style="background:${e.tag}">${e.t}</span></div>
${items.length ? `<ul>${items.map((x) => `<li><small>${fechaCorta(x.fecha)}</small><span>${esc(x.texto)}</span></li>`).join('')}</ul>` : '<p class="ec-vacio" style="margin:0">Aún sin hallazgos registrados.</p>'}
</div>`;
  return `<section class="ec-card ec-vista ec-full">
${cabVista('¿En qué vamos?', 'Lo que hemos investigado hasta ahora', 'Cada hallazgo queda registrado en la fase donde apareció. Se actualiza cada semana.')}
<div class="ec-hallazgos">
${grupos.map((g) => bloque(g.f.nombre, ESTADO_FASE[g.f.estado] || ESTADO_FASE.proxima, g.items)).join('')}
${sinFase.length ? bloque('Generales', { t: 'Notas', tag: '#cffffd', edge: '#ade6e6' }, sinFase) : ''}
</div>
</section>`;
}

function vistaContexto() {
  const e = S.d.proyecto.empresas || {};
  const filas = [
    ['Empresa', [e.nombre, e.sector].filter(Boolean).join(' · '), '#2f3440'],
    ['Trayectoria', e.trayectoria, '#2f3440'],
    ['Objetivo del proyecto', e.objetivo, '#ff4864'],
    ['Reto inicial', e.reto, '#ff4864'],
    ['Alcance', e.alcance, '#e2fa83'],
    ['Equipo del cliente', e.equipo_cliente, '#e2fa83']
  ].filter((f) => f[1]);
  return `<section class="ec-card ec-vista ec-full">
${cabVista('Contexto inicial', 'De dónde partimos', 'Lo que nos contaron en la sesión de arranque. Si algo cambió, escríbenos y lo actualizamos.')}
<div class="ec-contexto">${filas.map((f) => `<div style="border-top-color:${f[2]}"><p class="ec-eyebrow">${f[0]}</p><span>${esc(f[1])}</span></div>`).join('')}</div>
</section>`;
}

function vistaMuestras() {
  const { muestras, extras } = S.d;
  const hechas = muestras.filter((m) => m.estado === 'entregado').length;
  const pend = muestras.filter((m) => m.estado === 'pendiente').length;
  const filas = muestras.map((m) => {
    const e = ESTADO_MUESTRA[m.estado] || ESTADO_MUESTRA.pendiente;
    const archivo = m.archivo_path
      ? `<button type="button" class="ec-archivo" data-act="abrir" data-b="muestras" data-path="${esc(m.archivo_path)}" data-n="${esc(m.archivo_nombre)}" title="Descargar ${esc(m.archivo_nombre)}">${esc(m.archivo_nombre || 'Archivo')}</button>`
      : (m.archivo_nombre ? `<span class="ec-archivo ec-archivo--txt">${esc(m.archivo_nombre)}</span>` : '');
    const accion = m.estado === 'pendiente'
      ? `<button type="button" class="ec-pill" data-act="adjuntar" data-id="${m.id}">Adjuntar archivo</button>`
      : m.estado === 'revision' ? `${archivo}<button type="button" class="ec-linkbtn" style="font-size:13px" data-act="adjuntar" data-id="${m.id}">Reemplazar</button>` : archivo;
    return `<li><span class="ec-marca ec-marca--${e.k}" aria-hidden="true">${e.m}</span><span><strong>${esc(m.nombre)}</strong><small>${nota(m)}</small></span><span class="ec-estado ec-estado--${e.k}">${e.t}</span><span>${accion}</span></li>`;
  }).join('');
  return `<section class="ec-card ec-vista ec-full">
${cabVista('Muestras diagnósticas', 'Lo que necesitamos de tu equipo', 'Adjunta aquí la información que pedimos. Cada archivo pasa a revisión y te avisamos si falta algo.',
    `<div class="ec-cuenta"><div><b>${hechas}</b><small>entregadas</small></div><div><b class="is-pink">${pend}</b><small>pendientes</small></div></div>`)}
${muestras.length ? `<ul class="ec-mu-lista">${filas}</ul>` : '<p class="ec-vacio">No hay muestras pedidas por ahora.</p>'}
<div class="ec-drop" data-drop>
<span>¿Tienes algo más que pueda servir? Arrástralo aquí o</span>
<button type="button" class="ec-pill" data-act="extra">Elegir archivo</button>
</div>
${extras.length ? `<div style="display:flex;flex-direction:column;gap:10px"><p class="ec-eyebrow">Archivos adicionales</p><ul class="ec-extras">${extras.map((f) => { const n = f.name.replace(/^\d+-/, ''); return `<li><button type="button" class="ec-archivo" data-act="abrir" data-b="muestras" data-path="${esc(`${S.pid}/adicionales/${f.name}`)}" data-n="${esc(n)}">${esc(n)}</button></li>`; }).join('')}</ul></div>` : ''}
</section>`;
}

function vistaInfo() {
  const d = S.d, p = d.proyecto;
  const actual = d.fases[indiceActual(d.fases)] || { nombre: '' };
  const cobertura = Math.max(0, Math.min(100, p.cobertura || 0));
  const KBG = [
    'radial-gradient(70% 60% at 50% 100%, #ff8f9f 0%, rgba(255,143,159,0) 75%), linear-gradient(180deg, #ffffff 0%, #fff1f3 100%)',
    'radial-gradient(70% 60% at 60% 70%, #c9fbf6 0%, rgba(201,251,246,0) 75%), linear-gradient(180deg, #ffffff 0%, #f1fbfa 100%)'
  ];
  const EBG = [
    'linear-gradient(150deg, #e2fa83 0%, #eef5c4 45%, #f7efe6 100%)',
    'linear-gradient(150deg, #edf3ee 0%, #e2f7f1 50%, #cffffd 100%)',
    'linear-gradient(150deg, #ff7c6f 0%, #ff9e94 40%, #ffe3e8 100%)',
    'linear-gradient(150deg, #ffc4cd 0%, #f6dde2 55%, #cffffd 100%)'
  ];
  const BENTO = [
    { col: '1', row: '1 / span 2', size: 84 }, { col: '2', row: '1 / span 2', size: 68 },
    { col: '3', row: '1', size: 52 }, { col: '3', row: '2', size: 44, end: true }
  ];
  const bento = d.infos.length === 4;
  const evid = d.infos.map((e, i) => {
    const b = bento ? BENTO[i] : { size: 56 }, on = S.ev === i;
    return `<button type="button" class="ec-evid" data-act="ev" data-i="${i}" aria-pressed="${on}" style="background:${EBG[i % EBG.length]};${bento ? `grid-column:${b.col};grid-row:${b.row};` : ''}">
<span>${esc(e.titulo)}${on ? `<span class="ec-evid__flecha" aria-hidden="true">${flechaDer}</span>` : ''}</span>
<span style="align-items:${b.end ? 'flex-end' : 'flex-start'}"><b style="font-size:${b.size}px">${esc(e.cifra)}</b><small>${esc(e.nota)}</small></span>
</button>`;
  }).join('');
  const sel = d.infos[S.ev] || d.infos[0];
  let grafica = '';
  if (sel) {
    const g = sel.grafica || {}, barras = Array.isArray(g.barras) ? g.barras : [];
    const BC = ['#ad2748', '#cdee62', '#ff7c6f', '#fde1e6'], CHH = 170;
    const cols = barras.map((b, i) => {
      const v = Math.max(0, Math.min(100, Number(b.valor) || 0)), h = Math.max(8, Math.round(v / 100 * CHH)), dentro = h >= 60;
      return `<div class="ec-barras__col">${dentro ? '' : `<small>${v}%</small>`}<span style="height:${h}px;background:${BC[i % 4]};color:${i % 4 === 0 ? '#ffffff' : '#2f3440'}">${dentro ? `${v}%` : ''}</span></div>`;
    }).join('');
    const ticks = [0, 25, 50, 75, 100];
    grafica = `<div class="ec-barras-box">
<div><b>${esc(g.titulo || sel.titulo)}</b>${g.subtitulo ? `<small>· ${esc(g.subtitulo)}</small>` : ''}</div>
${barras.length ? `<div class="ec-barras">
<div class="ec-barras__y" aria-hidden="true">${ticks.map((v) => `<span style="bottom:${Math.round(v / 100 * CHH)}px">${v}</span>`).join('')}</div>
<div class="ec-barras__area">${ticks.map((v) => `<span class="ec-barras__linea" aria-hidden="true" style="bottom:${Math.round(v / 100 * CHH)}px"></span>`).join('')}<div class="ec-barras__cols">${cols}</div></div>
</div>
<div class="ec-barras__x">${barras.map((b) => `<span>${esc(b.etiqueta)}</span>`).join('')}</div>` : ''}
</div>
<div class="ec-lectura"><p>${esc(g.lectura || sel.descripcion || '')}</p>${sel.archivo_path
    ? `<button type="button" class="ec-pill" data-act="abrir" data-b="infografias" data-path="${esc(sel.archivo_path)}" data-n="${esc(`${slug(sel.titulo)}.pdf`)}">Descargar infografía</button>`
    : '<button type="button" class="ec-pill" disabled>Infografía en preparación</button>'}</div>`;
  }
  const minArea = d.areas.reduce((a, b) => (a && a.valor <= b.valor ? a : b), null);
  return `<div class="ec-full" style="display:flex;flex-direction:column;gap:20px">
<section class="ec-card" style="padding:28px 32px;display:flex;flex-direction:column;gap:8px">
<p class="ec-eyebrow ec-eyebrow--pink">Infografías</p>
<h1 class="ec-h1" style="font-size:40px;letter-spacing:-0.045em">Evidencias del trabajo de campo</h1>
<p class="ec-soft" style="margin:0;max-width:62ch;font-size:16px;line-height:1.45;letter-spacing:-0.02em">Insights de entrevistas, registros y comparativos que respaldan cada decisión del diagnóstico.</p>
</section>
<div class="ec-info-fila">
<section class="ec-card ec-cobertura">
<p class="ec-eyebrow">Cobertura del diagnóstico</p>
<div class="ec-anillo" aria-hidden="true" style="background:conic-gradient(#ff4864 0 ${cobertura}%, #e6e7e9 ${cobertura}% 100%)"><span>${cobertura}%</span></div>
<div><b>${actual.nombre ? `Fase ${esc(actual.nombre)}` : 'Diagnóstico'}</b><small>Evidencias recogidas hasta hoy</small></div>
${d.infos.length ? `<div class="ec-chips">${d.infos.slice(0, 3).map((i) => `<span>${esc(i.cifra)} ${esc(i.nota)}</span>`).join('')}</div>` : ''}
</section>
${d.inds.map((k, i) => `<button type="button" class="ec-kpi" data-act="kpi" data-i="${i}" aria-pressed="${S.kpi === i}" style="background:${KBG[i % KBG.length]}"><span>${esc(k.titulo)}</span><span><b>${k.valor}%</b><small>${esc(k.nota)}</small></span></button>`).join('')}
</div>
<div class="ec-info-fila">
<section class="ec-card ec-evid-sec">
<div><p class="ec-eyebrow">Insights por evidencia</p><h2 class="ec-h2" style="margin-top:6px;font-size:26px;letter-spacing:-0.045em">${d.infos.length ? 'Elige una evidencia para ver su detalle' : 'Aún no hay evidencias publicadas'}</h2></div>
${d.infos.length ? `<div class="ec-evid-grid"${bento ? ' style="grid-template-rows:repeat(2, 143px)"' : ''}>${evid}</div>${grafica}` : ''}
</section>
${d.areas.length ? `<section class="ec-card ec-areas">
<div><h2 class="ec-h2" style="margin:0;font-size:22px">Áreas desarrolladas</h2><p class="ec-muted" style="margin:4px 0 0;font-size:14px">Cobertura del diagnóstico por área</p></div>
${d.areas.map((a) => `<div class="ec-area"><span>${esc(a.nombre)}</span><span><span style="width:${a.valor}%;background:${a.valor < 40 ? '#c9ccd2' : '#ff4864'}"></span></span><b>${a.valor}%</b></div>`).join('')}
${minArea ? `<div class="ec-lab"><span class="ec-eyebrow">Lectura del lab</span><span>${esc(minArea.nombre)} es el área con menos evidencia: la estamos reforzando en el trabajo de campo.</span></div>` : ''}
</section>` : ''}
</div>
</div>`;
}

function barraSuperior() {
  const esSight = S.perfil?.rol === 'sight';
  const nombre = S.perfil?.nombre || S.usuario?.email || '';
  const sub = esSight ? 'Equipo sight' : (S.d?.proyecto?.empresas?.nombre || S.proyectos[0]?.empresas?.nombre || '');
  const selectorProyecto = esSight && S.proyectos.length > 1
    ? `<label><span class="visually-hidden">Proyecto</span><select class="ec-select" name="proyecto">${S.proyectos.map((p) => `<option value="${p.id}"${p.id === S.pid ? ' selected' : ''}>${esc(p.empresas?.nombre)} · ${esc(p.nombre)}</option>`).join('')}</select></label>`
    : '';
  return `<header class="ec-top">
<a class="ec-top__logo" href="${cfg.sitio}" aria-label="sight, ir al sitio"><img src="${cfg.logo}" alt="sight" width="96" height="32"></a>
<span class="ec-top__sep" aria-hidden="true"></span>
<span class="ec-top__label">Espacio de clientes</span>
${esSight ? '<span class="ec-chip ec-chip--lime">Equipo sight</span>' : ''}
<div class="ec-top__der">
${selectorProyecto}
<div class="ec-yo"><span class="ec-avatar" aria-hidden="true">${esc((nombre.trim()[0] || 's').toUpperCase())}</span><span><strong>${esc(nombre)}</strong>${sub ? `<small>${esc(sub)}</small>` : ''}</span></div>
<button type="button" class="ec-pill ec-pill--wine" data-act="salir">Cerrar sesión</button>
</div>
</header>`;
}

function vistaApp() {
  const d = S.d;
  const pend = d.muestras.filter((m) => m.estado === 'pendiente').length;
  const NAV = [['resumen', 'Resumen'], ['avance', '¿En qué vamos?'], ['contexto', 'Contexto inicial'], ['muestras', 'Muestras diagnósticas'], ['info', 'Infografías']];
  const menu = `<nav class="ec-card ec-menu" aria-label="Secciones de tu proyecto">
<p class="ec-eyebrow">Tu proyecto</p>
${NAV.map(([v, t]) => `<button type="button" class="ec-nav" data-act="vista" data-v="${v}"${S.vista === v ? ' aria-current="page"' : ''}><span>${t}</span>${v === 'muestras' && pend ? `<span class="ec-badge">${pend}</span>` : ''}</button>`).join('')}
${d.fases.length ? '<p class="ec-eyebrow ec-menu__fases-t">Fases</p>' : ''}
${d.fases.map((f, i) => { const e = ESTADO_FASE[f.estado] || ESTADO_FASE.proxima; return `<button type="button" class="ec-fase-btn${S.vista === 'resumen' && S.fase === i ? ' is-on' : ''}" data-act="fase" data-i="${i}"><span class="ec-dot ec-dot--${e.k}" aria-hidden="true"></span><span><strong>${esc(f.nombre)}</strong><small>${esc(f.resumen)}</small></span></button>`; }).join('')}
</nav>`;
  const vistas = { resumen: vistaResumen, avance: vistaAvance, contexto: vistaContexto, muestras: vistaMuestras, info: vistaInfo };
  return `<div class="ec-app">${barraSuperior()}<div class="ec-cuerpo">${menu}<div class="ec-contenido" id="ec-contenido">${(vistas[S.vista] || vistaResumen)()}</div></div></div>`;
}

function vistaSin() {
  const esSight = S.perfil?.rol === 'sight';
  return `<div class="ec-app">${barraSuperior()}<section class="ec-card ec-sin">
<p class="ec-eyebrow ec-eyebrow--pink">Espacio de clientes</p>
<h1 class="ec-h1" style="font-size:40px">${esSight ? 'Aún no hay proyectos activos' : 'Tu proyecto se está preparando'}</h1>
<p class="ec-lead">${esSight ? 'Crea una empresa y un proyecto en Supabase para verlo aquí.' : 'Tu cuenta ya está lista, pero todavía no tiene un proyecto activo. Tu equipo sight lo habilitará pronto.'}</p>
<a class="ec-pill" style="align-self:flex-start" href="${cfg.contacto}">Escríbenos</a>
</section></div>`;
}

/* ---------- pintar ---------- */
function pintar() {
  const p = {
    cargando, app: vistaApp, sin: vistaSin,
    login: () => acceso(formLogin()), recuperar: () => acceso(formRecuperar()),
    enviado: () => acceso(formEnviado()), nueva: () => acceso(formNueva())
  }[S.pantalla] || cargando;
  raiz.innerHTML = p();
  if (S.pantalla === 'app') enlazarHoras();
}

/* ---------- eventos ---------- */
raiz.addEventListener('input', (e) => {
  const n = e.target.name;
  if (n === 'correo') S.correo = e.target.value;
  if (n === 'clave') S.clave = e.target.value;
  if (n === 'clave2') S.clave2 = e.target.value;
});

raiz.addEventListener('change', (e) => {
  if (e.target.name === 'recordar') recuerdame.set(e.target.checked);
  if (e.target.name === 'proyecto') {
    S.pid = e.target.value;
    try { localStorage.setItem('sight-proyecto', S.pid); } catch (er) { /* sin almacenamiento */ }
    cargarProyecto();
  }
});

raiz.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target.dataset.form;
  if (f === 'login') enviarLogin();
  if (f === 'recuperar') enviarRecuperar();
  if (f === 'nueva') enviarNueva();
});

raiz.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-act]');
  if (!b || !raiz.contains(b)) return;
  const i = Number(b.dataset.i);
  switch (b.dataset.act) {
    case 'ir':
      Object.assign(S, { pantalla: b.dataset.p, intento: false, error: '' });
      pintar();
      raiz.querySelector('.ec-input')?.focus();
      break;
    case 'ver-clave':
      S.ver = !S.ver;
      pintar();
      raiz.querySelector('[name="clave"]')?.focus();
      break;
    case 'salir':
      await sb.auth.signOut();
      Object.assign(S, { pantalla: 'login', usuario: null, perfil: null, proyectos: [], d: null, vista: 'resumen', clave: '' });
      pintar();
      break;
    case 'vista':
      S.vista = b.dataset.v;
      pintar();
      if (window.scrollY > 120) window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'fase':
      S.vista = 'resumen'; S.fase = i;
      pintar();
      break;
    case 'arco': S.fase = i; pintar(); break;
    case 'serie': S.off = { ...S.off, [b.dataset.f]: !S.off[b.dataset.f] }; repintarHoras(); break;
    case 'reunion': S.abierta = S.abierta === i ? -1 : i; pintar(); break;
    case 'ics': descargarIcs(S.d.reuniones[i]); break;
    case 'adjuntar': destino = { tipo: 'muestra', id: b.dataset.id }; selector.click(); break;
    case 'extra': destino = { tipo: 'extra' }; selector.click(); break;
    case 'abrir': abrir(b.dataset.b, b.dataset.path, b.dataset.n); break;
    case 'ev': S.ev = i; pintar(); break;
    case 'kpi': S.kpi = i; pintar(); break;
    default: break;
  }
});

/* Arrastrar archivos a la zona de adicionales */
raiz.addEventListener('dragover', (e) => {
  const z = e.target.closest('[data-drop]');
  if (!z) return;
  e.preventDefault();
  z.classList.add('is-over');
});
raiz.addEventListener('dragleave', (e) => {
  const z = e.target.closest('[data-drop]');
  if (z && !z.contains(e.relatedTarget)) z.classList.remove('is-over');
});
raiz.addEventListener('drop', (e) => {
  const z = e.target.closest('[data-drop]');
  if (!z) return;
  e.preventDefault();
  z.classList.remove('is-over');
  const f = e.dataTransfer?.files?.[0];
  if (f) subir(f, { tipo: 'extra' });
});

/* ---------- arranque ---------- */
async function iniciar() {
  const { data: { session } } = await sb.auth.getSession();
  if (errorEnlace && !session) {
    S.pantalla = 'login';
    S.error = traducir(errorEnlace);
    history.replaceState(null, '', location.pathname);
    pintar();
  } else if (session && (tipoEnlace === 'invite' || tipoEnlace === 'recovery')) {
    S.usuario = session.user;
    S.pantalla = 'nueva';
    pintar();
  } else if (session) {
    await entrar(session.user);
  } else {
    S.pantalla = 'login';
    pintar();
  }
  sb.auth.onAuthStateChange((evento, sesion) => {
    if (evento === 'PASSWORD_RECOVERY' && S.pantalla !== 'nueva') {
      S.usuario = sesion?.user || S.usuario;
      S.pantalla = 'nueva';
      pintar();
    }
    if (evento === 'SIGNED_OUT' && S.pantalla !== 'login') {
      Object.assign(S, { pantalla: 'login', usuario: null, perfil: null, proyectos: [], d: null });
      pintar();
    }
  });
}

iniciar().catch(() => {
  S.pantalla = 'login';
  S.error = 'No pudimos conectar con el servidor. Revisa tu conexión y recarga la página.';
  pintar();
});
