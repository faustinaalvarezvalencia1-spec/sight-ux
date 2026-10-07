/* Panel de producto Sight: superficies planas de papel, esquina recta, controles pastilla.
   El degradado sólo entra en las fichas de dato (tile-*) y en el aura de cabecera. */
const {AuraField,Badge,Button,RingStat,BarChart,NestedScale,Tag,EyeMark,Highlight}=window.SightDesignSystem_3d4cc7;

const RANGES={
  'Último mes':{labels:['S1','S2','S3','S4','S5','S6','S7','S8'],max:[42,58,51,73,64,81,76,88],min:[38,31,44,28,36,24,30,19]},
  'Último trimestre':{labels:['Ene','Feb','Mar','Abr','May','Jun'],max:[34,46,52,61,70,84],min:[52,44,39,33,29,22]},
  'Año':{labels:['Q1','Q2','Q3','Q4'],max:[31,54,68,86],min:[58,41,30,21]}
};

const AREAS=[
  {label:'Foresight',value:71,up:true},{label:'Investigación',value:92,up:true},
  {label:'Producto',value:33,up:false},{label:'Datos',value:56,up:true},{label:'Narrativa',value:79,up:true}
];

const COBERTURA=[
  {label:'Universo de usuarios',value:48200,display:'48.2K',note:'Base total del producto en los tres mercados.'},
  {label:'Alcanzados por el tracker',value:21700,display:'21.7K',note:'Con al menos una sesión medida en el trimestre.'},
  {label:'Casos con tratamiento',value:10200,display:'10.2K',note:'Ya en la vía de intervención del lab.'}
];

const AGENDA=[
  {date:'Mar 11 Jul',time:'08:15',title:'Revisión de diagnóstico',where:'Sight lab · Sala 2'},
  {date:'Mar 11 Jul',time:'09:30',title:'Onboarding — Simple Solutions',where:'Remoto'},
  {date:'Mié 12 Jul',time:'14:30',title:'Taller de causa raíz',where:'Cliente'},
  {date:'Vie 15 Jul',time:'16:00',title:'Cierre de tratamiento',where:'Remoto'}
];

function Panel({children,style}){
  return <section style={{background:'var(--surface-card)',padding:'22px 24px',...style}}>{children}</section>;
}
function Eyebrow({children}){
  return <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>{children}</div>;
}

function Tile({combo,label,value,note,onPick,active}){
  return <button onClick={onPick} style={{position:'relative',overflow:'hidden',border:'none',padding:'20px 22px',textAlign:'left',
    cursor:'pointer',background:'var(--surface-card)',outline:active?'3px solid var(--deep-blue-gray)':'none',outlineOffset:-3,
    display:'grid',alignContent:'space-between',minHeight:168,transition:'var(--motion-hover)'}}>
    <AuraField combo={combo} opacity={active?1:0.82}/>
    <div style={{position:'relative',font:'var(--fw-semibold) var(--fs-ui-lg)/1.2 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--deep-blue-gray)'}}>{label}</div>
    <div style={{position:'relative'}}>
      <div style={{font:'var(--fw-extrabold) 44px/1 var(--font-sans)',letterSpacing:'var(--tracking-tight)',color:'var(--deep-blue-gray)'}}>{value}%</div>
      <div style={{marginTop:6,font:'var(--fw-medium) 13px var(--font-sans)',color:'var(--deep-blue-gray)'}}>{note}</div>
    </div>
  </button>;
}

function Dashboard(){
  const [range,setRange]=React.useState('Último mes');
  const [tile,setTile]=React.useState('prioritarias');
  const d=RANGES[range];
  const avg=Math.round(d.max.reduce((a,b)=>a+b,0)/d.max.length);
  return <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 352px',gap:2,background:'var(--border-hairline)',minHeight:'100%'}}>
    <div style={{background:'var(--surface-page)',display:'grid',gap:2,alignContent:'start'}}>
      <header style={{position:'relative',overflow:'hidden',background:'var(--surface-card)',padding:'24px'}}>
        <AuraField combo="amanecer" opacity={0.7} fade="left"/>
        <div style={{position:'relative',display:'flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
          <div style={{width:52,height:52,borderRadius:'50%',background:'var(--deep-blue-gray)',display:'grid',placeItems:'center',flex:'none'}}><EyeMark size={22} tone="lime"/></div>
          <div style={{background:'var(--surface-card)',padding:'10px 16px'}}>
            <div style={{font:'var(--fw-extrabold) 26px/1.1 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>Hola, Kristin</div>
            <div style={{marginTop:4,font:'var(--fw-regular) 14px var(--font-sans)',color:'var(--text-muted)'}}>Diagnóstico en curso · semana 8 de 12</div>
          </div>
          <div style={{marginLeft:'auto',display:'flex',gap:10,alignItems:'center'}}>
            <Badge tone="lime">3 trackers activos</Badge>
            <Button size="sm" variant="primary">Nuevo diagnóstico</Button>
          </div>
        </div>
      </header>
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.02fr) minmax(0,1fr) minmax(0,1fr)',gap:2}}>
        <Panel style={{display:'grid',gap:14,alignContent:'start'}}>
          <Eyebrow>Equipo</Eyebrow>
          <div style={{display:'flex',alignItems:'center',gap:14}}>
            <RingStat value={avg} label="" size={92} thickness={11} tone="pink"/>
            <div>
              <div style={{font:'var(--fw-semibold) 17px/1.25 var(--font-sans)',color:'var(--text-strong)'}}>Kristin Watson</div>
              <div style={{marginTop:4,font:'var(--type-caption)',color:'var(--text-muted)'}}>Design Manager</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <Tag>11 sesiones</Tag><Tag>56 hallazgos</Tag><Tag tone="lime">12 tratamientos</Tag>
          </div>
        </Panel>
        <Tile combo="tile-warm" label="Tareas prioritarias" value={83} note="promedio completado" active={tile==='prioritarias'} onPick={()=>setTile('prioritarias')}/>
        <Tile combo="tile-cool" label="Tareas adicionales" value={56} note="promedio completado" active={tile==='adicionales'} onPick={()=>setTile('adicionales')}/>
      </div>
      <Panel style={{display:'grid',gridTemplateColumns:'auto minmax(0,1fr)',gap:34,alignItems:'center'}}>
        <div>
          <Eyebrow>Cobertura del diagnóstico</Eyebrow>
          <div style={{marginTop:14}}><NestedScale size={244} data={COBERTURA} labels={false}/></div>
        </div>
        <dl style={{margin:0,display:'grid',gap:16}}>
          {COBERTURA.map((c,i)=><div key={c.label} style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:12,alignItems:'start'}}>
            <span aria-hidden="true" style={{width:14,height:14,marginTop:4,flex:'none',background:['var(--pink-100)','var(--pink-200)','var(--pink-paradise)'][i]}}></span>
            <div>
              <dt style={{font:'var(--fw-extrabold) var(--fs-ui-lg)/1.15 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{c.display} · {c.label}</dt>
              <dd style={{margin:'4px 0 0',font:'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',color:'var(--text-body)',maxWidth:'38ch'}}>{c.note}</dd>
            </div>
          </div>)}
        </dl>
      </Panel>
      <Panel style={{display:'grid',gap:18}}>
        <div style={{display:'flex',alignItems:'flex-end',gap:16,flexWrap:'wrap'}}>
          <div>
            <Eyebrow>Analítica de foco</Eyebrow>
            <h2 style={{margin:'8px 0 0',font:'var(--fw-extrabold) 28px/1.1 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>
              El foco <Highlight tone="lime">sube {avg}%</Highlight>
            </h2>
          </div>
          <div style={{marginLeft:'auto',display:'flex',gap:6,background:'var(--surface-sunken)',padding:4,borderRadius:'var(--radius-pill)'}}>
            {Object.keys(RANGES).map(k=><button key={k} onClick={()=>setRange(k)} style={{border:'none',cursor:'pointer',
              padding:'8px 16px',borderRadius:'var(--radius-pill)',transition:'var(--motion-hover)',
              background:range===k?'var(--deep-blue-gray)':'transparent',color:range===k?'var(--text-on-dark)':'var(--text-muted)',
              font:'var(--fw-semibold) 13px var(--font-sans)',letterSpacing:'var(--tracking-micro)'}}>{k}</button>)}
          </div>
        </div>
        <FocusChart data={d} labels={d.labels}/>
      </Panel>
    </div>
    <aside style={{background:'var(--surface-card)',display:'grid',gap:2,alignContent:'start'}}>
      <div style={{padding:'22px 24px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <h3 style={{margin:0,font:'var(--fw-extrabold) 20px/1.2 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>Mi agenda</h3>
          <Badge>Jul</Badge>
        </div>
        <ul style={{listStyle:'none',margin:'16px 0 0',padding:0,display:'grid'}}>
          {AGENDA.map((m,i)=><li key={i} style={{display:'grid',gridTemplateColumns:'86px 1fr',gap:14,padding:'14px 0',
            borderTop:i?'1px solid var(--border-hairline)':'none'}}>
            <div>
              <div style={{font:'var(--fw-semibold) 12px/1.3 var(--font-sans)',color:'var(--text-muted)'}}>{m.date}</div>
              <div style={{marginTop:2,font:'var(--fw-extrabold) 15px/1.2 var(--font-sans)',color:'var(--text-strong)'}}>{m.time}</div>
            </div>
            <div>
              <div style={{font:'var(--fw-semibold) 15px/1.3 var(--font-sans)',color:'var(--text-strong)'}}>{m.title}</div>
              <div style={{marginTop:3,font:'var(--type-caption)',color:'var(--text-muted)'}}>{m.where}</div>
            </div>
          </li>)}
        </ul>
        <div style={{marginTop:14}}><Button size="sm" variant="ghost">Ver toda la agenda →</Button></div>
      </div>
      <div style={{padding:'22px 24px',borderTop:'1px solid var(--border-hairline)'}}>
        <h3 style={{margin:'0 0 4px',font:'var(--fw-extrabold) 20px/1.2 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>Áreas desarrolladas</h3>
        <div style={{font:'var(--type-caption)',color:'var(--text-muted)',marginBottom:16}}>Cobertura del diagnóstico por área</div>
        <BarChart orientation="horizontal" unit="%" data={AREAS.map(a=>({label:a.label,value:a.value,tone:a.up?'pink':'muted'}))}/>
      </div>
      <div style={{position:'relative',overflow:'hidden',padding:'22px 24px',borderTop:'1px solid var(--border-hairline)'}}>
        <AuraField combo="marea" opacity={0.75}/>
        <div style={{position:'relative',background:'var(--surface-card)',padding:'16px 18px'}}>
          <Eyebrow>Siguiente paso</Eyebrow>
          <p style={{margin:'8px 0 14px',font:'var(--fw-medium) 16px/1.35 var(--font-sans)',color:'var(--text-strong)',maxWidth:'26ch'}}>Cerrar la causa raíz de retención antes del viernes.</p>
          <Button size="sm" variant="lime">Abrir tratamiento</Button>
        </div>
      </div>
    </aside>
  </div>;
}

Object.assign(window,{Dashboard});
