import React from 'react';

export function Field({label,hint,error,htmlFor,children,style,...rest}){
  return <label htmlFor={htmlFor} style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}} {...rest}>
    {label&&<span style={{font:'var(--fw-medium) var(--fs-ui)/1.2 var(--font-sans)',letterSpacing:'var(--tracking-micro)',color:'var(--text-strong)'}}>{label}</span>}
    {children}
    {(error||hint)&&<span style={{font:'var(--fw-regular) var(--fs-ui-sm)/1.35 var(--font-sans)',color:error?'var(--state-critical)':'var(--text-muted)'}}>{error||hint}</span>}
  </label>;
}
