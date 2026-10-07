import React from 'react';

/* Degradado de marca como fondo. Aura de dos, tres o cuatro colores de la paleta vibrante,
   ficha lineal para tarjetas de dato, fondo crema con el color apenas asomando,
   floración de un color o velo entre superficies.
   Sin negro ni tinta: el degradado nunca oscurece. Va siempre detrás del contenido, desenfocado
   y con opacidad rebajada: el degradado es atmósfera, no figura. Nunca bajo texto sin
   contraste propio, nunca en botones ni sobre el logotipo. */
const GRADS={
  'pink-lime':'var(--grad-pink-lime)','salmon-lime':'var(--grad-salmon-lime)','cool-pink':'var(--grad-cool-pink)',
  prisma:'var(--grad-prisma)',amanecer:'var(--grad-amanecer)',marea:'var(--grad-marea)',espectro:'var(--grad-espectro)',
  'crema-cool':'var(--grad-crema-cool)','crema-pink':'var(--grad-crema-pink)','crema-lime':'var(--grad-crema-lime)','crema-prisma':'var(--grad-crema-prisma)',
  'tile-warm':'var(--grad-tile-warm)','tile-cool':'var(--grad-tile-cool)','tile-lime':'var(--grad-tile-lime)',
  'bloom-pink':'var(--grad-bloom-pink)','bloom-lime':'var(--grad-bloom-lime)','bloom-cool':'var(--grad-bloom-cool)',
  'veil-cool':'var(--grad-veil-cool)','veil-warm':'var(--grad-veil-warm)','veil-lime':'var(--grad-veil-lime)'
};
const FLAT=/^(veil-|tile-|crema-)/;

export function AuraField({combo='pink-lime',blur,opacity,fade,grain=false,style,...rest}){
  const flat=FLAT.test(combo);
  const soft=blur??(flat?0:'var(--grad-blur)');
  const alpha=opacity??(flat?1:0.8);
  const mask=fade?{maskImage:`linear-gradient(to ${fade}, #000 35%, transparent)`,WebkitMaskImage:`linear-gradient(to ${fade}, #000 35%, transparent)`}:null;
  return <div aria-hidden="true" style={{position:'absolute',inset:soft?'-12%':0,pointerEvents:'none',
    background:GRADS[combo]||GRADS['pink-lime'],backgroundRepeat:'no-repeat',backgroundSize:'cover',
    filter:soft?`blur(${typeof soft==='number'?soft+'px':soft}) saturate(1.05)`:undefined,
    opacity:alpha,...(grain?{mixBlendMode:'multiply'}:null),...mask,...style}} {...rest}></div>;
}
