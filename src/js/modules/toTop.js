const backToTop = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "flex" : "none"
})

backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"})
})
