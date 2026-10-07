/* Gráfica de foco: dos series suavizadas, cruceta en hover, leyenda conmutable.
   Interacción real: mover el cursor fija la semana; clic en la leyenda apaga una serie. */
const SERIES=[
  {key:'max',label:'Máximo de foco',color:'var(--pink-paradise)'},
  {key:'min',label:'Falta de foco',color:'var(--salt-air)',stroke:'var(--lime-600)'}
];

function smooth(pts){
  if(pts.length<2)return '';
  let d=`M ${pts[0][0]} ${pts[0][1]}`;
  for(let i=0;i<pts.length-1;i++){
    const [x0,y0]=pts[i],[x1,y1]=pts[i+1];
    const cx=(x0+x1)/2;
    d+=` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

function FocusChart({data,labels,height=260}){
  const [hover,setHover]=React.useState(null);
  const [off,setOff]=React.useState({});
  const wrap=React.useRef(null);
  const W=900,H=height,padT=26,padB=12;
  const n=data.max.length;
  const x=i=>(i/(n-1))*W;
  const y=v=>padT+(1-v/100)*(H-padT-padB);
  const paths=SERIES.map(s=>({...s,d:smooth(data[s.key].map((v,i)=>[x(i),y(v)]))}));
  const move=e=>{
    const r=wrap.current.getBoundingClientRect();
    const i=Math.round(((e.clientX-r.left)/r.width)*(n-1));
    setHover(Math.max(0,Math.min(n-1,i)));
  };
  return <div>
    <div ref={wrap} onMouseMove={move} onMouseLeave={()=>setHover(null)} style={{position:'relative',cursor:'crosshair'}}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{display:'block',width:'100%',height}} role="img" aria-label="Foco por semana">
        <defs>
          <linearGradient id="focus-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--pink-200)" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="var(--pink-100)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {[0,25,50,75,100].map(v=><line key={v} x1="0" x2={W} y1={y(v)} y2={y(v)} stroke="var(--border-hairline)" strokeWidth="1"/>)}
        {!off.max&&<path d={`${paths[0].d} L ${W} ${y(0)} L 0 ${y(0)} Z`} fill="url(#focus-area)"/>}
        {paths.map(s=>off[s.key]?null:<path key={s.key} d={s.d} fill="none" stroke={s.stroke||s.color} strokeWidth="3" strokeLinecap="round"/>)}
        {hover!=null&&<line x1={x(hover)} x2={x(hover)} y1={padT-10} y2={H-padB} stroke="var(--deep-blue-gray)" strokeWidth="1" strokeDasharray="4 4"/>}
        {hover!=null&&SERIES.map(s=>off[s.key]?null:<circle key={s.key} cx={x(hover)} cy={y(data[s.key][hover])} r="6" fill="var(--surface-card)" stroke={s.stroke||s.color} strokeWidth="3"/>)}
      </svg>
      {hover!=null&&<div style={{position:'absolute',left:`${(hover/(n-1))*100}%`,top:0,transform:'translate(-50%,-6px)',
        background:'var(--surface-dark)',color:'var(--text-on-dark)',padding:'8px 12px',whiteSpace:'nowrap',pointerEvents:'none'}}>
        <div style={{font:'var(--fw-extrabold) 13px/1.2 var(--font-sans)',letterSpacing:'var(--tracking)'}}>{labels[hover]||`Semana ${hover+1}`}</div>
        <div style={{marginTop:4,font:'var(--fw-regular) 12px/1.3 var(--font-sans)',color:'var(--salt-air)'}}>
          {SERIES.filter(s=>!off[s.key]).map(s=>`${s.label}: ${data[s.key][hover]}%`).join(' · ')}
        </div>
      </div>}
    </div>
    <div style={{display:'flex',justifyContent:'space-between',marginTop:8,font:'var(--fw-medium) 13px var(--font-sans)',color:'var(--text-muted)'}}>
      {labels.map((l,i)=><span key={i}>{l}</span>)}
    </div>
    <div style={{display:'flex',gap:18,marginTop:14,flexWrap:'wrap'}}>
      {SERIES.map(s=><button key={s.key} onClick={()=>setOff(o=>({...o,[s.key]:!o[s.key]}))}
        style={{display:'flex',alignItems:'center',gap:8,border:'none',background:'none',cursor:'pointer',padding:0,
          opacity:off[s.key]?0.4:1,font:'var(--fw-medium) 13px var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-body)'}}>
        <span style={{width:12,height:12,background:s.stroke||s.color,flex:'none'}}></span>{s.label}
      </button>)}
      <span style={{marginLeft:'auto',font:'var(--type-caption)',color:'var(--text-muted)'}}>Pasa el cursor para fijar la semana · clic en la leyenda para aislar una serie</span>
    </div>
  </div>;
}

Object.assign(window,{FocusChart});
