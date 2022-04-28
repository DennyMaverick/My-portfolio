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
  // * data-close - атрибут для модальных окон проектов

  // * data-close-btn - атрибут для остальных модальных окон

  // * data-modal - атрибут для модальных окон проектов

  // * data-modal-open - атрибут для остальных модальных окон

  let modalCall = $("[data-modal-open]")
  let modalClose = $("[data-close-btn]")

  modalCall.on("click", function (event) {
    event.preventDefault()

    let $this = $(this)
    let modalId = $this.data("modal-open")

    $(modalId).addClass("show")

    $("body").addClass("no-scroll")

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      })
    }, 200)
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
})
