$(function () {
  slickSlider = $('[data-slider="slick"]')
  const modalBtns = document.querySelectorAll("[data-work]")

  slickSlider.on("afterChange", function (event) {
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

  //when page loaded

  modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener("click", function (event) {
      let currentModalId = event.target.closest(".work__box-img").dataset.modal

      let currentModal = document.querySelector("" + currentModalId)

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
})
