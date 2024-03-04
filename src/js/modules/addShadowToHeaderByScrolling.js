const header = document.querySelector(".header")

const addShadowToHeaderByScrolling = function () {
  const scrollSize = window.pageYOffset //Высота скролла
  const pixels = 50
  if (scrollSize > pixels) {
    const activeTheme = localStorage.getItem("theme")
    switch (activeTheme) {
      case "light":
        header.classList.add("header--box-shadow-light")
        header.classList.remove("header--box-shadow-dark")
        break
      case "dark":
        header.classList.add("header--box-shadow-dark")
        header.classList.remove("header--box-shadow-light")
        break

      default:
        header.classList.remove("header--box-shadow-dark")
        header.classList.add("header--box-shadow-light")
        break
    }
  } else {
    header.classList.remove("header--box-shadow-dark")
    header.classList.remove("header--box-shadow-light")
  }
}

window.addEventListener("scroll", () => {
  addShadowToHeaderByScrolling()
})

addShadowToHeaderByScrolling()
