import React from 'react';

/* Núcleo con satélites radiales. Para una idea central y sus frentes de trabajo:
   el núcleo lleva el nombre, cada satélite un frente con su peso. Movimiento: los
   satélites entran desde el núcleo hacia afuera, escalonados, y el hover destaca el radio. */
const TONES={
  pink:{core:'var(--pink-paradise)',coreInk:'var(--text-on-accent)',sat:'var(--pink-100)',satInk:'var(--deep-blue-gray)',line:'var(--pink-200)'},
  lime:{core:'var(--light-lime)',coreInk:'var(--text-on-lime)',sat:'var(--lime-100)',satInk:'var(--deep-blue-gray)',line:'var(--lime-300)'},
  ink:{core:'var(--deep-blue-gray)',coreInk:'var(--coconut-milk)',sat:'var(--ink-050)',satInk:'var(--deep-blue-gray)',line:'var(--ink-100)'},
  cool:{core:'var(--salt-air)',coreInk:'var(--deep-blue-gray)',sat:'var(--coconut-milk)',satInk:'var(--deep-blue-gray)',line:'var(--ink-100)'}
};

export function SpokeDiagram({data=[],core='Diagnóstico',tone='pink',size=360,start=-90,style,...rest}){
  const [ready,setReady]=React.useState(false);
  const [hot,setHot]=React.useState(null);
  React.useEffect(()=>{const t=setTimeout(()=>setReady(true),40);return ()=>clearTimeout(t);},[]);
  const t=TONES[tone]||TONES.pink;
  const n=data.length||1;
  const C=size/2, coreR=size*0.17, satR=size*0.115, orbit=size*0.36;
  const angle=i=>((start+(360/n)*i)*Math.PI)/180;
  return <div style={{position:'relative',width:size,height:size,...style}} {...rest}>
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{position:'absolute',inset:0}} aria-hidden="true">
      {data.map((d,i)=>{const a=angle(i);
        return <line key={i} x1={C} y1={C} x2={C+Math.cos(a)*orbit} y2={C+Math.sin(a)*orbit}
          stroke={hot===i?'var(--border-strong)':t.line} strokeWidth={hot===i?2:1.5}
          style={{opacity:ready?1:0,transition:'opacity 420ms ease, stroke 200ms ease',transitionDelay:ready?`${i*80}ms`:'0ms'}}/>;})}
    </svg>
    {data.map((d,i)=>{const a=angle(i),x=C+Math.cos(a)*orbit,y=C+Math.sin(a)*orbit;
      return <div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
        style={{position:'absolute',left:ready?x-satR:C-satR,top:ready?y-satR:C-satR,width:satR*2,height:satR*2,
          borderRadius:'50%',background:t.sat,color:t.satInk,display:'grid',placeItems:'center',textAlign:'center',
          padding:6,boxSizing:'border-box',cursor:'default',
          opacity:ready?(hot!=null&&hot!==i?0.6:1):0,
          transform:hot===i?'scale(1.06)':'scale(1)',
          transition:'left 560ms cubic-bezier(.2,.8,.2,1), top 560ms cubic-bezier(.2,.8,.2,1), opacity 420ms ease, transform 200ms ease',
          transitionDelay:ready?`${i*80}ms`:'0ms'}}>
        <div>
          <div style={{font:`var(--fw-extrabold) ${Math.max(14,Math.round(size*0.05))}px/1 var(--font-sans)`,letterSpacing:'var(--tracking-tight)'}}>{d.value}</div>
          <div style={{marginTop:3,font:`var(--fw-medium) ${Math.max(10,Math.round(size*0.031))}px/1.2 var(--font-sans)`,letterSpacing:'var(--tracking-micro)'}}>{d.label}</div>
        </div>
      </div>;})}
    <div style={{position:'absolute',left:C-coreR,top:C-coreR,width:coreR*2,height:coreR*2,borderRadius:'50%',
      background:t.core,color:t.coreInk,display:'grid',placeItems:'center',textAlign:'center',padding:8,boxSizing:'border-box',
      font:`var(--fw-extrabold) ${Math.max(13,Math.round(size*0.042))}px/1.15 var(--font-sans)`,letterSpacing:'var(--tracking-tight)',
      transform:ready?'scale(1)':'scale(0.8)',opacity:ready?1:0,transition:'transform 480ms cubic-bezier(.2,.8,.2,1), opacity 320ms ease'}}>{core}</div>
  </div>;
}
