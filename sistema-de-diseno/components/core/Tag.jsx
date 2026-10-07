import React from 'react';

const tones={
  lime:{background:'var(--surface-highlight)',color:'var(--text-on-lime)'},
  pink:{background:'var(--surface-accent)',color:'var(--text-on-accent)'},
  salmon:{background:'var(--salmon)',color:'var(--white)'},
  cool:{background:'var(--surface-cool)',color:'var(--text-strong)'},
  dark:{background:'var(--surface-dark)',color:'var(--text-on-dark)'},
  quiet:{background:'transparent',color:'var(--text-muted)',boxShadow:'inset 0 0 0 1px var(--border-hairline)'}
};

export function Tag({tone='lime',children,style,...rest}){
  return <span style={{display:'inline-flex',alignItems:'center',padding:'6px 12px',borderRadius:'var(--radius-pill)',
    font:'var(--fw-medium) var(--fs-ui-sm)/1 var(--font-sans)',letterSpacing:'var(--tracking-micro)',...tones[tone],...style}} {...rest}>{children}</span>;
}
