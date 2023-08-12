// Активирование popup о проверке персональных данных

const errorPopup = document.getElementById("error-popup")
const realCheckbox = document.querySelector(".person-data__input")
const submitBtn = document.getElementById("submit-btn")

const themes = {
  ".person-data__error-popup--active": {
    theme: {
      light: "person-data__error-popup--active-light",
      dark: "person-data__error-popup--active-dark",
    },
  },
}

function themeSwitch(theme) {
  for (key in themes) {
    const elems = document.querySelectorAll(key)
    elems.forEach((elem) => {
      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {
        elem.classList.remove(`${themes[key].theme.dark}`, `${themes[key].theme.light}`)

        if (theme === "light") {
          elem.classList.add(`${themes[key].theme.light}`)
        } else {
          elem.classList.add(`${themes[key].theme.dark}`)
        }
      }
    })
  }
}

function errorPopupActivate() {
  if (!realCheckbox.checked) {
    errorPopup.classList.add("person-data__error-popup--active")
    errorPopup.classList.remove("person-data__error-popup")
  }
}

function setTheme() {
  const activeTheme = localStorage.getItem("theme")

  if (activeTheme === null) {
    themeSwitch("dark")
  } else {
    themeSwitch(activeTheme)
  }
}

submitBtn.addEventListener("click", function () {
  errorPopupActivate()
  setTheme()
})

realCheckbox.addEventListener("click", function () {
  if (realCheckbox.checked) {
    errorPopup.classList.remove("person-data__error-popup--active")
    errorPopup.classList.add("person-data__error-popup")
    setTheme()
  } else {
    errorPopup.classList.add("person-data__error-popup--active")
    errorPopup.classList.remove("person-data__error-popup")
    setTheme()
  }
})
