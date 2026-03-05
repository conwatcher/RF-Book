// Minimal JS (kept intentionally tiny for speed).

// Countdown timer: days until Red Foundations release (2026-06-01).
(function () {
  var el = document.getElementById('countdown-days');
  if (!el) return;
  var MS_PER_DAY = 86400000;
  var release = new Date('2026-06-01T00:00:00Z');
  function update() {
    var now = new Date();
    var diff = release - now;
    if (diff <= 0) {
      el.textContent = 'Available now!';
      return;
    }
    el.textContent = Math.ceil(diff / MS_PER_DAY);
  }
  update();
  setInterval(update, 60000);
}());
