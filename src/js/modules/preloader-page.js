const preloader = document.getElementById("preloader")

window.onload = function () {
  setTimeout(function () {
    if (preloader) {
      preloader.classList.add("done")
    }
  }, 1000)
}
