import * as React from 'react';

/** Cita a gran cuerpo en peso ligero; la atribución va en rosa. */
export interface QuoteProps {
  attribution?: string;
  role?: string;
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Quote(props: QuoteProps): JSX.Element;
