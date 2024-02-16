const personalDataInput = document.querySelector(".person-data__input")

const modalContactForm = document.getElementById("modal-hire-me")

const closeBtnInModalContactForm = modalContactForm.querySelector(".theme__close-btn")

const errorPopup = document.getElementById("error-popup")

const deactivatePopupError = function () {
  errorPopup.classList.remove("person-data__error-popup--active")
  errorPopup.classList.add("person-data__error-popup")
}

const turnOffCustomCheckBox = function () {
  personalDataInput.checked = false
  deactivatePopupError()
}

closeBtnInModalContactForm.addEventListener("click", turnOffCustomCheckBox)

modalContactForm.addEventListener("click", turnOffCustomCheckBox)
