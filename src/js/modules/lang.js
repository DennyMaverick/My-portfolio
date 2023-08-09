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
    ru: "Добрый час, меня зовут Денис, и я занимаюсь WEB-разработкой. Создание сайтов — то, что нравится и приносит мне удовольствие.",
    en: "Good hour, my name is Denis, and I do web-developing. I like to create sites. It gives me pleasure.",
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
    en: "I graduated from school with 4 and 5, that I consider one of my achievements.",
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
  "hire-me-vk": {
    ru: "ВКонтакте",
    en: "VKontakte",
  },
  "hire-me-telegram": {
    ru: "Телеграм",
    en: "Telegram",
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
    ru: "Время на работу ~ 20 ч",
    en: "Time to work ~ 20 hours",
  },
  "link-to-the-git-archee": {
    ru: "Ссылка на репозиторий GitHub / более подробное описание проекта",
    en: "Link to the GitHub repository / more detailed description of the project",
  },

  // Modal window Web-templates
  "web-templates-title": {
    ru: "Портфолио Web-templates",
    en: "Portfolio Web-templates",
  },
  "client-title-web-templates": {
    ru: "Личный сайт:",
    en: "Personal site:",
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
    ru: "При наведении на иконку луны (солнца) появляется всплывающее окно-подсказка с выбором темы",
    en: "When you hover over the moon (sun) icon, a pop-up window appears with a choice of theme",
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
    ru: "Время на работу ~ 20 ч",
    en: "Time to work ~ 20 h",
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
    ru: "Проект 'Мечта на колесах' или 'Dream On Wheels' был создан в учебных целях, чтобы закрепить навыки работы с gulp и препроцессором LESS.",
    en: "The 'Dream On Wheels' project was created for educational purposes to reinforce the skills of working with gulp and the LESS preprocessor.",
  },
  "dream-on-wheels-desc-two": {
    ru: "Проект был сначала создан, используя более упрощенную структуру, работа с препроцессором осуществлялась через стороннюю программу - компилятор WinLess. Далее проект был полностью переделан, используя gulp. Работая над данным проектом, были использованы следующие инструменты, технологии:",
    en: "The project was first created using a more simplified structure, work with the preprocessor was carried out through a third-party program - the WinLess compiler. Next, the project was completely redone using gulp. Working on this project, the following tools and technologies were used:",
  },
  "time-dream-on-wheels": {
    ru: "Время на работу ~ 26 ч",
    en: "Time to work ~ 26 h",
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
    ru: "Также добавлен переключатель языков на русский и английский",
    en: "Also the language switcher has been added to the project for Russian and English",
  },
  "time-converter": {
    ru: "Время на работу ~ 18 ч",
    en: "Time to work ~ 18 ч",
  },

  // Oxygen

  "client-oxygen": {
    ru: "Web-школа От 0 до 1",
    en: "Web-school from 0 to 1",
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
    ru: "Время на работу ~ 8.5 ч",
    en: "Time to work ~ 8.5 h",
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

const repeatElems = {
  "next-functional": {
    ru: "При работе над проектом был реализован следующий функционал:",
    en: "During the work on the project, the following functionality was implemented:",
  },
  "client-title-learn-project": {
    ru: "Учебный проект:",
    en: "Learn project:",
  },
  "technologies-desc": {
    ru: "Работая над данным проектом, были использованы следующие инструменты, технологии:",
    en: "Working on this project, the following tools, technologies were used:",
  },
  "client-WebCademy": {
    ru: "Web-школа WebCademy",
    en: "Web-school WebCademy",
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
    ru: "Плагин Chrome Pixel Perfec",
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
  "plugins-tool": {
    ru: "Плагины Visual Studio Code: Emmet, Live Server, Path AutoComplete, AutoClose Tag и др.",
    en: "Visual Studio Code plugins: Emmet, Live Server, Path AutoComplete, AutoClose Tag, etc.",
  },
  "adaptive-tool": {
    ru: "Адаптирование сайта под смартфоны, планшеты и ноутбуки",
    en: "Adapting the site to all device screens",
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
