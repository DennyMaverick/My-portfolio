// Плавная прокрутка
window.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      const blockID = anchor.getAttribute("href")
      if (blockID !== "#" && !blockID.includes("http")) {
        event.preventDefault()
        document.querySelector("" + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  }
})
