// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Кнопка "Наверх"
const backToTop = document.getElementById("backToTop")
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block"
  } else {
    backToTop.style.display = "none"
  }
})
backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"})
})

// Подсветка активного пункта меню
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
})
