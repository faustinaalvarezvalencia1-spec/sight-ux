import React from 'react';

export function Select({options=[],invalid=false,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  return <div style={{position:'relative',width:'100%'}}>
    <select style={{...{width:'100%',font:'var(--fw-light) var(--fs-ui-lg)/1.3 var(--font-sans)',letterSpacing:'var(--tracking-micro)',color:'var(--text-strong)',background:'var(--surface-card)',border:'var(--border-thin) solid var(--border-hairline)',borderRadius:'var(--radius-md)',padding:'14px 16px',outline:'none',transition:'var(--motion-hover),box-shadow var(--dur-fast) var(--ease-standard)'},appearance:'none',paddingRight:44,cursor:'pointer',
      borderColor:invalid?'var(--state-critical)':foc?'var(--border-strong)':'var(--border-hairline)',
      boxShadow:foc?'var(--ring-focus)':'none',...style}}
      onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} {...rest}>
      {options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    <span aria-hidden="true" style={{position:'absolute',right:16,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',
      width:9,height:9,borderRight:'2px solid var(--text-strong)',borderBottom:'2px solid var(--text-strong)',
      marginTop:-4,rotate:'45deg'}}></span>
  </div>;
}
