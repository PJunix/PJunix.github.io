const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    nav.dataset.open = String(!isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.textContent = isOpen ? 'Menu' : 'Close';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    });
  });
}
