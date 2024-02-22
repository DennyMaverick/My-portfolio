const fontChangeIcons = document.querySelectorAll(".font-change__icon")
const fontChangeIcon = document.querySelector(".font-change__icon")
const fontChangeProgressBars = document.querySelectorAll(".font-change__progress-bar")
const fontChangeProgressBarInputs = document.querySelectorAll(".font-change__progress-input")
const fontChangePopups = document.querySelectorAll(".font-change__popup")
const modalWindows = document.querySelectorAll(".modal")
const themeCloseBtns = document.querySelectorAll(".theme__close-btn")
const workBoxsImg = document.querySelectorAll(".work__box-img")

const hideFontProgress = function () {
  fontChangeProgressBars.forEach((item) => {
    item.classList.remove("font-change__progress-bar--active")
  })
}

fontChangeIcons.forEach((item) => {
  item.addEventListener("mouseenter", function (event) {
    const showFontChangePopup = function () {
      const currentFontChangeBar = event.target.closest(".font-change")
      const currentFontChangePopup = currentFontChangeBar.querySelector(".font-change__popup")

      currentFontChangePopup.classList.add("font-change__popup--active")

      setTimeout(() => {
        currentFontChangePopup.classList.remove("font-change__popup--active")
      }, 6000)
    }
    showFontChangePopup()
  })
})

fontChangeIcons.forEach((item) => {
  item.addEventListener("click", function (event) {
    const showProgressBar = function () {
      const fontChangeBar = event.target.closest(".font-change")
      const currentFontChangeProgressBar = fontChangeBar.querySelector(".font-change__progress-bar")

      currentFontChangeProgressBar.classList.toggle("font-change__progress-bar--active")
    }
    showProgressBar()

    const setFontSizePropertyEverywhere = function () {
      const currentValueFontSize = document.querySelector("html").style.fontSize

      if (currentValueFontSize == "") {
        fontChangeProgressBarInputs.forEach((item) => {
          item.value = 15
        })
      } else {
        fontChangeProgressBarInputs.forEach((item) => {
          item.value = currentValueFontSize.slice(0, 2)
        })
      }
    }
    setFontSizePropertyEverywhere()
  })
})

fontChangeProgressBarInputs.forEach((item) => {
  item.addEventListener("input", function () {
    document.querySelector("html").style.fontSize = +this.value + "px"
    localStorage.setItem("font", +this.value)
  })
})

workBoxsImg.forEach((item) => {
  item.addEventListener("click", hideFontProgress)
})

const setFontFromLocalStorage = function () {
  const currentValueFontSize = +localStorage.getItem("font")

  if (currentValueFontSize === 0) {
    localStorage.setItem("font", 15)
    document.querySelector("html").style.fontSize = localStorage.getItem("font") + "px"
  } else {
    localStorage.setItem("font", currentValueFontSize)
    document.querySelector("html").style.fontSize = +localStorage.getItem("font") + "px"
  }

  fontChangeProgressBars.forEach((item) => {
    item.value = +localStorage.getItem("font")
  })
}

setFontFromLocalStorage()

modalWindows.forEach((item) => {
  item.addEventListener("click", function () {
    hideFontProgress()
  })
})

themeCloseBtns.forEach((item) => {
  item.addEventListener("click", function () {
    hideFontProgress()
  })
})
