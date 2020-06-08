// quando clicco sull'icona hamburger compare il menu
$('.fa-bars').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// quando clicco sulli icona x scompare il menu
$('.close').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
