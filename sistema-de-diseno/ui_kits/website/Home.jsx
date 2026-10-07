const {Button,Tag,Marquee,SectionHeading,AuraField,Highlight,EyeMark,Divider}=window.SightDesignSystem_3d4cc7;

const NEEDS=['Entender a mi consumidor.','Encontrar mi mercado.','Sostener el precio.','Ordenar mi portafolio.','Anticipar el próximo ciclo.','Recuperar vigencia.','Explicar la marca al retail.','Cerrar los vacíos del sistema.','Dirigir mejor al equipo.'];

const SERVICES=[
  {group:'Foresight\n& tendencias',items:[
    {title:'Diseño de futuros',note:'Escenarios a largo plazo para que la marca lidere el ciclo en lugar de reaccionar a él.'},
    {title:'Cambios de comportamiento',note:'Detectamos el giro del usuario antes de que se vuelva masivo y lo volvemos brújula comercial.'},
    {title:'Análisis de tendencias',note:'Traducimos corrientes culturales y de consumo en oportunidades accionables por sector.'}
  ]},
  {group:'Mercado\n& crecimiento',items:[
    {title:'Oportunidades de mercado',note:'Dimensionamos el potencial real del negocio y hacia dónde se puede expandir con seguridad.'},
    {title:'Canales de crecimiento',note:'Trazamos la ruta donde el cliente ideal realmente interactúa, compra y vuelve.'},
    {title:'Diseño de portafolio',note:'Estructuramos la oferta para que sea coherente, rentable y fácil de explicar.'}
  ]},
  {group:'Experiencia\n& producto',items:[
    {title:'Experiencia de usuario',note:'Mapeamos el recorrido para quitar fricción y que cada punto de contacto respire la marca.'},
    {title:'Estrategia de producto digital',note:'Plataformas y ecosistemas que responden a la dinámica del negocio, no a la moda técnica.'}
  ]}
];

const PROCESS=[
  ['01','Observar','Miramos con atención el detalle. Escuchamos lo que dicen —y lo que no— los datos.'],
  ['02','Interpretar','Encontramos la verdad detrás del dato. Información convertida en causa raíz.'],
  ['03','Proyectar','Diseñamos el plan: rutas con criterio y visión de largo plazo.'],
  ['04','Accionar','Acompañamos la implementación hasta que el resultado se mide.']
];

const ALLIES=['bukzel','perpetuo socorro','empathy','weedgreen','tx4','norte'];

/* Portada: eyebrow, titular a dos líneas, párrafo y dos llamadas. El aura entra detrás y
   el texto se apoya en papel plano. La cortinilla de palabras cierra el bloque. */
function Hero({go,onContact}){
  return <section style={{position:'relative',overflow:'hidden',background:'var(--surface-page)',padding:'184px 32px 0'}}>
    <AuraField combo="amanecer" opacity={0.6} fade="bottom"/>
    <div style={{position:'relative',maxWidth:'var(--page-max)',margin:'0 auto'}}>
      <Reveal><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)',marginBottom:24}}>Laboratorio de diseño estratégico</div></Reveal>
      <Reveal delay={90}><h1 style={{margin:0,font:'var(--fw-semibold) var(--fs-display)/1.06 var(--font-sans)',letterSpacing:'-0.045em',color:'var(--text-strong)',maxWidth:'20ch',textWrap:'pretty'}}>Convertimos incertidumbre en <Highlight tone="lime">decisiones</Highlight> que mueven el negocio.</h1></Reveal>
      <Reveal delay={180}><p style={{margin:'36px 0 0',font:'var(--fw-light) var(--fs-body)/1.4 var(--font-sans)',color:'var(--text-body)',maxWidth:'50ch'}}>Traducimos la complejidad de un negocio en decisiones claras, para construir marcas longevas, relevantes y capaces de adaptarse.</p></Reveal>
      <Reveal delay={260}><div style={{display:'flex',gap:16,marginTop:44,flexWrap:'wrap'}}>
        <Button size="lg" onClick={onContact}>Hablemos</Button>
        <Button size="lg" variant="outline" onClick={()=>{const el=document.getElementById('servicios');if(el)window.scrollTo({top:el.offsetTop-80,behavior:'smooth'});}}>Ver servicios</Button>
      </div></Reveal>
      <div style={{height:112}}></div>
    </div>
    <Marquee tone="lime" speed={38} items={['expansión','ideación','evolución','anticipación','innovación','certidumbre','dirección','adaptabilidad']}/>
  </section>;
}

/* Necesidades: el visitante se reconoce en una frase antes de leer la oferta.
   Cada línea es una pieza clicable que abre el contacto con ese asunto. */
function Needs({onContact}){
  const [hot,setHot]=React.useState(null);
  return <Section pad={112}>
    <Reveal><SectionHeading level="title" eyebrow="Nos conectamos con tu necesidad real">Ayúdame a…</SectionHeading></Reveal>
    <div style={{height:48}}></div>
    <div style={{display:'flex',flexWrap:'wrap',gap:14}}>
      {NEEDS.map((t,i)=><Reveal key={t} delay={i*45}>
        <button onClick={()=>onContact(t)} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(null)}
          style={{border:'1px solid var(--border-hairline)',background:hot===i?'var(--pink-paradise)':'var(--surface-card)',
            color:hot===i?'var(--text-on-accent)':'var(--text-strong)',cursor:'pointer',
            padding:'16px 22px',font:'var(--fw-medium) var(--fs-ui-lg)/1.2 var(--font-sans)',letterSpacing:'var(--tracking)',
            transform:hot===i?'translateY(-2px)':'none',transition:'var(--motion-hover)'}}>{t}</button>
      </Reveal>)}
    </div>
  </Section>;
}

/* Servicios: tres grupos en acordeón. Uno abierto a la vez; el cuerpo se despliega por
   altura medida para que la transición sea real y no un salto. */
function Services(){
  const [open,setOpen]=React.useState(0);
  return <Section id="servicios" surface="var(--surface-warm)" color="var(--text-strong)">
    <Reveal><SectionHeading level="title" eyebrow="Qué hacemos">Nuestros servicios</SectionHeading></Reveal>
    <div style={{height:48}}></div>
    <div>
      {SERVICES.map((s,i)=><Reveal key={s.group} delay={i*80}>
        <Group data={s} open={open===i} onToggle={()=>setOpen(open===i?-1:i)}/>
      </Reveal>)}
    </div>
  </Section>;
}

function Group({data,open,onToggle}){
  const body=React.useRef(null);
  const [h,setH]=React.useState(0);
  React.useEffect(()=>{
    const measure=()=>setH(body.current?body.current.scrollHeight:0);
    measure();
    const ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(measure):null;
    if(ro&&body.current)ro.observe(body.current);
    return ()=>{if(ro)ro.disconnect();};
  },[]);
  return <div style={{borderTop:'1px solid var(--border-strong)'}}>
    <button onClick={onToggle} style={{width:'100%',border:'none',background:'none',cursor:'pointer',textAlign:'left',
      padding:'30px 0',display:'flex',alignItems:'center',gap:24}}>
      <span style={{flex:1,whiteSpace:'pre-line',font:'var(--fw-semibold) var(--fs-subtitle)/1.1 var(--font-sans)',
        letterSpacing:'var(--tracking)',color:open?'var(--text-accent)':'var(--text-strong)',transition:'color 260ms ease'}}>{data.group.replace('\n',' ')}</span>
      <span aria-hidden="true" style={{position:'relative',width:26,height:26,flex:'none',
        transform:`rotate(${open?135:0}deg)`,transition:'transform 420ms cubic-bezier(.2,.8,.2,1)'}}>
        <span style={{position:'absolute',left:0,right:0,top:'50%',height:2,marginTop:-1,background:'var(--text-strong)'}}></span>
        <span style={{position:'absolute',top:0,bottom:0,left:'50%',width:2,marginLeft:-1,background:'var(--text-strong)'}}></span>
      </span>
    </button>
    <div style={{overflow:'hidden',height:open?h:0,opacity:open?1:0,
      transition:'height 520ms cubic-bezier(.2,.8,.2,1), opacity 380ms ease'}}>
      <div ref={body} style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:32,paddingBottom:40}}>
        {data.items.map(it=><div key={it.title}>
          <h4 style={{margin:0,font:'var(--fw-semibold) var(--fs-ui-lg)/1.25 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{it.title}</h4>
          <p style={{margin:'12px 0 0',font:'var(--fw-regular) var(--fs-body-sm)/1.55 var(--font-sans)',color:'var(--text-body)',maxWidth:'34ch'}}>{it.note}</p>
        </div>)}
      </div>
    </div>
  </div>;
}

function Allies(){
  return <Section pad={88}>
    <Reveal><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>Alianzas que respaldan la visión</div></Reveal>
    <div style={{height:32}}></div>
    <Reveal delay={90}><div style={{display:'flex',flexWrap:'wrap',gap:'22px 56px',alignItems:'center'}}>
      {ALLIES.map(a=><span key={a} style={{font:'var(--fw-semibold) 22px/1 var(--font-sans)',letterSpacing:'var(--tracking)',
        color:'var(--ink-300)',textTransform:'lowercase'}}>{a}</span>)}
    </div></Reveal>
  </Section>;
}

/* Proceso: cuatro pasos numerados. Entran escalonados y la regla superior se dibuja. */
function Process(){
  return <Section surface="var(--surface-sunken)" color="var(--text-strong)">
    <Reveal><SectionHeading level="title" eyebrow="Nuestro proceso">Un camino sin atajos</SectionHeading></Reveal>
    <div style={{height:56}}></div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:32}}>
      {PROCESS.map(([n,t,note],i)=><Reveal key={n} delay={i*110}>
        <div style={{borderTop:'2px solid var(--pink-paradise)',paddingTop:20}}>
          <div style={{font:'var(--fw-extrabold) 44px/1 var(--font-sans)',letterSpacing:'var(--tracking-tight)',color:'var(--pink-paradise)'}}>{n}</div>
          <h3 style={{margin:'18px 0 0',font:'var(--fw-semibold) var(--fs-ui-lg)/1.2 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{t}</h3>
          <p style={{margin:'10px 0 0',font:'var(--fw-regular) var(--fs-body-sm)/1.55 var(--font-sans)',color:'var(--text-body)',maxWidth:'30ch'}}>{note}</p>
        </div>
      </Reveal>)}
    </div>
  </Section>;
}

function Closing({onContact}){
  return <section style={{position:'relative',overflow:'hidden',background:'var(--surface-page)',padding:'128px 32px'}}>
    <AuraField combo="prisma" opacity={0.7} fade="top"/>
    <div style={{position:'relative',maxWidth:'var(--page-max)',margin:'0 auto'}}>
      <Reveal><div style={{background:'var(--surface-page)',display:'inline-block',padding:'32px 36px',maxWidth:'44ch'}}>
        <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>¿Listos para el siguiente paso?</div>
        <h2 style={{margin:'16px 0 0',font:'var(--fw-semibold) var(--fs-title)/1.08 var(--font-sans)',letterSpacing:'-0.04em',color:'var(--text-strong)'}}>Para. Hablemos.</h2>
        <p style={{margin:'20px 0 0',font:'var(--fw-light) var(--fs-body)/1.4 var(--font-sans)',color:'var(--text-body)'}}>Sin presentaciones eternas ni propuestas de cuarenta páginas. Una conversación honesta para ver si encajamos.</p>
        <div style={{marginTop:32}}><Button size="lg" onClick={()=>onContact()}>Contáctanos</Button></div>
      </div></Reveal>
    </div>
  </section>;
}

function Home({go,onContact}){
  return <>
    <Hero go={go} onContact={()=>onContact()}/>
    <Needs onContact={onContact}/>
    <Services/>
    <Allies/>
    <Process/>
    <Closing onContact={onContact}/>
  </>;
}
Object.assign(window,{Home});
