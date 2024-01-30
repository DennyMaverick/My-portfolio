let age
let hash = window.location.hash.substring(1)

const ageContainer = document.querySelector(".age")
const yearsContainer = document.querySelector(".years")
const now = new Date()
const dayOfBirthday = new Date(1993, 3, 2)
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
const dayOfBirthdayNow = new Date(today.getFullYear(), dayOfBirthday.getMonth(), dayOfBirthday.getDate())

const arrEndsOfWord = ["лет", "год", "года"]

age = today.getFullYear() - dayOfBirthday.getFullYear()

if (today < dayOfBirthdayNow) {
  age = age - 1
}

ageContainer.textContent = age

const ageFirstLetter = +age.toString()[0]
const ageSecondLetter = +age.toString()[1]

if ((hash === "ru" && ageSecondLetter === 0) || ageSecondLetter === 5 || ageSecondLetter === 6 || ageSecondLetter === 7 || ageSecondLetter === 8 || ageSecondLetter === 9) {
  yearsContainer.textContent = arrEndsOfWord[0]
} else if (hash === "ru" && ageSecondLetter === 1) {
  yearsContainer.textContent = arrEndsOfWord[1]
} else if ((hash === "ru" && ageSecondLetter === 2) || ageSecondLetter === 3 || ageSecondLetter === 4) {
  yearsContainer.textContent = arrEndsOfWord[2]
} else if (hash === "en") {
  yearsContainer.textContent = ""
}
