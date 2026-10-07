import * as React from 'react';

export interface NestedScaleDatum {
  label: string;
  /** Magnitud numérica; fija el diámetro (escala por área). */
  value: number;
  /** Cifra que se imprime dentro del círculo si no es `value`, ej. `'$34.5K'`. */
  display?: string;
  /** Una línea de contexto, sólo en `layout="nested"`. */
  note?: string;
}

/**
 * Escala anidada para magnitudes que se contienen (mercado total → disponible → alcanzable,
 * universo → muestra → casos). Color plano, cifra dentro del anillo, hover destaca el nivel.
 * Se ordena de mayor a menor automáticamente; 2–4 niveles. La cifra entra dentro del anillo
 * sólo si su banda expuesta despeja la altura de línea; si no, pasa a la etiqueta de la leyenda
 * (con `labels={false}` se omite, y el contenedor debe mostrarla por su cuenta).
 */
export interface NestedScaleProps {
  data: NestedScaleDatum[];
  /** `nested` círculos centrados + lista de etiquetas · `corner` cuartos anclados a esquina (motivo de lámina) · `row` burbujas en fila. */
  layout?: 'nested' | 'corner' | 'row';
  tone?: 'pink' | 'lime' | 'cool' | 'ink';
  /** Lado del cuadro de la gráfica en px. */
  size?: number;
  /** Esquina de anclaje en `layout="corner"`. */
  corner?: 'br' | 'bl' | 'tr' | 'tl';
  /** Muestra las etiquetas; `false` deja sólo la figura (uso decorativo). */
  labels?: boolean;
  style?: React.CSSProperties;
}
export function NestedScale(props: NestedScaleProps): JSX.Element;
