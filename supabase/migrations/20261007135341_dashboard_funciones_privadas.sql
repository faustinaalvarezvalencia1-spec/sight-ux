create schema if not exists privado;
grant usage on schema privado to authenticated;

alter function public.es_sight() set schema privado;
alter function public.mi_empresa() set schema privado;
alter function public.puede_ver_proyecto(uuid) set schema privado;
alter function public.crear_perfil() set schema privado;
alter function public.proteger_muestra() set schema privado;

create or replace function privado.puede_ver_proyecto(p_proyecto uuid)
returns boolean language sql stable security definer set search_path = ''
as $$
  select privado.es_sight() or exists (
    select 1 from public.proyectos pr
    where pr.id = p_proyecto and pr.empresa_id = privado.mi_empresa()
  );
$$;

create or replace function privado.proteger_muestra()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  if not privado.es_sight() then
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

revoke execute on all functions in schema privado from public, anon;
grant execute on function privado.es_sight(), privado.mi_empresa(), privado.puede_ver_proyecto(uuid) to authenticated;
