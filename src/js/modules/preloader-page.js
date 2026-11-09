document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader")

  if (!preloader) return

  const minDuration = 1800
  const maxDuration = 8000
  const startTime = Date.now()

  let isHidden = false

  const hidePreloader = () => {
    if (isHidden) return

    isHidden = true

    const elapsed = Date.now() - startTime
    const remaining = Math.max(0, minDuration - elapsed)

    setTimeout(() => {
      preloader.classList.add("is-hidden")

      document.body.classList.remove("no-scroll")

      setTimeout(() => {
        preloader.remove()
      }, 650)
    }, remaining)
  }

  if (document.readyState === "complete") {
    hidePreloader()
  } else {
    window.addEventListener("load", hidePreloader, {
      once: true,
    })
  }

  setTimeout(hidePreloader, maxDuration)
})

