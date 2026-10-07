import React from 'react';

const dots={positive:'var(--state-positive)',attention:'var(--state-attention)',critical:'var(--state-critical)',neutral:'var(--state-neutral)'};

export function Badge({state='neutral',children,style,...rest}){
  return <span style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',
    font:'var(--fw-semibold) var(--fs-micro)/1 var(--font-sans)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',
    color:'var(--text-muted)',...style}} {...rest}>
    <span style={{width:8,height:8,borderRadius:'var(--radius-pill)',background:dots[state],flex:'0 0 auto'}}></span>
    {children}
  </span>;
}
