/*
 * Textos de los correos del formulario de contacto.
 * Puedes cambiar cualquier texto entre comillas `…` sin tocar el resto.
 * Lo que va entre ${ } se reemplaza por lo que escribió la persona.
 */

export type Mensaje = {
  nombre: string;
  cargo: string | null;
  marca: string;
  instagram: string | null;
  web: string | null;
  interes: string | null;
  reto: string | null;
  canal: 'WhatsApp' | 'correo' | 'llamada';
  contacto: string;
  fecha: string; // ya formateada en hora de Colombia
  pagina: string | null;
};

/* ---------- Correo que le llega a SIGHT ---------- */

export const asuntoSight = (m: Mensaje) => `Nuevo contacto SIGHT · ${m.marca}`;

export const filasSight = (m: Mensaje): [string, string][] => [
  ['Nombre', m.nombre],
  ['Cargo', m.cargo ?? '—'],
  ['Marca', m.marca],
  ['Instagram', m.instagram ?? '—'],
  ['Web', m.web ?? '—'],
  ['Le interesa', m.interes ?? '—'],
  ['Lo que más le tiene pensando', m.reto ?? '—'],
  ['Prefiere que le contacten por', m.canal],
  [m.canal === 'correo' ? 'Correo' : 'Celular', m.contacto],
  ['Aceptó tratamiento de datos', 'Sí'],
  ['Fecha y hora', m.fecha],
  ['Página', m.pagina ?? '—'],
];

/* ---------- Confirmación automática al cliente (solo si eligió correo) ---------- */

export const asuntoCliente = (m: Mensaje) => `Recibimos tu mensaje, ${m.nombre}`;

export const textoCliente = (m: Mensaje) => `Hola ${m.nombre},

Gracias por escribirnos. Ya estamos mirando ${m.marca} y te respondemos por este correo en menos de 24 horas.

Mientras tanto, si quieres contarnos algo más, responde a este mensaje.

Un abrazo,
Equipo SIGHT
Laboratorio de diseño estratégico`;
