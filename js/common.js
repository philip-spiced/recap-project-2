class Quiz {
  constructor() {
    this.quizCards = []
  }

  addCard(question, answer) {
    this.quizCards.push({ question, answer })
  }

  addCards(cards) {
    this.quizCards.push(...cards)
  }

  toggleBookmark(index) {
    this.quizCards[index].isBookmarked = !this.quizCards[index].isBookmarked
    // update the quiz card in local storage
    localStorage.setItem("qsAndAs", JSON.stringify(this.quizCards))
  }
}
const quiz = new Quiz()
quiz.addCards(JSON.parse(localStorage.getItem("qsAndAs")))

function renderQuizCards() {
  const cardList = document.querySelector('[data-js="quiz-card-list"]')
  cardList.innerHTML = ""

  quiz.quizCards.forEach((card, index) => {
    const cardEl = document.createElement("div")

    cardEl.innerHTML = `
    <div class="quiz-list w-full w-full" data-js-card-index="${index}">
      <div class="quiz-card p-4">
        <div class="bookmark-img ${card.isBookmarked ? "active" : null}" data-js="bookmark-toggle" data-js-toggle-id="${index}"></div>
        <div>
          <p>${card.question}</p>
        </div>
        <div>
          <button class="toggle-button">Show Answer</button>
        </div>
        <div class="card-answer hidden" data-js-card-answer="${index}">
          <p>${card.answer}</p>
        </div>
        <div>
          ${card.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </div>
    `
    cardList.appendChild(cardEl)
  })
}

function renderBookmarkCards() {
  const cardList = document.querySelector('[data-js="bookmarks-card-list"]')
  cardList.innerHTML = ""

  quiz.quizCards.forEach((card, index) => {
    if (card.isBookmarked) {
      const cardEl = document.createElement("div")

      cardEl.innerHTML = `
    <div class="quiz-list w-full w-full" data-js-card-index="${index}">
      <div class="quiz-card p-4">
        <div>
          <p>${card.question}</p>
        </div>
        <div>
          <button class="toggle-button">Show Answer</button>
        </div>
        <div class="card-answer hidden" data-js-card-answer="${index}">
          <p>${card.answer}</p>
        </div>
        <div>
          ${card.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </div>
    `

      cardList.appendChild(cardEl)
    }
  })
}