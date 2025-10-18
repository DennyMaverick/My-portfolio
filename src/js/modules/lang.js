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
    ru: "Каждой компании нужен бренд или логотип, с помощью которого эта компания будет узнаваема в обществе. Визитные карточки - это инструмент, который помогает делать рекламу для своей компании. Визитные карточки были созданы в программе Adobe Photoshop, дизайн был придуман в учебных целях.",
    en: "Each company needs a brand or logo, helping to be known in sociality. Business cards are a tool that helps you advertise your company. These visit cards were created in Adobe Photoshop programm, the design was made as for a learn project.",
  },
  "visit-cards-desc-two": {
    ru: "Визитные карточки состоят из двух сторон: лицевая сторона содержит логотип компании, имя сотрудника, его должность, телефон, адрес офиса. И оборотная сторона визитки содержит логотип компании.",
    en: "Business cards consist of two sides: the front side contains the company logo, the name of the employee, his position, telephone number, and office address. And the back of the business card contains the company logo.",
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
    ru: "Главная страница Ducati была создана в учебных целях в рамках марафона школы дизайна Yudaev School.",
    en: "The Ducati home page was created for educational purposes as part of the Yudaev School design school marathon.",
  },
  "ducati-desc-two": {
    ru: "Данная работа была создана в рамках тренировки, в программе Figma, после прохождения марафона от школы дизайна Yudaev School. Марафон прошел успешно, где я смог закрепить навыки в сфере UX / UI дизайна.",
    en: "This work was created as part of a training session in the Figma program, after completing a marathon from the Yudaev School of Design. The marathon was successful, where I was able to strengthen my skills in the field of UX / UI design.",
  },
  "ducati-page-time": {
    ru: "Время на работу: ~ 1 час",
    en: "Time for work: ~ 1 h",
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
    en: "Design",
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
  "cat-design": {
    ru: "Категория: Дизайн",
    en: "Category: Design",
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
