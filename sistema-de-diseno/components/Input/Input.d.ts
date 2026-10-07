import * as React from 'react';

/** Campo de texto de una o varias líneas. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  multiline?: boolean;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
