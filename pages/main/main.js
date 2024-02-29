renderQuizCards()

const toggleButtons = document.querySelectorAll(".toggle-button")
toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const answerEl = document.querySelector(`[data-js-card-answer="${index}"]`)
    answerEl.classList.toggle("hidden")
  })
})

const bookmarkToggles = document.querySelectorAll('[data-js="bookmark-toggle"]')
bookmarkToggles.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log("set active")
    button.classList.toggle("active")
    quiz.toggleBookmark(index)
  })
})