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
    en: "Contact me",
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
    en: "Contact me",
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
    ru: "Frontend-разработчик,",
    en: "Frontend Developer,",
  },
  "web-designer": {
    ru: "UX / UI Дизайнер",
    en: "UX / UI Designer",
  },
  "visit-cards-subtitle": {
    ru: "Визитные карточки для компании",
    en: "Visit cards for a company",
  },
  "visit-cards-desc-one": {
    ru: "Каждая компания стремится быть узнаваемой и запоминающейся. Визитные карточки — это первое впечатление, которое остаётся в руках партнёров и клиентов. Я разработал современный, минималистичный дизайн визиток, отражающий стиль и характер бренда. Проект был создан в Adobe Photoshop в учебных целях, но с упором на реалистичный коммерческий подход и внимание к деталям.",
    en: "Every company strives to be recognizable and memorable. Business cards are the first impression left on partners and clients. I developed a modern, minimalist business card design that reflects the brand's style and character. The project was created in Adobe Photoshop for educational purposes, but with an emphasis on a realistic commercial approach and attention to detail.",
  },
  "visit-cards-desc-two": {
    ru: "Визитка имеет две стороны: лицевая сторона — логотип компании, имя сотрудника, должность, контакты и адрес офиса; оборотная сторона — акцент на логотип и фирменные цвета бренда, создающие запоминающееся визуальное впечатление.",
    en: "The business card has two sides: the front side features the company logo, employee name, job title, contact information, and office address; the back side emphasizes the logo and brand colors, creating a memorable visual impression.",
  },
  "visit-cards-desc-three": {
    ru: "Этот проект помог мне отточить навыки композиции, типографики и работы с фирменным стилем, а также вдохновил на создание целой серии корпоративных дизайнов.",
    en: "This project helped me hone my composition, typography, and branding skills, and inspired me to create a whole series of corporate designs.",
  },
  "visit-cards-time": {
    ru: "Время на работу: ~ 20 часов",
    en: "Time for work: ~ 20 h",
  },
  "write-intro": {
    ru: "Написать мне",
    en: "Contact me",
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
  "title-work-ducati-main-page": {
    ru: "Ducati: главная страница",
    en: "Ducati: main page",
  },
  "title-work-web-templates": {
    ru: "Портфолио Pet&nbsp;-&nbsp;проекты",
    en: "Portfolio Pet-projects",
  },
  "title-work-dream-on-wheels": {
    ru: "Мечта на колесах",
    en: "Dream On Wheels",
  },
  "title-work-design-visit-cards": {
    ru: "Дизайн визитных карточек",
    en: "Design of visit cards",
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
    ru: "Я — Frontend-разработчик, который любит превращать идеи в удобные и стильные сайты. Специализируюсь на разработке лендингов и одностраничных приложений, сейчас изучаю <span class='font-weight-bold'>React</span> и развиваю навыки в создании <span class='font-weight-bold'>SPA</span>.",
    en: "I'm a Frontend Developer who loves turning ideas into user-friendly and stylish websites. I specialize in landing page and single-page app development, and I'm currently learning <span class='font-weight-bold'>React</span> and developing my <span class='font-weight-bold'>SPA</span> skills.",
  },
  "about-part-two": {
    ru: "Использую <span class='font-weight-bold'>HTML</span>, <span class='font-weight-bold'>SCSS</span>, <span class='font-weight-bold'>JavaScript</span> и методологию <span class='font-weight-bold'>БЭМ</span>, чтобы создавать чистый и поддерживаемый код. В работе применяю <span class='font-weight-bold'>Gulp</span> для автоматизации, а также <span class='font-weight-bold'>Figma</span>, <span class='font-weight-bold'>Addobe Illustrator</span> и <span class='font-weight-bold'>Photoshop</span> для отработки дизайна. В работе для меня важно, чтобы сайт был не только технически надежным, но и производил впечатление. Поэтому уделяю внимание деталям: от аккуратной верстки и семантики до продуманной анимации и удобной навигации.",
    en: "I use <span class='font-weight-bold'>HTML</span>, <span class='font-weight-bold'>SCSS</span>, <span class='font-weight-bold'>JavaScript</span>, and the <span class='font-weight-bold'>BEM</span> methodology to create clean and maintainable code. I use <span class='font-weight-bold'>Gulp</span> for automation, as well as <span class='font-weight-bold'>Figma</span>, <span class='font-weight-bold'>Addobe Illustrator</span> and <span class='font-weight-bold'>Photoshop</span> for design refinement. In my work, it's important for a website to be not only technically reliable but also impressive. That's why I pay attention to detail: from neat layout and semantics to well-thought-out animation and user-friendly navigation.",
  },
  "about-part-three": {
    ru: "Для меня важно работать в команде, где ценят качество и рост. Взамен я готов вкладываться в проекты, развивать интерфейсы и помогать создавать продукты, которыми будут гордиться пользователи.",
    en: "It's important to me to work in a team that values ​​quality and growth. In return, I'm willing to contribute to projects, develop interfaces, and help create products that users will be proud of.",
  },
  "about-part-five": {
    ru: "Буду рад новым предложениям и сотрудничеству. Связаться со мной можно через форму ниже или",
    en: "I'd be happy to hear new ideas and collaborate. You can contact me using the form below or",
  },
  "tool-visual-studio-code": {
    ru: "Visual Studio Code, редактор кода с приятным интерфейсом, позволяющий быстро создавать сайты",
    en: "Visual Studio Code, the editor of code with pleasant interface alowing to create sites quickly",
  },
  "tool-gulp": {
    ru: "Менеджер проектов Gulp",
    en: "Meneger of projects Gulp",
  },
  "tool-bem": {
    ru: "Методология BEM - naming",
    en: "Methodology BEM - naming",
  },
  "tool-svg-sprites": {
    ru: "SVG - спрайты",
    en: "SVG - sprites",
  },
  "graphic-working": {
    ru: "Гибкий график работы",
    en: "Flexible work schedule",
  },
  atmosphere: {
    ru: "Дружеская атмосфера внутри компании",
    en: "Friendly atmosphere within the company",
  },
  grow: {
    ru: "Возможности для роста и повышения квалификации",
    en: "Opportunities for growth and professional development",
  },
  learning: {
    ru: "Обучение внутри компании",
    en: "In-house training",
  },
  "about-social": {
    ru: "соцсети.",
    en: "social networks.",
  },
  "thanks-for-attention": {
    ru: "Спасибо за внимание.",
    en: "Thanks for your attention.",
  },
  "about-write-btn": {
    ru: "Написать мне",
    en: "Contact me",
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
    en: "Contact me",
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
    ru: "Во время работы я приобрёл ценный опыт взаимодействия с людьми и решения нестандартных задач. Мои основные обязанности включали:",
    en: "During my work, I gained valuable experience interacting with people and solving non-standard problems. My main responsibilities included:",
  },
  "menager-first-item": {
    ru: "Консультирование клиентов и подбор оптимальных решений под их потребности",
    en: "Consulting clients and selecting optimal solutions for their needs",
  },
  "menager-second-item": {
    ru: "Продажу смартфонов, техники и сопутствующих услуг",
    en: "Sales of smartphones, equipment and related services",
  },
  "menager-third-item": {
    ru: "Работа с кассой и оформление финансовых продуктов (кредитные карты, рассрочки)",
    en: "Working with the cash register and processing financial products (credit cards, installment plans)",
  },
  "menager-fourth-item": {
    ru: "Подключение новых абонентов к операторам связи (МТС, Теле2, Мегафон, Билайн, Yota)",
    en: "Connecting new subscribers to telecom operators (MTS, Tele2, Megafon, Beeline, Yota)",
  },
  "menager-fifth-item": {
    ru: "Ведение отчётности и подготовку средств к инкассации",
    en: "Maintaining records and preparing funds for collection",
  },
  "menager-desc-second": {
    ru: "Ключевые навыки:",
    en: "Key skills:",
  },
  "menager-desc-third": {
    ru: "Коммуникабельность, умение работать с клиентами и понимать их потребности, внимательность к деталям, ответственность и способность быстро обучаться новым процессам — качества, которые я сейчас применяю в IT-сфере.",
    en: "Communication skills, the ability to work with clients and understand their needs, attention to detail, responsibility, and the ability to quickly learn new processes are qualities that I now apply in the IT field.",
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
    ru: "Опыт, сформировавший аналитическое мышление и системный подход к работе с информацией. Основные задачи:",
    en: "Experience that has shaped analytical thinking and a systematic approach to working with information. Key tasks:",
  },
  "copywriter-first-item": {
    ru: "Создание текстов на темы IT и технологий с упором на точность и структуру",
    en: "Writing texts on IT and technology topics with an emphasis on accuracy and structure",
  },
  "copywriter-second-item": {
    ru: "Исследование и проверка достоверных источников данных",
    en: "Research and verification of reliable data sources",
  },
  "copywriter-third-item": {
    ru: "Проектирование логики и структуры материалов по аналогии с технической документацией",
    en: "Design of logic and structure of materials by analogy with technical documentation",
  },
  "copywriter-fourth-item": {
    ru: "Контроль качества и уникальности контента",
    en: "Content quality and uniqueness control",
  },
  "copywriter-fifth-item": {
    ru: "Самостоятельная организация задач и взаимодействие с клиентами",
    en: "Independent task management and interaction with clients",
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
    ru: "Самообразование, проектная практика",
    en: "Self-education, project-based practice",
  },
  "freelance-time-title": {
    ru: "2023 - настоящее время",
    en: "2023 - nowadays",
  },
  "web-developer-position-title": {
    ru: "Frontend-разработчик",
    en: "Frontend Developer",
  },
  "freelance-title": {
    ru: "Фриланс",
    en: "Freelancing",
  },
  "freelancer-title": {
    ru: "Frontend-разработчик / Фрилансер",
    en: "Frontend Developer / Freelancer",
  },
  "freelancer-desc-first": {
    ru: "Разрабатываю и дорабатываю сайты и веб-приложения: от лендингов до SPA. Умею создавать адаптивные интерфейсы, настраивать интерактивные элементы и оптимизировать производительность. Работаю с современными технологиями (HTML, CSS, JavaScript, React). Открыт к новым проектам и всегда рад воплощать идеи в современные веб-решения.",
    en: "I develop and refine websites and web applications, from loan systems to SPAs. I offer customized interfaces, customize interactive elements, and improve performance. I work with modern technologies (HTML, CSS, JavaScript, React). I'm open to new projects and always happy to transform ideas into modern web solutions.",
  },
  "developer-desc-first": {
    ru: "После университета я начал активно осваивать веб-разработку. Первым шагом стал 3-недельный марафон по вёрстке сайтов от HTML Academy, где я сверстал свой первый проект и понял, что хочу двигаться в этой сфере.",
    en: "After university, I began actively learning web development. My first step was a three-week website coding marathon from HTML Academy, where I designed my first project and realized I wanted to pursue a career in this field.",
  },
  "developer-desc-second": {
    ru: "Чтобы развиваться дальше, я проходил интенсивы и марафоны, изучал современные технологии и практиковался в создании проектов для портфолио.",
    en: "To develop further, I took intensive courses and marathons, studied modern technologies, and practiced creating projects for my portfolio.",
  },
  "developer-desc-third": {
    ru: "За это время я:",
    en: "During this time I:",
  },
  "developer-desc-fourth": {
    ru: "Сегодня я уверенно создаю современные сайты и продолжаю расширять свои навыки в веб-разработке.",
    en: "Today, I confidently create modern websites and continue to expand my web development skills.",
  },
  "developer-desc-sixth": {
    ru: "Если вы хотите обсудить создание сайта или сотрудничество — буду рад связи.",
    en: "If you would like to discuss website creation or collaboration, I would be happy to contact you.",
  },

  "modal-list-developer-study-first-item": {
    ru: "Cверстал и адаптировал сайты под разные устройства",
    en: "Layout and adaptation of websites for different devices",
  },
  "modal-list-developer-study-second-item": {
    ru: "Освоил современные инструменты фронтенд-разработки",
    en: "Mastered modern front-end development tools",
  },
  "modal-list-developer-study-third-item": {
    ru: "Применял новые подходы на практике, пополняя портфолио реальными проектами",
    en: "I applied new approaches in practice, expanding my portfolio with real projects",
  },
  "education-title": {
    ru: "Образование",
    en: "Education",
  },
  "pupil-title": {
    ru: "Средняя Киземская Школа, Россия",
    en: "Secondary Kizema's School, Russia",
  },
  "school-title": {
    ru: "Ученик",
    en: "Pupil",
  },
  "school-desc-first": {
    ru: "За годы обучения сформировал навыки, которые стали основой моей работы в IT:",
    en: "Over the years of study, I developed skills that became the foundation of my work in IT:",
  },
  "school-desc-second": {
    ru: "Эти качества помогают мне создавать аккуратные, продуманные и устойчивые веб-решения.",
    en: "These qualities help me create neat, thoughtful, and sustainable web solutions.",
  },
  "school-first-item": {
    ru: "Концентрация и внимание к деталям",
    en: "Concentration and attention to detail",
  },
  "school-second-item": {
    ru: "Умение ясно излагать мысли",
    en: "Ability to express thoughts clearly",
  },
  "school-third-item": {
    ru: "Навык публичных выступлений",
    en: "Public speaking skills",
  },
  "school-fourth-item": {
    ru: "Готовность учиться на ошибках",
    en: "Willingness to learn from mistakes",
  },
  "school-fifth-item": {
    ru: "Самоорганизация и управление временем",
    en: "Self-organization and time management",
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
    ru: "Во время учебы я получил прочную базу в математике и информатике, развил аналитическое мышление и навыки решения сложных задач. Уже тогда я начал проявлять интерес к веб-технологиям и экспериментировать с ними, что стало первым шагом к будущей карьере Frontend-разработчика.",
    en: "During my studies, I gained a solid foundation in mathematics and computer science, developed my analytical thinking and skills for solving complex problems. Even then, I began to develop an interest in web technologies and experiment with them, which became the first step toward a future career as a Frontend Developer.",
  },
  "skills-title": {
    ru: "Навыки",
    en: "Skills",
  },
  "js-knowlanges-title": {
    ru: "Уверенные знания JavaScript",
    en: "Confident knowledge of JavaScript",
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
    ru: "Практикум от Анны Блок помог мне лучше разобраться в основах HTML и CSS, научил структурировать код и делать аккуратную, понятную вёрстку.",
    en: "Anna Blok's workshop helped me better understand the basics of HTML and CSS, taught me how to structure code, and create neat, understandable layouts.",
  },
  "sertificate-second-title": {
    ru: "Основы HTML / CSS - верстка сайтов с нуля",
    en: "HTML/CSS basics - website layout from scratch",
  },
  "sertificate-second-desc": {
    ru: "Курс помог освоить основы HTML и CSS, а также понять современные подходы к веб-разработке и созданию адаптивных макетов.",
    en: "The course helped me master the basics of HTML and CSS, as well as understand modern approaches to web development and creating responsive layouts.",
  },
  "sertificate-js-desc": {
    ru: "Курс помог глубже разобраться в основах JavaScript и jQuery — понять принципы работы скриптов, динамического обновления контента и взаимодействия с элементами страницы. Теперь могу создавать более живые и интерактивные веб-страницы.",
    en: "The course helped me gain a deeper understanding of the fundamentals of JavaScript and jQuery, including understanding how scripts work, dynamic content updates, and interactions with page elements. Now I can create more vibrant and interactive web pages.",
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
    ru: "С октября 2021 года регулярно веду ежедневник — привычка, которая помогает мне планировать день, анализировать результаты и двигаться к целям осознанно.",
    en: "Since October 2021, I've been keeping a diary regularly — a habit that helps me plan my day, analyze my results, and move toward my goals consciously.",
  },
  "blind-typing-title": {
    ru: "Навык слепой печати на клавиатуре",
    en: "The skill of blind typing on the keyboard",
  },
  "blind-typing-desc": {
    ru: "За два месяца регулярных тренировок на онлайн-тренажёрах я освоил слепую печать. Скорость — около 160 символов в минуту в русской и английской раскладках. Этот навык помогает быстрее и эффективнее работать над сайтами и проектами.",
    en: "After two months of regular training on online simulators, I mastered touch typing. My speed is about 160 characters per minute in both Russian and English layouts. This skill helps me work on websites and projects faster and more efficiently.",
  },
  "write-resume": {
    ru: "Написать мне",
    en: "Contact me",
  },
  "print-resume": {
    ru: "Распечатать резюме",
    en: "Print resume",
  },
  // Modal window HIRE ME
  "modal-griding-title": {
    ru: "Добро пожаловать!",
    en: "Welcome!",
  },
  "griding-desc": {
    ru: "Буду рад вашему сообщению!✨ Пишите в соцсетях или на почту — отвечу как можно скорее:",
    en: "I'd love to hear from you! ✨ Write to me on social media or by email—I'll respond as soon as possible:",
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
  "visit-cards-title": {
    ru: "Дизайн визитных карточек",
    en: "Design of visit cards",
  },
  "ducati-title": {
    ru: "Ducati: главная страница",
    en: "Ducati: main page",
  },
  "ducati-subtitle": {
    ru: "Ducati: учебный проект",
    en: "Ducati: learn project",
  },
  "ducati-desc-one": {
    ru: "Главная страница для легендарного бренда Ducati была разработана в рамках учебного марафона от Yudaev School. Проект стал отличной возможностью отточить навыки UX/UI-дизайна и передать атмосферу скорости, энергии и премиальности, которые олицетворяют дух Ducati.",
    en: "The homepage for the legendary Ducati brand was developed as part of a training marathon from Yudaev School. The project was an excellent opportunity to hone UX/UI design skills and convey the atmosphere of speed, energy, and premium quality that embody the Ducati spirit.",
  },
  "ducati-desc-two": {
    ru: "В процессе я сосредоточился на создании выразительного и динамичного интерфейса, сочетающего эстетику скорости с удобством взаимодействия. Проект выполнен в Figma, а графические элементы и иллюстрации — в Adobe Illustrator.",
    en: "During the process, I focused on creating an expressive and dynamic interface that combines the aesthetics of speed with ease of interaction. The project was completed in Figma, and the graphic elements and illustrations were created in Adobe Illustrator.",
  },
  "ducati-desc-three": {
    ru: "Этот опыт помог мне укрепить понимание того, как визуал и функциональность объединяются, чтобы создавать целостный и запоминающийся пользовательский опыт.",
    en: "This experience helped me strengthen my understanding of how visuals and functionality come together to create a cohesive and memorable user experience.",
  },
  "ducati-page-time": {
    ru: "Время на работу: ~ 1 час",
    en: "Time for work: ~ 1 h",
  },
  "archee-desc-one": {
    ru: "<b>Archee</b> — учебный проект, созданный в рамках 5-недельного марафона по вёрстке от CodeQuest. Главная цель участия — практика и отработка современных подходов в web-разработке, а также развитие навыков работы с <b>Gulp</b>, <b>SCSS</b> и методологией <b>БЭМ (BEM-naming)</b>.",
    en: "Archee is an educational project created as part of a 5-week web coding marathon from CodeQuest. The main goal of participation is to practice and refine modern web development approaches, as well as develop skills in Gulp, SCSS, and the BEM naming methodology.",
  },
  "archee-desc-two": {
    ru: "Во время марафона проходили онлайн-встречи, где участники вместе с наставником разбирали блоки кода, обсуждали решения и вносили улучшения. После каждого этапа в проект добавлялись правки, позволяющие сделать вёрстку чище и удобнее для дальнейшей поддержки. Так я получил ценный практический опыт и лучше освоил современные инструменты, применяемые при создании адаптивных сайтов.",
    en: "During the marathon, online meetings were held, where participants, together with a mentor, analyzed code blocks, discussed solutions and made improvements. After each stage, edits were added to the project to make the layout cleaner and more convenient for further support. This gave me valuable practical experience and a better understanding of modern tools used to create responsive websites.",
  },
  "archee-desc-three": {
    ru: "В проекте реализован компонентный подход — SCSS-код разбит на отдельные файлы-блоки, что упрощает навигацию, модификацию и поддержку. Также применяются миксины, которые помогают писать код короче и эффективнее.",
    en: "The project implements a component approach — the SCSS code is divided into separate block files, which simplifies navigation, modification and support. Mixins are also used to help you write shorter and more efficient code.",
  },
  "archee-desc-four": {
    ru: "Дополнительно в проекте реализованы переключение языков интерфейса (RU / EN) и смена темы оформления (светлая / тёмная). Эти функции были добавлены для улучшения пользовательского опыта и демонстрации навыков работы с JavaScript при управлении состоянием интерфейса.",
    en: "Additionally, the project implements switching interface languages (RU / EN) and changing the theme (light / dark). These features were added to enhance the user experience and demonstrate JavaScript skills in managing interface state.",
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
    ru: "Этот проект — мой личный сайт-портфолио, где собраны все мои pet-проекты. Pet-проекты — это учебные сайты и веб-приложения, которые я создаю, чтобы прокачивать навыки веб-разработки и экспериментировать с идеями.",
    en: "This project is my personal portfolio website, where all my pet projects are collected. Pet projects are educational websites and web applications that I create to hone my web development skills and experiment with new ideas.",
  },
  "web-templates-desc-two": {
    ru: "Переключение темы (светлая и тёмная)",
    en: "Switching themes (light and dark)",
  },
  "web-templates-desc-three": {
    ru: "Плавная смена цвета при переключении слайдов в проекте Theme's Switcher",
    en: "Smooth color change when switching slides in a project Theme's Switcher",
  },
  "web-templates-desc-four": {
    ru: "Переключение языков (подробнее о реализации — по ",
    en: "Language switching (more details on the implementation can be found at",
  },
  "web-templates-link": {
    ru: "ссылке)",
    en: "the link)",
  },
  "web-templates-desc-five": {
    ru: "Дизайн карточек проектов был самостоятельно реализован в программе Photoshop",
    en: "The design of project cards was independently implemented in Photoshop",
  },
  "more-info": {
    ru: "Наиболее подробную информацию о проекте Вы сможете найти в файле Readme.md перейдя по",
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
    ru: "Проект был создан в учебных целях для закрепления навыков работы с Gulp и препроцессором LESS.",
    en: "The project was created for educational purposes to reinforce skills in working with Gulp and the LESS preprocessor.",
  },
  "dream-on-wheels-desc-two": {
    ru: "Проект был сначала создан, используя более упрощенную структуру, работа с препроцессором осуществлялась через стороннюю программу - компилятор WinLess. Далее проект был полностью переделан, используя gulp.",
    en: "The project was first created using a more simplified structure, work with the preprocessor was carried out through a third-party program - the WinLess compiler. Next, the project was completely redone using gulp.",
  },
  "dream-on-wheels-desc-three": {
    ru: "Работа над проектом помогла отточить навыки фронтенд-разработки, автоматизации и оптимизации кода. Результатом стал современный, адаптивный и легкий сайт, отражающий мой стиль и внимание к деталям.",
    en: "Работа над проектом помогла отточить навыки фронтенд-разработки, автоматизации и оптимизации кода. Результатом стал современный, адаптивный и легкий сайт, отражающий мой стиль и внимание к деталям.",
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
    ru: "Мини-приложения",
    en: "Mini Apps",
  },
  "converter-desc": {
    ru: "Проект разработан в учебных целях для совершенствования навыков работы с JavaScript и элементами интерфейса. Конвертер позволяет получать актуальные курсы валют — доллара, евро и фунта стерлинга — и наглядно отображает их динамику: если курс снижается, значение подсвечивается зелёным цветом, если растёт — красным.",
    en: "The project was developed for educational purposes to improve skills in working with JavaScript and interface elements. The converter provides up-to-date exchange rates for the dollar, euro, and pound sterling and clearly displays their dynamics: if the rate is declining, the value is highlighted in green; if it is rising, it is highlighted in red.",
  },
  "converter-desc-one": {
    ru: "Отображение текущих курсов валют в реальном времени",
    en: "Display current exchange rates in real time",
  },
  "converter-desc-two": {
    ru: "Возможность конвертации рублей в доллары, евро и фунты стерлинга по актуальному курсу",
    en: "Possibility of converting rubles into dollars, euros and pounds sterling at the current exchange rate",
  },
  "converter-desc-three": {
    ru: "Переключатель тем с тремя цветовыми схемами: светлой, тёмной и «лунной»",
    en: "Theme switcher with three color schemes: light, dark, and «moon»",
  },
  "converter-desc-four": {
    ru: "Переключатель языков (русский / английский)",
    en: "Language switch (Russian/English)",
  },
  "converter-desc-five": {
    ru: "Увеличение и уменьшение введённого значения с помощью колеса мыши",
    en: "Increase and decrease the entered value using the mouse wheel",
  },
  "converter-desc-six": {
    ru: "Проект постоянно развивается — при запуске Вы можете увидеть обновлённые функции, новые темы или языки.",
    en: "The project is constantly evolving—at launch, you may see updated features, new themes, or languages.",
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
    ru: "Проект был создан в учебных целях для практики методологии БЭМ и углубления навыков работы с CSS и JavaScript. Каркас страницы был подготовлен под руководством наставника, а всё оформление и функционал реализованы мной самостоятельно.",
    en: "The project was created for educational purposes, to practice the BEM methodology and deepen my CSS and JavaScript skills. The page framework was created under the guidance of a mentor, and all design and functionality were implemented independently.",
  },
  "oxygen-desc-two": {
    ru: "При наведении на элементы навигации появляется плавное подчеркивание. Через JavaScript реализовано поведение, при котором активным остается только нужный пункт меню",
    en: "When hovering over navigation elements, a smooth underline appears. JavaScript is used to ensure that only the desired menu item remains active",
  },
  "oxygen-desc-three": {
    ru: "Логотип интерактивен: при наведении или клике меняется цвет заголовков главного экрана",
    en: "The logo is interactive: when hovered over or clicked, the color of the main screen headings changes",
  },
  "oxygen-desc-four": {
    ru: "При прокрутке страницы навигационное меню фиксируется сверху, меняет цвет фона и получает мягкую тень для лучшей читаемости",
    en: "As you scroll down the page, the navigation menu is fixed at the top, changes background color, and gets a soft shadow for better readability",
  },
  "oxygen-desc-five": {
    ru: "Заголовки второго уровня анимированы с плавным подчеркиванием, которое корректно отображается даже при переносах текста",
    en: "Second-level headings are animated with a smooth underline that displays correctly even when text wraps",
  },
  "oxygen-desc-seven": {
    ru: "Меню-бургер открывает полноэкранное навигационное окно с плавной анимацией. При выборе пункта меню или клике на крестик окно аккуратно закрывается, а страница мягко прокручивается к нужному разделу",
    en: "The hamburger menu opens a full-screen navigation window with a smooth animation. When you select a menu item or click the cross, the window closes gently, and the page scrolls smoothly to the desired section",
  },
  "oxygen-desc-eight": {
    ru: "Блок портфолио перестраивается из сетки в слайдер (slick slider) с возможностью переключения свайпом",
    en: "The portfolio block is being converted from a grid to a slick slider with the ability to switch between them with a swipe",
  },
  "oxygen-desc-nine": {
    ru: "В блоке видео реализовано воспроизведение ролика с добавлением элементов управления",
    en: "The video block now features video playback with added controls",
  },
  "oxygen-desc-ten": {
    ru: "Дополнительный адаптивный слайдер создан вручную на JavaScript: на мобильных устройствах переключение происходит по точкам, а на планшетах и компьютерах — по стрелкам",
    en: "An additional responsive slider is hand-crafted using JavaScript: on mobile devices, switching occurs via dots, and on tablets and computers, via arrows",
  },
  "oxygen-desc-eleven": {
    ru: "В разделе Pricing реализовано интерактивное выделение активного тарифа с плавным переключением карточек",
    en: "The Pricing section now features interactive selection of the active tariff with seamless card switching",
  },
  "time-oxygen": {
    ru: "Время на работу ~ 20.5 ч",
    en: "Time to work ~ 20.5 h",
  },
  // Olivia
  "olivia-desc": {
    ru: "Olivia — стильный адаптивный лэндинг, созданный для практики работы с современными веб-технологиями и интерактивными элементами интерфейса. Проект сочетает лаконичный дизайн и плавную анимацию, делая взаимодействие с сайтом лёгким и приятным.",
    en: "Olivia is a stylish, responsive landing page designed for practicing modern web technologies and interactive interface elements. The project combines a minimalist design with smooth animation, making interaction with the site easy and enjoyable.",
  },
  "olivia-desc-one": {
    ru: "При прокрутке страницы вниз меню остаётся закреплённым в верхней части экрана и получает лёгкую тень, добавляя глубину и удобство навигации",
    en: "As you scroll down the page, the menu remains pinned to the top of the screen and receives a subtle shadow, adding depth and ease of navigation",
  },
  "olivia-desc-two": {
    ru: "В секции с видео при нажатии на «Play» ролик запускается, кнопка меняется на «Pause», а при наведении курсора появляется лёгкое затемнение",
    en: "In the video section, when you click «Play» the video starts, the button changes to «Pause» and when you hover over it with the cursor, a slight darkening appears",
  },
  "time-olivia-to-work": {
    ru: "Время на работу ~ 20 ч",
    en: "Time to work ~ 20 h",
  },
  // Password Generator
  "password-generator-desc": {
    ru: "Генератор-паролей — простой и удобный веб-инструмент для быстрой генерации надёжных паролей. Пользователь выбирает длину (8, 12 или 15 символов) и наличие специальных символов, нажимает «Сгенерировать» — и получает надёжный автоматически сгенерированный пароль, готовый для копирования. Вся логика работает прямо в браузере: пароли не передаются на сервер, это делает их генерацию приватной и безопасной. Этот инструмент — отличное решение для тех, кто хочет защитить свои аккаунты: так проще отказаться от слабых паролей вроде «123456» и использовать уникальный пароль для каждого сайта или сервиса.",
    en: "Password Generator is a simple and convenient web tool for quickly generating secure passwords. The user selects the length (8, 12, or 15 characters) and the presence of special characters, clicks «Generate» — and receives a random, hard-to-guess string ready for copying. All logic works directly in the browser: passwords are not transmitted to the server, making their generation private and secure. This tool is an excellent solution for those who want to protect their accounts: it makes it easier to avoid weak passwords like «123456» and use a unique password for each site or service.",
  },
  "password-generator-desc-one": {
    ru: "Выбор длины пароля — пользователь может выбрать 8, 12 или 15 символов",
    en: "Password length selection - the user can choose 8, 12 or 15 characters",
  },
  "password-generator-desc-two": {
    ru: "Включение специальных символов — опция добавления символов ! @ # $ % для более надёжного пароля",
    en: "Inclusion of special characters - an option to add characters ! @ # $ % for a more secure password",
  },
  "password-generator-desc-three": {
    ru: "Генерация случайного пароля — формирование уникальной комбинации символов одним кликом",
    en: "Random password generation - creating a unique combination of characters with one click",
  },
  "password-generator-desc-four": {
    ru: "Удобное копирование — готовый пароль отображается сразу и легко копируется для использования",
    en: "Convenient copying - the generated password is displayed immediately and can be easily copied for use",
  },
  "password-generator-desc-five": {
    ru: "Добавлена функция переключения языков между русской и английской версиями интерфейса, обеспечивающая удобство использования приложения для разных пользователей. Перевод выполнен через динамическую подстановку текста, что позволяет легко расширять функциональность и поддерживать дополнительные языки",
    en: "A language switching feature has been added between Russian and English versions of the interface, providing convenience for different users. The translation is done through dynamic text substitution, allowing for easy expansion of functionality and support for additional languages",
  },
  "password-generator-time-to-work": {
    ru: "Время на работу ~ 42 ч",
    en: "Time to work ~ 42 h",
  },
  // Thrivetalk
  "client-thrivetalk-title": {
    ru: "Сайт Thrivetalk",
    en: "The site Thrivetalk",
  },
  "thrivetalk-desc": {
    ru: "Thrivetalk — адаптивный лендинг, созданный в учебных целях для отработки верстки по методологии Desktop First и реализации интерактивных элементов навигации.",
    en: "Thrivetalk is a responsive landing page created for educational purposes to practice Desktop First layout and implement interactive navigation elements.",
  },
  "thrivetalk-desc-one": {
    ru: "При уменьшении ширины окна браузера появляется бургер-иконка, открывающая мобильное меню с затемняющим overlay, блокирующим прокрутку страницы",
    en: "When the browser window width is reduced, a burger icon appears, opening a mobile menu with a darkening overlay that blocks page scrolling",
  },
  "thrivetalk-desc-two": {
    ru: "Мобильное меню можно закрыть, нажав на крестик или кликнув вне области меню (при этом клики внутри меню не закрывают его)",
    en: "The mobile menu can be closed by clicking the cross or by clicking outside the menu area (clicking inside the menu does not close it)",
  },
  "thrivetalk-desc-three": {
    ru: "При изменении размеров окна в большую сторону мобильное меню автоматически закрывается, уступая место стандартной навигации — это обеспечивает корректное отображение при смене ориентации экрана",
    en: "When the window is resized to a larger size, the mobile menu automatically closes, giving way to the standard navigation - this ensures correct display when changing the screen orientation",
  },
  "thrivetalk-desc-four": {
    ru: "Сайт защищен от переполнения контентом: при добавлении или изменении текста и изображений верстка сохраняет целостность и адаптивность",
    en: "The site is protected from content overflow: when adding or changing text and images, the layout remains intact and adaptable",
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
  "venom-desc": {
    ru: "Проект представляет собой промостраницу, созданную для демонстрации фильма «Веном 2». Главная цель — передать атмосферу фильма через визуальное оформление и плавные интерактивные элементы.",
    en: "The project is a promotional page created to showcase the film «Venom 2». The main goal is to convey the film's atmosphere through visual design and fluid interactive elements.",
  },
  "venom-desc-two": {
    ru: "Проект показывает навыки создания промостраниц с интерактивными элементами и современным адаптивным интерфейсом.",
    en: "The project demonstrates skills in creating promotional pages with interactive elements and a modern, responsive interface.",
  },
  "venom-desc-three": {
    ru: "<b>Результат — динамичный лендинг с кинематографичной атмосферой.</b>",
    en: "<b>The result is a dynamic landing page with a cinematic atmosphere.</b>",
  },
  "venom-time-to-work": {
    ru: "Время на работу ~ 25 ч",
    en: "Time to work ~ 25 h",
  },
  // Калькулятор стоимости ремонта
  "calculator-title": {
    ru: "Калькулятор стоимости ремонта на JavaScript",
    en: "Calculator of rapairing cost in Javascript",
  },
  "calc-desc": {
    ru: "Интерактивный калькулятор позволяет пользователю рассчитать примерную стоимость ремонта квартиры в зависимости от выбранных параметров. Проект реализован на чистом JavaScript с упором на динамическое обновление данных и удобство взаимодействия с интерфейсом.",
    en: "This interactive calculator allows users to estimate the cost of apartment renovations based on selected parameters. The project is implemented in pure JavaScript, with an emphasis on dynamic data updates and user-friendly interface.",
  },
  "calc-desc-one": {
    ru: "Выбор площади квартиры с помощью ползунка, стрелок или ручного ввода. Базовая стоимость — 6000 рублей за 1 м²",
    en: "Select your apartment's area using the slider, arrows, or manual input. The base price is 6,000 rubles per square meter",
  },
  "calc-desc-two": {
    ru: "Автоматический пересчёт стоимости в реальном времени при изменении любого параметра",
    en: "Automatic recalculation of cost in real time when any parameter changes",
  },
  "calc-desc-three": {
    ru: "Учёт типа ремонта: косметический — без надбавки, капитальный — +30% к стоимости, под ключ — +50% к стоимости",
    en: "Accounting for the type of repair: cosmetic - no surcharge, major - +30% to the cost, turnkey - +50% to the cost",
  },
  "calc-desc-four": {
    ru: "Учёт типа дома: новострой — без изменений, вторичка — +10% к стоимости",
    en: "Taking into account the type of house: new building - no changes, secondary market - +10% to the cost",
  },
  "calc-desc-five": {
    ru: "Возможность добавить дополнительные опции: натяжные потолки — +900 ₽ за каждый м², покраска стен — +10% к стоимости, тёплый пол — +10% к стоимости",
    en: "Possibility to add additional options: stretch ceilings - +900 ₽ per m², wall painting - +10% to the cost, heated floors - +10% to the cost",
  },
  "calc-desc-six": {
    ru: "Выбор количества комнат: эконом-вариант (С) — -20% к стоимости, 1–2 комнаты — без изменений, 3–5 комнат — +5% к стоимости",
    en: "Select the number of rooms: economy option (C) -20% to the cost, 1–2 rooms - no change, 3–5 rooms - +5% to the cost",
  },
  "calc-desc-seven": {
    ru: "Основная логика калькулятора написана на JavaScript без использования сторонних библиотек. Особое внимание уделено плавности обновления значений и интерактивности — пользователь сразу видит, как изменяются результаты при выборе разных параметров. Проект демонстрирует работу с DOM, обработку событий, динамические расчёты и основы построения удобного интерфейса.",
    en: "The main logic of the calculator is written in JavaScript without using third-party libraries. Special attention is paid to the smoothness of updating values and interactivity — the user immediately sees how the results change when selecting different parameters. The project demonstrates working with DOM, event handling, dynamic calculations, and the basics of building a user-friendly interface.",
  },
  "calc-time-to-work": {
    ru: "Время на работу ~ 20 ч",
    en: "Time to work ~ 20 h",
  },
  // ссылка о персональных данных
  "personal-data-text": {
    ru: "Нажимая кнопку 'Отправить', Вы даете согласие на обработку персональных данных в соответствии с",
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
    ru: "Я — Frontend-разработчик, для которого приоритетом является результат и качество. Создаю веб-приложения и сайты, которые сочетают в себе современный дизайн, удобство для пользователя и техническую надежность. За последние годы накопил опыт в разработке лэндингов и уверен в своих профессиональных навыках в этом направлении. Работаю с актуальными инструментами и технологиями, постоянно развиваюсь и стремлюсь приносить пользу проектам через эффективные цифровые решения.",
    en: "I am a Frontend developer who prioritizes results and quality. I create web applications and websites that combine modern design, user convenience, and technical reliability. Over the past few years, I have gained experience in developing landing pages and feel confident in my professional skills in this area. I work with up-to-date tools and technologies, continuously improve my expertise, and strive to bring value to projects through effective digital solutions.",
  },
  "hobbie-title-vk-group": {
    ru: "Блогер, автор сообщества «Ключ к мечте» (VK)",
    en: "Blogger, author of the community «Key to the Dream» (VK)",
  },
  "vk-blogger-title": {
    ru: "Блогер",
    en: "Blogger",
  },
  "hobbie-description-vk-group": {
    ru: "Веду мотивационное сообщество, где делюсь мыслями о вдохновении, целях и вере в себя. Проект вырос из личного желания поддерживать людей, помогать им не терять надежду и двигаться вперёд.",
    en: "I run a motivational community where I share thoughts on inspiration, goals, and self-belief. The project grew out of a personal desire to support people, help them maintain hope, and move forward.",
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
    ru: "Создаю оригинальные поэтические тексты, отражающие внутренние переживания, философию жизни и красоту момента.",
    en: "I create original poetic texts that reflect inner experiences, philosophy of life, and the beauty of the moment.",
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
    ru: "Репетитор английского языка",
    en: "English tutor",
  },
  "tutor-position": {
    ru: "Репетитор",
    en: "Tutor",
  },
  "tutor-desc-one": {
    ru: "Во время обучения в университете я занимался частным преподаванием английского языка для школьников 2–7 классов.",
    en: "While studying at university, I taught English privately to students in grades 2–7.",
  },
  "tutor-desc-two": {
    ru: "Основные задачи:",
    en: "Main tasks:",
  },
  "tutor-first-item": {
    ru: "Объяснение учебного материала в доступной форме",
    en: "Explaining the educational material in an accessible form",
  },
  "tutor-second-item": {
    ru: "Помощь в выполнении домашних заданий",
    en: "Help with homework",
  },
  "tutor-third-item": {
    ru: "Разработка дополнительных упражнений для закрепления знаний",
    en: "Developing additional exercises to consolidate knowledge",
  },
  "tutor-fourth-item": {
    ru: "Поддержка интереса к изучению языка и повышение успеваемости",
    en: "Maintaining interest in language learning and improving academic performance",
  },
  "poker-subtitle": {
    ru: "Онлайн-покер",
    en: "Online-poker",
  },
  "poker-desc": {
    ru: "В свободное время развиваю аналитические способности и стратегическое мышление через онлайн-покер. Этот опыт помогает сохранять концентрацию и принимать обоснованные решения — качества, важные в веб-разработке.",
    en: "In my free time, I develop my analytical skills and strategic thinking through online poker. This experience helps me maintain focus and make informed decisions—qualities essential in web development.",
  },
  "converter-app-title": {
    ru: "Разработка приложения «Конвертер валют»",
    en: "Application developing «Currency converter»",
  },
  "converter-app-desc": {
    ru: "После интенсива от онлайн-школы Web-cademy доработал приложение «Конвертер валют», полностью переработав дизайн и расширив функционал: ",
    en: "After an intensive course from the online school, Web-cademy finalized the Currency Converter application, completely redesigning the design and expanding the functionality:",
  },
  "converter-app-first-item": {
    ru: "Смена темы приложения – три цветовые схемы: светлая, тёмная и эксклюзивная «лунная»",
    en: "Changing the theme of the app – three color schemes: light, dark and exclusive «moon» ",
  },
  "converter-app-second-item": {
    ru: "Смена языка интерфейса – русский и английский",
    en: "Changing the interface language – Russian and English",
  },
  "converter-app-third-item": {
    ru: "Двусторонняя конвертация валют – динамическое обновление иконок и текста",
    en: "Two-way currency conversion, with dynamically changing icons and text",
  },
  "converter-app-fourth-item": {
    ru: "Ежедневное обновление курсов валют – актуальная информация для пользователя",
    en: "Daily exchange rate updates – up-to-date information for the user",
  },
  "converter-app-fifth-item": {
    ru: "Удобный ввод суммы – возможность менять значение с помощью колесика мыши",
    en: "Convenient amount input – the ability to change the value using the mouse wheel",
  },
  "password-generator-app-title": {
    ru: "Разработка приложения «Генератор паролей»",
    en: "Developing a Password Generator App",
  },
  "password-generator-app-desc": {
    ru: "Разработал с нуля приложение «Генератор паролей», с помощью которого можно создать пароль со сверхзащитой: до 15 символов + специальные знаки. Функционал приложения:",
    en: "I developed a 'Password Generator' app from scratch, allowing you to create ultra-secure passwords with up to 15 characters and special characters. The following features are available:",
  },
  "password-generator-app-first-item": {
    ru: "Выбор длины пароля: 8, 12 или 15 символов",
    en: "You can choose from 3 password length options: 8, 12 or 15 characters",
  },
  "password-generator-app-second-item": {
    ru: "Опция добавления специальных символов для усиления пароля",
    en: "Option to add special characters to strengthen the password",
  },
  "password-generator-app-third-item": {
    ru: "Генерация набора из 7 различных паролей с анимацией появления (для ПК и экранов шириной ≥993px)",
    en: "Generating a set of 7 different passwords with animated appearance (for PCs and screens ≥993px wide)",
  },
  "password-generator-app-fourth-item": {
    ru: "Копирование пароля в буфер обмена через удобную иконку",
    en: "Copying the password to the clipboard via a convenient icon",
  },
  "password-generator-app-fifth-item": {
    ru: "Многоразовая генерация нового набора паролей по нажатию кнопки «Сгенерировать»",
    en: "Reusable generation of a new set of passwords by clicking the 'Generate' button",
  },
  "password-generator-app-six-item": {
    ru: "Функция сброса параметров для выбора новых настроек длины и специальных символов",
    en: "Parameter reset function for selecting new length and special character settings",
  },
  "password-generator-app-seventh-item": {
    ru: "Интерфейс продуман для удобного и интуитивного использования, визуальные элементы отображаются плавно и эстетично",
    en: "The interface is designed for convenient and intuitive use, visual elements are displayed smoothly and aesthetically",
  },
  "password-generator-app-eighth-item": {
    ru: "Добавлено переключение языка между русской и английской версиями интерфейса для удобства пользователей",
    en: "Added language switching between Russian and English versions of the interface for user convenience",
  },
  "langswitcher-app-title": {
    ru: "Разработка проекта «Переключение языков - подробный гайд»",
    en: "Development of the project «Language Switching - A Detailed Guide»",
  },
  "langswitcher-app-desc": {
    ru: "Представляю проект по реализации системы переключения языков (русский/английский) для небольших сайтов и лендингов без сторонних библиотек. Проект акцентирует внимание на простоте, гибкости и чистоте решения. Я самостоятельно спроектировал и реализовал весь визуальный интерфейс. Система легко интегрируется в существующие сайты и демонстрирует эффективный подход к созданию многоязычного интерфейса, облегчая поддержку и масштабирование. Ключевые преимущества проекта:",
    en: "I present a project to implement a language switching system (Russian/English) for small websites and landing pages without third-party libraries. The project focuses on simplicity, flexibility and purity of the solution. I designed and implemented the entire visual interface myself. The system is easily integrated into existing websites and demonstrates an effective approach to creating a multilingual interface, facilitating support and scaling. Key advantages of the project:",
  },
  "langswitcher-app-first-item": {
    ru: "Лёгкая интеграция – можно быстро подключить к любому сайту без изменения существующей структуры",
    en: "Easy integration – you can quickly connect to any site without changing the existing structure",
  },
  "langswitcher-app-second-item": {
    ru: "Поддержка нескольких языков – легко добавлять новые языки и переводить элементы страницы",
    en: "Multi–language support - easily add new languages and translate page elements",
  },
  "langswitcher-app-third-item": {
    ru: "Гибкость – корректно работает с повторяющимися элементами, placeholder’ами и атрибутами title",
    en: "Flexibility – works correctly with duplicate elements, placeholders, and title attributes",
  },
  "langswitcher-app-fourth-item": {
    ru: "Чистый код – решение на чистом JavaScript, без внешних зависимостей",
    en: "Clean code – a solution based on pure JavaScript, without external dependencies",
  },
  "langswitcher-app-fifth-item": {
    ru: "Улучшение пользовательского опыта – позволяет пользователю быстро переключаться между языками, что повышает доступность контента",
    en: "Improved user experience – allows the user to quickly switch between languages, which increases the accessibility of content",
  },
  "langswitcher-app-sixth-item": {
    ru: "Масштабируемость – подходит как для небольших лендингов, так и для страниц с большим количеством элементов",
    en: "Scalability – suitable for both small landing pages and pages with a large number of elements",
  },
  "student-first-item": {
    ru: "Освоил фундаментальные знания в математике и информатике, развив аналитическое мышление и умение решать комплексные задачи",
    en: "Mastered fundamental knowledge in mathematics and computer science, developing analytical thinking and the ability to solve complex problems",
  },
  "student-second-item": {
    ru: "Параллельно начал изучать веб-технологии: HTML, CSS, базовый JavaScript, что стало первым шагом к будущей карьере web-разработчика",
    en: "At the same time, I began studying web technologies: HTML, CSS, basic JavaScript, which became the first step towards a future career as a web developer",
  },
  "student-third-item": {
    ru: "Разработал вместе с наставником web-приложение для расчетов в системах массового обслуживания, применив теоретические знания на практике и освоив навыки работы с данными и интерфейсами",
    en: "Together with a mentor, I developed a web application for calculations in mass service systems, applying theoretical knowledge in practice and mastering the skills of working with data and interfaces",
  },
  "student-fourth-item": {
    ru: "Полученный опыт показал важность упорства и практических экспериментов в обучении — навыки, которые активно применяю в текущих проектах портфолио",
    en: "The experience has shown the importance of persistence and hands-on experimentation in learning—skills I actively apply in my current portfolio projects",
  },
  "graduation-from-university-desc": {
    ru: "Учёба в университете помогла мне укрепить логическое мышление и любовь к технологиям. Диплом защитил на «отлично».",
    en: "Studying at university helped me strengthen my logical thinking and love of technology. I defended my thesis with honors.",
  },
  "graduation-from-school-desc": {
    ru: "Закончил школу на «хорошо» и «отлично», сделав первые шаги к будущей профессии.",
    en: "I graduated from school with good and excellent grades, taking the first steps towards my future profession.",
  },
  "theme-popup": {
    ru: "Сменить тему",
    en: "Change theme",
  },
}

const titles = {
  "to-top-up": {
    ru: "Наверх",
    en: "Up",
  },
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
  design: {
    ru: "Дизайн",
    en: "UI / UX & Design",
  },
  "change-font": {
    ru: "Изменить шрифт",
    en: "Change font",
  },
  "hire-me-vk": {
    ru: "ВКонтакте",
    en: "VKontakte",
  },
  "hire-me-telegram": {
    ru: "Телеграм",
    en: "Telegram",
  },
  "next-functional": {
    ru: "<b>Функционал проекта:</b>",
    en: "<b>What has been implemented:</b>",
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
    ru: "<b>Использованные технологии:</b>",
    en: "<b>Technologies used:</b>",
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
    ru: "Мини-приложения",
    en: "Mini Apps",
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
    ru: "Категория: Мини-приложения",
    en: "Category: Mini Apps",
  },
  "cat-design": {
    ru: "Категория: Дизайн",
    en: "Category: UI / UX & Design",
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
    ru: "Реализована плавная прокрутка, создающая ощущение целостности и динамики при навигации по странице",
    en: "Smooth scrolling has been implemented, creating a sense of integrity and dynamism when navigating the page",
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
    ru: "Подключение всплывающего окна с видеоплеером через библиотеку jQuery Fancybox",
    en: "Connecting a popup window to display a video using the FancyBox jQuery library",
  },
  "adaptive-tool": {
    ru: "Сайт полностью адаптирован под разные устройства — от смартфонов до ноутбуков, обеспечивая стабильную работу и комфортное взаимодействие с контентом",
    en: "The site is fully adapted for various devices, from smartphones to laptops, ensuring stable operation and comfortable interaction with content",
  },
  "desktop-first-method": {
    ru: "Адаптивная верстка выполнена с подходом Desktop First, что позволило обеспечить стабильную работу и комфортное взаимодействие с контентом на любых экранах",
    en: "The adaptive layout was implemented using the Desktop First approach, which ensured stable operation and comfortable interaction with content on any screen",
  },
  "burger-function": {
    ru: "При уменьшении ширины экрана главное меню превращается в бургер-меню с модальным окном, которое плавно открывается и закрывается при взаимодействии",
    en: "As the screen width decreases, the main menu turns into a burger menu with a modal window that smoothly opens and closes upon interaction",
  },
  "design-improve": {
    ru: "Обновлённый дизайн: сайт стал ярким, динамичным и визуально живым",
    en: "Updated design: the site has become bright, dynamic and visually vibrant",
  },
  "content-created": {
    ru: "Весь контент (включая тексты) создан самостоятельно",
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
  "title-work-passwords": {
    ru: "Генератор паролей",
    en: "Password Generator",
  },
  nowadays: {
    ru: "настоящее время",
    en: "nowadays",
  },
  "link-usual": {
    ru: "Ссылка",
    en: "Link",
  },
  "description-text-app": {
    ru: "с подробным описанием проекта",
    en: "with detailed description of the project",
  },
  "app-project-link-text": {
    ru: "на проект",
    en: "to the project",
  },
  "technologies-text": {
    ru: "Технологии:",
    en: "Technologies:",
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

    localStorage.setItem("lang", lang)
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
    localStorage.setItem("lang", "ru")
  } else if (hash == "en") {
    langToolEnEl.classList.add("lang-tool--active")
    langToolRuEl.classList.remove("lang-tool--active")
    localStorage.setItem("lang", "en")
  }
  // проверка - если массив из всех доступных языков не содержит hash

  if (!allLangs.includes(hash)) {
    // принудительно записывать в строку браузера путь с языком
    location.href = window.location.pathname + "#ru"

    localStorage.setItem("lang", "ru")
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
