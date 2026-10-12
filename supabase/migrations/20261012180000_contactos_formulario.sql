-- Mensajes del formulario de contacto (carta) del sitio.
-- Solo la función "contacto" (rol de servicio) escribe; solo el equipo sight lee.
create table if not exists public.contactos (
  id uuid primary key default gen_random_uuid(),
  creado_en timestamptz not null default now(),
  nombre text not null check (char_length(nombre) between 1 and 120),
  cargo text check (char_length(cargo) <= 120),
  marca text not null check (char_length(marca) between 1 and 160),
  instagram text check (char_length(instagram) <= 80),
  web text check (char_length(web) <= 300),
  interes text check (char_length(interes) <= 200),
  reto text check (char_length(reto) <= 4000),
  canal text not null check (canal in ('WhatsApp', 'correo', 'llamada')),
  contacto text not null check (char_length(contacto) between 3 and 200),
  acepta_datos boolean not null check (acepta_datos),
  pagina text check (char_length(pagina) <= 500),
  correo_enviado boolean not null default false,
  constraint contactos_red check (instagram is not null or web is not null)
);

alter table public.contactos enable row level security;

create policy "contactos: el equipo sight lee"
  on public.contactos for select
  to authenticated
  using (privado.es_sight());

create index if not exists contactos_creado_en_idx on public.contactos (creado_en desc);
