import * as React from 'react';

/**
 * Degradado de fondo de marca. Se posiciona absoluto dentro de un contenedor
 * `position:relative; overflow:hidden`, siempre detrás del contenido.
 * Sólo colores de la paleta vibrante y neutros claros — nunca negro ni tinta,
 * nunca en botones, texto ni logotipo.
 */
export interface AuraFieldProps {
  /** Aura de dos colores; `prisma`/`amanecer`/`marea`/`espectro` de tres o cuatro; `crema-*` fondo crema con el color apenas asomando; `tile-*` ficha lineal; `bloom-*` un color; `veil-*` entre superficies. */
  combo?: 'pink-lime' | 'salmon-lime' | 'cool-pink'
    | 'prisma' | 'amanecer' | 'marea' | 'espectro'
    | 'crema-cool' | 'crema-pink' | 'crema-lime' | 'crema-prisma'
    | 'tile-warm' | 'tile-cool' | 'tile-lime'
    | 'bloom-pink' | 'bloom-lime' | 'bloom-cool'
    | 'veil-cool' | 'veil-warm' | 'veil-lime';
  /** Desenfoque en px; por defecto `--grad-blur` (40px) en auras y 0 en fichas y velos. */
  blur?: number;
  /** 0–1; por defecto 0.8 en auras y 1 en `crema-*`, `tile-*` y `veil-*`. */
  opacity?: number;
  /** Desvanece hacia ese lado. */
  fade?: 'top' | 'bottom' | 'left' | 'right';
  style?: React.CSSProperties;
}
export function AuraField(props: AuraFieldProps): JSX.Element;
