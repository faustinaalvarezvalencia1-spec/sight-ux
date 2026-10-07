import React from 'react';

/* Gráfica de barras de marca: color plano de la paleta, esquina recta, sin sombra ni
   degradado. Una serie por gráfica; el color destaca la barra que importa (`tone` por dato).
   Línea base en tinta, valores en extrabold — la cifra es el titular. */
const TONES={
  pink:'var(--pink-paradise)',lime:'var(--light-lime)',salmon:'var(--salmon)',
  cool:'var(--salt-air)',ink:'var(--deep-blue-gray)',muted:'var(--ink-100)'
};

export function BarChart({data=[],orientation='vertical',tone='pink',max,unit='',height=200,style,...rest}){
  const top=max||Math.max(...data.map(d=>d.value),0)||1;
  const vertical=orientation==='vertical';
  const bars=data.map((d,i)=>{
    const pct=Math.max(0,Math.min(1,d.value/top))*100;
    const fill=TONES[d.tone||tone]||TONES[tone];
    const value=<span style={{font:'var(--fw-extrabold) var(--fs-ui)/1 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{d.value}{unit}</span>;
    const label=<span style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{d.label}</span>;
    return vertical
      ? <div key={i} style={{display:'grid',gridTemplateRows:'auto 1fr auto',gap:'var(--space-2)',justifyItems:'center',minWidth:0}}>
          {value}
          <div style={{width:'100%',display:'flex',alignItems:'flex-end'}}>
            <div style={{width:'100%',height:pct+'%',minHeight:2,background:fill}}></div>
          </div>
          <div style={{textAlign:'center'}}>{label}</div>
        </div>
      : <div key={i} style={{display:'grid',gridTemplateColumns:'minmax(9ch,22%) 1fr auto',gap:'var(--space-3)',alignItems:'center'}}>
          {label}
          <div style={{height:14,background:'var(--surface-sunken)'}}><div style={{width:pct+'%',height:'100%',minWidth:2,background:fill}}></div></div>
          {value}
        </div>;
  });
  return <div style={style} {...rest}>
    {vertical
      ? <div style={{display:'grid',gridAutoFlow:'column',gridAutoColumns:'minmax(0,1fr)',gap:'var(--space-4)',height,borderBottom:'2px solid var(--border-strong)',paddingBottom:'var(--space-2)'}}>{bars}</div>
      : <div style={{display:'grid',gap:'var(--space-3)'}}>{bars}</div>}
  </div>;
}
