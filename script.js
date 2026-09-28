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
  matchMedia('(min-width: 721px)').addEventListener('change', () => close());
}
const year = document.querySelector('#year');

// The career story is readable in full without JavaScript. Enhance it into
// keyboard-accessible chapters while retaining direct links to each chapter.
const chapterTabs = document.querySelector('.journey-tabs');
if (chapterTabs) {
  const tabs = [...chapterTabs.querySelectorAll('[data-chapter]')];
  const panels = tabs.map(tab => document.getElementById(`chapter-${tab.dataset.chapter}`));
  const controls = document.querySelector('.journey-controls');
  let activeChapter = 0;
  chapterTabs.setAttribute('role', 'tablist');
  controls.hidden = false;
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
  });
  const selectChapter = (index, focusTab = false) => {
    activeChapter = index;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    chapterTabs.style.setProperty('--chapter-progress', `${index / (tabs.length - 1) * 100}%`);
    controls.querySelector('[data-chapter-step="-1"]').disabled = index === 0;
    controls.querySelector('[data-chapter-step="1"]').hidden = index === tabs.length - 1;
    controls.querySelector('.journey-finish').hidden = index !== tabs.length - 1;
    controls.querySelector('.journey-position').textContent = `Chapter ${index + 1} of ${tabs.length} · ${tabs[index].querySelector('.chapter-tab-label').textContent}`;
    if (focusTab) tabs[index].focus({ preventScroll: true });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => { event.preventDefault(); selectChapter(index); });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (activeChapter + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (activeChapter - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); selectChapter(next, true);
    });
  });
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-chapter-step]');
    if (!button) return;
    const index = Math.max(0, Math.min(tabs.length - 1, activeChapter + Number(button.dataset.chapterStep)));
    selectChapter(index, true);
    chapterTabs.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  const selectFromHash = () => {
    const index = panels.findIndex(panel => `#${panel.id}` === location.hash);
    if (index !== -1) selectChapter(index);
  };
  selectChapter(0);
  selectFromHash();
  window.addEventListener('hashchange', selectFromHash);
}

const readingProgress = document.querySelector('.reading-progress');
if (readingProgress) {
  let framePending = false;
  const updateProgress = () => {
    const length = document.documentElement.scrollHeight - innerHeight;
    readingProgress.style.transform = `scaleX(${length > 0 ? Math.min(1, Math.max(0, scrollY / length)) : 0})`;
    framePending = false;
  };
  const queueProgress = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateProgress);
  };
  addEventListener('scroll', queueProgress, { passive: true });
  addEventListener('resize', queueProgress);
  if ('ResizeObserver' in window) new ResizeObserver(queueProgress).observe(document.body);
  updateProgress();
}

const skillPills = document.querySelector('.skill-pills');
if (skillPills) {
  skillPills.querySelectorAll('button').forEach(button => { button.disabled = false; });
  skillPills.addEventListener('click', event => {
    const selected = event.target.closest('button[data-skill]');
    if (!selected) return;
    skillPills.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
    const title = document.querySelector('.skill-insight-title');
    const level = document.createElement('span');
    level.textContent = selected.dataset.level;
    title.replaceChildren(document.createTextNode(selected.querySelector('span').textContent + ' '), level);
    document.querySelector('.skill-insight-copy p').textContent = selected.dataset.description;
    const evidence = document.querySelector('.skill-evidence');
    evidence.href = `projects/${selected.dataset.project}.html`;
    const evidenceLabel = selected.dataset.evidenceLabel || 'See it in practice';
    evidence.firstChild.textContent = evidenceLabel + ' ';
    evidence.setAttribute('aria-label', `${evidenceLabel}: ${selected.querySelector('span').textContent}`);
  });
}

// Filters enhance the full, readable project list without requiring JavaScript.
const filters = document.querySelector('.project-filters');
if (filters) {
  const cards = [...document.querySelectorAll('.project-card')];
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#filter-status').textContent = `${count} case ${count === 1 ? 'study' : 'studies'} shown`;
  });
}

// Content is always visible; motion is a progressive enhancement.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveals = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal-in');
      reveals.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-title, .project-card, .research-row').forEach(element => reveals.observe(element));
}
if (year) year.textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('#navigation a[href^="#"], .floating-dock a[href^="#"], .story-index a[href^="#"]')];
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
