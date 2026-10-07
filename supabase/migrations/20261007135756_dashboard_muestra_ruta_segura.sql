create or replace function privado.proteger_muestra()
returns trigger language plpgsql security definer set search_path = '' as $$
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
    if new.archivo_path is null or split_part(new.archivo_path, '/', 1) <> new.proyecto_id::text then
      raise exception 'El archivo debe estar en la carpeta del proyecto.';
    end if;
    new.subido_por := (select auth.uid());
    new.subido_en := now();
  end if;
  return new;
end;
$$;
