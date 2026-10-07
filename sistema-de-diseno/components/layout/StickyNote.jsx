import React from 'react';

/* Post-it. Origen declarado de la paleta (manual p.31) y motivo recurrente en exterior,
   folletos y sitio (p.38–42). Nota corta, escrita a mano en la vida real: aquí, texto
   breve en Plus Jakarta con una rotación mínima. */
const TONES={
  pink:{background:'#ff9db0',color:'var(--deep-blue-gray)'},
  lime:{background:'var(--light-lime)',color:'var(--deep-blue-gray)'},
  cool:{background:'var(--salt-air)',color:'var(--deep-blue-gray)'},
  warm:{background:'var(--coconut-milk)',color:'var(--deep-blue-gray)'},
  salmon:{background:'var(--salmon)',color:'var(--deep-blue-gray)'}
};

export function StickyNote({tone='lime',size=200,rotate=-3,children,style,...rest}){
  return <div style={{width:size,minHeight:size,boxSizing:'border-box',padding:'var(--space-4)',
    display:'flex',alignItems:'flex-start',...TONES[tone],
    font:`var(--fw-medium) ${Math.round(size*0.1)}px/1.25 var(--font-body)`,letterSpacing:'var(--tracking)',
    transform:`rotate(${rotate}deg)`,boxShadow:'var(--shadow-raised)',borderRadius:'var(--radius-none)',...style}} {...rest}>{children}</div>;
}
