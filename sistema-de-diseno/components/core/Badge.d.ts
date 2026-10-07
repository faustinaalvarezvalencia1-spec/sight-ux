import * as React from 'react';

/** Indicador de estado con punto de color; texto en versalitas con tracking positivo. */
export interface BadgeProps {
  state?: 'positive' | 'attention' | 'critical' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
