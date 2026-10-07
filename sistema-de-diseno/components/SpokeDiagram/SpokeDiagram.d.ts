import * as React from 'react';

export interface SpokeDatum {
  label: string;
  /** Cifra corta que va dentro del satélite, ej. `'34%'`. */
  value: string | number;
}

/**
 * Núcleo con satélites radiales: una idea central y sus frentes de trabajo.
 * Los satélites entran desde el núcleo hacia afuera, escalonados; el hover destaca el radio.
 * Tres a seis satélites.
 */
export interface SpokeDiagramProps {
  data: SpokeDatum[];
  /** Texto del núcleo. */
  core?: string;
  tone?: 'pink' | 'lime' | 'ink' | 'cool';
  /** Lado del cuadro en px. */
  size?: number;
  /** Ángulo del primer satélite en grados; `-90` lo pone arriba. */
  start?: number;
  style?: React.CSSProperties;
}
export function SpokeDiagram(props: SpokeDiagramProps): JSX.Element;
