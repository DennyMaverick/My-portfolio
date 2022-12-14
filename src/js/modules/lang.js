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
  // Resume
  "vhidden-modal-title": {
    ru: "Модальное окно резюме",
    en: "Modal window resume",
  },
  "resume-title": {
    ru: "Резюме",
    en: "Resume",
  },
  "experience-title": {
    ru: "Опыт",
    en: "Experience",
  },
  "svyaznoy-mobile-name": {
    ru: "Салон связи ООО 'Сеть Связной'",
    en: "Store of communication OOO 'Network Svyaznoy'",
  },
  menager: {
    ru: "Менеджер по продажам",
    en: "Menager",
  },
  "menager-desc-first": {
    ru: "Найти нужный подход к каждому, подобрать тот или иной товар — здесь требуется опыт коммуникации. И работа в салоне связи дала мне этот опыт.",
    en: "To find the right approach to everyone, to pick up a particular product — communication experience is required here. And working in a communication salon gave me this experience.",
  },
  "menager-desc-second": {
    ru: "Выстраивание отношений между людьми в той или иной сфере может принести свои результаты, именно поэтому так важно приносить людям пользу. Когда-нибудь они помогут и тебе.",
    en: "Building relationships between people in one area or another can bring results, that's why it is so important to benefit people. Someday they will help you too.",
  },
  "stock-market": {
    ru: "Биржа копирайтинга",
    en: "Stock-market of copywriting Etxt",
  },
  "copywriter-title": {
    ru: "Копирайтер",
    en: "Copyrighter",
  },
  "copywriter-desc": {
    ru: "Хобби написания сочинений и прозы плавно перешло в работу на бирже копирайтинга Etxt. В процессе работы укрепились мои некоторые стороны писательского мастерства. Этот опыт позволил обрести уверенность в написании текстов, чем я до сих пор увлекаюсь.",
    en: "The hobby of writing essays and prose smoothly turned into work on the Etxt copywriting exchange. In the process of work, some aspects of my writing skills have strengthened. This experience allowed me to gain confidence in writing texts, which I am still fond of.",
  },
  "date-nowdays": {
    ru: "2020 - настоящее время",
    en: "2020 - nowadays",
  },
  "portfolio-creation-title": {
    ru: "Создание проектов для портфолио, самообразование",
    en: "Creating projects for a portfolio, self-education",
  },
  "web-developer-title": {
    ru: "Web-разработчик",
    en: "Web-developer",
  },
  "developer-desc-first": {
    ru: "Со времени окончания университета прошло не так много времени, и я решил осваивать Web-разработку. Сначала, конечно, не догадываясь, что эта профессия настолько многогранна.",
    en: "Not much time has passed since graduating from university, and I decided to master Web development. At first, of course, without realizing that this profession is so multifaceted.",
  },
  "developer-desc-second": {
    ru: "Мне попался на глаза 3-х недельный марафон от Web-школы HTML-Academy по верстке сайтов, где я принял участие и дошел до конца. Я сверстал сайт, и понял, что мне это интересно. Дальше я стал углублять свои знания, изучая новые инструменты и технологии, необходимые для разработки сайтов. Здесь я понял, что абсолютно всех инструментов Web-разработчика можно не знать. Достаточно использовать фокусированно лишь то, что применимо к конкретной задаче.",
    en: "I caught sight of a 3-week marathon from the HTML-Academy Web School on site layout, where I took part and reached the end. I made up the site, and realized that I was interested in it. Then I began to deepen my knowledge by studying new tools and technologies necessary for website development. Here I realized that absolutely all the tools of a Web developer can not be known. It is enough to focus only on what is applicable to a specific task.",
  },
  "developer-desc-third": {
    ru: "Я стал посещать интенсивы и другие марафоны, чтобы укрепить навыки. Я продолжаю развиваться, параллельно пополняя свое портфолио новыми проектами.",
    en: "I started attending intensive courses and other marathons to strengthen my skills. I continue to develop, simultaneously replenishing my portfolio with new projects.",
  },
  "developer-desc-fourth": {
    ru: "На данный момент я уверенно могу создавать сайты, адаптируя их под все экраны устройств, а также используя современные подходы в Web-разработке.",
    en: "At the moment, I can confidently create websites by adapting them to all device screens, as well as using modern approaches in Web development.",
  },
  "developer-desc-fifth": {
    ru: "Web-разработка стала для меня нечто большим.",
    en: "Web development has become something big for me.",
  },
  "developer-desc-sixth": {
    ru: "И если Вам нужен сайт, нажмите на кнопку ниже, и я отвечу в скором времени.",
    en: "And if you need a website, click on the button below and I will respond soon.",
  },
  "education-title": {
    ru: "Образование",
    en: "Education",
  },
  "pupil-title": {
    ru: "Ученик",
    en: "Pupil",
  },
  "school-title": {
    ru: "Средняя Киземская Школа, Россия",
    en: "Secondary Kizema's School, Russia",
  },
  "school-desc-first": {
    ru: "Множество ошибок, немало успешных решений. Школа дает почувствовать и победы, и поражения. Познать свои силы, стать лучше. И за период обучения в школе я приобрел навык сочинять тексты, что в дальнейшем помогло мне в копирайтинге, а также я лучше стал выражать свои мысли.",
    en: "A lot of mistakes, a lot of successful solutions. The school makes you feel both victories and defeats. To know your strength, to become better. And during the period of studying at school, I acquired the skill of composing texts, which later helped me in copywriting, and I also began to express my thoughts better.",
  },
  "school-desc-second": {
    ru: "Чтобы создавать сайты, нужна концентрация внимания на деталях, усидчивость. Выполнение домашних работ, фокусировка на заданиях во время учебного процесса — помогли этот навык создать.",
    en: "To create websites, you need to focus on details, perseverance. Doing homework, focusing on tasks during the learning process — helped to create this skill.",
  },
  "student-title": {
    ru: "Студент",
    en: "Student",
  },
  "student-position": {
    ru: "Факультет математики и информатики, Россия, САФУ им. М. В. Ломоносова",
    en: "Faculty of Mathematics and Computer Science, Russia, M. V. Lomonosov NARFU",
  },
  "student-desc-first": {
    ru: "Университет дал мне понять, что только от твоих усилий зависят твои цели. Разработка Web-сайтов в будущем на момент обучения в университете не была еще моей целью, однако я делал попытки изучения WEB, но безрезультатно.",
    en: "The university has made it clear to me that your goals depend only on your efforts. The development of Web sites in the future at the time of studying at the university was not yet my goal, however, I made attempts to study the WEB, but to no avail.",
  },
  "student-desc-second": {
    ru: "Лишь к концу обучения я совместно с наставником, моим преподавателем создал небольшое web-приложение, позволяющее делать расчеты в системах массового обслуживания. Наставник объяснил принцип работы, я разобрался, и осуществил задачу.",
    en: "Only by the end of the training, I, together with my mentor, my teacher, created a small web application that allows you to make calculations in queuing systems. The mentor explained the principle of work, I figured it out, and carried out the task.",
  },
  "skills-title": {
    ru: "Навыки",
    en: "Skills",
  },
  "js-knowlanges-title": {
    ru: "Базовые знания JavaScript",
    en: "Base of JavaScript",
  },
  "html-skill-title": {
    ru: "Уверенные знания HTML5 / CSS3",
    en: "Confident knowledge of HTML5/CSS3",
  },
  "bem-skill-title": {
    ru: "Знание методологии BEM",
    en: "Knowledge of BEM methodology",
  },
  "prepros-title": {
    ru: "Работа с препроцессора&shy;ми SCSS, LESS, SASS на практике",
    en: "Working with the preproces&shy;sors SCSS, LESS, SASS in practice",
  },
  "skill-gulp-title": {
    ru: "Использование менеджера проектов gulp на практике",
    en: "Using the gulp Project Manager in practice",
  },
  "skill-pug-title": {
    ru: "Знание шаблонизатора HTML Pug",
    en: "Knowledge of the HTML Pug template engine",
  },
  "skill-emmet-title": {
    ru: "Использование Emmet и других плагинов редактора кода",
    en: "Using Emmet and other code Editor plugins",
  },
  "skill-figma-title": {
    ru: "Опыт работы с Figma и Photoshop",
    en: "Experience with Figma and Photoshop",
  },
  "sprites-title": {
    ru: "Использование SVG-спрайтов",
    en: "Using SVG Sprites",
  },
  "pixel-perfect-title": {
    ru: "Применение Pixel Perfect на практике",
    en: "Applying Pixel Perfect in practice",
  },
  "skill-sliders-title": {
    ru: "Подключение слайдеров и работа с ними на практике (slick, swiper)",
    en: "Connecting sliders and working with them in practice (slick, swiper)",
  },
  "skill-git-title": {
    ru: "Знания Git и GitHub",
    en: "Knowledge of Git and GitHub",
  },
  "sertificates-title": {
    ru: "Мои сертификаты",
    en: "My certificates",
  },
  "sertificate-first-title": {
    ru: "Практикум по созданию сайтов",
    en: "Website Creation Workshop",
  },
  "sertificate-first-desc": {
    ru: "Недельный практикум по созданию сайтов от Анны Блок помог лучше разобраться в основах верстки.",
    en: "A week-long workshop on website creation from Anna Blok helped to better understand the basics of layout.",
  },
  "sertificate-second-title": {
    ru: "Основы HTML / CSS - верстка сайтов с нуля",
    en: "HTML/CSS basics - website layout from scratch",
  },
  "sertificate-second-desc": {
    ru: "Данный курс был пройден за 1 месяц, где я узнал о новых подходах в WEB-разработке, а также разобрался в основах HTML и CSS.",
    en: "This course was completed in 1 month, where I learned about new approaches in WEB development, and also understood the basics of HTML and CSS.",
  },
  "sertificate-js-title": {
    ru: "Данный курс был пройден за 1 месяц, где я узнал о новых подходах в WEB-разработке, а также разобрался в основах HTML и CSS.",
    en: "This course was completed in 1 month, where I learned about new approaches in WEB development, and also understood the basics of HTML and CSS.",
  },
  "sertificate-js-desc": {
    ru: "Данный курс я прошел за 4 дня, узнав основы Javascript и jQuery.",
    en: "I completed this course in 4 days, learning the basics of Javascript and jQuery.",
  },
  "my-accomplishment-title": {
    ru: "Мои достижения",
    en: "My accomplishment",
  },
  "graduation-from-school-title": {
    ru: "Окончание школы",
    en: "Graduation from school",
  },
  "town-title": {
    ru: "Кизема, Россия",
    en: "Kizema, Russia",
  },
  "graduation-from-school-desc": {
    ru: "Школу я закончил на 4 и 5, что считаю одним из моих достижений.",
    en: "I graduated from school at 4 and 5, which I consider one of my achievements.",
  },
  "graduation-from-university-title": {
    ru: "Окончание университета",
    en: "Graduation from university",
  },
  "graduation-from-university": {
    ru: "САФУ, факультет математики и информатики, Россия",
    en: "SAFU, Faculty of Mathematics and Computer Science, Russia",
  },
  "graduation-from-university-desc": {
    ru: "Защита дипломной работы на 5, и в целом то, что я прошел путь до конца, также отношу к моим достижениям.",
    en: "The defense of the thesis for 5, and in general, the fact that I went all the way to the end is also attributed to my achievements.",
  },
  "diary-title": {
    ru: "Ведение ежедневника",
    en: "Keeping a diary",
  },
  "diary-desc": {
    ru: "В октябре 2021 года я прошел интенсив по самодисциплине, благодаря чему стал вести ежедневник. Каждый день, вплоть до этого дня я веду записи в своем ежедневнике, записывая цели на день каждое утро.",
    en: "In October 2021, I took an intensive self-discipline course, thanks to which I began to keep a diary. Every day, up to this day, I keep notes in my diary, writing down the goals for the day every morning.",
  },
  "blind-typing-title": {
    ru: "Навык слепой печати на клавиатуре",
    en: "The skill of blind typing on the keyboard",
  },
  "blind-typing-desc": {
    ru: "К своим достижениям также могу отнести навык слепой печати на клавиатуре. В двух раскладках: русская и английская. Скорость печатания ~ 160 символов в минуту.",
    en: "I can also attribute the skill of blind typing on the keyboard to my achievements. In two layouts: Russian and English. The printing speed is ~ 160 characters per minute.",
  },
  "write-resume": {
    ru: "Написать мне",
    en: "Write to me",
  },
  "print-resume": {
    ru: "Распечатать резюме",
    en: "Print resume",
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
