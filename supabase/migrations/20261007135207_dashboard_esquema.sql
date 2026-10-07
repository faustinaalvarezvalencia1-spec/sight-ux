-- Espacio de clientes de sight: esquema base
create type public.rol_usuario as enum ('cliente', 'sight');
create type public.estado_fase as enum ('completada', 'en_curso', 'proxima');
create type public.estado_muestra as enum ('pendiente', 'revision', 'entregado');

-- Empresas cliente y su contexto inicial
create table public.empresas (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  sector text,
  trayectoria text,
  objetivo text,
  reto text,
  alcance text,
  equipo_cliente text,
  created_at timestamptz not null default now()
);

-- Perfil de cada usuario autenticado
create table public.perfiles (
  id uuid primary key references auth.users (id) on delete cascade,
  empresa_id uuid references public.empresas (id) on delete set null,
  rol public.rol_usuario not null default 'cliente',
  nombre text,
  cargo text,
  created_at timestamptz not null default now()
);

-- Accesos autorizados por correo: al crear la cuenta se asigna empresa y rol
create table public.accesos (
  email text primary key check (email = lower(email)),
  empresa_id uuid references public.empresas (id) on delete cascade,
  rol public.rol_usuario not null default 'cliente',
  nombre text,
  cargo text,
  created_at timestamptz not null default now()
);

create table public.proyectos (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references public.empresas (id) on delete cascade,
  nombre text not null,
  tipo text not null default 'Diagnóstico de marca',
  fecha_inicio date,
  fecha_entrega date,
  semana_actual smallint,
  total_semanas smallint,
  cobertura smallint check (cobertura between 0 and 100),
  siguiente_paso text,
  siguiente_cta text,
  activo boolean not null default true,
  created_at timestamptz not null default now()
);

-- Observar, Interpretar, Proyectar, Accionar
create table public.fases (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  orden smallint not null check (orden between 1 and 4),
  nombre text not null,
  resumen text,
  descripcion text,
  items text[] not null default '{}',
  entregable text,
  fecha_inicio date,
  fecha_fin date,
  avance smallint not null default 0 check (avance between 0 and 100),
  estado public.estado_fase not null default 'proxima',
  unique (proyecto_id, orden)
);

-- Intensidad de horas por semana y frente de trabajo
create table public.horas (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  semana smallint not null check (semana > 0),
  frente text not null,
  horas numeric(6,1) not null default 0 check (horas >= 0),
  unique (proyecto_id, semana, frente)
);

-- Muestras diagnósticas: lo que el equipo del cliente debe adjuntar
create table public.muestras (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  nombre text not null,
  nota text,
  estado public.estado_muestra not null default 'pendiente',
  fecha_limite date,
  archivo_path text,
  archivo_nombre text,
  subido_por uuid references auth.users (id) on delete set null,
  subido_en timestamptz,
  orden smallint not null default 0,
  created_at timestamptz not null default now()
);

-- Hallazgos: lo que hemos investigado hasta ahora
create table public.hallazgos (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  fase_id uuid references public.fases (id) on delete set null,
  fecha date not null default current_date,
  texto text not null,
  created_at timestamptz not null default now()
);

-- Calendario
create table public.reuniones (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  titulo text not null,
  inicia timestamptz not null,
  lugar text,
  detalle text,
  enlace text,
  cta text
);

-- Infografías: evidencias del trabajo de campo con su gráfica
-- grafica: {"titulo": "...", "subtitulo": "...", "lectura": "...", "barras": [{"etiqueta": "...", "valor": 0}]}
create table public.infografias (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  fase_id uuid references public.fases (id) on delete set null,
  titulo text not null,
  cifra text,
  nota text,
  descripcion text,
  fecha date,
  archivo_path text,
  grafica jsonb,
  orden smallint not null default 0
);

-- Indicadores destacados (hallazgos validados, hipótesis en validación…)
create table public.indicadores (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  titulo text not null,
  valor smallint not null check (valor between 0 and 100),
  nota text,
  orden smallint not null default 0
);

-- Áreas desarrolladas: cobertura del diagnóstico por área
create table public.areas (
  id uuid primary key default gen_random_uuid(),
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  nombre text not null,
  valor smallint not null check (valor between 0 and 100),
  orden smallint not null default 0
);

-- Equipo de sight y su asignación a proyectos
create table public.miembros_sight (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  rol text,
  inicial text,
  email text,
  created_at timestamptz not null default now()
);

create table public.proyecto_miembros (
  proyecto_id uuid not null references public.proyectos (id) on delete cascade,
  miembro_id uuid not null references public.miembros_sight (id) on delete cascade,
  primary key (proyecto_id, miembro_id)
);

-- Índices de llaves foráneas
create index on public.perfiles (empresa_id);
create index on public.accesos (empresa_id);
create index on public.proyectos (empresa_id);
create index on public.horas (proyecto_id);
create index on public.muestras (proyecto_id);
create index on public.muestras (subido_por);
create index on public.hallazgos (proyecto_id);
create index on public.hallazgos (fase_id);
create index on public.reuniones (proyecto_id, inicia);
create index on public.infografias (proyecto_id);
create index on public.infografias (fase_id);
create index on public.indicadores (proyecto_id);
create index on public.areas (proyecto_id);
create index on public.proyecto_miembros (miembro_id);
