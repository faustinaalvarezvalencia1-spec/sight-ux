/* sight — interacciones del tema */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Carrusel principal */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var slides = root.querySelectorAll('[data-slide]');
    var dots = root.querySelectorAll('[data-dot]');
    if (slides.length < 2) return;
    var current = 0;
    var paused = false;
    function show(n) {
      current = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        var on = i === current;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', on ? 'false' : 'true');
        s.querySelectorAll('a').forEach(function (a) { a.tabIndex = on ? 0 : -1; });
      });
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === current);
        if (i === current) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
    }
    function userGo(n) { paused = true; show(n); }
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { userGo(current - 1); });
    if (next) next.addEventListener('click', function () { userGo(current + 1); });
    dots.forEach(function (d) { d.addEventListener('click', function () { userGo(parseInt(d.getAttribute('data-dot'), 10)); }); });
    root.addEventListener('focusin', function () { paused = true; });
    if (root.getAttribute('data-autoplay') === 'true' && !reduceMotion) {
      var ms = parseInt(root.getAttribute('data-interval'), 10) || 7000;
      setInterval(function () { if (!paused && !document.hidden) show(current + 1); }, ms);
    }
  });

  /* Post-its que caen al entrar en pantalla */
  document.querySelectorAll('[data-postits]').forEach(function (root) {
    var board = root.querySelector('.postit-board');
    if (!board) return;
    function drop() { board.classList.add('is-dropped'); }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { drop(); io.disconnect(); } });
      }, { threshold: 0.35 });
      io.observe(root);
    } else { drop(); }
    var replay = root.querySelector('[data-replay]');
    if (replay) replay.addEventListener('click', function () {
      board.classList.remove('is-dropped');
      void board.offsetWidth;
      drop();
    });
  });

  /* Mensaje prellenado en el formulario de contacto */
  var KEY = 'sightNeed';
  function fillContact(text) {
    var body = document.querySelector('[data-contact-body]');
    if (!body || !text) return false;
    body.value = text + ' ';
    return true;
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('[data-need]');
    if (!link) return;
    var text = link.getAttribute('data-need');
    if (!fillContact(text)) {
      try { sessionStorage.setItem(KEY, text); } catch (err) {}
    } else {
      setTimeout(function () {
        var body = document.querySelector('[data-contact-body]');
        if (body) body.focus({ preventScroll: true });
      }, 450);
    }
  });
  try {
    var pending = sessionStorage.getItem(KEY);
    if (pending && fillContact(pending)) sessionStorage.removeItem(KEY);
  } catch (err) {}

  /* Servicios: acordeón con uno abierto a la vez */
  document.querySelectorAll('[data-accordion]').forEach(function (root) {
    var items = root.querySelectorAll('.svc');
    items.forEach(function (item) {
      var btn = item.querySelector('[data-acc-toggle]');
      var body = item.querySelector('.svc__body');
      btn.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        items.forEach(function (other) {
          other.classList.remove('is-open');
          other.querySelector('[data-acc-toggle]').setAttribute('aria-expanded', 'false');
          other.querySelector('.svc__body').hidden = true;
        });
        if (willOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          body.hidden = false;
        }
      });
    });
  });

  /* Página de producto: galería con miniaturas */
  document.querySelectorAll('[data-product-gallery]').forEach(function (root) {
    var slides = root.querySelectorAll('[data-gallery-slide]');
    var thumbs = root.querySelectorAll('[data-gallery-thumb]');
    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        var n = parseInt(t.getAttribute('data-gallery-thumb'), 10);
        slides.forEach(function (s, i) { s.hidden = i !== n; s.classList.toggle('is-active', i === n); });
        thumbs.forEach(function (x, i) {
          x.classList.toggle('is-active', i === n);
          if (i === n) x.setAttribute('aria-current', 'true'); else x.removeAttribute('aria-current');
        });
      });
    });
  });

  /* sight lab: carpetas y galería */
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[data-tab]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); select(n); n.focus(); }
      });
    });
    root.querySelectorAll('[data-gallery]').forEach(function (g) {
      var slides = g.querySelectorAll('[data-gslide]');
      var dots = g.querySelectorAll('[data-gdot]');
      dots.forEach(function (d) {
        d.addEventListener('click', function () {
          var n = parseInt(d.getAttribute('data-gdot'), 10);
          slides.forEach(function (s, i) { s.classList.toggle('is-active', i === n); });
          dots.forEach(function (x, i) { x.classList.toggle('is-active', i === n); });
        });
      });
    });
  });
})();
