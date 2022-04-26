// jQuery
// import $ from 'jquery';
// Libraries

$(function () {
  const worksSlider = $('[data-slider="slick"]')
  /*  Filter
=========================== */
  let filter = $("[data-filter]")
  filter.on("click", function (event) {
    event.preventDefault() //убирает стандартное поведение элементов(ссылок)
    let cat = $(this).data("filter") //получаем значение элемента, по которому
    //производится клик мыши

    if (cat == "all") {
      // $("[data-cat]").slice(0, 6).show();
      $("[data-cat]").removeClass("hide")
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat")
        if (workCat != cat) {
          $(this).addClass("hide")
          // $(this).fadeOut();
        } else {
          $(this).removeClass("hide")
          // $("[data-cat]").slice(0, 6).show();
        }
      })
    }
  })

  /*  Modal
=========================== */
  let modalCall = $("[data-modal]")
  let modalClose = $("[data-close]")

  modalCall.on("click", function (event) {
    event.preventDefault()

    let $this = $(this)
    let modalId = $this.data("modal")

    $(modalId).addClass("show")

    $("body").addClass("no-scroll")
    //Задержка при анимации модального окна
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      })
    }, 200)

    worksSlider.slick("setPosition")
  })

  modalClose.on("click", function (event) {
    event.preventDefault()

    let $this = $(this)
    let modalParent = $this.parents(".modal")

    //анимация при закрытии модального окна
    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    })

    //временная задержка
    setTimeout(function () {
      modalParent.removeClass("show")
      $("body").removeClass("no-scroll")
    }, 200)
  })
  // Закрытие окна при нажатии на маску

  $(".modal").on("click", function (event) {
    event.preventDefault()
    let $this = $(this)
    if (document.documentElement.clientWidth > 992) {
      $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)",
      })

      setTimeout(function () {
        $this.removeClass("show")
        $("body").removeClass("no-scroll")
      }, 200)
    }
  })

  /*отмена события клика родителя элемента (.modal)
  при клике на блок .modal__dialog окно не будет
  закрываться*/
  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation()
  })

  // =============== Slider Slick =============
  // const modalBtns = document.querySelectorAll("[data-modal]")

  // modalBtns.forEach((btn) => {
  //   btn.addEventListener("click", () => {

  //   })
  // })

  // worksSlider.slick("setPosition")

  worksSlider.slick({
    //ID слайдер
    infinite: true, //бесконечная прокрутка
    slidesToShow: 1, //показывать слайдов
    slidesToScroll: 1, // скроллить слайдов
    fade: true,
    arrows: false, // убираем кнопки слайда по умолчанию
    dots: false,
  })

  /*каждой кнопке при нажатии присваиваем метод
slickPrev(назад) и slickNext(вперед)*/
  $(".slickPrev").on("click", function (event) {
    event.preventDefault() //отменяем стандартное поведение кнопок

    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')
    /*в переменной currentSlider хранится слайдер, по которому мы кликаем
  именно в том модальном окне, которое вызвано*/

    currentSlider.slick("slickPrev")
  })
  $(".slickNext").on("click", function (event) {
    event.preventDefault() //отменяем стандартное поведение кнопок

    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')
    //в переменной currentSlider хранится слайдер, по которому мы кликаем

    currentSlider.slick("slickNext")
  })
})
