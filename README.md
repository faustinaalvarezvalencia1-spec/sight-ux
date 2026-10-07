# sight · experiencia de usuario del sitio web

Todo lo que define la experiencia del sitio de **sight**, laboratorio de diseño estratégico: el sitio público, el espacio de clientes (inicio de sesión y dashboard), el sistema de diseño y las imágenes de la tienda.

> *Convertimos incertidumbre en decisiones que impulsan el crecimiento de empresas.*

| Carpeta | Qué contiene |
| --- | --- |
| [`sitio-shopify/`](sitio-shopify) | Tema de Shopify publicado en `sightlaboratorio.myshopify.com` (Liquid, CSS, JS). Es la versión en vivo del sitio. |
| [`prototipo/`](prototipo) | Prototipo navegable del lienzo de diseño: Inicio, Sobre nosotros, Laboratorio, Iniciar sesión y Dashboard (`*.dc.html`). |
| [`sistema-de-diseno/`](sistema-de-diseno) | Sistema de diseño de sight: tokens, componentes, guías de marca, kits de interfaz, láminas, logotipos y tipografía. |
| [`imagenes-productos/`](imagenes-productos) | 48 imágenes de los infoproductos (8 por producto) y el generador que las crea. |
| [`supabase/`](supabase) | Base de datos del espacio de clientes: tablas, seguridad por filas y archivos (migraciones SQL). |

---

## Mapa del sitio

```
sight
├── Inicio
│   ├── Carrusel (3 diapositivas)
│   ├── Cinta de valores: Dirección · Adaptabilidad · Certidumbre · Expansión · Anticipación
│   ├── Ayúdame a: 8 post-its → cada uno abre el formulario con la necesidad escrita
│   ├── Servicios en acordeón ("Tres formas de ver más lejos" en el prototipo)
│   ├── ¿Es sight para tu marca? (lista + diagrama de Venn)
│   ├── Proceso: Observar → Interpretar → Proyectar → Accionar
│   ├── Tienda: reportes e infoproductos
│   └── Contacto (formulario)
├── Sobre nosotros: Somos sight, equipo, Por qué existimos (misión y visión)
├── Laboratorio: casos en carpetas (síntoma → causa raíz → tratamiento → resultado)
├── Tienda: colección "Reportes e infoproductos" y fichas de producto con galería
└── Espacio de clientes
    ├── Iniciar sesión (correo + contraseña, recuperar contraseña, crear contraseña al aceptar la invitación)
    └── Dashboard
        ├── Resumen: intensidad de horas, muestras diagnósticas, avance por fase
        ├── ¿En qué vamos? (escalera hasta la entrega y hallazgos por fase)
        ├── Contexto inicial
        ├── Muestras diagnósticas (lo que el equipo del cliente debe adjuntar)
        ├── Infografías (evidencias del trabajo de campo)
        └── Calendario, siguiente paso y equipo sight
```

## Flujos principales

1. **Visitante con una necesidad.** Llega al carrusel → baja a *Ayúdame a* → hace clic en el post-it que lo describe → el formulario se abre con la necesidad ya escrita (en el prototipo, como ventana sobre la sección; en Shopify, en la sección Contacto) → envía → confirmación.
2. **Visitante que quiere entender a sight.** Inicio → *Servicios* → *Proceso* → *Laboratorio* para ver casos → *Contacto*.
3. **Comprador de un reporte.** Inicio → sección *Tienda* → ficha de producto (8 imágenes, descripción) → comprar → checkout de Shopify.
4. **Cliente activo.** *Iniciar sesión* → *Dashboard* → revisa en qué fase va el proyecto, adjunta las muestras pendientes, consulta infografías y su próxima reunión.

## Principios de experiencia

- **Método visible.** Todo se ordena como *Síntoma → Causa raíz → Tratamiento → Resultado* y el proceso como *Observar → Interpretar → Proyectar → Accionar*.
- **Una acción clara por vista.** Un botón principal rosa; el resto en contorno o texto.
- **El post-it como objeto de marca.** Es el único elemento que gira y lleva sombra.
- **Un resaltado por titular.** Marcador lima, salt o rosa claro sobre la palabra que carga el argumento.
- **Degradados solo como atmósfera.** Nunca debajo de texto sin panel plano, nunca con negro.
- **Accesibilidad.** Foco visible rosa, textos alternativos, `prefers-reduced-motion` respetado en las animaciones.

Las reglas completas están en [`sistema-de-diseno/README.md`](sistema-de-diseno/README.md).

## Paleta y tipografía

| Rol | Color | HEX |
| --- | --- | --- |
| Acento principal | Pink paradize | `#ff4864` |
| Acento secundario | Salmon | `#ff7c6f` |
| Resalte | Light lime | `#e2fa83` |
| Tinta | Deep Blue-Gray | `#2f3440` |
| Neutro frío | Salt Air | `#cffffd` |
| Neutro cálido | Coconut Milk | `#f4efe6` |
| Papel | Paper | `#fafafa` |

Tipografía única: **Plus Jakarta Sans** (licencia SIL Open Font License), tracking −0.04em.

---

## Cómo trabajar

### Sitio en Shopify

Requiere [Shopify CLI](https://shopify.dev/docs/api/shopify-cli).

```bash
cd sitio-shopify
shopify theme dev --store sightlaboratorio.myshopify.com      # vista previa local
shopify theme check                                             # revisión del tema
shopify theme push --unpublished --store sightlaboratorio.myshopify.com   # subir como tema nuevo sin publicar
```

Casi todo el contenido (textos, post-its, servicios, pasos, casos, imágenes) se edita desde el editor de temas de Shopify sin tocar código.

### Prototipo

Los archivos `prototipo/*.dc.html` son las pantallas del lienzo de diseño de Claude. Las imágenes aparecen como `/_blob/<id>`; cada `<id>` corresponde al archivo con ese nombre en `prototipo/assets/`. Se ven e interactúan dentro del lienzo (modo Play); fuera de él son la referencia de estructura, textos y estados.

### Espacio de clientes (Supabase)

El inicio de sesión y el dashboard viven en `/pages/espacio-clientes` (plantilla `page.espacio-clientes`, sección `espacio-clientes`, layout `espacio`). Los datos de cada cliente están en Supabase (proyecto `smjvupfzmitvfystskmq`); el tema solo usa la clave publicable.

| Tabla | Qué alimenta en el dashboard |
| --- | --- |
| `empresas` | Contexto inicial (sector, trayectoria, objetivo, reto, alcance, equipo) |
| `accesos` | Correos autorizados: al crear la cuenta se asignan empresa y rol (`cliente` o `sight`) |
| `perfiles` | Nombre y rol de cada usuario (se crea solo al registrar la cuenta) |
| `proyectos` | Semana actual, fechas, cobertura y siguiente paso |
| `fases` | Observar → Interpretar → Proyectar → Accionar: avance, estado, entregable |
| `horas` | Intensidad de horas por semana y frente |
| `muestras` | Lo que el cliente debe adjuntar; al subir un archivo pasa a *En revisión* |
| `hallazgos` | ¿En qué vamos? por fase |
| `reuniones` | Calendario (con enlace y descarga .ics) |
| `infografias`, `indicadores`, `areas` | Vista de Infografías |
| `miembros_sight`, `proyecto_miembros` | Tu equipo sight |

Archivos: buckets privados `muestras` e `infografias`, con ruta `{proyecto_id}/…`. Cada cliente solo ve y sube archivos de su proyecto; el equipo sight ve todo.

**Dar acceso a un cliente nuevo**

1. Crea la empresa, el proyecto y sus fases en el editor de tablas de Supabase.
2. Agrega su correo en `accesos` con la `empresa_id` y el rol `cliente`.
3. En *Authentication → Users → Invite user*, invítalo con ese correo. Recibe un enlace, crea su contraseña y entra a su dashboard.

### Imágenes de productos

```bash
cd imagenes-productos/_fuente
python3 generar.py                          # regenera las 48 imágenes
python3 generar.py reporte-tendencias-2027  # solo un producto
```

Usa Google Chrome en modo headless; los textos de cada producto están al inicio de `generar.py`.

---

## Estado

- Los datos del dashboard (cliente, horas, hallazgos, fechas) y los productos de la tienda son **de ejemplo**.
- Los casos del Laboratorio tienen marcadores (`[Sector del cliente]`, `[+00%]`) pendientes de datos reales.
- El inicio de sesión y el dashboard están conectados a Supabase y publicados en `/pages/espacio-clientes`. El proyecto cargado (Marca Ejemplo) es de ejemplo.

© 2026 sight · laboratorio de diseño estratégico. Todos los derechos reservados sobre la marca, los textos y las imágenes.
