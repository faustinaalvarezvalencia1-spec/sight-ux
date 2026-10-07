import * as React from 'react';

/**
 * Encabezado de sección con antetítulo opcional en versalitas rosa.
 */
export interface SectionHeadingProps {
  level?: 'display' | 'title' | 'subtitle';
  /** Antetítulo corto en versalitas. */
  eyebrow?: string;
  color?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
