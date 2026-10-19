const switchers = document.querySelectorAll(".switcher")
const popupsTheme = document.querySelectorAll('.popup-theme')

let popupThemeTimeout

switchers.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    clearTimeout(popupThemeTimeout)

    popupsTheme.forEach((popup) => {
      popup.classList.remove("popup-theme__hidden")
    })
  })

  item.addEventListener("mouseleave", function () {
    clearTimeout(popupThemeTimeout)

    popupThemeTimeout = setTimeout(() => {
      popupsTheme.forEach((popup) => {
        popup.classList.add("popup-theme__hidden")
      })
    }, 2000)
  })
})

// switchers.forEach((item) => {
//   item.addEventListener('mouseenter', function () {
//     popupsTheme.forEach((item) => {
//       item.classList.remove('popup-theme__hidden');
//     })
//     setTimeout(() => {
//       popupsTheme.forEach((item) => {
//         item.classList.add("popup-theme__hidden")
//       })
//     }, 2000);
//   })
// })

