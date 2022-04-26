const preloader = document.getElementById("preloader")
const bodyEl = document.querySelector("body")

window.onload = function () {
  setTimeout(function () {
    if (preloader) {
      preloader.classList.add("done")
      bodyEl.classList.remove("no-scroll")
    }
  }, 1000)
}
