import React from 'react';

/* Planos apilados en isometría con línea guía a la etiqueta. Para jerarquías que se
   sostienen unas sobre otras —esencia / sistema / ejecución—.
   Los planos se superponen y son translúcidos: las intersecciones construyen el volumen.
   Las etiquetas van en flujo normal y el paso del apilado se deriva de la fila más alta
   medida, así que el texto nunca se solapa. Movimiento: entrada escalonada de abajo
   hacia arriba y separación del plano activo en hover. El plano más alto es el sólido. */
const RAMPS={
  salmon:['var(--salmon)','color-mix(in srgb, var(--salmon) 46%, transparent)','color-mix(in srgb, var(--salmon) 22%, transparent)','color-mix(in srgb, var(--salmon) 12%, transparent)'],
  pink:['var(--pink-paradise)','color-mix(in srgb, var(--pink-paradise) 42%, transparent)','color-mix(in srgb, var(--pink-paradise) 20%, transparent)','color-mix(in srgb, var(--pink-paradise) 11%, transparent)'],
  lime:['var(--lime-600)','color-mix(in srgb, var(--light-lime) 70%, transparent)','color-mix(in srgb, var(--light-lime) 38%, transparent)','color-mix(in srgb, var(--light-lime) 20%, transparent)'],
  cool:['var(--salt-air)','color-mix(in srgb, var(--salt-air) 55%, transparent)','color-mix(in srgb, var(--salt-air) 30%, transparent)','color-mix(in srgb, var(--salt-air) 16%, transparent)']
};

export function LayerStack({data=[],tone='salmon',size=300,gap=0.5,style,...rest}){
  const [ready,setReady]=React.useState(false);
  const [hot,setHot]=React.useState(null);
  const rows=React.useRef([]);
  const ramp=RAMPS[tone]||RAMPS.salmon;
  const n=data.length;
  const fw=size, fh=size*0.62, base=fh*gap;
  const [pitch,setPitch]=React.useState(base);
  React.useEffect(()=>{const t=setTimeout(()=>setReady(true),40);return ()=>clearTimeout(t);},[]);
  React.useEffect(()=>{
    const measure=()=>{
      const tall=rows.current.reduce((m,el)=>Math.max(m,el?el.offsetHeight:0),0);
      setPitch(Math.max(base,tall+18));
    };
    measure();
    const ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(measure):null;
    if(ro)rows.current.forEach(el=>el&&ro.observe(el));
    window.addEventListener('resize',measure);
    return ()=>{if(ro)ro.disconnect();window.removeEventListener('resize',measure);};
  },[data,size,gap,base]);
  /* El centro de la fila i es i*pitch + pitch/2; el vértice del plano i es i*pitch + fh/2. */
  const shift=(fh-pitch)/2;
  return <div style={{display:'grid',gridTemplateColumns:`${fw}px minmax(24ch,1fr)`,gap:0,alignItems:'start',...style}} {...rest}>
    <div style={{position:'relative',width:fw,height:(n-1)*pitch+fh,marginTop:shift<0?-shift:0}}>
      {data.map((d,i)=><div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
        style={{position:'absolute',left:0,top:i*pitch,width:fw,height:fh,
          background:ramp[Math.min(ramp.length-1,i)],
          clipPath:'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
          opacity:ready?1:0,
          transform:`translateY(${ready?(hot===i?-10:0):18}px)`,
          transition:'transform 520ms cubic-bezier(.2,.8,.2,1), opacity 520ms ease',
          transitionDelay:ready?`${(n-1-i)*90}ms`:'0ms'}}></div>)}
    </div>
    <div style={{marginTop:shift>0?shift:0}}>
      {data.map((d,i)=><div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
        style={{minHeight:pitch,display:'flex',alignItems:'center',position:'relative',paddingLeft:'var(--space-10)',
          opacity:ready?(hot!=null&&hot!==i?0.55:1):0,transition:'opacity 420ms ease',
          transitionDelay:ready?`${(n-1-i)*90+120}ms`:'0ms'}}>
        <span aria-hidden="true" style={{position:'absolute',left:0,top:'50%',width:'var(--space-9)',height:1,
          background:'var(--ink-300)',transformOrigin:'left center',
          transform:`scaleX(${ready?1:0})`,transition:'transform 420ms ease',transitionDelay:ready?`${(n-1-i)*90+120}ms`:'0ms'}}></span>
        <div ref={el=>{rows.current[i]=el;}}>
          <div style={{font:`var(--fw-medium) ${Math.max(14,Math.round(size*0.058))}px/1.2 var(--font-sans)`,
            letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--text-strong)'}}>{d.label}</div>
          {d.note&&<p style={{margin:'10px 0 0',font:`var(--fw-regular) ${Math.max(10,Math.round(size*0.039))}px/1.75 var(--font-sans)`,
            letterSpacing:'0.06em',textTransform:'uppercase',color:'var(--text-muted)',maxWidth:'44ch'}}>{d.note}</p>}
        </div>
      </div>)}
    </div>
  </div>;
}
