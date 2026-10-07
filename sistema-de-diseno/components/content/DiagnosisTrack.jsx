import React from 'react';

const DEFAULT_TONES=['var(--salmon)','var(--pink-paradise)','var(--deep-blue-gray)','var(--light-lime)'];

export function DiagnosisTrack({steps=[],orientation='horizontal',style,...rest}){
  const horiz=orientation==='horizontal';
  return <ol style={{listStyle:'none',margin:0,padding:0,display:'grid',gap:'var(--space-1)',
    gridTemplateColumns:horiz?`repeat(${steps.length},minmax(0,1fr))`:'minmax(0,1fr)',...style}} {...rest}>
    {steps.map((s,i)=>{
      const bg=s.color||DEFAULT_TONES[i%DEFAULT_TONES.length];
      const light=bg==='var(--light-lime)'||bg==='var(--salt-air)';
      return <li key={i} style={{background:bg,color:light?'var(--deep-blue-gray)':'var(--white)',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)',minHeight:160}}>
        <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',opacity:0.8}}>0{i+1}</span>
        <span style={{font:'var(--fw-semibold) var(--fs-ui-lg)/1.15 var(--font-sans)',letterSpacing:'var(--tracking)'}}>{s.title}</span>
        {s.body&&<span style={{font:'var(--fw-light) var(--fs-ui)/1.4 var(--font-sans)'}}>{s.body}</span>}
      </li>;
    })}
  </ol>;
}
