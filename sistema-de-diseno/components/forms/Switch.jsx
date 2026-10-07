import React from 'react';

export function Switch({checked,defaultChecked,onChange,label,disabled=false,style,...rest}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=()=>{if(disabled)return;const v=!on;if(checked===undefined)setInner(v);onChange&&onChange(v);};
  return <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1,...style}} {...rest}>
    <button type="button" role="switch" aria-checked={on} onClick={toggle} disabled={disabled}
      style={{width:44,height:24,flex:'0 0 auto',padding:2,border:0,borderRadius:'var(--radius-pill)',cursor:'inherit',
        background:on?'var(--surface-accent)':'var(--ink-100)',display:'flex',justifyContent:on?'flex-end':'flex-start',
        transition:'background-color var(--dur-base) var(--ease-standard)'}}>
      <span style={{width:20,height:20,borderRadius:'var(--radius-pill)',background:'var(--white)',boxShadow:'var(--shadow-card)'}}></span>
    </button>
    {label&&<span style={{font:'var(--fw-light) var(--fs-ui)/1.35 var(--font-sans)',color:'var(--text-body)'}}>{label}</span>}
  </label>;
}
