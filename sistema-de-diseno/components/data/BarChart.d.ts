import * as React from 'react';

export interface BarDatum {
  label: string;
  value: number;
  /** Color de la barra; por defecto el `tone` de la gráfica. Usar otro tono sólo para destacar un dato. */
  tone?: 'pink' | 'lime' | 'salmon' | 'cool' | 'ink' | 'muted';
}

/**
 * Gráfica de barras de marca: color plano, esquina recta, línea base en tinta.
 * Una sola serie por gráfica. Nunca degradados, nunca sombra, nunca 3D.
 */
export interface BarChartProps {
  data: BarDatum[];
  orientation?: 'vertical' | 'horizontal';
  /** Color base de las barras. */
  tone?: 'pink' | 'lime' | 'salmon' | 'cool' | 'ink' | 'muted';
  /** Techo de la escala; por defecto el valor mayor. */
  max?: number;
  /** Sufijo de la cifra, ej. `'%'`. */
  unit?: string;
  /** Alto del área de barras en orientación vertical. */
  height?: number;
  style?: React.CSSProperties;
}
export function BarChart(props: BarChartProps): JSX.Element;
