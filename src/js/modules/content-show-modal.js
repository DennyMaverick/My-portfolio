$(function () {
  $(window).on("load", function () {
    $(".show-more").on("click", function (e) {
      if ($(e.target).hasClass("show-more__trigger")) {
        $(e.target).next(".show-more__content").slideToggle()
      }
    })
  })
})
