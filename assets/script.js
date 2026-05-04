/* ── NAV TOGGLE ─────────────────────────────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');

  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.drawer-link').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ── BACK TO TOP ────────────────────────────────────────────────── */
  const backTop = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 500);
  });

  /* ── INTERSECTION OBSERVER ──────────────────────────────────────── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .stagger').forEach(el => obs.observe(el));

  /* ── CONTACT FORM (demo) ────────────────────────────────────────── */
  document.getElementById('sendBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const msg   = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!email || !msg) {
      status.style.background = 'rgba(248,113,113,.12)';
      status.style.borderColor = 'rgba(248,113,113,.3)';
      status.style.color = 'var(--red)';
      status.textContent = '⚠️ Merci de remplir tous les champs.';
      status.style.display = 'block';
      return;
    }

    status.style.background = 'rgba(52,211,153,.12)';
    status.style.borderColor = 'rgba(52,211,153,.3)';
    status.style.color = 'var(--green)';
    status.innerHTML = "Veuillez me contactez à partir du champ contact de mon portfolio";
    status.style.display = 'block';

    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });