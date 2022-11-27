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
  "resume-mobile": {
    ru: "Резюме",
    en: "Resume",
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
  resume: {
    ru: "Резюме",
    en: "Resume",
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
  // === hidden works ===
  "hidden-works": {
    ru: "Работы портфолио",
    en: "Works in my portfolio",
  },
  // === navigation before works ===
  "all-projects": {
    ru: "Все проекты",
    en: "All projects",
  },
  landings: {
    ru: "Лэндинги",
    en: "Landings",
  },
  "sites-visits": {
    ru: "Сайты-визитки",
    en: "Sites - visit cards",
  },
  promo: {
    ru: "Промосайты",
    en: "Promo-sites",
  },
  "elements-of-javascript": {
    ru: "Проекты с элементами интерфейса на JavaScript",
    en: "Projects with elements of an interface on JavaScript",
  },
  // ==== work titles
  "title-work-archi": {
    ru: "Арчи",
    en: "Archee",
  },
  "title-work-web-templates": {
    ru: "Портфолио Веб&nbsp;-&nbsp;шаблонов",
    en: "Web-templates portfolio",
  },
  "title-work-dream-on-wheels": {
    ru: "Мечта на колесах",
    en: "Dream On Wheels",
  },
  "title-work-converter": {
    ru: "Конвертёр валют на JavaScript",
    en: "Converter currency on Javascript",
  },
  "title-work-gen": {
    ru: "Ген спорта",
    en: "Gen of sport",
  },
  "title-work-olivio": {
    ru: "Оливио",
    en: "Olivio",
  },
  "title-work-thrivetalk": {
    ru: "Процветание",
    en: "Thrivetalk",
  },
  "title-work-venom": {
    ru: "Промосайт фильма Веном - 2",
    en: "Promo-site of the film Venom - 2",
  },
  "title-work-calc": {
    ru: "Калькулятор стоимости ремонта на JavaScript",
    en: "Calculator of the repairing cost on JavaScript",
  },
  // === About ===
  "title-about": {
    ru: "Обо мне",
    en: "About",
  },
  "subtitle-about": {
    ru: "Кто я",
    en: "Who Am I",
  },
  "about-begin": {
    ru: "Привет, меня зовут Денис, и я занимаюсь WEB-разработкой. Создание сайтов — то, что нравится и приносит мне удовольствие.",
    en: "Hello, my name is Denis, and I do web-developing. I like to create sites. It gives me pleasure.",
  },
  "about-part-two": {
    ru: "Как известно — всё постигается благодаря опыту. И чем больше имеешь инструментов для достижения целей, тем легче и быстрее эти цели выполняются.",
    en: "As you know, everything is comprehended through experience. And the more tools you have to achieve goals, the easier and faster these goals are fulfilled.",
  },
  "about-part-three": {
    ru: "И чтобы построить сайт, нужно уметь пользоваться теми инструментами (не обязательно всеми доступными), которые необходимы для конкретной задачи.",
    en: "And to build a website, you need to be able to use those tools (not necessarily all available) that are necessary for a specific task.",
  },
  "about-part-four": {
    ru: "На данный момент я с уверенностью хочу сказать, что web-разработка — это составляющая моей жизни. И все инструменты, которыми я владею сейчас, позволяют без больших сложностей разрабатывать лэндинги — одностраничные сайты.",
    en: "At the moment, I want to say with confidence that web development is a component of my life. And all the tools that I own now allow me to develop landing pages — single-page sites without much difficulty.",
  },
  "about-part-five": {
    ru: "Если Вам нужен сайт, нажмите на кнопку ниже и оставьте мне сообщение удобным для Вас способом или воспользуйтесь",
    en: "If you need a website, click on the button below and leave me a message in a convenient way for you or use",
  },
  "about-social": {
    ru: "социальными сетями.",
    en: "social networks.",
  },
  "thanks-for-attention": {
    ru: "Спасибо за внимание.",
    en: "Thanks for your attention.",
  },
  "about-farewell": {
    ru: "С любовью к web-разработке, Денис.",
    en: "With love to web-developing, Denis.",
  },
  "about-write-btn": {
    ru: "Написать мне",
    en: "Write to me",
  },
  "about-resume-btn": {
    ru: "Резюме",
    en: "Resume",
  },
  // === Footer navigation ===
  "footer-main": {
    ru: "Главная",
    en: "Main",
  },
  "footer-portfolio": {
    ru: "Мое портфолио",
    en: "My portfolio",
  },
  "footer-about": {
    ru: "Обо мне",
    en: "About me",
  },
  "footer-contacts": {
    ru: "Контакты",
    en: "Contacts",
  },
  "footer-resume": {
    ru: "Резюме",
    en: "Resume",
  },
  "footer-write": {
    ru: "Написать мне",
    en: "Write to me",
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
  "cat-landings": {
    ru: "Категория: Лэндинги",
    en: "Category: Lendings",
  },
  "cat-visits": {
    ru: "Категория: Сайты-визитки",
    en: "Category: Sites - visit cards",
  },
  "cat-javascript-interface": {
    ru: "Категория: Проекты с элементами интерфейса на javaScript",
    en: "Category: Projects with elements of an interface on JavaScript",
  },
  "cat-promo": {
    ru: "Категория: Промосайты",
    en: "Category: Promo-sites",
  },
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

  for (let key in repeatElems) {
    let elems = document.querySelectorAll(".lang-" + key)
    elems.forEach(function (elem) {
      if (elem && repeatElems[key][hash]) {
        elem.innerHTML = repeatElems[key][hash]
      }
    })
  }
}
// запуск функции changeLang()
changeLang()
