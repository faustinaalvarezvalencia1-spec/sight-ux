-- Solo estos correos pueden actuar como equipo sight, aunque alguien tenga rol 'sight' en perfiles.
-- La lista vive en el esquema privado: no se expone por la API y solo se cambia con SQL.
create table privado.equipo (email text primary key check (email = lower(email)));
revoke all on privado.equipo from public, anon, authenticated;
-- Los correos del equipo se cargan aparte (no se versionan en el repositorio público):
-- insert into privado.equipo (email) values ('...'), ('...'), ('...');

create or replace function privado.es_sight()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1
    from public.perfiles p
    join auth.users u on u.id = p.id
    join privado.equipo e on e.email = lower(u.email)
    where p.id = (select auth.uid()) and p.rol = 'sight'
  );
$$;
