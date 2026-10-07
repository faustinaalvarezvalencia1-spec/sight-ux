import * as React from 'react';

/** Desplegable de opción única. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
