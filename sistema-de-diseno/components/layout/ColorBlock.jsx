import React from 'react';

export function ColorBlock({name,hex,pantone,textColor,height=200,style,...rest}){
  const fg=textColor||'var(--text-on-accent)';
  return <div style={{background:hex,color:fg,padding:'var(--space-5)',display:'flex',flexDirection:'column',justifyContent:'space-between',height,...style}} {...rest}>
    <div style={{font:'var(--fw-semibold) var(--fs-ui)/1.2 var(--font-sans)',letterSpacing:'var(--tracking-micro)'}}>{name}</div>
    <div style={{font:'var(--fw-light) var(--fs-ui-sm)/1.5 var(--font-sans)'}}>
      <div style={{fontWeight:'var(--fw-semibold)'}}>{hex}</div>
      {pantone&&<div style={{opacity:0.75}}>PANTONE {pantone}</div>}
    </div>
  </div>;
}
