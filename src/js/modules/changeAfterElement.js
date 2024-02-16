// При изменении языка менять свойство Content у псевдоэлемента after

const workOverlayElements = document.querySelectorAll(".work--overlay")

// получение hash из строки браузера - #ru или #en
  let hash = window.location.hash
  // начало hash массива строки начинается со второго символа - ru или en
  hash = hash.substring(1)

const addText = function (lang) {
  workOverlayElements.forEach((elem) => {
    elem.classList.add(`work--overlay-${lang}-text`)
  })
}

const removeText = function (lang) {
  workOverlayElements.forEach((elem) => {
    elem.classList.remove(`work--overlay-${lang}-text`)
  })
}

if (hash === "ru") {
  addText("ru")
  removeText("en")
} else {
  addText("en")
  removeText("ru")
}
