import React from 'react';

/* Banda corrida de la marca: cita directa de la tira lime del sitio (manual p.42).
   Una sola línea, minúsculas, separador de punto medio. Respeta prefers-reduced-motion. */
const TONES={
  lime:{background:'var(--surface-highlight)',color:'var(--text-on-lime)'},
  pink:{background:'var(--surface-accent)',color:'var(--text-on-accent)'},
  dark:{background:'var(--surface-dark)',color:'var(--text-on-dark)'},
  cool:{background:'var(--surface-cool)',color:'var(--text-strong)'}
};
const KEYFRAMES='@keyframes sight-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.sight-marquee-track{animation:none!important}}';

export function Marquee({items=[],tone='lime',speed=32,size='var(--fs-ui-lg)',style,...rest}){
  const run=[...items,...items,...items,...items];
  return <div style={{overflow:'hidden',background:TONES[tone].background,color:TONES[tone].color,padding:'var(--space-3) 0',...style}} {...rest}>
    <style>{KEYFRAMES}</style>
    <div className="sight-marquee-track" style={{display:'flex',width:'max-content',animation:`sight-marquee ${speed}s linear infinite`}}>
      {run.concat(run).map((t,i)=><span key={i} style={{display:'inline-flex',alignItems:'center',gap:'var(--space-4)',font:`var(--fw-light) ${size}/1 var(--font-body)`,letterSpacing:'var(--tracking)',paddingRight:'var(--space-4)',whiteSpace:'nowrap'}}>{t}<span aria-hidden="true" style={{opacity:0.55}}>·</span></span>)}
    </div>
  </div>;
}
