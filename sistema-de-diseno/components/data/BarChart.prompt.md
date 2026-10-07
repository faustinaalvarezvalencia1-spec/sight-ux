Gráfica de barras de marca. Una serie, color plano, esquina recta.

```jsx
<BarChart unit="%" data={[
  {label:'Antes',value:34,tone:'muted'},
  {label:'Mes 3',value:61},
  {label:'Mes 6',value:88,tone:'lime'}
]} />
<BarChart orientation="horizontal" tone="pink" data={[{label:'UX',value:42},{label:'Foresight',value:31}]} />
```

Un solo tono por gráfica; cambiar `tone` en un dato sólo para destacar el que importa. Sin leyendas cuando las etiquetas ya están en el eje, sin líneas de rejilla: la cifra encima de la barra es el dato.
