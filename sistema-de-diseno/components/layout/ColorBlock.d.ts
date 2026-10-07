import * as React from 'react';

/** Bloque de color a sangre con nombre, HEX y PANTONE — el lenguaje de las páginas de paleta del manual. */
export interface ColorBlockProps {
  name: string;
  hex: string;
  pantone?: string;
  /** Color del texto; por defecto blanco. Sobre Light Lime o Salt Air usa var(--deep-blue-gray). */
  textColor?: string;
  height?: number;
  style?: React.CSSProperties;
}
export function ColorBlock(props: ColorBlockProps): JSX.Element;
