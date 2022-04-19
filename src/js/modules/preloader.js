// * ======== для использования плагина gulp - gulp-webp-html, автоматическое добавление тега picture =======

const webpAll = document.querySelectorAll("source")

// shadow picture 1x1 px

const shadowImagePath = "./img/preload/1x1.png"

webpAll.forEach((webp) => {
  const webpSrcSet = webp.srcset
  if (webpSrcSet) {
    webp.setAttribute("data-srcset", `${webpSrcSet}`)
    webp.srcset = `${shadowImagePath}`
  }
})

// * Без использования плагина gulp gulp-webp-html, создавая тег picture вручную

const lazyImages = document.querySelectorAll("img[data-src], source[data-srcset]")

const windowHeight = document.documentElement.clientHeight

let lazyImagesPositions = []

if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)
      lazyScrollCheck()
    }
  })
}

window.addEventListener("scroll", lazyScroll)

function lazyScroll() {
  if (document.querySelectorAll("img[data-src], source[data-srcset]").length > 0) {
    lazyScrollCheck()
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex((item) => pageYOffset > item - windowHeight)
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
      lazyImages[imgIndex].removeAttribute("data-src")
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset
      lazyImages[imgIndex].removeAttribute("data-srcset")
    }
    delete lazyImagesPositions[imgIndex]
  }
}
