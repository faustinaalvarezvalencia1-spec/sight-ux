const {SectionHeading,AuraField,PhotoFrame,Highlight,Tag}=window.SightDesignSystem_3d4cc7;

const TEAM=[
  ['F','Faustina','Observación consciente','Ve lo que otros pasan por alto.'],
  ['N','Natalina','Ecuanimidad libre','Mantiene el equilibrio en la tormenta.'],
  ['A','Alexandra','Amor inteligente','Conecta el dato con lo humano.'],
  ['V','Valentina','Liderazgo curioso','Siempre preguntando por qué.'],
  ['I','Isabella','Creatividad empática','Diseña pensando en el otro.']
];

function About(){
  return <>
    <section style={{position:'relative',overflow:'hidden',background:'var(--surface-page)',padding:'184px 32px 96px'}}>
      <AuraField combo="crema-cool" fade="bottom"/>
      <div style={{position:'relative',maxWidth:'var(--page-max)',margin:'0 auto'}}>
        <Reveal><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)',marginBottom:24}}>Quiénes somos</div></Reveal>
        <Reveal delay={90}><h1 style={{margin:0,font:'var(--fw-semibold) var(--fs-display)/1.06 var(--font-sans)',letterSpacing:'-0.045em',color:'var(--text-strong)',maxWidth:'18ch'}}>Diseño que mueve negocios.</h1></Reveal>
        <Reveal delay={180}><p style={{margin:'36px 0 0',font:'var(--fw-light) var(--fs-body)/1.4 var(--font-sans)',color:'var(--text-body)',maxWidth:'54ch'}}>Trabajamos desde el diseño estratégico y la experiencia de usuario para volver la incertidumbre de un negocio en ventaja medible. <Highlight tone="lime">No hacemos decoración: hacemos decisiones.</Highlight></p></Reveal>
      </div>
    </section>

    <Section pad={96}>
      <Reveal><div style={{display:'grid',gridTemplateColumns:'minmax(0,1.1fr) minmax(0,1fr)',gap:56,alignItems:'center'}}>
        <PhotoFrame src="../../assets/photo-sample.png" alt="Equipo de sight lab en sesión de trabajo" ratio="4 / 3"/>
        <div>
          <SectionHeading level="subtitle" eyebrow="Cómo trabajamos">Sesión, no entrega</SectionHeading>
          <p style={{margin:'24px 0 0',font:'var(--fw-regular) var(--fs-body-sm)/1.6 var(--font-sans)',color:'var(--text-body)',maxWidth:'40ch'}}>El diagnóstico se construye contigo: mesa, datos a la vista y decisiones firmadas al cierre de cada sesión.</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:24}}>
            {['Diagnóstico','Causa raíz','Tratamiento','Resultado'].map(t=><Tag key={t} tone="quiet">{t}</Tag>)}
          </div>
        </div>
      </div></Reveal>
    </Section>

    <Section surface="var(--surface-warm)" color="var(--text-strong)" pad={104}>
      <Reveal><SectionHeading level="title" eyebrow="Las personas detrás">Corazón, cerebro y curiosidad.</SectionHeading></Reveal>
      <div style={{height:52}}></div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,minmax(0,1fr))',gap:20}}>
        {TEAM.map(([ini,name,trait,note],i)=><Reveal key={name} delay={i*90}>
          <Person ini={ini} name={name} trait={trait} note={note}/>
        </Reveal>)}
      </div>
    </Section>
  </>;
}

function Person({ini,name,trait,note}){
  const [hot,setHot]=React.useState(false);
  return <div onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
    style={{background:'var(--surface-card)',padding:'24px 22px',
      transform:hot?'translateY(-4px)':'none',transition:'var(--motion-hover)'}}>
    <div style={{width:56,height:56,borderRadius:'50%',background:hot?'var(--pink-paradise)':'var(--pink-100)',
      color:hot?'var(--text-on-accent)':'var(--deep-blue-gray)',display:'grid',placeItems:'center',
      font:'var(--fw-extrabold) 22px/1 var(--font-sans)',transition:'var(--motion-hover)'}}>{ini}</div>
    <h3 style={{margin:'18px 0 0',font:'var(--fw-semibold) var(--fs-ui-lg)/1.2 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)'}}>{name}</h3>
    <div style={{marginTop:6,font:'var(--type-caption)',color:'var(--text-accent)'}}>{trait}</div>
    <p style={{margin:'12px 0 0',font:'var(--fw-regular) var(--fs-caption)/1.5 var(--font-sans)',color:'var(--text-body)'}}>{note}</p>
  </div>;
}

Object.assign(window,{About});
