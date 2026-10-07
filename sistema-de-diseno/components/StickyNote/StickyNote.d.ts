import * as React from 'react';

/**
 * Post-it — el objeto del que nace la paleta (manual p.31) y motivo de las piezas de
 * exterior y del sitio (p.38–42). Es el único elemento del sistema que se permite girar
 * y llevar sombra: es un objeto físico pegado sobre la superficie, no un contenedor de UI.
 */
export interface StickyNoteProps {
  tone?: 'pink' | 'lime' | 'cool' | 'warm' | 'salmon';
  /** Lado en px. El cuerpo de texto escala al 10% del lado. */
  size?: number;
  /** Rotación en grados. Mantente entre -6 y 6; una nota derecha se ve como tarjeta. */
  rotate?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StickyNote(props: StickyNoteProps): JSX.Element;
