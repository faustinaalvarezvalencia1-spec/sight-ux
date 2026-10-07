-- Funciones de acceso (security definer para evitar recursión en RLS)
create or replace function public.es_sight()
returns boolean language sql stable security definer set search_path = ''
as $$ select exists (select 1 from public.perfiles p where p.id = (select auth.uid()) and p.rol = 'sight'); $$;

create or replace function public.mi_empresa()
returns uuid language sql stable security definer set search_path = ''
as $$ select p.empresa_id from public.perfiles p where p.id = (select auth.uid()); $$;

create or replace function public.puede_ver_proyecto(p_proyecto uuid)
returns boolean language sql stable security definer set search_path = ''
as $$
  select public.es_sight() or exists (
    select 1 from public.proyectos pr
    where pr.id = p_proyecto and pr.empresa_id = public.mi_empresa()
  );
$$;

revoke execute on function public.es_sight() from public, anon;
revoke execute on function public.mi_empresa() from public, anon;
revoke execute on function public.puede_ver_proyecto(uuid) from public, anon;
grant execute on function public.es_sight() to authenticated;
grant execute on function public.mi_empresa() to authenticated;
grant execute on function public.puede_ver_proyecto(uuid) to authenticated;

-- Perfil automático al crear una cuenta, según la tabla de accesos
create or replace function public.crear_perfil()
returns trigger language plpgsql security definer set search_path = ''
as $$
declare a public.accesos;
begin
  select * into a from public.accesos where email = lower(new.email);
  insert into public.perfiles (id, empresa_id, rol, nombre, cargo)
  values (new.id, a.empresa_id, coalesce(a.rol, 'cliente'), a.nombre, a.cargo)
  on conflict (id) do nothing;
  return new;
end;
$$;
revoke execute on function public.crear_perfil() from public, anon, authenticated;

create trigger al_crear_usuario
  after insert on auth.users
  for each row execute function public.crear_perfil();

-- El cliente solo puede adjuntar archivos: no cambia nombre, nota, fecha ni marca "entregado"
create or replace function public.proteger_muestra()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  if not public.es_sight() then
    if new.nombre is distinct from old.nombre or new.nota is distinct from old.nota
       or new.fecha_limite is distinct from old.fecha_limite or new.orden is distinct from old.orden
       or new.proyecto_id is distinct from old.proyecto_id then
      raise exception 'Solo el equipo de sight puede editar la muestra.';
    end if;
    if new.estado <> 'revision' then
      raise exception 'Al adjuntar, la muestra pasa a revisión.';
    end if;
    new.subido_por := (select auth.uid());
    new.subido_en := now();
  end if;
  return new;
end;
$$;
revoke execute on function public.proteger_muestra() from public, anon, authenticated;

create trigger proteger_muestra
  before update on public.muestras
  for each row execute function public.proteger_muestra();

-- RLS
alter table public.empresas enable row level security;
alter table public.perfiles enable row level security;
alter table public.accesos enable row level security;
alter table public.proyectos enable row level security;
alter table public.fases enable row level security;
alter table public.horas enable row level security;
alter table public.muestras enable row level security;
alter table public.hallazgos enable row level security;
alter table public.reuniones enable row level security;
alter table public.infografias enable row level security;
alter table public.indicadores enable row level security;
alter table public.areas enable row level security;
alter table public.miembros_sight enable row level security;
alter table public.proyecto_miembros enable row level security;

-- empresas
create policy "empresa propia o equipo sight" on public.empresas for select to authenticated
  using (public.es_sight() or id = public.mi_empresa());
create policy "sight gestiona empresas" on public.empresas for all to authenticated
  using (public.es_sight()) with check (public.es_sight());

-- perfiles
create policy "perfil propio o equipo sight" on public.perfiles for select to authenticated
  using (id = (select auth.uid()) or public.es_sight());
create policy "sight gestiona perfiles" on public.perfiles for all to authenticated
  using (public.es_sight()) with check (public.es_sight());

-- accesos: solo sight
create policy "sight gestiona accesos" on public.accesos for all to authenticated
  using (public.es_sight()) with check (public.es_sight());

-- proyectos
create policy "proyectos de mi empresa" on public.proyectos for select to authenticated
  using (public.es_sight() or empresa_id = public.mi_empresa());
create policy "sight gestiona proyectos" on public.proyectos for all to authenticated
  using (public.es_sight()) with check (public.es_sight());

-- tablas hijas del proyecto: lectura para el cliente, gestión para sight
do $$
declare t text;
begin
  foreach t in array array['fases','horas','hallazgos','reuniones','infografias','indicadores','areas','proyecto_miembros','muestras'] loop
    execute format('create policy "ver datos del proyecto" on public.%I for select to authenticated using (public.puede_ver_proyecto(proyecto_id));', t);
    execute format('create policy "sight gestiona" on public.%I for all to authenticated using (public.es_sight()) with check (public.es_sight());', t);
  end loop;
end $$;

-- el cliente adjunta archivos a las muestras de su proyecto
create policy "cliente adjunta muestra" on public.muestras for update to authenticated
  using (public.puede_ver_proyecto(proyecto_id))
  with check (public.puede_ver_proyecto(proyecto_id));

-- equipo sight visible para usuarios con sesión
create policy "ver equipo sight" on public.miembros_sight for select to authenticated using (true);
create policy "sight gestiona equipo" on public.miembros_sight for all to authenticated
  using (public.es_sight()) with check (public.es_sight());
