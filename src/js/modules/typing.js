document.addEventListener("DOMContentLoaded", () => {
  // Массивы текста для разных языков
  const phrases = {
    ru: ["Frontend-разработчик", "UI/UX дизайнер"],
    en: ["Frontend Developer", "UI/UX Designer"],
  }

  let typedInstance = null

  function startTyped(lang = "ru") {
    // Если уже есть активный Typed, уничтожаем
    if (typedInstance) {
      typedInstance.destroy()
      document.querySelector("#typing").textContent = ""
    }

    typedInstance = new Typed("#typing", {
      strings: phrases[lang],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    })
  }

  // Запуск после появления блока через AOS
  document.addEventListener("aos:in", ({detail}) => {
    if (detail.id === "typing") {
      // currentLang — переменная с текущим языком (ru/en)
      startTyped(window.currentLang || "ru")
    }
  })

  // Функция смены языка
  window.changeLang = function (lang) {
    window.currentLang = lang
    if (typedInstance) {
      typedInstance.destroy()
      document.querySelector("#typing").textContent = ""
    }
    startTyped(lang)
  }
})
