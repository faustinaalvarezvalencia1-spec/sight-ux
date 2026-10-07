# UI kit — Sitio sight.lab

Superficie: sitio de marca (escritorio, 1280px de diseño, ancho de contenido `--page-max` 1200px).

**Estructura.** Una sola página con tres vistas y el contacto en sobrecapa, con anclaje interno a servicios:

| Archivo | Rol |
| --- | --- |
| `Chrome.jsx` | `Reveal` (revelado al entrar en viewport), nav fija que se condensa al bajar, footer oscuro, envoltura `Section` |
| `Home.jsx` | Portada + cortinilla de palabras → necesidades → servicios en acordeón → aliados → proceso 01–04 → cierre |
| `About.jsx` | Portada, bloque de foto y método, rejilla de personas |
| `Work.jsx` | Portada de portafolio en preparación, escala de oportunidad, cierre |
| `ContactModal.jsx` | Contacto en sobrecapa: el formulario es una frase con huecos |

**Transiciones.** Un solo vocabulario de movimiento, siempre de entrada o de foco:
- Secciones y tarjetas entran con subida corta + fundido (`Reveal`, escalonado por índice).
- La nav se condensa con el scroll y la vista activa subraya con una regla que crece de izquierda a derecha.
- El cambio de vista funde la saliente, vuelve arriba y sube la entrante.
- El acordeón de servicios abre por altura medida (uno abierto a la vez) y el `+` gira a `×`.
- El contacto entra con velo + subida de hoja; Esc o clic fuera cierran.
- `prefers-reduced-motion` desactiva el revelado.

**Interacción.** Las necesidades de "Ayúdame a…" abren el contacto con ese asunto ya escrito. El envío exige nombre, email y aviso de privacidad, y muestra confirmación.
