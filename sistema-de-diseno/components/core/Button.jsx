import React from 'react';

const base={font:'var(--fw-semibold) var(--fs-ui)/1 var(--font-sans)',letterSpacing:'var(--tracking-micro)',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',border:'var(--border-thin) solid transparent',borderRadius:'var(--radius-pill)',cursor:'pointer',transition:'var(--motion-hover)',textDecoration:'none',whiteSpace:'nowrap'};

const sizes={sm:{padding:'8px 16px',fontSize:'var(--fs-ui-sm)'},md:{padding:'12px 24px',fontSize:'var(--fs-ui)'},lg:{padding:'16px 32px',fontSize:'var(--fs-ui-lg)'}};

const variants={
  primary:{background:'var(--surface-accent)',color:'var(--text-on-accent)'},
  secondary:{background:'var(--surface-dark)',color:'var(--text-on-dark)'},
  lime:{background:'var(--surface-highlight)',color:'var(--text-on-lime)'},
  outline:{background:'transparent',color:'var(--text-strong)',borderColor:'var(--border-strong)'},
  ghost:{background:'transparent',color:'var(--text-accent)'}
};

const hovers={
  primary:{background:'var(--pink-600)'},
  secondary:{background:'var(--ink-700)'},
  lime:{background:'var(--lime-300)'},
  outline:{background:'var(--surface-dark)',color:'var(--text-on-dark)'},
  ghost:{background:'var(--surface-accent-soft)'}
};

export function Button({variant='primary',size='md',disabled=false,href,icon,iconAfter,children,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const [p,setP]=React.useState(false);
  const Tag=href?'a':'button';
  const s={...base,...sizes[size],...variants[variant],...(h&&!disabled?hovers[variant]:null),
    opacity:disabled?0.4:1,pointerEvents:disabled?'none':'auto',transform:p?'translateY(1px)':'none',...style};
  return <Tag href={href} onClick={onClick} disabled={!href&&disabled} style={s}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false);}}
    onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)} {...rest}>
    {icon}{children}{iconAfter}
  </Tag>;
}
