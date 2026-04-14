document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var panel = document.querySelector('[data-nav-panel]');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    panel.classList.toggle('is-open');
  });
});
