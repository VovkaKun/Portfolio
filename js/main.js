$(function () {

  $(".menu a, .header__content a, .footer a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.burger, .menu a').on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');
  });

  var menu = $('.menu');
  var scrollChange = 1;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });

  var mixer = mixitup('.jobs__content')

  $('.reviews__inner').slick({
    dots: true,
    arrows: false,
  });

});
