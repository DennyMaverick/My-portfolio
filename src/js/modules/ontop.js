// jQuery
// import $ from 'jquery';
// Плавный скролл при нажатии на кнопку наверх и переход в верхнюю часть страницы
// $(function () {
//   $('.modal').scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $('.up').fadeIn();
//     } else {
//       $('.up').fadeOut();
//     }
//   });

//   $('.up').click(function () {
//     $(".modal").animate({scrollTop: 0}, 600)
//     return false;
//   });

// });

// jQuery
import $ from "jquery"

// Плавная прокрутка внутри модального окна
$(function () {
  $(".modal").on("scroll", function () {
    const $modal = $(this)
    const $up = $modal.find(".up")

    if ($modal.scrollTop() > 100) {
      $up.fadeIn()
    } else {
      $up.fadeOut()
    }
  })

  $(".up").on("click", function (event) {
    event.preventDefault()

    const $modal = $(this).closest(".modal")

    $modal.stop().animate(
      {
        scrollTop: 0,
      },
      600,
    )
  })
})
