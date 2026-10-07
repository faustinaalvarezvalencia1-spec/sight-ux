import * as React from 'react';

/**
 * Marco de fotografía de marca. Toda fotografía real se publica en el duotono
 * de la casa: luz `#ade6e6`, sombra `#721f34`. Nunca fotografía a color plena,
 * nunca con esquina redondeada ni sombra.
 */
export interface PhotoFrameProps {
  /** Sin `src` renderiza el marcador rayado con la nota `label`. */
  src?: string;
  alt?: string;
  /** `duotone` (por defecto, luz #ade6e6 / sombra #721f34). Las variantes sobre otros colores de la paleta son excepción; `bw` sólo para archivo documental. */
  treatment?: 'duotone' | 'duotone-pink' | 'duotone-lime' | 'duotone-cool' | 'bw';
  /** Proporción CSS, ej. `'4 / 3'`, `'1 / 1'`, `'3 / 4'`. */
  ratio?: string;
  /** Qué debe ir en el hueco, para el marcador. */
  label?: string;
  style?: React.CSSProperties;
}
export function PhotoFrame(props: PhotoFrameProps): JSX.Element;
