import React from 'react';

/* Imagen de marca. Toda fotografía real va en el duotono de la casa:
   sombra #721f34 → luz #ade6e6 (tokens --duotone-shadow / --duotone-light).
   Mapa de degradado real (feComponentTransfer sobre la luminancia), no una capa
   gris: los medios tonos quedan en vino-turquesa saturado como en el ejemplo.
   Encuadre a sangre, esquina recta, sin sombra. Sin `src`, marcador rayado. */
const RAMPS={
  duotone:{id:'sight-duo-house',r:[0.32,0.447,0.678],g:[0.075,0.122,0.902],b:[0.13,0.204,0.902]},
  'duotone-pink':{id:'sight-duo-pink',r:[0.259,1],g:[0.055,0.78],b:[0.133,0.78]},
  'duotone-lime':{id:'sight-duo-lime',r:[0.184,0.886],g:[0.204,0.980],b:[0.251,0.514]},
  'duotone-cool':{id:'sight-duo-cool',r:[0.184,0.812],g:[0.204,1],b:[0.251,0.992]}
};
const LUMA='0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0';

function Ramp({ramp}){
  return <svg aria-hidden="true" width="0" height="0" style={{position:'absolute'}} focusable="false">
    <filter id={ramp.id} colorInterpolationFilters="sRGB">
      <feColorMatrix type="matrix" values={LUMA}/>
      <feComponentTransfer>
        <feFuncR type="table" tableValues={ramp.r.join(' ')}/>
        <feFuncG type="table" tableValues={ramp.g.join(' ')}/>
        <feFuncB type="table" tableValues={ramp.b.join(' ')}/>
      </feComponentTransfer>
    </filter>
  </svg>;
}

export function PhotoFrame({src,alt='',treatment='duotone',ratio='4 / 3',label='fotografía',style,...rest}){
  const ramp=RAMPS[treatment];
  const stripes='repeating-linear-gradient(135deg,var(--ink-050) 0 10px,var(--surface-page) 10px 20px)';
  return <figure style={{margin:0,position:'relative',aspectRatio:ratio,overflow:'hidden',
    background:src?(ramp?'var(--duotone-shadow)':'var(--surface-dark)'):stripes,borderRadius:'var(--radius-none)',...style}} {...rest}>
    {src
      ? <>{ramp&&<Ramp ramp={ramp}/>}
        <img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',
          filter:ramp?`contrast(1.2) brightness(0.96) url(#${ramp.id})`:'grayscale(1) contrast(1.06)'}}/></>
      : <figcaption style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
          font:'var(--fw-regular) var(--fs-micro)/1.3 ui-monospace,SFMono-Regular,Menlo,monospace',
          letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)',textAlign:'center',padding:'var(--space-4)'}}>{label}</figcaption>}
  </figure>;
}
