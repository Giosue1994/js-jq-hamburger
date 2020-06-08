// aggiungo una classe all'ultimo tag 'a' che sta dentro un div
$('.header-right a:last').addClass('open');

// quando clicco sull'icona hamburger compare il menu
$('.open').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// quando clicco sull' icona x scompare il menu
$('.close').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
