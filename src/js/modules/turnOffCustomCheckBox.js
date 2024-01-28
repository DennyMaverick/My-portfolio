const personalDataInput = document.querySelector(".person-data__input")

const modalContactForm = document.getElementById("modal-hire-me")

const closeBtnInModalContactForm = modalContactForm.querySelector(".theme__close-btn")

const turnOffCustomCheckBox = function () {
  personalDataInput.checked = false
}

closeBtnInModalContactForm.addEventListener("click", turnOffCustomCheckBox)
modalContactForm.addEventListener("click", turnOffCustomCheckBox)
