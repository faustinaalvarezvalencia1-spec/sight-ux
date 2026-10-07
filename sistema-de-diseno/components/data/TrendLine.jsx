import React from 'react';

/* Serie en el tiempo. Trazo de un solo color de la paleta, sin rejilla ni marcadores
   intermedios: sólo el último punto se marca, porque es el que se está afirmando.
   Área opcional en el tinte claro del mismo color. */
const TONES={
  pink:{line:'var(--pink-paradise)',area:'var(--pink-100)'},
  lime:{line:'var(--lime-600)',area:'var(--lime-100)'},
  salmon:{line:'var(--salmon)',area:'var(--pink-100)'},
  ink:{line:'var(--deep-blue-gray)',area:'var(--ink-050)'}
};

export function TrendLine({values=[],tone='pink',area=true,height=140,labels,style,...rest}){
  const t=TONES[tone]||TONES.pink;
  const n=values.length;
  const max=Math.max(...values,0)||1, min=Math.min(...values,0);
  const span=max-min||1;
  const x=i=>n<2?0:(i/(n-1))*100;
  const y=v=>100-((v-min)/span)*100;
  const pts=values.map((v,i)=>x(i)+','+y(v)).join(' ');
  return <div style={style} {...rest}>
    <div style={{position:'relative',height}}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{display:'block',width:'100%',height:'100%',overflow:'visible'}} role="img">
        {area&&n>1&&<polygon points={'0,100 '+pts+' 100,100'} fill={t.area}/>}
        {n>1&&<polyline points={pts} fill="none" stroke={t.line} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round"/>}
      </svg>
      {n>0&&<span aria-hidden="true" style={{position:'absolute',left:x(n-1)+'%',top:y(values[n-1])+'%',width:9,height:9,marginLeft:-4.5,marginTop:-4.5,borderRadius:'50%',background:t.line}}></span>}
    </div>
    <div style={{marginTop:'var(--space-2)',paddingTop:'var(--space-2)',borderTop:'2px solid var(--border-strong)',display:'flex',justifyContent:'space-between',font:'var(--type-caption)',color:'var(--text-muted)'}}>
      {(labels||[]).map((l,i)=><span key={i}>{l}</span>)}
    </div>
  </div>;
}
