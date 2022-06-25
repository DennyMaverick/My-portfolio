// * data-close - атрибут для модальных окон проектов
// * data-close-btn - атрибут для остальных модальных окон

$(function () {
  // slickSlider = $('[data-slider="slick"]')

  const modalBtns = document.querySelectorAll("[data-work]")

  // =============== Slider Slick =============

  //when page loaded

  modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener("click", function (event) {
      event.preventDefault()

      let currentModalId = event.target.closest(".work__box-img").dataset.modal

      let currentModal = document.querySelector("" + currentModalId)

      currentModal.classList.add("show")

      $("body").addClass("no-scroll")

      document.querySelector("body").classList.add("no-scroll")

      setTimeout(function () {
        currentModal.querySelector(".modal__dialog").style.transform = "rotateX(0)"
      }, 200)

      let $this = $(this)
      let modalId = $this.data("modal")
      let currentSlider = $(modalId).find('[data-slider="slick"]')

      // currentSlider.slick("setPosition")

      currentSlider.slick({
        //ID слайдер
        infinite: true, //бесконечная прокрутка
        slidesToShow: 1, //показывать слайдов
        slidesToScroll: 1, // скроллить слайдов
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        arrows: false, // убираем кнопки слайда по умолчанию
        dots: false,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              autoplay: true,
            },
          },
        ],
      })

      /*каждой кнопке при нажатии присваиваем метод
slickPrev(назад) и slickNext(вперед)*/
      $(".slickPrev").on("click", function (event) {
        event.preventDefault()

        currentSlider.slick("slickPrev")
      })
      $(".slickNext").on("click", function (event) {
        event.preventDefault()

        currentSlider.slick("slickNext")
      })

      currentSlider.on("afterChange", function (event) {
        //1 > 2 > 3..

        let currentSlideUnLoaded = event.target.querySelector(".slick-active .slider__slick-img:not(.loaded)")
        let currentSlideLoaded = event.target.querySelector(".slick-active .slider__slick-img")

        if (currentSlideUnLoaded) {
          currentSlideUnLoaded.style.background = `url(${currentSlideUnLoaded.dataset.src}) 50% /contain no-repeat`
          let im_ = new Image()
          im_.src = currentSlideUnLoaded.dataset.src
          im_.onload = function () {
            currentSlideUnLoaded.classList.remove("o0")
            currentSlideUnLoaded.closest(".slider__item").classList.add("loadDn")
          }
        }
      })

      // when page is loaded

      let currentSlideImg = currentModal.querySelector(".slick-active .slider__slick-img")

      currentSlideImg.style.background = `url(${currentSlideImg.dataset.src}) 50% /contain no-repeat`

      let im_ = new Image()
      im_.src = currentSlideImg.dataset.src
      im_.onload = function () {
        currentSlideImg.classList.remove("o0")

        currentSlideImg.classList.add("loaded")

        currentSlideImg.closest(".slider__item").classList.add("loadDn")
      }
    })
  })

  const modalCloseBtns = document.querySelectorAll("[data-close]")

  modalCloseBtns.forEach(function (btnClose) {
    btnClose.addEventListener("click", function (event) {
      event.preventDefault()

      let currentModal = event.target.closest(".modal")

      // деинициализация слайдера slick
      // ====================================

      let $this = $(this)
      let modalId = $this.closest(".modal")
      let currentSlickSlider = $(modalId).find('[data-slider="slick"]')
      setTimeout(function () {
        currentSlickSlider.slick("unslick")
      }, 500)

      // ==================================

      let modalDialog = event.target.closest(".modal__dialog")

      modalDialog.style.transform = "rotateX(90deg)"

      //временная задержка
      setTimeout(function () {
        currentModal.classList.remove("show")
        document.querySelector("body").classList.remove("no-scroll")
      }, 200)
    })
  })
})
