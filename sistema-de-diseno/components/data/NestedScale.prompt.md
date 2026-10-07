Magnitudes que se contienen una a otra. Sustituye a las tramas decorativas: el fondo de una lámina se activa con dato real, no con patrón.

```jsx
<NestedScale size={340} data={[
  {label:'TAM', value:34.5, display:'$34.5K', note:'Mercado total de diagnóstico estratégico.'},
  {label:'SAM', value:25.6, display:'$25.6K', note:'Segmento al que llega la oferta actual.'},
  {label:'SOM', value:21.2, display:'$21.2K', note:'Lo alcanzable en la ventana de 12 meses.'}
]} />

<NestedScale layout="corner" corner="br" size={420} tone="lime" data={[...]} />
<NestedScale layout="row" tone="cool" data={[...]} />
```

Dos a cuatro niveles, nunca más: si hay que comparar categorías que no se contienen, va `BarChart`. `layout="corner"` es el motivo de lámina — la figura se ancla a la esquina y el texto ocupa el resto. El diámetro escala por área, así que `value` debe ser la magnitud real; cuando dos magnitudes quedan demasiado cerca, el anillo interior se recorta para dejar una banda legible. Si aun así la cifra no cabe, pasa sola a la etiqueta de la leyenda — con `labels={false}` hay que mostrarla en el contenedor. Los anillos van en degradado de marca: claro afuera, saturado al centro, nunca oscuro.
