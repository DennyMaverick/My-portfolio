// Плавная прокрутка
// window.addEventListener("DOMContentLoaded", function () {
//   const anchors = document.querySelectorAll('a[href*="#"]')

//   for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//       const blockID = anchor.getAttribute("href")
//       if (blockID !== "#" && !blockID.includes("http")) {
//         event.preventDefault()
//         document.querySelector("" + blockID).scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         })
//       }
//     })
//   }
// })

// Плавная прокрутка
window.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (const anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      const blockID = this.getAttribute("href")

      if (!blockID || blockID === "#" || blockID.includes("://")) {
        return
      }

      const targetID = blockID.startsWith("#") ? blockID : new URL(blockID, window.location.href).hash

      if (!targetID || targetID === "#") {
        return
      }

      const target = document.querySelector(targetID)

      if (target) {
        event.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  }
})
