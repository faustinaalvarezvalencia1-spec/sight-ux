import * as React from 'react';

/**
 * Logotipo de Sight — trazado oficial vectorizado del "Manual de marca SIGHT" (p.20–25).
 * El ojo de la "g" va calado: el logotipo se coloca sobre cualquier superficie de la paleta
 * sin fondo blanco propio. Nunca lleva sombra (manual p.28, uso incorrecto 1).
 */
export interface WordmarkProps {
  /** `sight lab` = versión institucional (propuestas, documentos, presentaciones iniciales). `sight` = versión simplificada para uso digital cotidiano. */
  lockup?: 'sight' | 'sight lab';
  /** Color de la marca por rol de superficie. */
  tone?: 'ink' | 'pink' | 'lime' | 'paper';
  /** Escotilla de escape: cualquier color de la paleta. Nunca colores fuera de marca (uso incorrecto 5). */
  color?: string;
  /** Alto del arte en px (incluye el descendente de la g). El ancho se deriva de la proporción 1.866:1. */
  size?: number;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
