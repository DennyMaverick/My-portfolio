const switchers = document.querySelectorAll(".switcher")

const themes = {
  //* === Header ===

  header: {
    theme: {
      light: "header--light",
      dark: "header--dark",
    },
  },
  ".header__mobile-modal": {
    theme: {
      light: "header__mobile-modal--light",
      dark: "header__mobile-modal--dark",
    },
  },

  //* === Mobile-nav ===

  ".mobile-nav__link": {
    theme: {
      light: "mobile-nav__link--light",
      dark: "mobile-nav__link--dark",
    },
  },
  ".mobile-nav__link-resume": {
    theme: {
      light: "mobile-nav__link-resume--light",
      dark: "mobile-nav__link-resume--dark",
    },
  },

  //* === Nav ===

  ".nav__link": {
    theme: {
      light: "nav__link--light",
      dark: "nav__link--dark",
    },
  },

  //* === Btn ===

  ".btn": {
    theme: {
      light: "btn--light",
      dark: "btn--dark",
    },
  },

  //* === Theme ===

  ".theme--modal": {
    theme: {
      light: "theme--modal-light",
      dark: "theme--modal-dark",
    },
  },
  ".theme__close": {
    theme: {
      light: "theme__close--light",
      dark: "theme__close--dark",
    },
  },

  //* === Intro ===

  ".intro": {
    theme: {
      light: "intro--light",
      dark: "intro--dark",
    },
  },
  ".intro__inner": {
    theme: {
      light: "intro__inner--light",
      dark: "intro__inner--dark",
    },
  },
  ".intro__title": {
    theme: {
      light: "intro__title--light",
      dark: "intro__title--dark",
    },
  },
  ".intro__subtitle": {
    theme: {
      light: "intro__subtitle--light",
      dark: "intro__subtitle--dark",
    },
  },
  ".intro__position": {
    theme: {
      light: "intro__position--light",
      dark: "intro__position--dark",
    },
  },

  ".intro .social--github": {
    theme: {
      light: "social--github-light",
      dark: "social--github-dark",
    },
  },

  ".timeline__col .social--github": {
    theme: {
      light: "social--github-light",
      dark: "social--github-dark",
    },
  },
  ".timeline__col .social--telegram": {
    theme: {
      light: "social--telegram-light",
      dark: "social--telegram-dark",
    },
  },
  ".timeline__col .social--vk": {
    theme: {
      light: "social--vk-light",
      dark: "social--vk-dark",
    },
  },

  //* === Works ===

  ".works": {
    theme: {
      light: "works--light",
      dark: "works--dark",
    },
  },
  ".works__nav-link": {
    theme: {
      light: "works__nav-link--light",
      dark: "works__nav-link--dark",
    },
  },

  //* === Work ===

  ".work": {
    theme: {
      light: "work--light",
      dark: "work--dark",
    },
  },
  ".work__cat": {
    theme: {
      light: "work__cat--light",
      dark: "work__cat--dark",
    },
  },
  ".work__title": {
    theme: {
      light: "work__title--light",
      dark: "work__title--dark",
    },
  },
  ".work__box-img": {
    theme: {
      light: "work__box-img--light",
      dark: "work__box-img--dark",
    },
  },

  //* === About ===

  ".about": {
    theme: {
      light: "about--light",
      dark: "about--dark",
    },
  },
  ".about__title": {
    theme: {
      light: "about__title--light",
      dark: "about__title--dark",
    },
  },
  ".about__bigtitle": {
    theme: {
      light: "about__bigtitle--light",
      dark: "about__bigtitle--dark",
    },
  },
  ".about__text": {
    theme: {
      light: "about__text--light",
      dark: "about__text--dark",
    },
  },
  ".about__image-box": {
    theme: {
      light: "about__image-box--light",
      dark: "about__image-box--dark",
    },
  },
  ".about__image-box--overlay": {
    theme: {
      light: "about__image-box--overlay-light",
      dark: "about__image-box--overlay-dark",
    },
  },
  ".about .social--github": {
    theme: {
      light: "social--github-light",
      dark: "social--github-dark",
    },
  },
  ".about__link--popup": {
    theme: {
      light: "about__link--popup-light",
      dark: "about__link--popup-dark",
    },
  },

  //* === Footer ===

  ".footer": {
    theme: {
      light: "footer--light",
      dark: "footer--dark",
    },
  },
  ".footer__copyright": {
    theme: {
      light: "footer__copyright--light",
      dark: "footer__copyright--dark",
    },
  },
  ".footer__nav-link": {
    theme: {
      light: "footer__nav-link--light",
      dark: "footer__nav-link--dark",
    },
  },
  ".footer__nav-btn": {
    theme: {
      light: "footer__nav-btn--light",
      dark: "footer__nav-btn--dark",
    },
  },
  ".footer .social--github": {
    theme: {
      light: "social--github-light",
      dark: "social--github-dark",
    },
  },

  //* === Burger-btn ===

  ".burger-btn": {
    theme: {
      light: "burger-btn--light",
      dark: "burger-btn--dark",
    },
  },
  ".burger-btn__line": {
    theme: {
      light: "burger-btn__line--light",
      dark: "burger-btn__line--dark",
    },
  },

  //* === Modal ===

  ".modal": {
    theme: {
      light: "modal--light",
      dark: "modal--dark",
    },
  },
  ".modal__dialog": {
    theme: {
      light: "modal__dialog--light",
      dark: "modal__dialog--dark",
    },
  },
  ".modal__title": {
    theme: {
      light: "modal__title--light",
      dark: "modal__title--dark",
    },
  },
  ".modal__subtitle": {
    theme: {
      light: "modal__subtitle--light",
      dark: "modal__subtitle--dark",
    },
  },

  //* === Modal-list ===

  ".modal-list__item": {
    theme: {
      light: "modal-list__item--light",
      dark: "modal-list__item--dark",
    },
  },
  ".modal-list__link": {
    theme: {
      light: "modal-list__link--light",
      dark: "modal-list__link--dark",
    },
  },

  //* === Modal-work ===

  ".modal-work__description": {
    theme: {
      light: "modal-work__description--light",
      dark: "modal-work__description--dark",
    },
  },
  ".modal-work__arrow-up-pic": {
    theme: {
      light: "modal-work__arrow-up-pic--light",
      dark: "modal-work__arrow-up-pic--dark",
    },
  },
  ".modal-work__title": {
    theme: {
      light: "modal-work__title--light",
      dark: "modal-work__title--dark",
    },
  },
  ".modal-work__info": {
    theme: {
      light: "modal-work__info--light",
      dark: "modal-work__info--dark",
    },
  },
  ".modal-work__client-title": {
    theme: {
      light: "modal-work__client-title--light",
      dark: "modal-work__client-title--dark",
    },
  },
  ".modal-work__client-company": {
    theme: {
      light: "modal-work__client-company--light",
      dark: "modal-work__client-company--dark",
    },
  },
  ".modal-work__text": {
    theme: {
      light: "modal-work__text--light",
      dark: "modal-work__text--dark",
    },
  },
  ".modal-work__btn": {
    theme: {
      light: "modal-work__btn--light",
      dark: "modal-work__btn--dark",
    },
  },

  //* === Show-more ===

  ".show-more__trigger": {
    theme: {
      light: "show-more__trigger--light",
      dark: "show-more__trigger--dark",
    },
  },
  ".show-more__arrow": {
    theme: {
      light: "show-more__arrow--light",
      dark: "show-more__arrow--dark",
    },
  },

  //* === Progress-bar ===

  ".progress-bar": {
    theme: {
      light: "progress-bar--light",
      dark: "progress-bar--dark",
    },
  },
  ".progress-bar__item": {
    theme: {
      light: "progress-bar__item--light",
      dark: "progress-bar__item--dark",
    },
  },
  ".progress-bar__title": {
    theme: {
      light: "progress-bar__title--light",
      dark: "progress-bar__title--dark",
    },
  },
  ".progress-bar__bar": {
    theme: {
      light: "progress-bar__bar--light",
      dark: "progress-bar__bar--dark",
    },
  },
  ".progress-bar__progress": {
    theme: {
      light: "progress-bar__progress--light",
      dark: "progress-bar__progress--dark",
    },
  },

  //* === Timeline ===

  ".timeline": {
    theme: {
      light: "timeline--light",
      dark: "timeline--dark",
    },
  },
  ".timeline__arrow-up": {
    theme: {
      light: "timeline__arrow-up--light",
      dark: "timeline__arrow-up--dark",
    },
  },
  ".timeline__title": {
    theme: {
      light: "timeline__title--light",
      dark: "timeline__title--dark",
    },
  },
  ".timeline__date": {
    theme: {
      light: "timeline__date--light",
      dark: "timeline__date--dark",
    },
  },
  ".timeline__subtitle": {
    theme: {
      light: "timeline__subtitle--light",
      dark: "timeline__subtitle--dark",
    },
  },
  ".timeline__arrow-up-pic": {
    theme: {
      light: "timeline__arrow-up-pic--light",
      dark: "timeline__arrow-up-pic--dark",
    },
  },
  ".timeline__text": {
    theme: {
      light: "timeline__text--light",
      dark: "timeline__text--dark",
    },
  },
  ".timeline__position": {
    theme: {
      light: "timeline__position--light",
      dark: "timeline__position--dark",
    },
  },
  ".timeline__image": {
    theme: {
      light: "timeline__image--light",
      dark: "timeline__image--dark",
    },
  },

  //* === Contact ===

  ".contact__info": {
    theme: {
      light: "contact__info--light",
      dark: "contact__info--dark",
    },
  },
  ".contact__info-link": {
    theme: {
      light: "contact__info-link--light",
      dark: "contact__info-link--dark",
    },
  },
  ".contact__info-icon": {
    theme: {
      light: "contact__info-icon--light",
      dark: "contact__info-icon--dark",
    },
  },
  ".lang-tool": {
    theme: {
      light: "lang-tool--light",
      dark: "lang-tool--dark",
    },
  },
  ".modal-list__item--more-info": {
    theme: {
      light: "modal-list__item--more-info-light",
      dark: "modal-list__item--more-info-dark",
    },
  },
  ".person-data__link": {
    theme: {
      light: "person-data__link--light",
      dark: "person-data__link--dark",
    },
  },
  ".person-data__custom-checkbox": {
    theme: {
      light: "person-data__custom-checkbox--light",
      dark: "person-data__custom-checkbox--dark",
    },
  },
  ".person-data__error-popup--active": {
    theme: {
      light: "person-data__error-popup--active-light",
      dark: "person-data__error-popup--active-dark",
    },
  },
  ".person-data__text": {
    theme: {
      light: "person-data__text--light",
      dark: "person-data__text--dark",
    },
  },
  ".timeline__link": {
    theme: {
      light: "timeline__link--light",
      dark: "timeline__link--dark",
    },
  },
  ".header__font-change": {
    theme: {
      light: "header__font-change--light",
      dark: "header__font-change--dark",
    },
  },
  ".font-change__icon": {
    theme: {
      light: "font-change__icon--light",
      dark: "font-change__icon--dark",
    },
  },
  ".font-change__text": {
    theme: {
      light: "font-change__text--light",
      dark: "font-change__text--dark",
    },
  },
  ".font-change__popup": {
    theme: {
      light: "font-change__popup--light",
      dark: "font-change__popup--dark",
    },
  },
  ".tech-box__text-description": {
    theme: {
      light: "tech-box__text-description--light",
      dark: "tech-box__text-description--dark",
    },
  },
  ".timeline__photo": {
    theme: {
      light: "timeline__photo--light",
      dark: "timeline__photo--dark",
    },
  },
  ".technologies-board": {
    theme: {
      light: "technologies-board--light",
      dark: "technologies-board--dark",
    },
  },
  ".popup-theme": {
    theme: {
      light: "popup-theme--light",
      dark: "popup-theme--dark",
    },
  },
  ".timeline__img": {
    theme: {
      light: "timeline__img--light",
      dark: "timeline__img--dark",
    },
  },
  ".header__inner": {
    theme: {
      light: "header__inner--light",
      dark: "header__inner--dark",
    },
  },
}

function themeSwitch(theme) {
  const switcherLight = document.querySelector(".header__theme-light")
  const switcherDark = document.querySelector(".header__theme-dark")
  for (key in themes) {
    const elems = document.querySelectorAll(key)
    elems.forEach((elem) => {
      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {
        elem.classList.remove(`${themes[key].theme.dark}`, `${themes[key].theme.light}`)

        if (theme === "light") {
          elem.classList.add(`${themes[key].theme.light}`)
          switcherLight.classList.add("hide")
          switcherDark.classList.remove("hide")
        } else {
          elem.classList.add(`${themes[key].theme.dark}`)
          switcherDark.classList.add("hide")
          switcherLight.classList.remove("hide")
        }
      }
    })
  }
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function (e) {
    if (e.target.closest(".switcher").dataset.theme === "light") {
      themeSwitch("light")
    } else {
      themeSwitch("dark")
    }
    localStorage.setItem("theme", this.dataset.theme)
  })
})

const activeTheme = localStorage.getItem("theme")

if (activeTheme === "") {
  themeSwitch("light")
} else {
  themeSwitch(activeTheme)
}

// Checking when the system preferences are active

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && activeTheme === "") {
  themeSwitch("dark")
}

// Changing theme when the System preferences change

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  const newColorScheme = event.matches ? "dark" : "light"

  if (newColorScheme === "dark") {
    themeSwitch("dark")
    localStorage.setItem("theme", "dark")
  } else {
    themeSwitch("light")
    localStorage.setItem("theme", "light")
  }
})
