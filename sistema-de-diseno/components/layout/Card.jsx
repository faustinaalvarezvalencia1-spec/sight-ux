import React from 'react';

const surfaces={
  plain:{background:'var(--surface-card)',color:'var(--text-body)',boxShadow:'inset 0 0 0 1px var(--border-hairline)'},
  sunken:{background:'var(--surface-sunken)',color:'var(--text-body)'},
  warm:{background:'var(--surface-warm)',color:'var(--text-strong)'},
  cool:{background:'var(--surface-cool)',color:'var(--text-strong)'},
  lime:{background:'var(--surface-highlight)',color:'var(--text-on-lime)'},
  dark:{background:'var(--surface-dark)',color:'var(--text-on-dark)'},
  accent:{background:'var(--surface-accent)',color:'var(--text-on-accent)'}
};

export function Card({surface='plain',pad='md',rule=false,interactive=false,children,style,...rest}){
  const [h,setH]=React.useState(false);
  return <div
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{padding:pad==='sm'?'var(--pad-card-sm)':pad==='lg'?'var(--space-7)':'var(--pad-card)',
      borderRadius:'var(--radius-none)',...surfaces[surface],
      borderLeft:rule?'var(--border-rule) solid var(--rule-marker)':undefined,
      transition:'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
      boxShadow:interactive&&h?'var(--shadow-raised)':surfaces[surface].boxShadow,
      transform:interactive&&h?'translateY(-2px)':'none',
      cursor:interactive?'pointer':'default',...style}} {...rest}>{children}</div>;
}
