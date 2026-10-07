-- Si el acceso se registra o cambia después de crear la cuenta, el perfil se actualiza.
create or replace function privado.sincronizar_acceso()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  update public.perfiles p
  set empresa_id = new.empresa_id, rol = new.rol,
      nombre = coalesce(new.nombre, p.nombre), cargo = coalesce(new.cargo, p.cargo)
  from auth.users u
  where u.id = p.id and lower(u.email) = new.email;
  return new;
end;
$$;
revoke execute on function privado.sincronizar_acceso() from public, anon, authenticated;

create trigger al_cambiar_acceso
  after insert or update on public.accesos
  for each row execute function privado.sincronizar_acceso();
