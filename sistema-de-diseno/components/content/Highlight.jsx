import React from 'react';

/* Resaltado de marcador. El manual construye la paleta desde los post-its y marcadores de
   sesión de trabajo, y los titulares del sitio y de exterior resaltan la palabra clave
   con un bloque plano de color (p.38, p.42). Una palabra o dos, nunca una frase entera. */
const TONES={
  lime:{background:'var(--light-lime)',color:'var(--deep-blue-gray)'},
  pink:{background:'var(--pink-paradise)',color:'var(--text-on-accent)'},
  salmon:{background:'var(--salmon)',color:'var(--deep-blue-gray)'},
  cool:{background:'var(--salt-air)',color:'var(--deep-blue-gray)'}
};

export function Highlight({tone='lime',children,style,...rest}){
  return <mark style={{...TONES[tone],padding:'0.02em 0.14em 0.08em',borderRadius:'var(--radius-none)',boxDecorationBreak:'clone',WebkitBoxDecorationBreak:'clone',...style}} {...rest}>{children}</mark>;
}
