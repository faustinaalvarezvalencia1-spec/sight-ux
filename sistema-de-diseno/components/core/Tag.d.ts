import * as React from 'react';

/** Etiqueta de categoría o disciplina. */
export interface TagProps {
  tone?: 'lime' | 'pink' | 'salmon' | 'cool' | 'dark' | 'quiet';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
