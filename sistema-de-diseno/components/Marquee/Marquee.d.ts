import * as React from 'react';

/**
 * Banda corrida de una línea — la tira lime que separa secciones en el sitio de Sight (manual p.42).
 * Máximo una por vista, siempre a sangre. No es un lugar para mensajes que haya que leer completos:
 * es ritmo, no contenido crítico.
 */
export interface MarqueeProps {
  /** Frases cortas en minúsculas, ej. `['estrategia','diseño','crecimiento']`. */
  items?: React.ReactNode[];
  tone?: 'lime' | 'pink' | 'dark' | 'cool';
  /** Segundos por ciclo. Más alto = más lento. */
  speed?: number;
  /** Tamaño tipográfico (token o valor CSS). */
  size?: string;
  style?: React.CSSProperties;
}
export function Marquee(props: MarqueeProps): JSX.Element;
