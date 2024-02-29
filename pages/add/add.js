const form = document.getElementById("qsAndAsForm")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  console.log("Form submitted")

  const question = document.getElementById("question").value
  const answer = document.getElementById("answer").value
  const tags = document.getElementById("tags").value.split(",")
  const isBookmarked = document.getElementById("isBookmarked").checked

  const newQsAndAs = {
    question: question,
    answer: answer,
    tags: tags,
    isBookmarked: isBookmarked
  }

  const qsAndAs = JSON.parse(localStorage.getItem("qsAndAs")) || []

  qsAndAs.push(newQsAndAs)

  localStorage.setItem("qsAndAs", JSON.stringify(qsAndAs))

  form.reset()
})


function resetForm() {
  document.getElementById("qsAndAsForm").reset()
}

const questionTextarea = document.querySelector('[data-js="question"]')
const answerTextarea = document.querySelector('[data-js="answer"]')
const questionCounter = document.querySelector('[data-js="questionCounter"]')
const answerCounter = document.querySelector('[data-js="answerCounter"]')

questionTextarea.addEventListener("input", function () {
  const remaining = this.maxLength - this.value.length
  questionCounter.textContent = `${remaining} characters remaining`
})

answerTextarea.addEventListener("input", function () {
  const remaining = this.maxLength - this.value.length
  answerCounter.textContent = `${remaining} characters remaining`
})

document.addEventListener("DOMContentLoaded", (event) => {
  const textareas = document.querySelectorAll("textarea")

  textareas.forEach((textarea) => {
    textarea.addEventListener("keyup", function () {
      if (this.value.length >= 150) {
        this.style.backgroundColor = "red"
      } else {
        this.style.backgroundColor = ""
      }
    })
  })
})