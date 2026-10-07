# LayerStack

Jerarquías que se sostienen una sobre otra, en isometría.

```jsx
<LayerStack size={320} data={[
  {label:'Esencia', note:'La afirmación que sostiene todo lo demás.'},
  {label:'Sistema', note:'Cómo se traduce en decisiones repetibles.'},
  {label:'Ejecución', note:'Lo que el equipo hace cada semana.'}
]} />
```

Dos a cuatro planos, del más abstracto arriba al más operativo abajo. El primer elemento es el plano superior y el único sólido; los de abajo son translúcidos y sus intersecciones construyen el volumen. La etiqueta va en versalitas espaciadas y la nota en versalitas pequeñas — el diagrama se lee como lámina, no como gráfica. Si los niveles no se sostienen unos sobre otros —son partes de un total o magnitudes que se contienen— va `NestedScale` o `BarChart`.
