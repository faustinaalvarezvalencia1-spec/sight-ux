# AuraField

Degradado de fondo. Atmósfera detrás del contenido, nunca figura.

```jsx
<section style={{position:'relative',overflow:'hidden',background:'var(--surface-page)'}}>
  <AuraField combo="pink-lime" opacity={0.8} fade="bottom" />
  <div style={{position:'relative'}}>…contenido…</div>
</section>
```

Un solo degradado por vista. Dos colores: `pink-lime`, `salmon-lime`, `cool-pink`. Tres o más, para fondos con movimiento: `prisma`, `amanecer`, `marea`, `espectro`. Cuando el fondo tiene que leerse como papel y el color sólo asomar en los bordes —láminas, páginas de documento, fondos con texto encima sin panel—: `crema-cool`, `crema-pink`, `crema-lime`, `crema-prisma`. `tile-*` es la ficha lineal de las tarjetas de dato, `bloom-*` abre un solo color y `veil-*` resuelve el borde entre dos superficies. Nunca degradados con negro o tinta: el degradado no oscurece. Si hay texto encima, bajar `opacity` hasta que el cuerpo mantenga 4.5:1, o dejar el texto sobre una zona plana. Nunca degradado en botones, etiquetas, gráficas ni sobre el logotipo.
