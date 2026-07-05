(function () {
  var loader = document.getElementById('page-loader');
  if (!loader) return;

  var circle = document.getElementById('page-progress-circle');
  var text = document.getElementById('page-progress-text');
  var progress = 0;
  var circumference = 283;
  var skipKey = 'cv-loaded';

  function setProgress(value) {
    progress = Math.min(100, Math.max(0, value));
    if (circle) {
      circle.style.strokeDashoffset = circumference - (circumference * progress / 100);
    }
    if (text) {
      text.textContent = Math.round(progress) + '%';
    }
  }

  function hideLoader() {
    setProgress(100);
    setTimeout(function () {
      loader.classList.add('is-hidden');
    }, 300);
  }

  if (sessionStorage.getItem(skipKey)) {
    sessionStorage.removeItem(skipKey);
    loader.classList.add('is-hidden');
    return;
  }

  setProgress(0);

  var tick = setInterval(function () {
    if (progress < 90) {
      setProgress(progress + Math.random() * 6 + 2);
    }
  }, 100);

  window.addEventListener('load', function () {
    clearInterval(tick);
    var finishTick = setInterval(function () {
      if (progress >= 100) {
        clearInterval(finishTick);
        hideLoader();
      } else {
        setProgress(progress + 5);
      }
    }, 35);
  });
})();
