import React from 'react';

export function Quote({attribution,role,color,children,style,...rest}){
  return <figure style={{margin:0,maxWidth:'var(--measure-tight)',...style}} {...rest}>
    <blockquote style={{margin:0,font:'var(--fw-light) var(--fs-subtitle)/1.25 var(--font-sans)',letterSpacing:'var(--tracking)',color:color||'var(--text-strong)',textWrap:'pretty'}}>{children}</blockquote>
    {attribution&&<figcaption style={{marginTop:'var(--space-5)',font:'var(--type-caption)',color:'var(--text-muted)'}}>
      <span style={{color:'var(--text-accent)',fontWeight:'var(--fw-semibold)'}}>{attribution}</span>{role?` — ${role}`:''}
    </figcaption>}
  </figure>;
}
