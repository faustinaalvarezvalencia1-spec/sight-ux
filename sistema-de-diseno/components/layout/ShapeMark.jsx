import React from 'react';

/* Formas planas de la marca: círculo, medio círculo y cuarto de círculo. Aparecen sangradas
   en esquinas de tarjetas, folletos y piezas de exterior (manual p.39–43). Color plano,
   nunca degradado, nunca contorno. */
const TONES={
  lime:'var(--light-lime)',pink:'var(--pink-paradise)',salmon:'var(--salmon)',
  cool:'var(--salt-air)',warm:'var(--coconut-milk)',ink:'var(--deep-blue-gray)'
};
const RADII={
  circle:'50%',
  'quarter-tl':'100% 0 0 0','quarter-tr':'0 100% 0 0','quarter-br':'0 0 100% 0','quarter-bl':'0 0 0 100%',
  'half-top':'100% 100% 0 0','half-bottom':'0 0 100% 100%','half-left':'100% 0 0 100%','half-right':'0 100% 100% 0',
  square:'0'
};

export function ShapeMark({shape='quarter-br',tone='lime',size=140,children,style,...rest}){
  return <div aria-hidden={children?undefined:'true'} style={{width:size,height:size,flex:'none',
    background:TONES[tone],borderRadius:RADII[shape]||RADII.square,
    display:children?'flex':'block',alignItems:'center',justifyContent:'center',...style}} {...rest}>{children}</div>;
}
