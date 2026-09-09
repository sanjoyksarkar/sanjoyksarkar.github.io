const menu = document.querySelector('.menu-btn');
const navigation = document.querySelector('#navigation');
if (menu && navigation) {
  document.documentElement.classList.add('has-menu');
  const close = (restoreFocus = false) => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
    if (restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('open', open);
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') close(true); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
  document.addEventListener('focusin', event => { if (!event.target.closest('.site-header')) close(); });
  matchMedia('(min-width: 961px)').addEventListener('change', () => close());
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('#navigation a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  links.forEach(link => { const section = document.querySelector(link.hash); if(section) observer.observe(section); });
}

// Use a visible chooser instead of relying on an installed mail handler.
const contactDialog = document.querySelector('#contact-dialog');
if (contactDialog && typeof contactDialog.showModal === 'function') {
  let contactOpener;
  document.querySelectorAll('[data-contact-open]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', 'contact-dialog');
    link.addEventListener('click', event => {
      event.preventDefault();
      contactOpener = link;
      contactDialog.querySelector('.copy-status').textContent = '';
      contactDialog.querySelector('.copy-email').textContent = 'Copy email';
      contactDialog.showModal();
      document.body.classList.add('contact-open');
    });
  });
  contactDialog.querySelector('.dialog-close').addEventListener('click', () => contactDialog.close());
  contactDialog.addEventListener('click', event => {
    const rect = contactDialog.getBoundingClientRect();
    if (event.target === contactDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) contactDialog.close();
  });
  contactDialog.addEventListener('close', () => {
    document.body.classList.remove('contact-open');
    contactOpener?.focus({preventScroll:true});
  });
  contactDialog.querySelector('.copy-email').addEventListener('click', async event => {
    const button = event.currentTarget;
    const status = contactDialog.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.email);
      button.textContent = 'Copied ✓';
      status.textContent = 'Email address copied. Paste it into your email service.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(contactDialog.querySelector('#contact-email'));
      const selection = window.getSelection();
      selection.removeAllRanges();selection.addRange(range);
      status.textContent = 'Select and copy the address above, then paste it into your email service.';
    }
  });
}
