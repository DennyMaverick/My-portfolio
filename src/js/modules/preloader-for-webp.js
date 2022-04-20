// * ======== для использования плагина gulp - gulp-webp-html, автоматическое добавление тега picture =======

const webpAll = document.querySelectorAll("source")

// shadow picture 1x1 px

const shadowImagePath = "./img/preload/1x1.png"

webpAll.forEach((webp) => {
  const webpSrcSet = webp.srcset
  if (webpSrcSet) {
    webp.setAttribute("data-srcset", `${webpSrcSet}`)
    webp.srcset = `${shadowImagePath}`
    webp.classList.add("lazy")
  }
})
