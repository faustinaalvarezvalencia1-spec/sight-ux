const {Button,Wordmark,Divider,EyeMark}=window.SightDesignSystem_3d4cc7;

/* Revelado al entrar en viewport: el sitio se arma por bloques a medida que se baja.
   Una sola transición —subida corta + fundido— reutilizada en todas las secciones,
   con retardo opcional para escalonar hijos. Respeta prefers-reduced-motion. */
function Reveal({children,delay=0,y=28,as='div',style}){
  const ref=React.useRef(null);
  const [seen,setSeen]=React.useState(false);
  React.useEffect(()=>{
    const el=ref.current;
    if(!el)return;
    if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){setSeen(true);return;}
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setSeen(true);io.disconnect();}},{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
    io.observe(el);
    return ()=>io.disconnect();
  },[]);
  return React.createElement(as,{ref,style:{opacity:seen?1:0,transform:seen?'none':`translateY(${y}px)`,
    transition:'opacity 760ms cubic-bezier(.2,.8,.2,1), transform 760ms cubic-bezier(.2,.8,.2,1)',
    transitionDelay:`${delay}ms`,...style}},children);
}

/* Nav fija: marca a la izquierda, vistas al centro, llamada a la acción a la derecha.
   Se condensa al bajar (menos alto, hairline visible) y marca la vista activa. */
function Nav({page,go,onContact}){
  const [dense,setDense]=React.useState(false);
  React.useEffect(()=>{
    const s=()=>setDense(window.scrollY>24);
    s();window.addEventListener('scroll',s,{passive:true});
    return ()=>window.removeEventListener('scroll',s);
  },[]);
  const items=[['home','Inicio'],['about','Sobre nosotros'],['services','Servicios'],['work','Proyectos']];
  const pick=k=>{
    if(k==='services'){
      if(page!=='home')go('home');
      requestAnimationFrame(()=>{
        const el=document.getElementById('servicios');
        if(el)window.scrollTo({top:el.offsetTop-80,behavior:'smooth'});
      });
      return;
    }
    go(k);
  };
  return <header style={{position:'fixed',top:0,left:0,right:0,zIndex:40,
    background:dense?'color-mix(in srgb, var(--surface-page) 88%, transparent)':'transparent',
    backdropFilter:dense?'blur(14px)':'none',
    borderBottom:dense?'1px solid var(--border-hairline)':'1px solid transparent',
    transition:'background 360ms ease, border-color 360ms ease, padding 360ms ease',
    padding:dense?'12px 0':'22px 0'}}>
    <div style={{maxWidth:'var(--page-max)',margin:'0 auto',padding:'0 32px',display:'flex',alignItems:'center',gap:32}}>
      <a href="#" onClick={e=>{e.preventDefault();go('home');}} style={{textDecoration:'none',display:'flex',alignItems:'center',gap:10}}>
        <EyeMark size={20}/><Wordmark lockup="sight lab" size={22}/>
      </a>
      <nav style={{marginLeft:'auto',display:'flex',gap:30}}>{items.map(([k,l])=>
        <a key={k} href="#" onClick={e=>{e.preventDefault();pick(k);}}
          style={{textDecoration:'none',position:'relative',paddingBottom:4,
            font:'var(--fw-medium) var(--fs-ui)/1 var(--font-sans)',letterSpacing:'var(--tracking-micro)',
            color:page===k?'var(--text-accent)':'var(--text-strong)',transition:'color 220ms ease'}}>
          {l}
          <span aria-hidden="true" style={{position:'absolute',left:0,right:0,bottom:0,height:2,background:'var(--pink-paradise)',
            transformOrigin:'left center',transform:`scaleX(${page===k?1:0})`,transition:'transform 320ms cubic-bezier(.2,.8,.2,1)'}}></span>
        </a>)}</nav>
      <Button size="sm" onClick={onContact}>Contáctanos</Button>
    </div>
  </header>;
}

function Footer({onContact}){
  return <footer style={{background:'var(--surface-dark)',color:'var(--text-on-dark)',padding:'72px 32px 40px'}}>
    <div style={{maxWidth:'var(--page-max)',margin:'0 auto'}}>
      <Wordmark lockup="sight lab" size={34} color="var(--coconut-milk)"/>
      <div style={{height:28}}></div>
      <Divider tone="lime"/>
      <div style={{marginTop:24,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:24,
        font:'var(--fw-light) var(--fs-ui)/1.5 var(--font-sans)'}}>
        <span style={{maxWidth:'40ch'}}>Laboratorio de diseño estratégico. Diagnosticamos, fortalecemos y proyectamos la salud de una marca.</span>
        <a href="#" onClick={e=>{e.preventDefault();onContact&&onContact();}} style={{color:'var(--light-lime)'}}>hola@sight.lab</a>
        <span>Ciudad de México</span>
      </div>
      <div style={{marginTop:32,font:'var(--type-caption)',color:'var(--ink-300)'}}>© 2026 sight lab · Laboratorio de diseño estratégico</div>
    </div>
  </footer>;
}

const Section=({children,surface='var(--surface-page)',color='var(--text-body)',pad=112,id,style})=>
  <section id={id} style={{background:surface,color,padding:`${pad}px 32px`,...style}}>
    <div style={{maxWidth:'var(--page-max)',margin:'0 auto'}}>{children}</div></section>;

Object.assign(window,{Reveal,Nav,Footer,Section});
