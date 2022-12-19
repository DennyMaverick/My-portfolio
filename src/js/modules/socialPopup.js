const socialLink = document.querySelector(".lang-about-social")
const socialPopup = document.getElementById("social-popup")
const socialImages = document.querySelectorAll(".about__social-image")
const socialImagesUse = document.querySelectorAll(".about__social-image use")

function openPopup() {
  socialPopup.classList.toggle("vhidden")
}

function closePopup() {
  socialPopup.classList.add("vhidden")
}

socialLink.addEventListener("click", function (e) {
  e.preventDefault()
  openPopup()
})

window.addEventListener("scroll", closePopup)
