// ===== Plain JavaScript features =====
document.addEventListener('DOMContentLoaded', function () {

  // 1. Mobile menu: clicking the burger button shows/hides the links
  var toggle = document.getElementById('menu-toggle');
  var links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // 2. Back-to-top button: show after scrolling 300px, click to go up smoothly
  var topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    window.addEventListener('scroll', function () {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Typing text on the Home page (only runs if the element exists)
  var role = document.getElementById('typed-role');
  if (role) {
    var text = role.textContent, i = 0;
    role.textContent = '';
    var timer = setInterval(function () {
      role.textContent += text.charAt(i++);
      if (i >= text.length) clearInterval(timer);
    }, 80);
  }
});
