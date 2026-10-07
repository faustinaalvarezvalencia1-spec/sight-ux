import * as React from 'react';

/** Regla horizontal. La regla roja/acento marca cortes de sección; la hairline separa filas. */
export interface DividerProps {
  tone?: 'hairline' | 'strong' | 'accent' | 'lime';
  thickness?: number;
  style?: React.CSSProperties;
}
export function Divider(props: DividerProps): JSX.Element;
