import * as React from 'react';

/**
 * Contenedor de bloque. Esquina recta siempre; el color de la superficie hace el trabajo, no la sombra.
 */
export interface CardProps {
  surface?: 'plain' | 'sunken' | 'warm' | 'cool' | 'lime' | 'dark' | 'accent';
  pad?: 'sm' | 'md' | 'lg';
  /** Barra de acento de 3px a la izquierda. */
  rule?: boolean;
  /** Activa elevación y desplazamiento en hover. */
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
