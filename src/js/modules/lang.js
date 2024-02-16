//* =========== Объект с переводом страницы ==============

const langs = {
  // === title ===
  title: {
    ru: "Денис, Frontend-разработчик",
    en: "Denis, Frontend Developer",
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
    ru: "Frontend-разработчик",
    en: "Frontend Developer",
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

  // ==== work titles
  "title-work-archi": {
    ru: "Арчи",
    en: "Archee",
  },
  "title-work-web-templates": {
    ru: "Портфолио Pet&nbsp;-&nbsp;проекты",
    en: "Portfolio Pet-projects",
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
    ru: "Добрый день, меня зовут Денис. Уже около 5 лет я создаю сайты.",
    en: "Good hour, my name is Denis. I have been making web-sites about 5 years.",
  },
  "about-part-two": {
    ru: "В чем моё основное отличие от других веб-разработчиков? Во-первых, это подход к работе. Сайты, созданные мной, проходят проверку на валидность, кроссбраузерность, а также являются оптимизированными, адаптивными и семантически верными. Это значит, что ваш сайт будет работать во всех современных браузерах, при любом разрешении экрана стабильно и быстро.",
    en: "What is my main difference from other web-developers? Firstly, I use modern aproach in my work. I make web-sites that are valid, cross-browsed, optimized and semantic right. It means that your web-site will work stable and fast in all modern browsers using any screen resolution.",
  },
  "about-part-three": {
    ru: "Во-вторых, я работаю с прозрачной системой оплаты. Вы платите мне за работу, проделанную мной в часах. Вначале нашего знакомства, я оцениваю макет, и говорю, сколько часов мне потребуется на разработку сайта, подробно описывая вам, за что вы платите. Оплата за работу фиксированная, 4$ за час разработки. Таким образом, вы полностью видите, почему стоимость сайта является именно такой, какой я ее озвучиваю, чтобы убедиться в том, что эти цифры я взял не из воздуха :)",
    en: "Secondly, I work with a transparent payment system. You pay me for work that I do in hours. At the beginning of our meeting, I evaluate the layout and tell you how many hours it will take me to develop the web-site, describing in detail to you what you are paying for. The payment for the work is fixed, $4 per hour of work. Thus, you can fully see why the cost of the site is exactly what I am voicing it to make sure that I did not pull these numbers out of thin air :)",
  },
  "about-part-four": {
    ru: "В-третьих, я могу помочь вам выбрать подходящий хостинг для расположения вашего сайта в сети Интернет, если у вас возникнут трудности с этим. ",
    en: "Thirdly, I can help you choose the appropriate hosting for placing your website on the Internet if you have any difficulties with this.",
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
    en: "Work Experience",
  },
  "svyaznoy-mobile-name": {
    ru: "Салон связи ООО &#171;Сеть Связной&#187;",
    en: "Mobile phone store OOO &#171;Network Svyaznoy&#187;",
  },
  menager: {
    ru: "Менеджер по продажам",
    en: "Menager",
  },
  "menager-desc-first": {
    ru: "Работая менеджером по продажам, я имел следующие задачи и обязанности:",
    en: "When I had been working as a menager I had next tasks and responsibilities:",
  },
  "menager-first-item": {
    ru: "Выстраиваиние отношений с клиентами",
    en: "Building relationships with clients",
  },
  "menager-second-item": {
    ru: "Продажа смартфонов, компьютерной техники и допонительных продуктов",
    en: "Sale of smartphones, computer equipment and additional products",
  },
  "menager-third-item": {
    ru: "Работа с кассой",
    en: "Working with the cash register",
  },
  "menager-fourth-item": {
    ru: "Оформление финансовых продуктов: кредитные карты, рассрочки",
    en: "Registration of financial products: credit cards, installments",
  },
  "menager-fifth-item": {
    ru: "Подключение новых абонентов к операторам связи: МТС, Теле2, Мегафон, Билайн, Йота",
    en: "Connecting new subscribers to telecom operators: MTS, Tele2, Megafon, Beeline, Yota",
  },
  "menager-sixth-item": {
    ru: "Подготовка денежных средств к инкассации",
    en: "Preparation of funds for collection",
  },
  "menager-desc-second": {
    ru: "Работая в сфере продаж я развил навык коммуникабельности.",
    en: "Working in sales, I have developed communication skills.",
  },
  "stock-market": {
    ru: "Биржа копирайтинга ETXT",
    en: "Stock-market of copywriting ETXT",
  },
  "copywriter-title": {
    ru: "Копирайтер",
    en: "Copyrighter",
  },
  "copywriter-desc": {
    ru: "Работая копирайтером, я выполнял следующие задачи:",
    en: "Working as a copywriter, I performed the following tasks:",
  },
  "copywriter-first-item": {
    ru: "Написание текстов на заказ, на тему новых информационных технологий",
    en: "Writing custom texts on the topic of new information technologies",
  },
  "copywriter-second-item": {
    ru: "Проверка текста на уникальность",
    en: "Checking the text for uniqueness",
  },
  "copywriter-third-item": {
    ru: "Поиск источников информации",
    en: "Search for information sources",
  },
  "copywriter-fourth-item": {
    ru: "Создание структуры текста, опираясь на другие источники",
    en: "Creating a text structure based on other sources",
  },
  "copywriter-fifth-item": {
    ru: "Поиск клиентов для продажи текстов",
    en: "Search for customers to sell texts",
  },
  "copywriter-six-item": {
    ru: "Ссылка на отзывы",
    en: "Link to reviews",
  },
  "date-nowdays": {
    ru: "2020 - настоящее время",
    en: "2020 - nowadays",
  },
  "portfolio-creation-title": {
    ru: "Создание проектов для портфолио, самообразование",
    en: "Creating projects for a portfolio, self-education",
  },
  "freelance-time-title": {
    ru: "2023 - настоящее время",
    en: "2023 - nowadays",
  },
  "web-developer-position-title": {
    ru: "Начинающий Frontend-разработчик",
    en: "Junior Frontend Developer",
  },
  "freelance-title": {
    ru: "Доработка сайта-портфолио / Фриланс",
    en: "Finalization of the portfolio - website / Freelancing",
  },
  "freelancer-title": {
    ru: "Frontend-разработчик / Фрилансер",
    en: "Frontend Developer / Freelancer",
  },
  "freelancer-desc-first": {
    ru: "Мой сайт-портфолио полностью готов. Сейчас я открыт к заказам по веб-разработке, развиваюсь как Frontend-разработчик и создаю интересные проекты.",
    en: "My portfolio site is completely ready. Now I am open to web development orders, developing as a Frontend Developer and creating interesting projects.",
  },
  "developer-desc-first": {
    ru: "Со времени окончания университета прошло не так много времени, и я решил осваивать Web-разработку. Сначала, конечно, не догадываясь, что эта сфера так многогранна.",
    en: "Not much time has passed since graduating from university, and I decided to master Web development. At first, of course, without realizing that this profession is so multifaceted.",
  },
  "developer-desc-second": {
    ru: "Сначала я прошел 3-х недельный марафон от Web-школы HTML-Academy по верстке сайтов, где я принял участие, дойдя до конца. Я сверстал сайт, и понял, что мне это интересно. Дальше я стал углублять свои знания, изучая новые инструменты и технологии, необходимые для разработки сайтов.",
    en: "First, I went through a 3-week marathon from the HTML Academy Web School on site layout, where I took part, reaching the end. I made up the site, and realized that I was interested in it. Then I began to deepen my knowledge by learning new tools and technologies necessary for website development.",
  },
  "developer-desc-third": {
    ru: "Я стал посещать интенсивы и другие марафоны, чтобы укрепить навыки, продолжая развиваться в сфере веб-разработки, параллельно пополняя свое портфолио новыми проектами.",
    en: "I started attending intensive courses and other marathons to improve my skills, continuing to develop in the field of web development, while simultaneously replenishing my portfolio with new projects.",
  },
  "developer-desc-fourth": {
    ru: "На данный момент я уверенно могу создавать сайты, адаптируя их под экраны мобильных устройств и планшеты, используя современные подходы в веб-разработке.",
    en: "At the moment, I can confidently create websites, adapting them to the screens of mobile devices and tablets, using modern approaches in web development.",
  },
  "developer-desc-sixth": {
    ru: "Если Вам нужен сайт, нажмите на кнопку ниже для связи со мной.",
    en: "If you need a website, click on the button below to contact me.",
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
    ru: "За время обучения в школе я приобрел следующие навыки:",
    en: "During my time at school, I acquired the following skills:",
  },
  "school-desc-second": {
    ru: "Чтобы создавать сайты, нужна концентрация внимания на деталях, усидчивость. Школа и университет помогли эти навыки приобрести.",
    en: "To create websites, you need to focus on details and perseverance. School and university helped to acquire these skills.",
  },
  "school-first-item": {
    ru: "Повышение концентрации и усидчивость",
    en: "Increased concentration and perseverance",
  },
  "school-second-item": {
    ru: "Умение красиво излагать свои мысли",
    en: "The ability to express your thoughts beautifully",
  },
  "school-third-item": {
    ru: "Умение принимать поражения",
    en: "The ability to accept defeat",
  },
  "school-fourth-item": {
    ru: "Умение выступать перед публикой",
    en: "The ability to perform in front of an audience",
  },
  "school-fifth-item": {
    ru: "Умение управлять своим временем",
    en: "The ability to manage your time",
  },
  "student-title": {
    ru: "Студент",
    en: "Student",
  },
  "student-position": {
    ru: "Факультет математики и информатики, Россия, САФУ им. М. В. Ломоносова",
    en: "Russian Technological University in Information Technology, Northern (Arctic) Federal University (NArFU)",
  },
  "student-desc-first": {
    ru: "Университет дал мне понять, что успех прямо пропорционален усилиям. Разработка web-сайтов в будущем на момент обучения в университете не была еще моей целью, однако я делал попытки изучения веб-технологий.",
    en: "The university has made it clear to me that success depend only on your efforts. The development of web-sites in the future was not my goal at the time of studying at the university, however, I made attempts to study web-technologies.",
  },
  "student-desc-second": {
    ru: "К концу обучения я совместно с наставником, моим преподавателем, создал web-приложение, позволяющее делать расчеты в системах массового обслуживания.",
    en: "By the end of my studies, I, together with my mentor, my teacher, created a web application that allows you to make calculations in queuing systems.",
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

  "pixel-perfect-title": {
    ru: "Применение Pixel Perfect на практике",
    en: "Applying Pixel Perfect in practice",
  },
  "skill-sliders-title": {
    ru: "Подключение слайдеров и работа с ними на практике (slick, swiper)",
    en: "Connecting sliders and working with it in practice (slick, swiper)",
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
    ru: "Практикум по созданию сайтов от Анны Блок помог лучше разобраться в основах верстки.",
    en: "A week-long workshop on website creation from Anna Blok helped to better understand the basics of layout.",
  },
  "sertificate-second-title": {
    ru: "Основы HTML / CSS - верстка сайтов с нуля",
    en: "HTML/CSS basics - website layout from scratch",
  },
  "sertificate-second-desc": {
    ru: "После прохождения данного курса я узнал о новых подходах в web-разработке, а также разобрался в основах HTML и CSS.",
    en: "After completing this course, I learned about new approaches in web development, as well as the basics of HTML and CSS.",
  },
  "sertificate-js-desc": {
    ru: "Пройдя данный курс я узнал основы Javascript и jQuery.",
    en: "After completing this course, I learned the basics of Javascript and jQuery.",
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
    ru: "Киземская средняя школа, Россия",
    en: "Kizema Secondary School, Russia",
  },
  "graduation-from-school-desc": {
    ru: "Школу я закончил на 4 и 5, что считаю одним из моих достижений.",
    en: "I graduated from school with 4 and 5, that I consider one of my achievements.",
  },
  "graduation-from-university-title": {
    ru: "Окончание университета",
    en: "Graduation from university",
  },
  "graduation-from-university": {
    ru: "САФУ, факультет математики и информатики, Россия",
    en: "Russian Technological University in Information Technology, Northern (Arctic) Federal University (NArFU)",
  },
  "graduation-from-university-desc": {
    ru: "Защита дипломной работы на 5, и в целом то, что я прошел путь до конца, также отношу к моим достижениям.",
    en: "The defense of the thesis for 5, and in general, the fact that I went all the way to the end is also attributed to my achievements.",
  },
  "diary-title-date": {
    ru: "2021 - настоящее время",
    en: "2021 - nowadays",
  },
  "diary-title": {
    ru: "Ведение ежедневника",
    en: "Keeping a diary",
  },
  "diary-desc": {
    ru: "В октябре 2021 года я прошел один интенсив, благодаря которому стал вести ежедневник.",
    en: "In October 2021, I took one intensive course, thanks to which I began to keep a diary.",
  },
  "blind-typing-title": {
    ru: "Навык слепой печати на клавиатуре",
    en: "The skill of blind typing on the keyboard",
  },
  "blind-typing-desc": {
    ru: "Данный навык помогает существенно быстрее делать сайты. Я обучился ему приблизительно за 2 месяца регулярной работы на онлайн-тренажере. Скорость печатания ~ 160 символов в минуту в двух раскладках: английской и русской.",
    en: "This skill helps to make websites much faster. I learned it in about 2 months of regular work on the online simulator. The printing speed is ~ 160 characters per minute in two layouts: English and Russian.",
  },
  "write-resume": {
    ru: "Написать мне",
    en: "Write to me",
  },
  "print-resume": {
    ru: "Распечатать резюме",
    en: "Print resume",
  },
  // Modal window HIRE ME
  "modal-griding-title": {
    ru: "Здравствуйте!",
    en: "Good hour!",
  },
  "griding-desc": {
    ru: "Вы можете написать мне на почту или отправить сообщение через форму ниже, и я отвечу в ближайшее время. Также вы можете связаться со мной через социальные сети.",
    en: "You can email me or send a message using the form below, and I will respond as soon as possible. Also you can keep in touch with me in social networks.",
  },
  "modal-hire-me-name": {
    ru: "Ваше имя",
    en: "Your name",
  },
  "modal-hire-me-e-mail": {
    ru: "Адрес Вашей электронной почты",
    en: "Address of your e-mail",
  },
  "hire-me-btn": {
    ru: "Отправить",
    en: "Send",
  },
  "hire-me-your-message": {
    ru: "Ваше сообшение",
    en: "Your message",
  },
  // Modal window Archee
  "archee-title": {
    ru: "Проект Арчи",
    en: "Archee Project",
  },
  "archee-subtitle": {
    ru: "Проект с марафона по верстке:",
    en: "Project from the layout marathon:",
  },
  "archee-desc-one": {
    ru: "Проект был создан в рамках марафона по верстке от CodeQuest. Марафон длился 5 недель.",
    en: "The project was created as part of the CodeQuest layout marathon. The marathon lasted 5 weeks.",
  },
  "archee-desc-two": {
    ru: "Целью марафона была практика, использование новых подходов в web-разработке, а также улучшить навыки в gulp, scss и методологии BEM-naming.",
    en: "The goal of the marathon was to practice, use new approaches in web development, as well as improve skills in gulp, scss and BEM-naming methodology.",
  },
  "archee-desc-three": {
    ru: "На марафоне проводились онлайн-встречи, где мы обсуждали блоки кода, что нужно было сверстать. К следующей живой трансляции наставник объяснял непонятные моменты, после этого вносились некоторые правки в проект, чтобы его улучшить, сохраняя при этом свои варианты наработок.",
    en: "Online meetings were held at the marathon, where we discussed the blocks of code that needed to be made up. By the next live broadcast, the mentor explained incomprehensible moments, after that some edits were made to the project in order to improve it, while maintaining their own versions of developments.",
  },
  "archee-desc-four": {
    ru: "Таким образом марафон был успешно пройден, где я получил новый опыт работы, используя современные подходы при разработке сайтов.",
    en: "Thus, the marathon was successfully completed, where I gained new work experience using modern approaches in website development.",
  },
  "archee-desc-five": {
    ru: "В проекте используется компонентный подход: scss разбит на отдельные блоки, что позволяет лучше ориентироваться в коде, модифицировать его и поддерживать в дальнейшем.",
    en: "The project uses a component approach: scss is divided into separate blocks, which allows you to better navigate the code, modify it and maintain it in the future.",
  },
  "archee-desc-six": {
    ru: "Для удобства используются миксины в scss. Это отдельные мини-функции, позволяющие сокращать код и работать быстрее.",
    en: "Mixins in scss are used for convenience. These are separate mini-functions that allow you to shorten the code and work faster.",
  },
  "archee-time": {
    ru: "Время на работу ~ 50 ч",
    en: "Time to work ~ 50 hours",
  },
  "link-to-the-git-archee": {
    ru: "Ссылка на репозиторий GitHub / более подробное описание проекта",
    en: "Link to the GitHub repository / more detailed description of the project",
  },

  // Modal window Web-templates
  "web-templates-title": {
    ru: "Портфолио Pet-проекты",
    en: "Portfolio Pet-projects",
  },
  "client-title-web-templates": {
    ru: "Личный сайт:",
    en: "Personal site:",
  },
  "web-templates-common-desc": {
    ru: "Данный проект является сайтом - портфолио, которое содержит мои pet - проекты. Что такое pet-проекты? Это сайты или веб-приложения, которые были разработаны в учебных целях для закрепления материала по веб-разработке.",
    en: "This project is the portfolio-site that consists of my pet-projects. What is the pet-projects? These are the web-sites or web-applications that was developed as the learn projects for improve knowlange in web-developing.",
  },
  "web-templates-desc-two": {
    ru: "Функция переключения темы (две цветовых схемы: светлая и темная)",
    en: "Theme switching function(two color schemes: light and dark)",
  },
  "web-templates-desc-three": {
    ru: "Плавная смена цвета при переключении слайдов в проекте Theme's Switcher",
    en: "Smooth color change when switching slides in a project Theme's Switcher",
  },
  "web-templates-desc-four": {
    ru: "Добавлена функция переключения языков (более подробно о том как это было реализовано можно посмотреть перейдя по",
    en: "It was added the function to switch the language (more detailed information can be finded by clicking to",
  },
  "web-templates-link": {
    ru: "ссылке",
    en: "the link",
  },
  "web-templates-desc-five": {
    ru: "Дизайн карточек проектов был самостоятельно реализован в программе Photoshop",
    en: "The design of project cards was independently implemented in Photoshop",
  },
  "more-info": {
    ru: "Наиболее подробную информацию о проекте вы сможете найти в файле Readme.md перейдя по",
    en: "You can find the most detailed information about the project in the Readme.md file by clicking on",
  },
  "time-web-templates": {
    ru: "Время на работу ~ 40 ч",
    en: "Time to work ~ 40 h",
  },

  // Modal window Dream On Wheels

  "title-dream-on-wheels": {
    ru: "Мечта на колесах",
    en: "Dream On Wheels",
  },
  "dream-on-wheels-type": {
    ru: "Сайты-визитки",
    en: "Visit-sites",
  },

  "dream-on-wheels-desc-one": {
    ru: "Проект 'Мечта на колесах' или &#171;Dream On Wheels&#187; был создан в учебных целях, чтобы закрепить навыки работы с gulp и препроцессором LESS.",
    en: "The 'Dream On Wheels' project was created for educational purposes to reinforce the skills of working with gulp and the LESS preprocessor.",
  },
  "dream-on-wheels-desc-two": {
    ru: "Проект был сначала создан, используя более упрощенную структуру, работа с препроцессором осуществлялась через стороннюю программу - компилятор WinLess. Далее проект был полностью переделан, используя gulp. Работая над данным проектом, были использованы следующие инструменты, технологии:",
    en: "The project was first created using a more simplified structure, work with the preprocessor was carried out through a third-party program - the WinLess compiler. Next, the project was completely redone using gulp. Working on this project, the following tools and technologies were used:",
  },
  "time-dream-on-wheels": {
    ru: "Время на работу ~ 45 ч",
    en: "Time to work ~ 45 h",
  },

  // Currency Converter
  "currency-converter-title": {
    ru: "Конвертёр валют на JavaScript",
    en: "Currency converter in JavaScript",
  },
  "currency-converter-type": {
    ru: "Проекты с элементами интерфейса на javaScript",
    en: "Projects with interface elements in javaScript",
  },
  "converter-desc-one": {
    ru: "Возможность видеть текущий курс доллара, евро и фунта стерлинга",
    en: "Ability to see the exchange rate of the dollar, euro and pound sterling",
  },
  "converter-desc-two": {
    ru: "Если после обновления курса валют одна из валют снизилась в цене, курс отображается зеленым, иначе - красным",
    en: "If, after updating the exchange rate, one of the currencies has decreased in price, the rate is displayed in green, otherwise - in red",
  },
  "converter-desc-three": {
    ru: "Возможность узнавать курс рубля в долларах, евро и фунтах стерлинга (достаточно ввести значение рубля в соответствующее текстовое поле и выбрать, в какую валюту нужно конвертировать) относительно текущего курса валют",
    en: "The ability to find out the ruble exchange rate in dollars, euros and pounds sterling (just enter the ruble value in the corresponding text field and choose which currency to convert into) relative to the current exchange rate",
  },
  "converter-desc-four": {
    ru: "В проект добавлен переключатель тем используя светлую, темную и лунную цветовые схемы",
    en: "A theme switcher has been added to the project using light, dark and moon color schemes",
  },
  "converter-desc-five": {
    ru: "Добавлен переключатель языков на русский и английский",
    en: "The language switcher has been added to the project for Russian and English",
  },
  "converter-desc-six": {
    ru: "Добавлена функция увеличения - уменьшения значений в текстовом поле ввода при прокручивании колесика мыши",
    en: "Added function to increase - decrease values ​​in the text input field when scrolling the mouse wheel",
  },
  "converter-desc-seven": {
    ru: "Данный проект является pet-проектом, и есть вероятность что сейчас, запустив его, Вы увидите его с уже обновленными функциями, новыми темами или языками",
    en: "This project is a pet project, and there is a chance that now, launching it, you will see it with already updated functions, new themes or languages",
  },
  "time-converter": {
    ru: "Время на работу ~ 50 ч",
    en: "Time to work ~ 50 h",
  },

  // Oxygen

  "client-oxygen": {
    ru: "Web-школа От 0 до 1",
    en: "Web-school from 0 to 1",
  },
  "oxygen-time": {
    ru: "Время на работу ~ 29 ч",
    en: "Time to work ~ 29 h",
  },
  "oxygen-desc-one": {
    ru: "Работа над проектом имела цель попрактиковаться в методологии BEM-naming. Каркас страницы был создан под руководством наставника. Весь Css и JavaScript был написан мной самостоятельно.",
    en: "The work on the project was aimed at practicing the BEM-naming methodology. The page skeleton was created under the guidance of a mentor. All Css and JavaScript was written by myself",
  },
  "oxygen-desc-two": {
    ru: "При наводе на элемент навигации, появляется плавное подчеркивание. Через JavaScript реализовано так, чтобы при наведении на любую из ссылок меню, все подчеркивания убирались, а у нужной это подчеркивание оставалось, а при отводе мыши, подчеркивание оставалось у самой первой ссылки",
    en: "When hovering over a navigation element, a smooth underline appears. Through JavaScript, it is implemented so that when you hover over any of the menu links, all the underlines are removed, while the necessary one has this underline, and when the mouse is released, the underline remains at the very first link",
  },
  "oxygen-desc-three": {
    ru: "При наведении (отведении) мыши на логотип происходит эффект смены цвета у заголовка и подзаголовка главного экрана лэндинга (также происходит при клике на иконку мышки или при клике на сам заголовок)",
    en: "When you hover (move) the mouse over the logo, the effect of changing the color of the title and subtitle of the landing main screen occurs (also happens when you click on the mouse icon or when you click on the title itself)",
  },
  "oxygen-desc-four": {
    ru: "При скролле вниз реализовано через JavaScript, чтобы меню всегда отображалось сверху, добавляя к блоку навигации тень и меняя цвет фона",
    en: "When scrolling down, to always display the menu on top, adding a shadow to the navigation block and changing the background color",
  },
  "oxygen-desc-five": {
    ru: "При наведении на заголовки второго уровня у них появляется плавное подчеркивание. Также реализовано, что если текст будет располагаться в несколько строк, подчеркивание отображалось корректно",
    en: "When you hover over the headings of the second level, they have a smooth underline. It is also implemented that if the text is located in several lines, the underline was displayed correctly",
  },
  "oxygen-desc-seven": {
    ru: "При клике на меню-бургер высвечивается модальное окно с меню на всю область экрана (кликая на нужный пункт навигации в нем, окно закрывается и происходит плавный переход к контенту), также при клике на крестик, модальное окно закрывается",
    en: "When you click on the burger menu, a modal window is displayed with a menu for the entire screen area (by clicking on the desired navigation item in it, the window closes and there is a smooth transition to the content), and when you click on the cross, the modal window closes",
  },
  "oxygen-desc-eight": {
    ru: "При сужении окна блок портфолио, состоящий из грид-элементов, превращается в слайдер (slick slider), реализовано с помощью медиа-запросов (переключение слайдов осуществляется через свайп)",
    en: "When narrowing the window, the portfolio block, consisting of grid elements, turns into a slider (slick slider), implemented using media queries (slides are switched via a swipe)",
  },
  "oxygen-desc-nine": {
    ru: "При клике на 'Play' в блоке видео, происходит проигрывание ролика. При этом добавляются элементы управления и скрывается иконка 'Play'",
    en: "When you click on 'Play' in the video block, the video will play. This adds controls and hides the 'Play' icon",
  },
  "oxygen-desc-ten": {
    ru: "Ниже блока видео реализован адаптивный слайдер, полностью сделанный на JavaScript(на экранах для смартфонов стрелки навигации пропадают, переключение слайдов происходит через точки, на экранах планшетов и компьютеров переключение слайдов осуществляется через стрелки)",
    en: "Below the video block, an adaptive slider is implemented, completely made in JavaScript (on screens for smartphones, the navigation arrows disappear, the slides switch through dots, on the screens of tablets and computers, the slides switch through the arrows)",
  },
  "oxygen-desc-eleven": {
    ru: "В блоке Pricing отображается желтым цветом стандартный тариф, при наведении или при клике (на экранах смартфонов) на другие карточки происходит плавный выбор нужной карточки, при этом через JavaScript происходит удаление класса active у всех карточек и добавление этого класса выбранной",
    en: "In the Pricing block, the standard tariff is displayed in yellow, when you hover or click (on smartphone screens) on other cards, the desired card is smoothly selected, while using JavaScript, the active class is removed from all cards and this class is added to the selected one.",
  },
  "time-oxygen": {
    ru: "Время на работу ~ 20.5 ч",
    en: "Time to work ~ 20.5 h",
  },
  // Olivia
  "olivia-desc-one": {
    ru: "При скролле вниз навигационное меню отбрасывает тень (сделано через javascript) и остается всегда в видимости пользователя",
    en: "When scrolling down, the navigation menu casts a shadow (done via javascript) and remains always visible to the user",
  },
  "olivia-desc-two": {
    ru: "В секции с видео при нажатии на 'Play' кнопка 'Play' превращается в кнопку 'Pause', видео воспроизводится, а при наведении курсора у видео появляется затемняющая подложка, при отведении она пропадает",
    en: "In the video section, when you click on the 'Play' button, the 'Play' button turns into the 'Pause' button, the video is played, and when you hover over the video, a dimming background appears, when it is removed, it disappears",
  },
  "time-olivia-to-work": {
    ru: "Время на работу ~ 20 ч",
    en: "Time to work ~ 20 h",
  },
  // Thrivetalk
  "client-thrivetalk-title": {
    ru: "Сайт Thrivetalk",
    en: "The site Thrivetalk",
  },
  "thrivetalk-desc-one": {
    ru: "При сужении окна браузера появляется бургер-иконка, при клике на которую появляется мобильное меню навигации и overlay, запрещается scroll",
    en: "When narrowing the browser window, a burger icon appears, when clicked, a mobile navigation menu and overlay appear, scroll is prohibited",
  },
  "thrivetalk-desc-two": {
    ru: "При появлении мобильного меню навигации добавляется возможность закрыть это меню, кликнув на крестик или кликнув вне мобильного меню (при этом кликая на само меню, окно не закрывается)",
    en: "When the mobile navigation menu appears, the ability to close this menu by clicking on the cross or clicking outside the mobile menu is added (while clicking on the menu itself, the window does not close)",
  },
  "thrivetalk-desc-three": {
    ru: "При открытии мобильного окна навигации, меняя размер окна в большую сторону, мобильное меню закрывается и появляется стандартное меню (поэтому при переключении ориентации экрана из портретной в ландшафтную, например, у планшета, меню примет более удобный вид)",
    en: "When a mobile navigation window is opening, changing the size of the window to a large side, the mobile menu closes and the standard menu appears (therefore, when switching the screen orientation from portrait to landscape, for example, on a tablet, the menu will take on a more convenient look)",
  },
  "thrivetalk-desc-four": {
    ru: "Сайт защищен от переполнения контентом, при увеличении контента в блоках, все отображается корректно",
    en: "The site is protected from content overflow, when content is increasing in blocks, everything is displayed correctly",
  },
  "thrivetalk-sublime-text-plugins": {
    ru: "Плагины Sublime Text 3: Emmet, LiveReload, AutoFileName и другие",
    en: "Sublime Text 3 plugins: Emmet, LiveReload, AutoFileName and more",
  },
  "thrivetalk-time-to-work": {
    ru: "Время на работу ~ 23 ч",
    en: "Time to work ~ 23 h",
  },
  // Venom 2
  "venom-time-to-work": {
    ru: "Время на работу ~ 25 ч",
    en: "Time to work ~ 25 h",
  },
  // Калькулятор стоимости ремонта
  "calculator-title": {
    ru: "Калькулятор стоимости ремонта на JavaScript",
    en: "Calculator of rapairing cost in Javascript",
  },
  "calc-desc-one": {
    ru: "Возможность выбирать площадь квартиры, требуемой для ремонта, с помощью ползунка или стрелочек(около значения площади, щелкнув в текстовое поле), зная исходное значение цены за 1 квадратный метр - 6000 рублей. После этого произойдет автоматический расчет стоимости ремонта, исходя из следующих параметров:",
    en: "Possibility to choose the area of ​​the apartment required for repair using the slider or arrows (near the area value by clicking in the text field), knowing the initial price value for 1 square meter - 6000 rubles. After that, the repair cost will be automatically calculated based on the following parameters:",
  },
  "calc-desc-two": {
    ru: "Тип ремонта (косметический, капитальный или под ключ), выбрав один из пунктов, произойдет расчет ремонта соответственно: без увеличения цены, + 30% к стоимости ремонта и + 50% к стоимости ремонта",
    en: "Type of repair (cosmetic, major or turnkey), by selecting one of the items, the repair will be calculated accordingly: without price increase, + 30% to the repair cost and + 50% to the repair cost",
  },
  "calc-desc-three": {
    ru: "Тип дома (новострой или вторичка), выбрав один из пунктов, произойдет расчет ремонта соответственно: без изменения цены, + 10% к стоимости ремонта",
    en: "Type of house (new building or resale), by selecting one of the items, the repair will be calculated accordingly: without changing the price, + 10% to the repair cost",
  },
  "calc-desc-four": {
    ru: "Дополнительные опции (натяжные потолки, покраска стен, теплый пол), выбрав один из пунктов, произойдет расчет ремонта следующим образом: + 900 рублей за каждый квадратный метр при выборе опции 'Натяжные потолки', + 10% к стоимости при выборе опции 'Покраска стен' и + 10% к стоимости ремонта при выборе опции 'Теплый пол'",
    en: "Additional options (stretch ceilings, wall painting, warm floors), by selecting one of the items, the repair will be calculated as follows: + 900 rubles per square meter if you select the 'Stretch ceilings' option, + 10% to the cost if you select the 'Painting walls' option ' and + 10% to the cost of repairs when choosing the option 'Heated floor'",
  },
  "calc-desc-five": {
    ru: "Количество комнат (С, 1, 2, 3, 4 или 5, где С - это более экономичный вариант ремонта комнат), выбрав один из пунктов, произойдет следующий расчет ремонта: C (-20% от стоимости ремонта), от 1 до 2 комнат (без изменения цены), от 3 до 5 (+ 5% к стоимости ремонта)",
    en: "Number of rooms (C, 1, 2, 3, 4 or 5, where C is a more economical option for refurbishing rooms), selecting one of the items, the following repair calculation will occur: C (-20% of the repair cost), from 1 to 2 rooms (without price change), from 3 to 5 (+ 5% to the repair cost)",
  },
  "calc-time-to-work": {
    ru: "Время на работу ~ 20 ч",
    en: "Time to work ~ 20 h",
  },
  // ссылка о персональных данных
  "personal-data-text": {
    ru: "Нажимая кнопку 'Отправить', вы даете согласие на обработку персональных данных в соответствии с",
    en: "By clicking the 'Send' button, you consent to the processing of personal data in accordance with",
  },
  "personal-data-text-federal-low": {
    ru: "ФЗ о персональных данных",
    en: "the Federal Law on Personal Data",
  },
  "person-data-error-popup-text": {
    ru: "Пожалуйста, подтвердите согласие на обработку персональных данных",
    en: "Please, confirm your consent to the processing of personal data",
  },
  "contact-details-title": {
    ru: "Контактная информация",
    en: "Contact Details",
  },
  "item-fullname": {
    ru: "Мамлев Денис Игоревич",
    en: "Denis Mamlev",
  },
  "item-git-link": {
    ru: "Ссылка на GitHub профиль",
    en: "Link to GitHub profile",
  },
  "date-birth-day-text": {
    ru: "Дата рождения:",
    en: "Date of birth:",
  },
  "personal-statement-title": {
    ru: "О себе",
    en: "Personal Statement",
  },
  "personal-statement-text": {
    ru: "Frontend-разработчик, нацеленный на результат. Довожу поставленные задачи до конца, заинтересован в разработке веб-приложений и сайтов. За последние несколько лет я обучился разработке лэндингов и являюсь профессионалом в этом. У меня есть все необходимые инструменты для разработки, и я мотивирован улучшать качество своей работы.",
    en: "A self-motivated and ambitious Frontend Developer. I bring assigned tasks to completion, I am interested in web programming, such as developing apps and building websites. Over the past few years, I have learned how to develop landing pages and I am a professional in it. I have all the necessary development tools and I am motivated to improve the quality of my work.",
  },
  "hobbie-title-vk-group": {
    ru: "Ведение мотивационного сообщества вконтакте &#171;Ключ к мечте&#187;",
    en: "Maintaining a motivational community on VKontakte &#171;The Key to a Dream&#187;",
  },
  "vk-blogger-title": {
    ru: "Блогер",
    en: "Blogger",
  },
  "hobbie-description-vk-group": {
    ru: "Я являюсь автором сообщества &#171;Ключ к мечте&#187;. Публикую мотивационные посты. Это моё хобби.",
    en: "I am the author of the &#171;Key to the Dream&#187; community. I publish motivational posts. This is my hobby.",
  },
  "link-to-the-community": {
    ru: "Ссылка на сообщество",
    en: "The link to the community",
  },
  "hobbie-title-verse": {
    ru: "Написание стихов",
    en: "Writing poetry",
  },
  "poet-title": {
    ru: "Поэт",
    en: "Poet",
  },
  "hobbie-description-verse": {
    ru: "Пишу стихи, являюсь автором цикла стихотворений &#171;Из сна восставши&#187;.",
    en: "I write poetry, I am the author of the cycle of poems &#171;Rising from Sleep&#187;.",
  },
  "link-to-the-verse": {
    ru: "Ссылка на стихотворения",
    en: "Link to the poems",
  },
  "hobbie-title": {
    ru: "Мои хобби",
    en: "My hobbies",
  },
  "tutor-title": {
    ru: "Репетиторство по английскому языку",
    en: "English tutoring",
  },
  "tutor-position": {
    ru: "Репетитор",
    en: "Tutor",
  },
  "tutor-desc-one": {
    ru: "Во время учебы в университете я занимался репетиторством среди учащихся 2 - 7 классов.",
    en: "While studying at the university, I tutored students in grades 2 to 7.",
  },
  "tutor-desc-two": {
    ru: "Работая репетитором, я имел следующие задачи:",
    en: "Working as a tutor, I had the following tasks:",
  },
  "tutor-first-item": {
    ru: "Помощь в учебном процессе",
    en: "Help in the educational process",
  },
  "tutor-second-item": {
    ru: "Прорешивание домашнего задания",
    en: "Solving homework",
  },
  "tutor-third-item": {
    ru: "Помощь в ведении тетради для закрепления материала",
    en: "Help in maintaining a notebook to consolidate the material",
  },
  "poker-subtitle": {
    ru: "Онлайн-покер",
    en: "Online-poker",
  },
  "poker-title": {
    ru: "Игрок в покер",
    en: "Poker player",
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
  "telegram-footer": {
    ru: "Мой телеграм",
    en: "My telegram",
  },
  "vk-footer": {
    ru: "Моя страница вконтакте",
    en: "My page vk",
  },
  "github-footer": {
    ru: "Мой GitHub",
    en: "My GitHub",
  },
  "telegram-popup": {
    ru: "Мой телеграм",
    en: "My telegram",
  },
  "vk-popup": {
    ru: "Моя страница вконтакте",
    en: "My page vk",
  },
  "github-popup": {
    ru: "Мой GitHub",
    en: "My GitHub",
  },
}

const repeatTitles = {
  up: {
    ru: "Наверх",
    en: "Up",
  },
}

const afterElements = {
  open: {
    ru: "Открыть",
    en: " Open",
  },
}

const repeatElems = {
  "hire-me-vk": {
    ru: "ВКонтакте",
    en: "VKontakte",
  },
  "hire-me-telegram": {
    ru: "Телеграм",
    en: "Telegram",
  },
  "next-functional": {
    ru: "При работе над проектом был реализован следующий функционал:",
    en: "During the work on the project, the following functionality was implemented:",
  },
  "client-title-learn-project": {
    ru: "Учебный проект:",
    en: "Learn project:",
  },
  "client-title-pet-project": {
    ru: "Pet - проект:",
    en: "Pet - project:",
  },
  "technologies-desc": {
    ru: "Работая над данным проектом, были использованы следующие инструменты, технологии:",
    en: "Working on this project, the following tools, technologies were used:",
  },
  "client-WebCademy": {
    ru: "Web-школа WebCademy",
    en: "Web-school WebCademy",
  },
  "client-GloAcademy": {
    ru: "Web-школа Glo Academy",
    en: "Web-school Glo Academy",
  },
  "more-info-can-be-found": {
    ru: "Наиболее подробная информация об этом проекте находится",
    en: "More information about this project can be found",
  },
  "this-link": {
    ru: "этой ссылке",
    en: "this link",
  },
  here: {
    ru: "здесь",
    en: "here",
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
  "more-button": {
    ru: "Более подробно",
    en: "More details",
  },
  "scroll-smooth-function": {
    ru: "Реализована плавная прокрутка через javascript",
    en: "The smooth scrolling is implemented  via javascript",
  },
  "scss-tool": {
    ru: "Препроцессор SCSS",
    en: "Preprocessor SCSS",
  },
  "less-tool": {
    ru: "Препроцессор LESS",
    en: "Preprocessor LESS",
  },
  "sprites-title": {
    ru: "Использование SVG-спрайтов",
    en: "Using SVG Sprites",
  },
  "svg-sprite-tool": {
    ru: "Используется SVG-спрайт, чтобы обеспечить лучшую скорость загрузки сайта, отправляя меньше запросов на сервер",
    en: "Uses SVG sprite to provide better site loading speed by sending fewer requests to the server",
  },
  "jquery-slider": {
    ru: "JQuery (слайдер slick.js)",
    en: "JQuery (slider slick.js)",
  },
  "gulp-tool": {
    ru: "Менеджер проектов gulp",
    en: "Gulp Project Manager",
  },
  "git-tool": {
    ru: "Гит & ГитХаб",
    en: "Git & GitHub",
  },
  "pixel-perfect-tool": {
    ru: "Плагин Chrome Pixel Perfect",
    en: "Chrome Pixel Perfect Plugin",
  },
  "swiper-tool": {
    ru: "Слайдер Swiper.js",
    en: "Slider Swiper.js",
  },
  "favicon-tool": {
    ru: "Фавикон",
    en: "Favicon",
  },
  "code-editor-tool": {
    ru: "Редактор кода Visual Studio Code",
    en: "Visual Studio Code Editor",
  },
  "code-editor-tool-second": {
    ru: "Редактор кода Sumlime Text 3",
    en: "Sumlime Text 3 Code Editor",
  },
  "plugins-tool": {
    ru: "Плагины Visual Studio Code: Emmet, Live Server, Path AutoComplete, AutoClose Tag и др.",
    en: "Visual Studio Code plugins: Emmet, Live Server, Path AutoComplete, AutoClose Tag, etc.",
  },
  "fancy-box": {
    ru: "Подключение всплывающего окна для отображения видео, используя jQuery-библиотеку FancyBox",
    en: "Connecting a popup window to display a video using the FancyBox jQuery library",
  },
  "adaptive-tool": {
    ru: "Адаптирование сайта под смартфоны, планшеты и ноутбуки",
    en: "Adapting the site to all device screens",
  },
  "desktop-first-method": {
    ru: "При адаптировании сайта под другие устройства использовался метод Desktop First (сначала был сделан сайт под ПК, а затем под планшеты и мобильные устройства)",
    en: "When the site was adapting for other devices, the Desktop First method was used (first the site was made for a PC, and then for tablets and mobile devices)",
  },
  "burger-function": {
    ru: "Когда экран устройства достигает определенной ширины, происходит замена меню навигации главного экрана на меню - бургер (для этого используется JavaScript)",
    en: "When the device screen reaches a certain width, the main screen navigation menu is replaced with a burger menu (JavaScript is used for this)",
  },
  "design-improve": {
    ru: "Дизайн сайта был полностью переделан. После этого сайт стал живым и ярким",
    en: "The website design has been completely redesigned. After that, the site became alive and bright",
  },
  "content-created": {
    ru: "Весь контент, включая текст для сайта был придуман самостоятельно",
    en: "All content, including the text for the site, was invented independently",
  },
  "plugins-desc": {
    ru: "Работая с gulp были использованы следующие плагины:",
    en: "The following plugins have been used while working with gulp:",
  },
  "svg-sprite-description": {
    ru: "gulp-svg-sprite - плагин для работы с svg-спрайтами",
    en: "gulp-svg-sprite - plugin for working with svg sprites",
  },
  "gulp-plumber": {
    ru: "gulp-plumber - плагин для обработки ошибок",
    en: "gulp-plumber - error handling plugin",
  },
  "gulp-sourcemaps": {
    ru: "gulp-sourcemaps - плагин для навигации в коде в режиме разработки",
    en: "gulp-sourcemaps - plugin for code navigation in development mode",
  },
  "gulp-imagemin": {
    ru: "gulp-imagemin - плагин для минификации изображений",
    en: "gulp-imagemin - image minification plugin",
  },
  "gulp-babel": {
    ru: "gulp-babel- плагин для перевода JavaScript-скриптов в код, который станет поддерживаться устаревшими браузерами, тем самым повышая кроссбраузерность",
    en: "gulp-babel - plugin for translating JavaScript scripts into code that will be supported by legacy browsers, thereby increasing cross-browser compatibility",
  },
  "gulp-strips-comments": {
    ru: "gulp-strips-comments - плагин для удаления лишних комментариев, использовался в задаче при подключении сторонних библиотек и в отдельной задаче, подключающей JQuery",
    en: "gulp-strips-comments - plugin for removing unnecessary comments, used in the task when connecting third-party libraries and in a separate task connecting JQuery",
  },
  "gulp-uglify": {
    ru: "gulp-uglify - плагин, помогающий минифицировать JavaScript-код",
    en: "gulp-uglify - plugin to help minify JavaScript code",
  },
  "gulp-less": {
    ru: "gulp-less - плагин для компиляции LESS в CSS",
    en: "gulp-less - plugin for compiling LESS to CSS",
  },
  "gulp-webpack": {
    ru: "webpack, webpack-stream - npm-пакеты для работы с webpack в gulp, были включены в проект для использования модулей в JavaScript",
    en: "webpack, webpack-stream - npm packages for working with webpack in gulp, have been included in the project for using modules in JavaScript",
  },
  "link-to-the-project": {
    ru: "Ccылка на проект",
    en: "Link to the project",
  },
  "link-to-the-maket-figma": {
    ru: "Ссылка на макет Figma",
    en: "Link to the Figma layout",
  },
  "link-to-the-git": {
    ru: "Ссылка на репозиторий GitHub",
    en: "Link to the repositoriy GitHub",
  },
  "back-button": {
    ru: "Назад",
    en: "Back",
  },
  "next-button": {
    ru: "Вперед",
    en: "Next",
  },
  "title-work-venom": {
    ru: "Промосайт фильма &#171;Веном - 2&#187;",
    en: "Promo-site of the film &#171;Venom - 2&#187;",
  },
  nowadays: {
    ru: "настоящее время",
    en: "nowadays",
  },
}

// ====== Секция Search / placeholders

const placeholders = {
  name: {
    ru: "Напишите Ваше имя",
    en: "Write your name",
  },
  "e-mail": {
    ru: "Напишите Ваш e-mail",
    en: "Write your e-mail",
  },
  message: {
    ru: "Напишите здесь Ваше сообщение...",
    en: "Write here your message...",
  },
}

const langListItems = document.querySelectorAll(".lang-tool__item")
// Массив всех доступных языков
const allLangs = ["ru", "en"]

langListItems.forEach(function (item) {
  item.addEventListener("click", function () {
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
  hash = hash.substring(1)
  const langToolRuEl = document.querySelector('[data-lang="ru"]')
  const langToolEnEl = document.querySelector('[data-lang="en"]')
  // получение hash из строки браузера - #ru или #en

  if (hash == "ru") {
    langToolRuEl.classList.add("lang-tool--active")
    langToolEnEl.classList.remove("lang-tool--active")
  } else if (hash == "en") {
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

  // перевод всплывающих текстовых подсказок при наводе на ссылки / повторяющиеся элементы
  for (let key in repeatTitles) {
    // получение элементов в html, которые нужно перевести
    let elems = document.querySelectorAll(".lang-" + key)
    elems.forEach(function (elem) {
      if (elem && repeatTitles[key][hash]) {
        elem.title = repeatTitles[key][hash]
      }
    })
  }
  // Для плейсхолдеров
  for (let key in placeholders) {
    let elemPlaceholder = document.querySelector(".lang-placeholder-" + key)
    if (elemPlaceholder && placeholders[key][hash]) {
      elemPlaceholder.placeholder = placeholders[key][hash]
    }
  }

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
