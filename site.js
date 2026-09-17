// Theme toggle: dark (brand negative) is the default; the choice persists.
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('gf-theme', next); } catch (e) {}
  });
})();


// Trading card on the Relic section: click or tap flips between photo and specs.
(function () {
  document.querySelectorAll('[data-flip]').forEach(function (card) {
    var btn = card.querySelector('.flip-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var flipped = card.classList.toggle('is-flipped');
      btn.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    });
  });
})();
