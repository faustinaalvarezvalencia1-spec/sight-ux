# Genera 8 imágenes por infoproducto con el sistema de diseño de sight.
# Uso: python3 generar.py  (escribe HTML en _fuente/html y PNG en cada carpeta de producto)
import os, subprocess, html

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(BASE)
HTML_DIR = os.path.join(BASE, 'html')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
S = 1600

C = {
    'pink': '#ff4864', 'salmon': '#ff7c6f', 'lime': '#e2fa83', 'ink': '#2f3440',
    'salt': '#cffffd', 'coconut': '#f4efe6', 'paper': '#fafafa', 'pink200': '#ffb6c0',
    'pink100': '#ffe3e8', 'lime100': '#f5fdd6', 'lime300': '#ecfcb0', 'blue': '#ade6e6',
    'postit_pink': '#ff9db0', 'muted': '#6b7080', 'hair': '#e6e7e9',
}

# Superficie principal, texto, forma y resaltado por producto (pares validados del manual p.30)
PRODUCTS = [
    dict(
        slug='reporte-tendencias-2027', bg='pink', fg='#ffffff', shape='lime', mark='lime', logo='paper', eye='ink',
        eyebrow='Reporte de tendencias · 2027',
        title='Consumo y <hl>cultura</hl> 2027',
        sub='Las corrientes que van a mover a las marcas, traducidas en oportunidades por sector.',
        includes=[('12 tendencias', 'Con señales, evidencia y horizonte de tiempo.'),
                  ('Implicaciones', 'Para marca, portafolio y experiencia.'),
                  ('Lienzo de priorización', 'Para decidir con tu equipo por dónde empezar.')],
        stats=[('12', 'tendencias'), ('3', 'horizontes de tiempo'), ('1', 'lienzo de priorización')],
        quote='Una tendencia no es una moda: es una señal que se repite hasta volverse <hl>decisión</hl>.',
        notes=['¿Qué cambia en mi categoría?', '¿Qué señal llegó para quedarse?', '¿Dónde crecer primero?', '¿Qué dejo de hacer?'],
        track=('proceso', [('Observar', 'Señales en consumo, cultura y tecnología.'), ('Interpretar', 'La causa detrás de cada tendencia.'),
                           ('Proyectar', 'Horizontes de corto, medio y largo plazo.'), ('Accionar', 'Implicaciones concretas para tu marca.')]),
        who='Equipos de marca, estrategia e innovación',
    ),
    dict(
        slug='radar-senales-retail', bg='salmon', fg='#2f3440', shape='lime', mark='lime', logo='ink', eye='ink',
        eyebrow='Radar de señales',
        title='Retail en <hl>Latinoamérica</hl>',
        sub='Lo que cambia en el punto de venta antes de que se vuelva masivo.',
        includes=[('30 señales tempranas', 'Clasificadas por impacto en formato, hábito y expectativa.'),
                  ('Casos en movimiento', 'Marcas de la región que ya se están adaptando.'),
                  ('Preguntas clave', 'Para tu próxima decisión de canal.')],
        stats=[('30', 'señales tempranas'), ('3', 'niveles de impacto'), ('1', 'matriz de decisión de canal')],
        quote='El punto de venta cambia <hl>antes</hl> de que cambien las cifras.',
        notes=['¿Qué formato viene?', '¿Dónde compra hoy mi cliente?', '¿Qué espera en tienda?', '¿Qué canal priorizo?'],
        track=('diagnostico', [('Síntoma', 'Las ventas en tienda se estancan.'), ('Causa raíz', 'El cliente cambió de hábito antes que la marca.'),
                               ('Tratamiento', 'Señales para rediseñar formato y canal.'), ('Resultado', 'Decisiones de canal con evidencia.')]),
        who='Equipos comerciales, de retail y de marca',
    ),
    dict(
        slug='mapa-consumidor-gen-z', bg='lime', fg='#2f3440', shape='pink', mark='pink200', logo='ink', eye='paper',
        eyebrow='Mapa de comportamiento',
        title='Mapa del consumidor <hl>Gen Z</hl>',
        sub='Cómo decide, compra y se relaciona con las marcas la generación que redefine el consumo.',
        includes=[('Arquetipos', 'Comportamientos y motivaciones que mueven su decisión.'),
                  ('Recorrido de compra', 'Con los momentos críticos donde se gana o se pierde.'),
                  ('Recomendaciones', 'Para comunicación y producto.')],
        stats=[('5', 'arquetipos de comportamiento'), ('4', 'momentos críticos'), ('1', 'recorrido de compra')],
        quote='No es una generación difícil: es una generación que decide <hl>distinto</hl>.',
        notes=['¿Cómo descubre marcas?', '¿En quién confía?', '¿Qué la hace volver?', '¿Qué la aleja?'],
        track=('proceso', [('Observar', 'Cómo se informa, compara y compra.'), ('Interpretar', 'Qué motiva cada decisión.'),
                           ('Proyectar', 'Cómo va a evolucionar su consumo.'), ('Accionar', 'Qué ajustar en mensaje y producto.')]),
        who='Equipos de marca, producto y comunicación',
    ),
    dict(
        slug='kit-autodiagnostico-marca', bg='ink', fg='#fafafa', shape='lime', mark='lime', logo='paper', eye='ink',
        eyebrow='Herramientas del laboratorio',
        title='Kit de <hl>autodiagnóstico</hl> de marca',
        sub='Las herramientas que usamos para encontrar la causa raíz, listas para tu equipo.',
        includes=[('Cuestionario de síntomas', 'Y matriz de causa raíz para una primera lectura.'),
                  ('Plantillas editables', 'Mapa de portafolio y recorrido del cliente.'),
                  ('Guía de lectura', 'Para interpretar resultados y priorizar.')],
        stats=[('1', 'cuestionario de síntomas'), ('1', 'matriz de causa raíz'), ('2', 'plantillas editables')],
        quote='Antes de tratar el síntoma, hay que encontrar la <hl>causa raíz</hl>.',
        notes=['Síntoma → causa raíz', '¿Qué dice el cliente?', '¿Qué dicen los datos?', '¿Por dónde empiezo?'],
        track=('diagnostico', [('Síntoma', 'Lo que tu equipo nota: el cuestionario lo ordena.'), ('Causa raíz', 'La matriz separa causa de consecuencia.'),
                               ('Tratamiento', 'Las plantillas aterrizan las decisiones.'), ('Resultado', 'Prioridades claras para actuar.')]),
        who='Líderes de marca y equipos internos',
    ),
    dict(
        slug='guia-portafolio-rentable', bg='coconut', fg='#2f3440', shape='pink', mark='lime', logo='ink', eye='paper',
        eyebrow='Guía práctica',
        title='Portafolio <hl>rentable</hl> en 5 pasos',
        sub='Un método para ordenar tu oferta y hacerla coherente, rentable y fácil de explicar.',
        includes=[('Auditoría', 'Cómo leer el portafolio que tienes hoy.'),
                  ('Criterios de decisión', 'Cuándo simplificar, crecer o retirar un producto.'),
                  ('Ejercicios', 'Casos y ejemplos para aplicar cada paso.')],
        stats=[('5', 'pasos'), ('3', 'criterios de decisión'), ('1', 'auditoría de portafolio')],
        quote='Un portafolio <hl>claro</hl> se explica en una frase y se vende en una conversación.',
        notes=['¿Qué producto sobra?', '¿Cuál sostiene el margen?', '¿Qué falta?', '¿Cómo se explica?'],
        track=('pasos', [('Auditar', 'Qué tienes y cómo rinde.'), ('Clasificar', 'Roles de cada producto.'), ('Decidir', 'Simplificar, crecer o retirar.'),
                         ('Ordenar', 'Una oferta fácil de explicar.'), ('Medir', 'Indicadores para sostenerla.')]),
        who='Dueños de negocio y equipos comerciales',
    ),
    dict(
        slug='reporte-marcas-longevas', bg='salt', fg='#2f3440', shape='pink', mark='lime', logo='ink', eye='paper',
        eyebrow='Reporte',
        title='Marcas <hl>longevas</hl>',
        sub='Qué hacen distinto las marcas que siguen vigentes, y cómo anticiparse en vez de reaccionar.',
        includes=[('Patrones', 'De marcas longevas, relevantes y adaptables.'),
                  ('Señales de alerta', 'Para detectar a tiempo la pérdida de vigencia.'),
                  ('Hoja de ruta', 'Para tomar decisiones de largo plazo.')],
        stats=[('3', 'patrones de vigencia'), ('1', 'lista de señales de alerta'), ('1', 'hoja de ruta')],
        quote='Ninguna marca debería esperar a estar en crisis para tomarse en serio su <hl>longevidad</hl>.',
        notes=['¿Sigo siendo relevante?', '¿Qué señal estoy ignorando?', '¿Qué debe permanecer?', '¿Qué debe cambiar?'],
        track=('diagnostico', [('Síntoma', 'La marca deja de conectar.'), ('Causa raíz', 'Se dejó de leer el contexto.'),
                               ('Tratamiento', 'Decisiones que protegen la vigencia.'), ('Resultado', 'Una marca que se adapta sin perderse.')]),
        who='Marcas establecidas que quieren seguir vigentes',
    ),
]

CSS = f"""
@font-face{{font-family:J;src:url('file://{BASE}/PlusJakartaSans-Light.ttf');font-weight:300}}
@font-face{{font-family:J;src:url('file://{BASE}/PlusJakartaSans-LightItalic.ttf');font-weight:300;font-style:italic}}
@font-face{{font-family:J;src:url('file://{BASE}/PlusJakartaSans-Regular.ttf');font-weight:400}}
@font-face{{font-family:J;src:url('file://{BASE}/PlusJakartaSans-Medium.ttf');font-weight:500}}
@font-face{{font-family:J;src:url('file://{BASE}/PlusJakartaSans-SemiBold.ttf');font-weight:600}}
@font-face{{font-family:J;src:url('file://{BASE}/PlusJakartaSans-ExtraBold.ttf');font-weight:800}}
*{{box-sizing:border-box}}
html,body{{margin:0;width:{S}px;height:{S}px;overflow:hidden;font-family:J,sans-serif;letter-spacing:-0.04em;-webkit-font-smoothing:antialiased}}
.v{{position:relative;width:{S}px;height:{S}px;overflow:hidden}}
.pad{{position:absolute;inset:128px}}
.eyebrow{{font-weight:600;font-size:26px;line-height:1.2;letter-spacing:0.06em;text-transform:uppercase}}
.display{{font-weight:600;letter-spacing:-0.045em;line-height:1.08;margin:0}}
.hl{{padding:0 .12em;-webkit-box-decoration-break:clone;box-decoration-break:clone}}
.shape{{position:absolute;border-radius:50%}}
.logo{{position:absolute;display:block}}
.aura{{position:absolute;inset:-10%;filter:blur(60px)}}
.note{{position:absolute;box-shadow:0 18px 40px -14px rgba(47,52,64,.38);padding:40px;font-weight:500;line-height:1.2;color:#2f3440}}
"""

def hl(text, color, txt=None):
    style = f"background:linear-gradient(transparent 44%, {color} 44%, {color} 92%, transparent 92%);"
    if txt:
        # Sobre fondo oscuro o rosa el marcador cubre toda la palabra para que el texto en tinta se lea
        style = f"background:linear-gradient(transparent 6%, {color} 6%, {color} 96%, transparent 96%);color:{txt};"
    return text.replace('<hl>', f'<span class="hl" style="{style}">').replace('</hl>', '</span>')

def logo(p, x, y, h, which=None):
    which = which or p['logo']
    return f'<img class="logo" src="file://{BASE}/logo-sight-{which}.png" style="left:{x}px;top:{y}px;height:{h}px">'

def eye(color, x, y, size):
    return f'<img class="logo" src="file://{BASE}/eye-{color}.png" style="left:{x}px;top:{y}px;width:{size}px">'

def hlcolor(p):
    return C[p['mark']]

def hltext(p):
    # Sobre fondo rosa o tinta el texto resaltado pasa a tinta para mantener contraste
    return '#2f3440' if p['bg'] in ('pink', 'ink') else None

def page(inner, bg):
    return f'<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{CSS}</style></head><body><div class="v" style="background:{bg}">{inner}</div></body></html>'

def quarter(color, corner, size):
    pos = {'tr': f'right:{-size}px;top:{-size}px', 'bl': f'left:{-size}px;bottom:{-size}px',
           'br': f'right:{-size}px;bottom:{-size}px', 'tl': f'left:{-size}px;top:{-size}px'}[corner]
    return f'<div class="shape" style="{pos};width:{size*2}px;height:{size*2}px;background:{color}"></div>'

# 1 · Portada
def img_portada(p):
    bg, fg = C[p['bg']], p['fg']
    title = hl(p['title'], hlcolor(p), hltext(p))
    inner = quarter(C[p['shape']], 'tr', 420)
    inner += f'<div class="shape" style="right:170px;top:170px;width:250px;height:250px;background:{C["paper"] if p["bg"]!="coconut" else C["pink"]};display:flex;align-items:center;justify-content:center"><img src="file://{BASE}/eye-{"ink" if p["bg"]!="coconut" else "paper"}.png" style="width:120px"></div>'
    inner += logo(p, 128, 128, 96)
    inner += f'''<div style="position:absolute;left:128px;right:128px;bottom:128px;color:{fg}">
      <div class="eyebrow" style="margin-bottom:40px;opacity:.9">{p['eyebrow']}</div>
      <h1 class="display" style="font-size:146px;max-width:12ch">{title}</h1>
      <div style="margin-top:48px;font-weight:300;font-size:40px;line-height:1.25;max-width:26ch">{p['sub']}</div>
    </div>'''
    return page(inner, bg)

# 2 · Portada como documento sobre papel
def img_documento(p):
    bg, fg = C[p['bg']], p['fg']
    aura = {'pink': 'crema-pink', 'salmon': 'crema-pink', 'lime': 'crema-lime', 'ink': 'crema-cool', 'coconut': 'crema-pink', 'salt': 'crema-cool'}[p['bg']]
    grads = {
        'crema-pink': f"radial-gradient(48% 48% at 6% 4%, {C['pink100']} 0%, transparent 56%),radial-gradient(40% 44% at 96% 92%, {C['pink200']} 0%, transparent 58%),{C['coconut']}",
        'crema-lime': f"radial-gradient(46% 50% at 98% 8%, {C['lime100']} 0%, transparent 58%),radial-gradient(44% 44% at 2% 96%, {C['lime300']} 0%, transparent 60%),{C['coconut']}",
        'crema-cool': f"radial-gradient(42% 52% at 100% 0%, {C['pink100']} 0%, transparent 58%),radial-gradient(46% 46% at 0% 100%, {C['salt']} 0%, transparent 62%),{C['coconut']}",
    }[aura]
    title = hl(p['title'], hlcolor(p), hltext(p))
    doc_bg = C['paper'] if p['bg'] != 'coconut' else '#ffffff'
    inner = f'''
    <div style="position:absolute;left:520px;top:250px;width:860px;height:1110px;background:{doc_bg};box-shadow:0 30px 70px -30px rgba(47,52,64,.35);padding:96px 88px">
      <div class="eyebrow" style="color:#ff4864;font-size:20px">Contenido</div>
      {''.join(f'<div style="margin-top:{56 if i==0 else 36}px;border-top:2px solid #2f3440;padding-top:26px;display:flex;gap:28px;color:#2f3440"><span style="font-weight:800;font-size:40px;width:48px">{i+1}</span><span><span style="display:block;font-weight:600;font-size:36px">{t}</span><span style="display:block;margin-top:10px;font-weight:300;font-size:26px;line-height:1.3;color:#4a4f5c">{d}</span></span></div>' for i,(t,d) in enumerate(p['includes']))}
    </div>
    <div style="position:absolute;left:200px;top:170px;width:860px;height:1110px;background:{bg};overflow:hidden;box-shadow:0 36px 80px -30px rgba(47,52,64,.45)">
      {quarter(C[p['shape']], 'tr', 230)}
      {logo(p, 72, 72, 60)}
      <div style="position:absolute;left:72px;right:72px;bottom:80px;color:{fg}">
        <div class="eyebrow" style="font-size:18px;margin-bottom:26px">{p['eyebrow']}</div>
        <div class="display" style="font-size:88px">{title}</div>
        <div style="margin-top:30px;font-weight:300;font-size:26px;line-height:1.25;max-width:24ch">Laboratorio de diseño estratégico</div>
      </div>
    </div>
    <div class="note" style="left:950px;top:1150px;width:330px;height:300px;background:{C['lime'] if p['bg']!='lime' else C['postit_pink']};transform:rotate(-5deg);font-size:40px">Descarga inmediata en PDF</div>
    '''
    return page(inner, grads)

# 3 · Qué incluye
def img_incluye(p):
    inner = quarter(C[p['bg'] if p['bg'] not in ('coconut',) else 'pink'], 'br', 330)
    inner += logo(p, 128, 128, 64, 'ink')
    inner += f'''<div style="position:absolute;left:128px;right:128px;top:300px;color:#2f3440">
      <div class="eyebrow" style="color:#ff4864">Qué incluye</div>
      <h2 class="display" style="font-size:92px;margin-top:28px;max-width:14ch">{hl(p['title'], C['lime'] if p['bg']!='lime' else C['pink200'])}</h2>
      <div style="margin-top:72px;border-top:3px solid #2f3440">
      {''.join(f'<div style="display:flex;gap:40px;align-items:flex-start;padding:38px 0;border-bottom:2px solid {C["hair"]}"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff4864" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:6px"><path d="M20 6L9 17l-5-5"/></svg><span><span style="display:block;font-weight:600;font-size:44px">{t}</span><span style="display:block;margin-top:10px;font-weight:300;font-size:32px;line-height:1.3;color:#4a4f5c;max-width:32ch">{d}</span></span></div>' for t,d in p['includes'])}
      </div>
    </div>'''
    return page(inner, C['paper'])

# 4 · En cifras (sobre tinta con lime: par validado)
def img_cifras(p):
    stats = ''.join(f'''<div style="border-top:3px solid {C['lime']};padding-top:36px">
        <div style="font-weight:800;font-size:220px;line-height:.95;letter-spacing:-0.05em;color:{C['lime']}">{n}</div>
        <div style="margin-top:18px;font-weight:300;font-size:40px;line-height:1.2;color:{C['paper']};max-width:12ch">{l}</div></div>''' for n,l in p['stats'])
    inner = quarter(C['lime'] if p['bg'] != 'ink' else C['pink'], 'bl', 240)
    inner += f'<div style="position:absolute;left:128px;top:128px" class="eyebrow"><span style="color:{C["lime"]}">En cifras</span></div>'
    inner += logo(p, 1272, 128, 108, 'paper')
    inner += f'''<div style="position:absolute;left:128px;right:128px;top:300px">
      <div class="display" style="font-size:80px;color:{C['paper']};max-width:16ch">{p['title'].replace('<hl>','').replace('</hl>','')}</div>
      <div style="margin-top:36px;font-weight:300;font-size:38px;line-height:1.3;color:{C['paper']};opacity:.85;max-width:28ch">{p['sub']}</div></div>
      <div style="position:absolute;left:440px;right:128px;bottom:170px;display:grid;grid-template-columns:repeat(3,1fr);gap:56px">{stats}</div>'''
    return page(inner, C['ink'])

# 5 · Método: diagnóstico, proceso o pasos
def img_metodo(p):
    kind, steps = p['track']
    eyebrow = {'diagnostico': 'Cómo está construido', 'proceso': 'Cómo lo hicimos', 'pasos': 'El método'}[kind]
    head = {'diagnostico': 'Síntoma → causa raíz → tratamiento → resultado', 'proceso': 'Observar, interpretar, proyectar, accionar', 'pasos': 'Cinco pasos, un portafolio claro'}[kind]
    n = len(steps)
    col = (S - 256 - (n-1)*32) // n
    items = ''
    for i, (t, d) in enumerate(steps):
        last = i == n-1
        dot_bg = C['lime'] if last else C['pink']
        border = 'border:2px solid #2f3440;' if last else ''
        items += f'''<div style="width:{col}px">
          <div style="display:flex;align-items:center;gap:16px"><span style="width:36px;height:36px;border-radius:50%;background:{dot_bg};{border}flex-shrink:0"></span>{'' if last else '<span style="flex:1;height:2px;background:#2f3440"></span>'}</div>
          <div class="eyebrow" style="color:#ff4864;margin-top:34px;font-size:22px">{i+1:02d}</div>
          <div style="font-weight:500;font-size:{44 if n<5 else 38}px;line-height:1.15;margin-top:14px">{t}</div>
          <div style="font-weight:300;font-size:{30 if n<5 else 26}px;line-height:1.3;margin-top:16px;color:#4a4f5c">{d}</div></div>'''
    bgcss = f"radial-gradient(38% 42% at 4% 6%, {C['pink100']} 0%, transparent 56%),radial-gradient(36% 40% at 98% 10%, {C['lime100']} 0%, transparent 56%),radial-gradient(40% 44% at 92% 96%, {C['salt']} 0%, transparent 58%),{C['coconut']}"
    inner = logo(p, 128, 128, 64, 'ink')
    inner += f'''<div style="position:absolute;left:128px;right:128px;top:360px;color:#2f3440">
      <div class="eyebrow" style="color:#ff4864">{eyebrow}</div>
      <h2 class="display" style="font-size:84px;margin-top:28px;max-width:17ch">{head}</h2></div>
      <div style="position:absolute;left:128px;right:128px;bottom:200px;display:flex;gap:32px;color:#2f3440">{items}</div>'''
    return page(inner, bgcss)

# 6 · Cita
def img_cita(p):
    qbg = {'pink': 'lime', 'salmon': 'ink', 'lime': 'pink', 'ink': 'salt', 'coconut': 'pink', 'salt': 'ink'}[p['bg']]
    fg = '#2f3440' if qbg in ('lime', 'salt') else '#ffffff'
    mark = C['pink200'] if qbg == 'lime' else C['lime']
    txt = '#2f3440' if qbg in ('pink', 'ink') else None
    inner = quarter(C['pink'] if qbg != 'pink' else C['lime'], 'tl', 200)
    inner += f'''<div style="position:absolute;left:128px;right:128px;top:50%;transform:translateY(-50%);color:{fg}">
      <div style="font-weight:800;font-size:220px;line-height:.6;height:120px;color:{C['pink'] if qbg!='pink' else C['lime']}">“</div>
      <blockquote style="margin:0;font-weight:500;font-size:96px;line-height:1.12;letter-spacing:-0.045em">{hl(p['quote'], mark, txt)}</blockquote>
      <div class="eyebrow" style="margin-top:64px;opacity:.85">sight · {p['eyebrow']}</div></div>'''
    inner += eye('ink' if fg == '#2f3440' else 'paper', 1350, 1340, 120)
    return page(inner, C[qbg])

# 7 · Post-its con las preguntas que responde
def img_postits(p):
    tones = [C['postit_pink'], C['lime'], C['salmon'], '#ffffff']
    pos = [(150, 470, -5), (820, 420, 4), (230, 1000, 3), (860, 960, -4)]
    notes = ''.join(f'<div class="note" style="left:{x}px;top:{y}px;width:540px;height:470px;background:{tones[i]};transform:rotate({r}deg);font-size:58px;padding:56px">{t}</div>' for i,(t,(x,y,r)) in enumerate(zip(p['notes'], pos)))
    inner = f'''<div style="position:absolute;left:128px;right:128px;top:128px;color:#2f3440">
      <div class="eyebrow" style="color:#ff4864">Preguntas que responde</div>
      <h2 class="display" style="font-size:80px;margin-top:24px">Las que tu equipo ya se está haciendo</h2></div>{notes}'''
    inner += eye('ink', 1390, 1400, 90)
    return page(inner, C['salt'] if p['bg'] != 'salt' else C['coconut'])

# 8 · Ficha técnica con tira corrida
def img_ficha(p):
    rows = [('Formato', 'PDF digital'), ('Idioma', 'Español'), ('Entrega', 'Descarga inmediata'), ('Para', p['who'])]
    rowh = ''.join(f'<div style="display:flex;justify-content:space-between;gap:40px;padding:34px 0;border-bottom:2px solid {C["hair"]}"><span class="eyebrow" style="color:#6b7080;font-size:24px;padding-top:10px">{k}</span><span style="font-weight:500;font-size:42px;text-align:right;max-width:20ch">{v}</span></div>' for k,v in rows)
    words = ['Dirección', 'Adaptabilidad', 'Certidumbre', 'Expansión', 'Anticipación'] * 2
    star = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2f3440" stroke-width="2.4" stroke-linecap="round" style="flex-shrink:0"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/></svg>'
    marquee = ''.join(f'<span>{w}</span>{star}' for w in words)
    inner = logo(p, 128, 128, 64, 'ink')
    inner += f'''<div style="position:absolute;left:128px;right:128px;top:300px;color:#2f3440">
      <div class="eyebrow" style="color:#ff4864">Ficha</div>
      <h2 class="display" style="font-size:84px;margin-top:24px;max-width:15ch">{p['title'].replace('<hl>','').replace('</hl>','')}</h2>
      <div style="margin-top:64px;border-top:3px solid #2f3440">{rowh}</div></div>
      <div style="position:absolute;left:0;right:0;bottom:0;height:130px;background:{C['lime']};display:flex;align-items:center;gap:40px;padding-left:40px;white-space:nowrap;font-weight:500;font-size:44px;color:#2f3440">{marquee}</div>'''
    return page(inner, C['paper'])

VIEWS = [('01-portada', img_portada), ('02-documento', img_documento), ('03-que-incluye', img_incluye), ('04-en-cifras', img_cifras),
         ('05-metodo', img_metodo), ('06-cita', img_cita), ('07-preguntas', img_postits), ('08-ficha', img_ficha)]

def render(html_path, png_path):
    # Chrome escribe la captura y a veces no termina el proceso (actualizador): esperamos
    # a que el PNG exista y deje de crecer, y cerramos Chrome nosotros.
    import time
    if os.path.exists(png_path):
        os.remove(png_path)
    proc = subprocess.Popen([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
                             f'--user-data-dir={os.path.join(BASE, ".chrome-perfil")}', '--no-first-run', '--no-default-browser-check',
                             '--disable-background-networking', '--disable-component-update',
                             f'--window-size={S},{S}', '--virtual-time-budget=3000', '--allow-file-access-from-files',
                             f'--screenshot={png_path}', f'file://{html_path}'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    last, t0 = -1, time.time()
    while time.time() - t0 < 60:
        time.sleep(0.5)
        if proc.poll() is not None and os.path.exists(png_path):
            return
        if os.path.exists(png_path):
            size = os.path.getsize(png_path)
            if size > 0 and size == last:
                break
            last = size
    proc.kill()
    subprocess.run(['pkill', '-f', '.chrome-perfil'])
    if not os.path.exists(png_path):
        raise RuntimeError('No se pudo renderizar ' + html_path)

if __name__ == '__main__':
    import sys
    only = sys.argv[1:]
    os.makedirs(HTML_DIR, exist_ok=True)
    for p in PRODUCTS:
        if only and p['slug'] not in only:
            continue
        d = os.path.join(OUT, p['slug'])
        os.makedirs(d, exist_ok=True)
        for name, fn in VIEWS:
            hp = os.path.join(HTML_DIR, f"{p['slug']}-{name}.html")
            with open(hp, 'w') as f:
                f.write(fn(p))
            render(hp, os.path.join(d, f"{p['slug']}-{name}.png"))
        print('ok', p['slug'])
