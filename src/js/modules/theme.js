const switchers = document.querySelectorAll(".switcher")
const darkBtn = document.querySelector('[data-theme="dark"]')
const lightBtn = document.querySelector('[data-theme="light"]')
const darkBtns = document.querySelectorAll('[data-theme="dark"]')
const lightBtns = document.querySelectorAll('[data-theme="light"]')

switchers.forEach((switcher) => {
  const header = document.querySelector("header")
  switcher.addEventListener("click", function () {
    // изменение цвета иконок-переключателей темы при клике на них
    if (this.dataset.theme === "light") {
      darkBtns.forEach((darkItem) => {
        darkItem.style.fill = "#fff"
      })
      lightBtns.forEach((lightItem) => {
        lightItem.style.fill = "#2b2a2c"
      })
      // darkBtn.style.fill = "#fff"
      // lightBtn.style.fill = "#2b2a2c"
    } else {
      darkBtns.forEach((darkItem) => {
        darkItem.style.fill = "#2b2a2c"
      })
      lightBtns.forEach((lightItem) => {
        lightItem.style.fill = "#fff"
      })
      // lightBtn.style.fill = "#fff"
      // darkBtn.style.fill = "#2b2a2c"
    }
    // вызов функции applyTheme + установка значения темы в local storage
    applyTheme(this.dataset.theme)
    localStorage.setItem("theme", this.dataset.theme)
    // изменение тени header при клике на переключатель темы
    const scrollSize = window.pageYOffset //Высота скролла
    const pixels = 10
    if (scrollSize > pixels) {
      const activeTheme = localStorage.getItem("theme")
      const header = document.querySelector("header")
      switch (activeTheme) {
        case "light":
          header.classList.add("box-shadow-light")
          header.classList.remove("box-shadow-dark")
          break
        case "dark":
          header.classList.add("box-shadow-dark")
          header.classList.remove("box-shadow-light")
          break

        default:
          header.classList.remove("box-shadow-dark")
          header.classList.add("box-shadow-light")
          break
      }
    } else {
      header.classList.remove("box-shadow-dark")
      header.classList.remove("box-shadow-light")
    }
  })
})

function applyTheme(themeName) {
  // определение url для link
  let urlTheme = `./css/theme/${themeName}.min.css`
  // замена url в элементе link
  document.querySelector('[title = "theme"]').setAttribute("href", urlTheme)
}

const activeTheme = localStorage.getItem("theme")

if (activeTheme === null) {
  applyTheme("light")
} else {
  applyTheme(activeTheme)
}

// Изменение цвета иконки переключателя темы
if (activeTheme === "light") {
  darkBtns.forEach((darkItem) => {
    darkItem.style.fill = "#fff"
  })
  lightBtns.forEach((lightItem) => {
    lightItem.style.fill = "#2b2a2c"
  })
  // darkBtn.style.fill = '#fff';
  // lightBtn.style.fill = '#2b2a2c';
} else if (activeTheme === "dark") {
  darkBtns.forEach((darkItem) => {
    darkItem.style.fill = "#2b2a2c"
  })
  lightBtns.forEach((lightItem) => {
    lightItem.style.fill = "#fff"
  })
  // lightBtn.style.fill = '#fff';
  // darkBtn.style.fill = '#2b2a2c';
} else {
  darkBtns.forEach((darkItem) => {
    darkItem.style.fill = "#fff"
  })
  lightBtns.forEach((lightItem) => {
    lightItem.style.fill = "#2b2a2c"
  })
  // darkBtn.style.fill = "#fff"
  // lightBtn.style.fill = "#2b2a2c"
}
