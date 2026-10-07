import React from 'react';

const tones={
  lime:{bar:'var(--light-lime)',bg:'transparent'},
  pink:{bar:'var(--pink-paradise)',bg:'transparent'},
  cool:{bar:'var(--salt-air)',bg:'transparent'},
  filled:{bar:'var(--pink-paradise)',bg:'var(--surface-sunken)'}
};

export function Callout({tone='lime',label,children,style,...rest}){
  const t=tones[tone];
  return <div style={{borderLeft:`var(--border-rule) solid ${t.bar}`,background:t.bg,padding:'var(--space-1) 0 var(--space-1) var(--space-5)',...style}} {...rest}>
    {label&&<strong style={{font:'var(--fw-semibold) var(--fs-body)/var(--lh-body) var(--font-sans)',color:'var(--text-strong)'}}>{label} </strong>}
    <span style={{font:'var(--type-body)',color:'var(--text-body)'}}>{children}</span>
  </div>;
}
