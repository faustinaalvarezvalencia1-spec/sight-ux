# Panel de producto (dashboard)

Superficies planas de papel separadas por hairline, esquina recta, controles pastilla.
El degradado entra en dos lugares y sólo ahí: las **fichas de dato** (`AuraField combo="tile-*"`)
y el **aura de cabecera** (`combo="amanecer"`, con el texto sobre panel plano).

- `FocusChart.jsx` — gráfica interactiva: dos series suavizadas, cruceta y tooltip en hover,
  leyenda conmutable por clic. Sin rejilla pesada: cinco reglas hairline.
- `NestedScale` (del sistema) — cobertura del diagnóstico en círculos anidados, con la leyenda al costado.
- `Dashboard.jsx` — layout, fichas seleccionables, selector de rango (mes / trimestre / año),
  agenda y `BarChart` horizontal de cobertura.

Todo el dato viene de constantes al inicio de `Dashboard.jsx` (`RANGES`, `AREAS`, `AGENDA`).
