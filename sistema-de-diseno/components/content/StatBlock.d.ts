import * as React from 'react';

/** Cifra de evidencia: número grande, etiqueta y nota de método. */
export interface StatBlockProps {
  value: string;
  label: string;
  /** Fuente o método de la cifra — Sight no publica cifras sin origen. */
  note?: string;
  color?: string;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export function StatBlock(props: StatBlockProps): JSX.Element;
