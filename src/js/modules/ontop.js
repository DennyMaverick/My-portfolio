// jQuery
import $ from 'jquery';
// Плавный скролл при нажатии на кнопку наверх и переход в верхнюю часть страницы
$(function () {
  $('.modal').scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });

  $('.up').click(function () {
    $(".modal").animate({scrollTop: 0}, 600)
    return false;
  });

});