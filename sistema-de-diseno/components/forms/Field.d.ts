import * as React from 'react';

/** Envoltura de campo: etiqueta arriba, ayuda o error abajo. Úsala alrededor de Input, Select o Checkbox. */
export interface FieldProps {
  label?: string;
  hint?: string;
  /** Si se pasa, sustituye a hint y se pinta en Pink Paradise. */
  error?: string;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
