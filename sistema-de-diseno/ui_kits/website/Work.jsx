const {Button,AuraField,NestedScale,Highlight}=window.SightDesignSystem_3d4cc7;

const MARKET=[
  {label:'Mercado total',value:34.5,display:'$34.5M',note:'Marcas que necesitan un diagnóstico antes de invertir.'},
  {label:'Mercado atendible',value:25.6,display:'$25.6M',note:'Las que ya tienen equipo y datos para sostener el tratamiento.'},
  {label:'Alcanzable a 12 meses',value:21.2,display:'$21.2M',note:'Lo que el lab puede tomar con la capacidad actual.'}
];

/* Proyectos: la vista intermedia mientras no hay casos publicados. Misma estructura que
   las demás —portada, un bloque de contenido, cierre— para que la navegación no se rompa. */
function Work({onContact}){
  return <>
    <section style={{position:'relative',overflow:'hidden',background:'var(--surface-page)',padding:'184px 32px 96px'}}>
      <AuraField combo="crema-lime" fade="bottom"/>
      <div style={{position:'relative',maxWidth:'var(--page-max)',margin:'0 auto'}}>
        <Reveal><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)',marginBottom:24}}>Portafolio</div></Reveal>
        <Reveal delay={90}><h1 style={{margin:0,font:'var(--fw-semibold) var(--fs-display)/1.06 var(--font-sans)',letterSpacing:'-0.045em',color:'var(--text-strong)',maxWidth:'16ch'}}>Próxima mente.</h1></Reveal>
        <Reveal delay={180}><p style={{margin:'36px 0 0',font:'var(--fw-light) var(--fs-body)/1.4 var(--font-sans)',color:'var(--text-body)',maxWidth:'50ch'}}>Estamos preparando los casos que muestran cómo se convierte la complejidad en resultado concreto. Mientras tanto, esto es lo que medimos antes de empezar.</p></Reveal>
      </div>
    </section>

    <Section pad={104}>
      <Reveal><div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:12}}>Tamaño de la oportunidad</div>
        <h2 style={{margin:'0 0 44px',font:'var(--fw-semibold) var(--fs-subtitle)/1.1 var(--font-sans)',letterSpacing:'-0.04em',color:'var(--text-strong)'}}>Tres círculos, <Highlight tone="lime">una decisión</Highlight></h2>
        <NestedScale size={340} data={MARKET}/>
      </div></Reveal>
    </Section>

    <Section surface="var(--surface-sunken)" color="var(--text-strong)" pad={96}>
      <Reveal><div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:32,flexWrap:'wrap'}}>
        <h2 style={{margin:0,font:'var(--fw-semibold) var(--fs-subtitle)/1.1 var(--font-sans)',letterSpacing:'-0.04em',color:'var(--text-strong)',maxWidth:'24ch'}}>¿Quieres ser el primer caso publicado?</h2>
        <Button size="lg" onClick={()=>onContact()}>Contáctanos</Button>
      </div></Reveal>
    </Section>
  </>;
}
Object.assign(window,{Work});
