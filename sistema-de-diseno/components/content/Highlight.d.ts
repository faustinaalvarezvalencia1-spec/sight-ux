import * as React from 'react';

/**
 * Resaltado de marcador sobre una palabra clave del titular (manual p.38, p.42).
 * Una sola vez por titular y sobre la palabra que carga el argumento —
 * "decisiones", "crecimiento", "vigencia" — nunca sobre una frase completa.
 */
export interface HighlightProps {
  tone?: 'lime' | 'pink' | 'salmon' | 'cool';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Highlight(props: HighlightProps): JSX.Element;
