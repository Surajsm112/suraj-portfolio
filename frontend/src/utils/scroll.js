/** Smooth-scrolls to a section by id and keeps the URL hash in sync. Respects reduced-motion. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`);
  // Move focus for keyboard / screen-reader users without scrolling again.
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}
