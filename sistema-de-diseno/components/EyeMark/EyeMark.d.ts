import * as React from 'react';

/**
 * Símbolo de Sight: el ojo de la "g", aislado (manual p.20).
 * Uso secundario — firma en esquinas, viñeta de lista, favicon, sello sobre bloque de color.
 * No sustituye al logotipo: si la pieza necesita identificar la marca, usa `Wordmark`.
 */
export interface EyeMarkProps {
  /** Diámetro en px. */
  size?: number;
  tone?: 'ink' | 'pink' | 'lime' | 'paper';
  color?: string;
  style?: React.CSSProperties;
}
export function EyeMark(props: EyeMarkProps): JSX.Element;
