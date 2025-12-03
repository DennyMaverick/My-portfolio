const switchers = document.querySelectorAll(".switcher")
const popupsTheme = document.querySelectorAll('.popup-theme')


switchers.forEach((item) => {
  item.addEventListener('mouseenter', function () {
    popupsTheme.forEach((item) => {
      item.classList.remove('popup-theme__hidden');
    })
    setTimeout(() => {
      popupsTheme.forEach((item) => {
        item.classList.add("popup-theme__hidden")
      })
    }, 2000);
  })
})

