# ShapeMark

Forma plana de acento: círculo o cuarto de círculo sangrado a la esquina.

```jsx
<ShapeMark shape="quarter-br" tone="lime" size={160} />
<ShapeMark shape="circle" tone="lime" size={120}><EyeMark size={24} /></ShapeMark>
```

Una o dos por vista, siempre sangradas al borde (usa `position:absolute` con offset negativo o `overflow:hidden` en el contenedor). Color plano — sin degradados, sin contorno, sin sombra. Si dentro va texto, que sea un dato de 1–4 palabras.
