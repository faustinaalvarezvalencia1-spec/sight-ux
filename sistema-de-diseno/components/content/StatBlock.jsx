import React from 'react';

export function StatBlock({value,label,note,color,align='left',style,...rest}){
  return <div style={{textAlign:align,...style}} {...rest}>
    <div style={{font:'var(--fw-semibold) var(--fs-display)/1 var(--font-sans)',letterSpacing:'var(--tracking-tight)',color:color||'var(--text-accent)'}}>{value}</div>
    <div style={{marginTop:'var(--space-3)',font:'var(--fw-medium) var(--fs-ui-lg)/1.25 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{label}</div>
    {note&&<div style={{marginTop:'var(--space-2)',font:'var(--type-caption)',color:'var(--text-muted)',maxWidth:'32ch'}}>{note}</div>}
  </div>;
}
