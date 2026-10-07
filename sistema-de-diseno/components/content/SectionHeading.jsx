import React from 'react';

const levels={
  display:{font:'var(--type-display)',letterSpacing:'var(--tracking)'},
  title:{font:'var(--type-title)',letterSpacing:'var(--tracking)'},
  subtitle:{font:'var(--type-subtitle)',letterSpacing:'var(--tracking)'}
};

export function SectionHeading({level='title',eyebrow,children,color,align='left',style,...rest}){
  return <header style={{textAlign:align,...style}} {...rest}>
    {eyebrow&&<div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)',marginBottom:'var(--space-3)'}}>{eyebrow}</div>}
    <h2 style={{margin:0,color:color||'var(--text-strong)',textWrap:'pretty',...levels[level]}}>{children}</h2>
  </header>;
}
