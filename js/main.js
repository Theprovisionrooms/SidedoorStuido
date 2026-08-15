// SIDEDOOR STUDIO — shared behaviour

document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  // Scroll reveal for generic .reveal elements
  const revealTargets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
  }

  // Statue figures: data-mode="scroll" crack open (marble -> circuit) as they enter view.
  // data-mode="case" figures are click-through to a work case study (data-href).
  const busts = document.querySelectorAll('.bust-fig');
  if ('IntersectionObserver' in window) {
    const bustIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.dataset.mode === 'scroll') {
          entry.target.dataset.revealed = entry.isIntersecting ? 'true' : 'false';
        }
      });
    }, { threshold: 0.4 });
    busts.forEach(b => bustIo.observe(b));
  }

  // Detect whether a real philosopher render has been dropped into assets/statues/.
  // If the file exists, fade it in and hide the gradient placeholder underneath.
  // If it 404s, the placeholder just stays visible, nothing breaks.
  busts.forEach(b => {
    const img = b.querySelector('.bust-img');
    if (img) {
      const markLoaded = () => {
        if (img.naturalWidth > 0) b.dataset.imgLoaded = 'true';
        else b.dataset.imgLoaded = 'false';
      };
      if (img.complete) markLoaded();
      img.addEventListener('load', markLoaded);
      img.addEventListener('error', () => { b.dataset.imgLoaded = 'false'; });
    }
  });

  busts.forEach(b => {
    if (b.dataset.mode === 'case' && b.dataset.href) {
      b.addEventListener('click', () => { window.location.href = b.dataset.href; });
      b.setAttribute('tabindex', '0');
      b.setAttribute('role', 'link');
      b.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') window.location.href = b.dataset.href;
      });
    }
  });

  // Contact form: submit to Formspree without leaving the page
  const studioForm = document.getElementById('studio-form');
  if (studioForm) {
    studioForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const submitBtn = studioForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      try {
        const res = await fetch(studioForm.action, {
          method: 'POST',
          body: new FormData(studioForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          status.textContent = 'Request received. We reply directly, usually within two working days.';
          status.style.display = 'block';
          studioForm.reset();
        } else {
          status.textContent = 'Something went wrong sending that. Email digitalsidedoor@gmail.com directly instead.';
          status.style.display = 'block';
        }
      } catch (err) {
        status.textContent = 'Something went wrong sending that. Email digitalsidedoor@gmail.com directly instead.';
        status.style.display = 'block';
      }
      submitBtn.disabled = false;
    });
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

});
