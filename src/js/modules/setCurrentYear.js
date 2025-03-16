// Получаем текущий год
const currentYear = new Date().getFullYear()

// Находим элемент с классом "my-footer-year"
const footerYear = document.querySelector(".current-year")

footerYear.textContent = currentYear
