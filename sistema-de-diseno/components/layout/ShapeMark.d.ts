import * as React from 'react';

/**
 * Forma plana de acento — círculo, medio círculo, cuarto de círculo (manual p.39–43).
 * Es el único lugar del sistema donde la curva es protagonista: las tarjetas y los
 * bloques siguen siendo de esquina recta. Se usa sangrada al borde de la superficie.
 */
export interface ShapeMarkProps {
  shape?: 'circle' | 'square'
    | 'quarter-tl' | 'quarter-tr' | 'quarter-br' | 'quarter-bl'
    | 'half-top' | 'half-bottom' | 'half-left' | 'half-right';
  tone?: 'lime' | 'pink' | 'salmon' | 'cool' | 'warm' | 'ink';
  /** Lado en px. */
  size?: number;
  /** Opcional: un `EyeMark` o un dato corto centrado dentro de la forma. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ShapeMark(props: ShapeMarkProps): JSX.Element;
