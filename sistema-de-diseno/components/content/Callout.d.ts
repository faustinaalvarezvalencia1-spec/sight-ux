import * as React from 'react';

/** Nota destacada con barra de acento a la izquierda — el patrón de anotación del manual (p.20). */
export interface CalloutProps {
  tone?: 'lime' | 'pink' | 'cool' | 'filled';
  /** Lema en negrita al inicio del párrafo, p.ej. "sight lab:". */
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Callout(props: CalloutProps): JSX.Element;
