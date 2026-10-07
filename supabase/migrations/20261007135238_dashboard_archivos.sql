-- Archivos privados. Ruta: {proyecto_id}/{archivo}
insert into storage.buckets (id, name, public, file_size_limit)
values ('muestras', 'muestras', false, 52428800),
       ('infografias', 'infografias', false, 52428800)
on conflict (id) do nothing;

create policy "ver archivos del proyecto" on storage.objects for select to authenticated
  using (bucket_id in ('muestras', 'infografias')
         and public.puede_ver_proyecto(((storage.foldername(name))[1])::uuid));

create policy "subir muestras del proyecto" on storage.objects for insert to authenticated
  with check (bucket_id = 'muestras'
              and public.puede_ver_proyecto(((storage.foldername(name))[1])::uuid));

create policy "sight gestiona archivos" on storage.objects for all to authenticated
  using (bucket_id in ('muestras', 'infografias') and public.es_sight())
  with check (bucket_id in ('muestras', 'infografias') and public.es_sight());
