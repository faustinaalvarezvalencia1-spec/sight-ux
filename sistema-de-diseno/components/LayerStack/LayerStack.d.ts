import * as React from 'react';

export interface LayerStackLayer {
  label: string;
  note?: string;
}

/**
 * Planos apilados en isometría con línea guía a la etiqueta, para jerarquías que se
 * sostienen unas sobre otras. El primer elemento es el plano superior y el único sólido:
 * los de abajo son translúcidos y sus intersecciones construyen el volumen.
 * Entrada escalonada de abajo hacia arriba; el hover separa el plano activo.
 * Dos a cuatro planos.
 */
export interface LayerStackProps {
  data: LayerStackLayer[];
  tone?: 'salmon' | 'pink' | 'lime' | 'cool';
  /** Ancho del rombo en px; el alto sale de la proporción isométrica. */
  size?: number;
  /** Separación vertical entre planos, como fracción del alto del rombo (0.4–0.6); por defecto 0.5, que es la superposición que construye el cubo. */
  gap?: number;
  style?: React.CSSProperties;
}
export function LayerStack(props: LayerStackProps): JSX.Element;
