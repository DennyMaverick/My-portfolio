const closeBtns = document.querySelectorAll(".theme__close-btn")
const modals = document.querySelectorAll(".modal")
const showMoreInputs = document.querySelectorAll(".show-more__input")
// при клике на крестик убирать checked
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showMoreInputs.forEach((input) => {
      input.checked = false
    })
  })
})
// при клике вне модального окна убирать checked
modals.forEach((modal) => {
  modal.addEventListener("click", () => {
    showMoreInputs.forEach((input) => {
      input.checked = false
    })
  })
})
