// ===== jQuery effects (the jQuery library itself is loaded from the CDN in each HTML file) =====
$(document).ready(function () {

  // 1. Scroll animations + animated skill bars
  function revealOnScroll() {
    var bottom = $(window).scrollTop() + $(window).height();
    $('.fade-in').each(function () {
      if (bottom > $(this).offset().top + 60) { $(this).addClass('show'); }
    });
    $('.fill').each(function () {
      if (!$(this).data('done') && bottom > $(this).offset().top + 20) {
        $(this).data('done', true).animate({ width: $(this).data('level') + '%' }, 1200);
      }
    });
  }
  $(window).on('scroll', revealOnScroll);
  revealOnScroll(); // run once when the page loads

  // 2. Interactive buttons: quick fade "click" effect
  $('.btn').on('mousedown', function () {
    $(this).animate({ opacity: 0.6 }, 100).animate({ opacity: 1 }, 200);
  });
});
