// Чтобы поменять контент местами (образование и опыт) на экранах меньше 768px, потребовалось показывать стрелки "наверх" в определенный момент, чтобы не менять верстку и стили

const arrowUpOne = document.getElementById('arrow-top-one');
const arrowUpTwo = document.getElementById('arrow-top-two');

if (document.documentElement.clientWidth < 769) {
  arrowUpTwo.classList.remove("hide")
  arrowUpOne.classList.add("hide")
} else {
  arrowUpTwo.classList.add("hide")
  arrowUpOne.classList.remove("hide")
}

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 769) {
    arrowUpTwo.classList.remove("hide")
    arrowUpOne.classList.add("hide")
  } else {
    arrowUpTwo.classList.add("hide")
    arrowUpOne.classList.remove("hide")
  }
})