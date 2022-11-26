//* =========== Объект с переводом страницы ==============

const langs = {
  // === title ===
  title: {
    ru: "Денис, веб-разработчик",
    en: "Denis, web-developer",
  },
  // ===== nav mobile =====
  "main-mobile": {
    ru: "Главная",
    en: "Main",
  },
  "portfolio-mobile": {
    ru: "Мое портфолио",
    en: "My portfolio",
  },
  "about-mobile": {
    ru: "Обо мне",
    en: "About me",
  },
  "contacts-mobile": {
    ru: "Контакты",
    en: "Contacts",
  },
  "write-mobile": {
    ru: "Написать мне",
    en: "Write to me",
  },
  // === nav desktop ===
  main: {
    ru: "Главная",
    en: "Main",
  },
  portfolio: {
    ru: "Мое портфолио",
    en: "My portfolio",
  },
  about: {
    ru: "Обо мне",
    en: "About me",
  },
  contacts: {
    ru: "Контакты",
    en: "Contacts",
  },
  write: {
    ru: "Написать мне",
    en: "Write to me",
  },
  // === Intro Translation ===

  hello: {
    ru: "Привет, Я",
    en: "Hello, I'm",
  },
  "my-name": {
    ru: "Денис",
    en: "Denis",
  },
  "web-developer": {
    ru: "Веб-разработчик",
    en: "Web-developer",
  },
  "write-intro": {
    ru: "Написать мне",
    en: "Write to me",
  },
  "resume-intro": {
    ru: "Резюме",
    en: "Resume",
  },
}

const titles = {
  "telegram-intro": {
    ru: "Мой телеграм",
    en: "My telegram",
  },
  "vk-intro": {
    ru: "Моя страница вконтакте",
    en: "My page vk",
  },
  "github-intro": {
    ru: "Мой GitHub",
    en: "My GitHub",
  },
}

const repeatElems = {
  // "benefits-projects": {
  //   ru: "Проектов",
  //   en: "Projects",
  // },
}

// ====== Секция Search / placeholders

// const placeholders = {
//   location: {
//     ru: "Местоположение",
//     en: "Location",
//   },
//   type: {
//     ru: "Тип",
//     en: "Type",
//   },
//   budget: {
//     ru: "Бюджет",
//     en: "Budget",
//   },
//   "modal-search-phone": {
//     ru: "Введите номер телефона",
//     en: "Insert your phone number",
//   },
//   "modal-contact-phone": {
//     ru: "Введите номер телефона",
//     en: "Insert your phone number",
//   },
// }

const langListItems = document.querySelectorAll(".lang-tool__item")
// Массив всех доступных языков
const allLangs = ["ru", "en"]

langListItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    // получение hash из строки браузера - #ru или #en

    // получение значения атрибута data-lang (ru или en)
    let lang = this.dataset.lang

    // добавление в строку браузера #ru или #en
    location.href = window.location.pathname + "#" + lang

    // перезагрузка страницы
    location.reload()
  })
})
function changeLang() {
  // получение hash из строки браузера - #ru или #en
  let hash = window.location.hash
  // начало hash массива строки начинается со второго символа - ru или en
  hash = hash.substr(1)

  const langToolRuEl = document.querySelector('[data-lang="ru"]')
  const langToolEnEl = document.querySelector('[data-lang="en"]')
  // получение hash из строки браузера - #ru или #en

  if (hash == "ru") {
    langToolRuEl.classList.add("lang-tool--active")
    langToolEnEl.classList.remove("lang-tool--active")
  } else if ((hash = "en")) {
    langToolEnEl.classList.add("lang-tool--active")
    langToolRuEl.classList.remove("lang-tool--active")
  }

  // проверка - если массив из всех доступных языков не содержит hash
  if (!allLangs.includes(hash)) {
    // принудительно записывать в строку браузера путь с языком
    location.href = window.location.pathname + "#ru"
    // перезагрузка страницы
    location.reload()
  }

  // перебор массива langs
  for (let key in langs) {
    // получение элементов в html, которые нужно перевести
    let elem = document.querySelector(".lang-" + key)
    // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash]
    }
  }

  // перевод всплывающих текстовых подсказок при наводе на ссылки
  for (let key in titles) {
    // получение элементов в html, которые нужно перевести
    let elem = document.querySelector(".lang-" + key)
    if (elem && titles[key][hash]) {
      elem.title = titles[key][hash]
    }
  }
  // Для плейсхолдеров
  // for (let key in placeholders) {
  //   let elemPlaceholder = document.querySelector(".lang-placeholder-" + key)
  //   if (elemPlaceholder && placeholders[key][hash]) {
  //     elemPlaceholder.placeholder = placeholders[key][hash]
  //   }
  // }

  // for (let key in repeatElems) {
  //   let elems = document.querySelectorAll(".lang-" + key)
  //   elems.forEach(function (elem) {
  //     if (elem && repeatElems[key][hash]) {
  //       elem.innerHTML = repeatElems[key][hash]
  //     }
  //   })
  // }
}
// запуск функции changeLang()
changeLang()
