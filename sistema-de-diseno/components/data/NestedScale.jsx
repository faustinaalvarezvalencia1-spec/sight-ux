import React from 'react';

/* Escala anidada: magnitudes que se contienen unas a otras (mercado total → disponible →
   alcanzable, universo → muestra → casos). Anillos en degradado de marca —claro afuera,
   saturado al centro, nunca oscuro— con la cifra dentro de su banda expuesta y línea guía
   a la etiqueta. Tres variantes:
   - `nested`  círculos centrados, etiquetas a la derecha
   - `corner`  cuartos de círculo anclados a una esquina — el motivo de lámina
   - `row`     burbujas en fila, para comparar sin contención
   El diámetro escala por área, pero se fuerza una banda mínima legible entre anillos:
   si dos magnitudes están muy cerca, el anillo interior se recorta para que la cifra quepa.
   Del mayor al menor: `data` se ordena solo. Hover destaca el nivel. */
const TONES=[
  {fill:'linear-gradient(145deg, var(--pink-100), var(--pink-200))',ink:'var(--deep-blue-gray)'},
  {fill:'linear-gradient(145deg, var(--pink-200), var(--salmon))',ink:'var(--deep-blue-gray)'},
  {fill:'linear-gradient(145deg, var(--salmon), var(--pink-paradise))',ink:'var(--text-on-accent)'},
  {fill:'linear-gradient(145deg, var(--pink-paradise), var(--pink-600))',ink:'var(--text-on-accent)'}
];
const RAMPS={
  pink:TONES,
  lime:[{fill:'linear-gradient(145deg, var(--lime-100), var(--lime-300))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--lime-300), color-mix(in srgb, var(--light-lime) 80%, var(--coconut-milk)))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, color-mix(in srgb, var(--light-lime) 85%, var(--coconut-milk)), var(--light-lime))',ink:'var(--text-on-lime)'},{fill:'linear-gradient(145deg, var(--light-lime), var(--lime-300))',ink:'var(--text-on-lime)'}],
  cool:[{fill:'linear-gradient(145deg, var(--salt-air), var(--lime-100))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--salt-air), var(--pink-100))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--pink-200), var(--salmon))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--salmon), var(--pink-paradise))',ink:'var(--text-on-accent)'}],
  ink:[{fill:'linear-gradient(145deg, var(--ink-050), var(--ink-100))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--ink-100), var(--ink-300))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--salt-air), var(--salmon))',ink:'var(--deep-blue-gray)'},{fill:'linear-gradient(145deg, var(--salmon), var(--pink-paradise))',ink:'var(--text-on-accent)'}]
};

export function NestedScale({data=[],layout='nested',tone='pink',size=320,corner='br',labels=true,style,...rest}){
  const [hot,setHot]=React.useState(null);
  const ramp=RAMPS[tone]||RAMPS.pink;
  const items=[...data].sort((a,b)=>b.value-a.value);
  const n=items.length;
  const top=items[0]?items[0].value:1;
  const paint=i=>ramp[Math.min(ramp.length-1,Math.round((i/(Math.max(1,n-1)))*(ramp.length-1)))];
  const lh=Math.max(15,Math.round(size*0.075));
  /* Diámetro por área, con banda mínima de lh*1.6 de radio entre anillos consecutivos. */
  const dias=items.map(d=>Math.max(0.16,Math.sqrt(d.value/top))*size);
  for(let i=1;i<n;i++){
    const ceiling=dias[i-1]-lh*3.2;
    if(dias[i]>ceiling)dias[i]=Math.max(size*0.2,ceiling);
  }
  const gap=i=>(dias[i]-(i<n-1?dias[i+1]:0))/2;
  /* El anillo más interno es un disco completo: su cifra se centra en él y usa el cuerpo
     entero. Los anillos exteriores ajustan el cuerpo a su banda expuesta, con piso de 11px;
     si ni así despeja, la cifra pasa a la leyenda. */
  const fontOf=i=>i===n-1?lh:Math.min(lh,Math.floor(gap(i)*0.62));
  const fits=i=>i===n-1?dias[i]>=lh*1.6:fontOf(i)>=11;
  const cap=(c,i)=>({font:`var(--fw-extrabold) ${fontOf(i)}px/1 var(--font-sans)`,letterSpacing:'var(--tracking-tight)',color:c});

  if(layout==='row'){
    return <div style={{display:'flex',alignItems:'flex-end',gap:'var(--space-5)',flexWrap:'wrap',...style}} {...rest}>
      {items.map((d,i)=>{const t=paint(i),s=dias[i];
        return <div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)} style={{display:'grid',gap:'var(--space-3)',justifyItems:'center'}}>
          <div style={{width:s,height:s,borderRadius:'50%',background:t.fill,display:'grid',placeItems:'center',
            transition:'var(--motion-hover)',transform:hot===i?'scale(1.04)':'none'}}>
            <span style={cap(t.ink,n-1)}>{d.display||d.value}</span>
          </div>
          {labels&&<span style={{font:'var(--type-caption)',color:'var(--text-muted)',textAlign:'center',maxWidth:'16ch'}}>{d.label}</span>}
        </div>;})}
    </div>;
  }

  if(layout==='corner'){
    const pos={br:{right:0,bottom:0},bl:{left:0,bottom:0},tr:{right:0,top:0},tl:{left:0,top:0}}[corner]||{right:0,bottom:0};
    const radius={br:'100% 0 0 0',bl:'0 100% 0 0',tr:'0 0 100% 0',tl:'0 0 0 100%'}[corner]||'100% 0 0 0';
    /* Sobre la diagonal que sale de la esquina: distancia radial al punto medio de la banda
       expuesta, proyectada con 1/√2 en cada eje. La cuerda del anillo a esa altura es lo que
       realmente puede sostener la cifra, así que el cuerpo se reduce hasta caber dentro del
       arco (piso 11px; por debajo, la cifra pasa a la leyenda). */
    const geom=i=>{
      const r=dias[i]/2, rIn=i<n-1?dias[i+1]/2:0;
      const off=(i===n-1?r*0.5:(r+rIn)/2)/Math.SQRT2;
      const outer=Math.sqrt(Math.max(0,r*r-off*off));
      const inner=off<rIn?Math.sqrt(Math.max(0,rIn*rIn-off*off)):0;
      const half=Math.max(0,Math.min(outer-off,off-inner));
      const chars=String(items[i].display||items[i].value).length||1;
      const font=Math.max(0,Math.min(fontOf(i),Math.floor((half*2)/(chars*0.6))));
      return {off,font};
    };
    const place=off=>corner==='br'?{right:off,bottom:off,transform:'translate(50%,50%)'}
      :corner==='bl'?{left:off,bottom:off,transform:'translate(-50%,50%)'}
      :corner==='tr'?{right:off,top:off,transform:'translate(50%,-50%)'}
      :{left:off,top:off,transform:'translate(-50%,-50%)'};
    return <div style={{position:'relative',width:size,height:size,...style}} {...rest}>
      {items.map((d,i)=><div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
        style={{position:'absolute',...pos,width:dias[i],height:dias[i],borderRadius:radius,background:paint(i).fill,
          transition:'var(--motion-hover)',filter:hot!=null&&hot!==i?'saturate(0.7)':'none'}}></div>)}
      {items.map((d,i)=>{const g=geom(i);
        return g.font>=11?<span key={'l'+i} style={{...cap(paint(i).ink,i),fontSize:g.font,position:'absolute',...place(g.off),whiteSpace:'nowrap',pointerEvents:'none'}}>{d.display||d.value}</span>:null;})}
    </div>;
  }

  return <div style={{display:'grid',gridTemplateColumns:labels?`${size}px minmax(20ch,1fr)`:`${size}px`,gap:'var(--space-6)',alignItems:'center',...style}} {...rest}>
    <div style={{position:'relative',width:size,height:size}}>
      {items.map((d,i)=><div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
        style={{position:'absolute',left:'50%',bottom:0,transform:'translateX(-50%)',width:dias[i],height:dias[i],borderRadius:'50%',
          background:paint(i).fill,transition:'var(--motion-hover)',filter:hot!=null&&hot!==i?'saturate(0.7)':'none'}}></div>)}
      {items.map((d,i)=>fits(i)
        ? <span key={'l'+i} style={{...cap(paint(i).ink,i),position:'absolute',left:'50%',
            top:i===n-1?size-dias[i]/2-fontOf(i)/2:size-dias[i]+gap(i)/2-fontOf(i)/2,
            transform:'translateX(-50%)',whiteSpace:'nowrap',pointerEvents:'none'}}>{d.display||d.value}</span>
        : null)}
    </div>
    {labels&&<dl style={{margin:0,display:'grid',gap:'var(--space-4)'}}>
      {items.map((d,i)=><div key={i} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
        style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'var(--space-3)',alignItems:'start',
          opacity:hot!=null&&hot!==i?0.55:1,transition:'var(--motion-hover)'}}>
        <span aria-hidden="true" style={{width:14,height:14,marginTop:3,background:paint(i).fill,flex:'none'}}></span>
        <div>
          <dt style={{font:'var(--fw-extrabold) var(--fs-ui-lg)/1.15 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{fits(i)?d.label:`${d.display||d.value} · ${d.label}`}</dt>
          {d.note&&<dd style={{margin:'4px 0 0',font:'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',color:'var(--text-body)',maxWidth:'34ch'}}>{d.note}</dd>}
        </div>
      </div>)}
    </dl>}
  </div>;
}
