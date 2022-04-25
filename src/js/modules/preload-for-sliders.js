$(function () {
  slickSlider = $('[data-slider="slick"]')
  const modalBtns = document.querySelectorAll("[data-modal]")

  slickSlider.on("afterChange", function () {
    //1 > 2 > 3..
    let this_ = $(".slick-active .slider__slick-img").not("loaded")
    !$(this_).css({background: "url('" + $(this_).data("src") + "')50% /contain no-repeat"})
    let im_ = new Image()
    im_.src = $(this_).data("src")
    im_.onload = function () {
      $(this_).removeClass("o0").parent(".slider__item").addClass("loadDn")
    }
  })
  //when page loaded

  modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener("click", () => {
      !$(".slick-active .slider__slick-img").css({background: "url('" + $(".slick-active .slider__slick-img").data("src") + "')50% /contain no-repeat"})
      let im_ = new Image()
      im_.src = $(".slick-active .slider__slick-img").data("src")
      im_.onload = function () {
        $(".slick-active .slider__slick-img").removeClass("o0").addClass("loaded").parent(".slider__item").addClass("loadDn")
      }
    })
  })
})
