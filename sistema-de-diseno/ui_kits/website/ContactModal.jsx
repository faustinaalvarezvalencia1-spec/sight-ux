const {Button,Checkbox}=window.SightDesignSystem_3d4cc7;

/* Contacto como sobrecapa, no como vista: la conversación se abre encima de donde estabas.
   El formulario es una frase con huecos —se escribe dentro del texto, no en una rejilla de
   campos—. Entra con fundido del velo y subida de la hoja; Esc y clic fuera cierran. */
const HOW=['una recomendación','redes','un evento','búsqueda','otro'];

function Blank({value,onChange,placeholder,width=14,options}){
  const common={border:'none',borderBottom:'2px solid var(--pink-paradise)',background:'transparent',
    font:'inherit',color:'var(--text-strong)',letterSpacing:'inherit',padding:'0 4px 2px',
    width:`${width}ch`,outline:'none'};
  if(options)return <select value={value} onChange={e=>onChange(e.target.value)} style={{...common,cursor:'pointer'}}>
    <option value="">{placeholder}</option>
    {options.map(o=><option key={o} value={o}>{o}</option>)}
  </select>;
  return <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={common}/>;
}

function ContactModal({open,subject,onClose}){
  const [f,setF]=React.useState({name:'',company:'',city:'',how:'',email:'',phone:'',about:''});
  const [ok,setOk]=React.useState(false);
  const [agree,setAgree]=React.useState(false);
  const set=(k,v)=>setF(s=>({...s,[k]:v}));
  React.useEffect(()=>{if(open){setOk(false);setF(s=>({...s,about:subject||s.about}));}},[open,subject]);
  React.useEffect(()=>{
    const k=e=>{if(e.key==='Escape')onClose();};
    if(open)window.addEventListener('keydown',k);
    document.body.style.overflow=open?'hidden':'';
    return ()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';};
  },[open,onClose]);
  const ready=f.name&&f.email&&agree;
  return <div aria-hidden={!open} style={{position:'fixed',inset:0,zIndex:60,pointerEvents:open?'auto':'none'}}>
    <div onClick={onClose} style={{position:'absolute',inset:0,background:'color-mix(in srgb, var(--deep-blue-gray) 62%, transparent)',
      opacity:open?1:0,transition:'opacity 420ms ease'}}></div>
    <div role="dialog" aria-modal="true" style={{position:'absolute',inset:0,overflowY:'auto',display:'grid',placeItems:'start center',padding:'56px 24px'}}>
      <div onClick={e=>e.stopPropagation()} style={{width:'min(860px,100%)',background:'var(--surface-page)',padding:'56px 60px',
        transform:open?'none':'translateY(34px)',opacity:open?1:0,
        transition:'transform 520ms cubic-bezier(.2,.8,.2,1), opacity 420ms ease'}}>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button onClick={onClose} aria-label="Cerrar" style={{border:'none',background:'none',cursor:'pointer',
            font:'var(--fw-regular) 24px/1 var(--font-sans)',color:'var(--text-muted)'}}>✕</button>
        </div>
        {ok
          ? <div style={{padding:'40px 0 24px'}}>
              <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>Recibido</div>
              <h2 style={{margin:'16px 0 0',font:'var(--fw-semibold) var(--fs-subtitle)/1.1 var(--font-sans)',letterSpacing:'-0.04em',color:'var(--text-strong)'}}>Gracias, {f.name.split(' ')[0]}.</h2>
              <p style={{margin:'18px 0 32px',font:'var(--fw-light) var(--fs-body)/1.4 var(--font-sans)',color:'var(--text-body)',maxWidth:'44ch'}}>Respondemos en menos de un día hábil con dos horarios para la primera conversación.</p>
              <Button onClick={onClose}>Volver al sitio</Button>
            </div>
          : <>
            <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>Hablemos</div>
            <h2 style={{margin:'14px 0 40px',font:'var(--fw-semibold) var(--fs-subtitle)/1.08 var(--font-sans)',letterSpacing:'-0.04em',color:'var(--text-strong)'}}>Quiero sus servicios</h2>
            <p style={{margin:0,font:'var(--fw-light) var(--fs-body)/2.1 var(--font-sans)',color:'var(--text-body)'}}>
              Mi nombre es <Blank value={f.name} onChange={v=>set('name',v)} placeholder="nombre" width={16}/> de la empresa <Blank value={f.company} onChange={v=>set('company',v)} placeholder="empresa" width={16}/>,
              ubicada en <Blank value={f.city} onChange={v=>set('city',v)} placeholder="ciudad" width={13}/> y conocí sight por <Blank value={f.how} onChange={v=>set('how',v)} placeholder="cómo nos conociste" width={19} options={HOW}/>.
              Mi email es <Blank value={f.email} onChange={v=>set('email',v)} placeholder="email" width={20}/> y mi celular <Blank value={f.phone} onChange={v=>set('phone',v)} placeholder="celular" width={14}/>.
            </p>
            <div style={{marginTop:36}}>
              <label style={{display:'block',font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:12}}>Quiero conversar sobre…</label>
              <textarea value={f.about} onChange={e=>set('about',e.target.value)} rows={3}
                style={{width:'100%',border:'1px solid var(--border-hairline)',background:'var(--surface-card)',padding:'14px 16px',
                  font:'var(--fw-regular) var(--fs-ui)/1.5 var(--font-sans)',letterSpacing:'var(--tracking)',color:'var(--text-strong)',resize:'vertical',outline:'none'}}/>
            </div>
            <div style={{marginTop:24}}><Checkbox checked={agree} onChange={setAgree} label="Acepto el aviso de privacidad."/></div>
            <div style={{marginTop:32,display:'flex',gap:14,alignItems:'center'}}>
              <Button size="lg" disabled={!ready} onClick={()=>setOk(true)}>Enviar mensaje</Button>
              <span style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>Nombre, email y aviso de privacidad para habilitar el envío.</span>
            </div>
          </>}
      </div>
    </div>
  </div>;
}
Object.assign(window,{ContactModal});
