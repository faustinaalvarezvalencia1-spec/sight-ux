/* sight — carta de contacto. Campos en línea, validación amable y envío a Supabase. */
(function () {
  var raiz = document.querySelector('[data-carta]');
  if (!raiz) return;

  var form = raiz.querySelector('form');
  var gracias = raiz.querySelector('.carta__gracias');
  var fallo = raiz.querySelector('.carta__fallo');
  var boton = raiz.querySelector('.carta__enviar');
  var etiquetaBoton = boton.textContent;
  var f = {};
  ['nombre', 'cargo', 'marca', 'instagram', 'web', 'interes', 'reto', 'canal', 'contacto', 'acepta_datos', 'empresa_web'].forEach(function (n) {
    f[n] = form.elements[n];
  });

  /* ---------- Textos (fáciles de cambiar) ---------- */
  var MSG = {
    nombre: 'Nos falta tu nombre para saber cómo llamarte.',
    marca: 'Cuéntanos el nombre de tu marca.',
    red: 'Déjanos tu Instagram o tu web para conocerte un poco antes.',
    instagram: 'Ese Instagram no parece completo, revísalo.',
    web: 'Esa web no parece una dirección, revísala.',
    telVacio: 'Nos falta tu número para escribirte.',
    tel: 'Revisa tu número: son 10 dígitos, como 300 123 4567.',
    correoVacio: 'Nos falta tu correo para escribirte.',
    correo: 'Revisa tu correo, parece que le falta algo.',
    datos: 'Necesitamos tu autorización para guardar tus datos.'
  };
  var CANAL_GRACIAS = { WhatsApp: 'Te escribimos por WhatsApp', correo: 'Te escribimos por correo', llamada: 'Te llamamos' };

  /* ---------- Campos que crecen al escribir ---------- */
  function medir(el) {
    var caja = el.closest('.blank');
    if (!caja) return;
    var v = el.tagName === 'SELECT' ? el.options[el.selectedIndex].text : el.value;
    caja.setAttribute('data-value', v || el.getAttribute('placeholder') || '');
    caja.classList.toggle('is-empty', !el.value);
  }
  form.querySelectorAll('.blank input, .blank select, .blank textarea').forEach(function (el) {
    medir(el);
    el.addEventListener('input', function () { medir(el); });
    el.addEventListener('change', function () { medir(el); });
  });
  /* El "reto" no deja saltos de línea sueltos: Enter pasa al siguiente campo */
  f.reto.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); f.canal.focus(); }
  });

  /* ---------- Normalización ---------- */
  var limpiar = function (v) { return String(v || '').replace(/\s+/g, ' ').trim(); };
  function instagram(v) {
    v = limpiar(v);
    if (!v) return '';
    var m = v.match(/instagram\.com\/([A-Za-z0-9._]+)/i);
    return '@' + (m ? m[1] : v).replace(/^@+/, '');
  }
  var igValido = function (v) { return /^@[A-Za-z0-9._]{1,30}$/.test(v); };
  function webValida(v) {
    if (!v) return false;
    try { var u = new URL(/^https?:\/\//i.test(v) ? v : 'https://' + v); return /\.[a-z]{2,}$/i.test(u.hostname); } catch (e) { return false; }
  }
  var correoValido = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); };
  function telefono(v) {
    var limpio = String(v || '').replace(/[\s().-]/g, '');
    var pref = /^\+?57(?=\d{10}$)/.test(limpio);
    var co = limpio.replace(/^\+?57(?=\d{10}$)/, '');
    if (/^(3\d{9}|60\d{8})$/.test(co)) return (pref ? '+57 ' : '') + co.slice(0, 3) + ' ' + co.slice(3, 6) + ' ' + co.slice(6);
    if (/^\+\d{8,15}$/.test(limpio)) return limpio;
    return null;
  }
  var esCorreoCanal = function () { return f.canal.value === 'correo'; };

  /* ---------- Contacto según el canal ---------- */
  var etiquetaContacto = form.querySelector('[data-contacto-label]');
  function ajustarContacto() {
    var correo = esCorreoCanal();
    var c = f.contacto;
    c.type = correo ? 'email' : 'tel';
    c.inputMode = correo ? 'email' : 'tel';
    c.placeholder = correo ? 'tu@correo.com' : '300 123 4567';
    c.autocomplete = correo ? 'email' : 'tel-national';
    c.autocapitalize = correo ? 'off' : '';
    c.spellcheck = false;
    etiquetaContacto.textContent = correo ? 'Tu correo (obligatorio)' : 'Tu celular (obligatorio)';
    /* Si lo escrito ya no sirve para el nuevo canal, se borra */
    if (c.value && (correo ? !c.value.includes('@') : c.value.includes('@'))) c.value = '';
    medir(c);
  }
  f.canal.addEventListener('change', function () {
    ajustarContacto();
    if (tocado.contacto) validar('canal');
    actualizar();
  });

  /* ---------- Validación ---------- */
  var tocado = {};
  var intentado = false; /* tras intentar enviar, se muestran todos los avisos pendientes */
  var errores = {
    quien: { caja: document.getElementById('carta-e-quien'), campos: ['nombre', 'marca'] },
    red: { caja: document.getElementById('carta-e-red'), campos: ['instagram', 'web'] },
    canal: { caja: document.getElementById('carta-e-canal'), campos: ['contacto'] },
    datos: { caja: document.getElementById('carta-e-datos'), campos: ['acepta_datos'] }
  };
  var grupoDe = { nombre: 'quien', marca: 'quien', instagram: 'red', web: 'red', canal: 'canal', contacto: 'canal', acepta_datos: 'datos' };

  /* Devuelve { campo: mensaje } con los problemas de cada grupo */
  function problemas(grupo) {
    var p = {};
    if (grupo === 'quien') {
      if (!limpiar(f.nombre.value)) p.nombre = MSG.nombre;
      if (!limpiar(f.marca.value)) p.marca = MSG.marca;
    } else if (grupo === 'red') {
      var ig = instagram(f.instagram.value), w = limpiar(f.web.value);
      if (ig && !igValido(ig)) p.instagram = MSG.instagram;
      if (w && !webValida(w)) p.web = MSG.web;
      if (!ig && !w) { p.instagram = MSG.red; p.web = MSG.red; }
    } else if (grupo === 'canal') {
      var v = limpiar(f.contacto.value);
      if (esCorreoCanal()) { if (!v) p.contacto = MSG.correoVacio; else if (!correoValido(v)) p.contacto = MSG.correo; }
      else { if (!v) p.contacto = MSG.telVacio; else if (!telefono(v)) p.contacto = MSG.tel; }
    } else if (grupo === 'datos') {
      if (!f.acepta_datos.checked) p.acepta_datos = MSG.datos;
    }
    return p;
  }

  /* Muestra los errores de un grupo, solo de los campos que la persona ya tocó */
  function validar(grupo, todos) {
    todos = todos || intentado;
    var g = errores[grupo];
    var p = problemas(grupo);
    var mensajes = [];
    var camposGrupo = grupo === 'red' ? ['instagram', 'web'] : g.campos;
    camposGrupo.forEach(function (n) {
      var visible = p[n] && (todos || tocado[n] || (grupo === 'red' && tocado.instagram && tocado.web));
      f[n].setAttribute('aria-invalid', visible ? 'true' : 'false');
      var caja = f[n].closest('.blank');
      if (caja) caja.classList.toggle('is-error', !!visible);
      if (visible && mensajes.indexOf(p[n]) < 0) mensajes.push(p[n]);
    });
    if (grupo === 'datos') raiz.querySelector('.carta__datos').classList.toggle('is-error', mensajes.length > 0);
    g.caja.textContent = mensajes.join(' ');
    return Object.keys(p).length === 0;
  }
  function todoListo() {
    return Object.keys(errores).every(function (gr) { return Object.keys(problemas(gr)).length === 0; });
  }
  function actualizar() {
    boton.setAttribute('aria-disabled', todoListo() ? 'false' : 'true');
  }

  Object.keys(grupoDe).forEach(function (n) {
    var el = f[n];
    el.addEventListener('blur', function () {
      if (n === 'instagram' && limpiar(el.value)) { el.value = instagram(el.value); medir(el); }
      if (n === 'contacto' && !esCorreoCanal()) { var t = telefono(el.value); if (t) { el.value = t; medir(el); } }
      if (limpiar(el.value) || el.type === 'checkbox' || tocado[n]) tocado[n] = true;
      validar(grupoDe[n]);
    });
    el.addEventListener(el.type === 'checkbox' ? 'change' : 'input', function () {
      if (el.type === 'checkbox') tocado[n] = true;
      /* Si ya había un error a la vista, se revisa mientras escribe */
      if (el.getAttribute('aria-invalid') === 'true' || el.type === 'checkbox') validar(grupoDe[n]);
      actualizar();
    });
  });
  ['cargo', 'interes', 'reto'].forEach(function (n) { f[n].addEventListener('input', actualizar); });

  /* ---------- Envío ---------- */
  var enviando = false;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (enviando) return;
    fallo.hidden = true;

    /* Botón desactivado: mostramos qué falta y llevamos el foco al primer espacio pendiente */
    if (!todoListo()) {
      intentado = true;
      var primero = null;
      Object.keys(errores).forEach(function (gr) {
        validar(gr, true);
        if (!primero) primero = form.querySelector('[aria-invalid="true"]');
      });
      if (primero) primero.focus();
      return;
    }

    var datos = {
      nombre: limpiar(f.nombre.value),
      cargo: limpiar(f.cargo.value),
      marca: limpiar(f.marca.value),
      instagram: instagram(f.instagram.value),
      web: limpiar(f.web.value),
      interes: f.interes.value,
      reto: f.reto.value.trim(),
      canal: f.canal.value,
      contacto: esCorreoCanal() ? limpiar(f.contacto.value) : telefono(f.contacto.value),
      acepta_datos: f.acepta_datos.checked,
      empresa_web: f.empresa_web.value,
      pagina: location.href
    };

    enviando = true;
    boton.textContent = 'Enviando…';
    boton.setAttribute('aria-disabled', 'true');
    form.setAttribute('aria-busy', 'true');

    fetch(raiz.getAttribute('data-endpoint'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || !j.ok) throw new Error('envio'); }); })
      .then(function () { mostrarGracias(datos); })
      .catch(function () {
        enviando = false;
        boton.textContent = etiquetaBoton;
        form.removeAttribute('aria-busy');
        actualizar();
        fallo.hidden = false;
      });
  });

  function mostrarGracias(d) {
    raiz.querySelector('[data-gracias]').textContent =
      '¡Gracias, ' + d.nombre + '! Ya estamos mirando ' + d.marca + '. ' + CANAL_GRACIAS[d.canal] + ' en menos de 24 horas.';
    var altura = form.offsetHeight;
    raiz.style.minHeight = altura + 'px';
    form.classList.add('is-saliendo');
    var cambiar = function () {
      form.hidden = true;
      gracias.hidden = false;
      raiz.style.minHeight = '';
      requestAnimationFrame(function () { gracias.classList.add('is-visible'); });
      gracias.focus({ preventScroll: true });
      raiz.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };
    var reducido = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    reducido ? cambiar() : setTimeout(cambiar, 320);
  }

  ajustarContacto();
  actualizar();
})();
