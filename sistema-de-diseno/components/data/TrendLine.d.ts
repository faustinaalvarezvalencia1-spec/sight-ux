import * as React from 'react';

/**
 * Serie en el tiempo: trazo plano de un color de la paleta, área opcional en su tinte claro.
 * Sin rejilla, sin marcadores intermedios; sólo el último punto va marcado.
 */
export interface TrendLineProps {
  values: number[];
  tone?: 'pink' | 'lime' | 'salmon' | 'ink';
  /** Relleno bajo la curva. */
  area?: boolean;
  height?: number;
  /** Etiquetas del eje, repartidas de extremo a extremo. */
  labels?: string[];
  style?: React.CSSProperties;
}
export function TrendLine(props: TrendLineProps): JSX.Element;
