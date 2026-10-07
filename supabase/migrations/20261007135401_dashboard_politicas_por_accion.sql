-- Una política por acción: la lectura ya incluye al equipo sight
drop policy "sight gestiona empresas" on public.empresas;
drop policy "sight gestiona perfiles" on public.perfiles;
drop policy "sight gestiona proyectos" on public.proyectos;
drop policy "sight gestiona equipo" on public.miembros_sight;
drop policy "cliente adjunta muestra" on public.muestras;

do $$
declare t text;
begin
  foreach t in array array['fases','horas','hallazgos','reuniones','infografias','indicadores','areas','proyecto_miembros','muestras'] loop
    execute format('drop policy "sight gestiona" on public.%I;', t);
  end loop;

  foreach t in array array['empresas','perfiles','proyectos','miembros_sight','fases','horas','hallazgos','reuniones','infografias','indicadores','areas','proyecto_miembros','muestras'] loop
    execute format('create policy "sight crea" on public.%I for insert to authenticated with check (privado.es_sight());', t);
    execute format('create policy "sight borra" on public.%I for delete to authenticated using (privado.es_sight());', t);
    if t <> 'muestras' then
      execute format('create policy "sight edita" on public.%I for update to authenticated using (privado.es_sight()) with check (privado.es_sight());', t);
    end if;
  end loop;
end $$;

-- muestras: sight edita todo; el cliente solo adjunta (lo controla el trigger proteger_muestra)
create policy "editar muestra" on public.muestras for update to authenticated
  using (privado.puede_ver_proyecto(proyecto_id))
  with check (privado.puede_ver_proyecto(proyecto_id));
