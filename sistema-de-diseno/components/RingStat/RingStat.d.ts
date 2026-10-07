import * as React from 'react';

/**
 * Cifra en anillo para una sola proporción (avance, cobertura, porcentaje).
 * Anillo de color plano sobre pista neutra; nunca varios anillos concéntricos.
 */
export interface RingStatProps {
  /** 0–100. */
  value: number;
  /** Texto al centro si no es el porcentaje, ej. `'3.4x'`. */
  display?: string;
  label?: string;
  tone?: 'pink' | 'lime' | 'salmon' | 'ink';
  size?: number;
  /** Grosor del anillo en px. */
  thickness?: number;
  style?: React.CSSProperties;
}
export function RingStat(props: RingStatProps): JSX.Element;
