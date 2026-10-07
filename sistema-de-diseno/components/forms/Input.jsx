import React from 'react';

export function Input({multiline=false,invalid=false,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  const s={...{width:'100%',font:'var(--fw-light) var(--fs-ui-lg)/1.3 var(--font-sans)',letterSpacing:'var(--tracking-micro)',color:'var(--text-strong)',background:'var(--surface-card)',border:'var(--border-thin) solid var(--border-hairline)',borderRadius:'var(--radius-md)',padding:'14px 16px',outline:'none',transition:'var(--motion-hover),box-shadow var(--dur-fast) var(--ease-standard)'},
    borderColor:invalid?'var(--state-critical)':foc?'var(--border-strong)':'var(--border-hairline)',
    boxShadow:foc?'var(--ring-focus)':'none',resize:multiline?'vertical':undefined,minHeight:multiline?120:undefined,...style};
  const T=multiline?'textarea':'input';
  return <T style={s} onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} {...rest} />;
}
