import React from 'react';

export function Checkbox({checked,defaultChecked,onChange,label,disabled=false,style,...rest}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:inner;
  const toggle=()=>{if(disabled)return;const v=!on;if(checked===undefined)setInner(v);onChange&&onChange(v);};
  return <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.4:1,...style}} {...rest}>
    <input type="checkbox" checked={on} onChange={toggle} disabled={disabled} style={{position:'absolute',opacity:0,width:0,height:0}} />
    <span aria-hidden="true" style={{width:20,height:20,flex:'0 0 auto',display:'grid',placeItems:'center',
      background:on?'var(--surface-accent)':'var(--surface-card)',
      border:`var(--border-thin) solid ${on?'var(--surface-accent)':'var(--border-hairline)'}`,
      borderRadius:'var(--radius-sm)',transition:'var(--motion-hover)'}}>
      {on&&<span style={{width:5,height:9,borderRight:'2px solid #fff',borderBottom:'2px solid #fff',rotate:'45deg',marginTop:-2}}></span>}
    </span>
    {label&&<span style={{font:'var(--fw-light) var(--fs-ui)/1.35 var(--font-sans)',color:'var(--text-body)'}}>{label}</span>}
  </label>;
}
