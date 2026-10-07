import React from 'react';

/* Cifra en anillo. Proporción de una sola magnitud — cobertura, avance, porcentaje del
   diagnóstico. Anillo de color plano sobre pista neutra, cifra al centro en extrabold. */
const TONES={pink:'var(--pink-paradise)',lime:'var(--lime-600)',salmon:'var(--salmon)',ink:'var(--deep-blue-gray)'};

export function RingStat({value=0,display,label,tone='pink',size=140,thickness=16,style,...rest}){
  const pct=Math.max(0,Math.min(100,value));
  const color=TONES[tone]||TONES.pink;
  return <div style={{display:'grid',gap:'var(--space-3)',justifyItems:'center',...style}} {...rest}>
    <div style={{width:size,height:size,borderRadius:'50%',display:'grid',placeItems:'center',
      background:`conic-gradient(${color} 0 ${pct}%, var(--ink-100) ${pct}% 100%)`}}>
      <div style={{width:size-thickness*2,height:size-thickness*2,borderRadius:'50%',background:'var(--surface-card)',display:'grid',placeItems:'center'}}>
        <span style={{font:'var(--fw-extrabold) '+Math.round(size*0.26)+'px/1 var(--font-sans)',letterSpacing:'var(--tracking-tight)',color:'var(--text-strong)'}}>{display||pct+'%'}</span>
      </div>
    </div>
    {label&&<span style={{font:'var(--type-caption)',color:'var(--text-muted)',textAlign:'center',maxWidth:'22ch'}}>{label}</span>}
  </div>;
}
