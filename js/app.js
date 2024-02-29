// current page

const transitionSpeed = 200

// create a js map with the pages
const pages = new Map()
pages.set("home", "./pages/main")
pages.set("bookmark", "./pages/bookmark")
pages.set("profile", "./pages/profile")
pages.set("add", "./pages/add")

let defaultPage = sessionStorage.getItem("defaultPage")

if (!defaultPage) {
  defaultPage = "home"
  sessionStorage.setItem("defaultPage", defaultPage)
}

// create a function that removes the active class from all buttons and sets the active class to the button that was clicked
const setActiveButton = (buttonEl) => {
  mainBodyFrameEl.classList.add("loading")
  //reset
  homeButtonEl.classList.remove("active")
  bookmarkButtonEl.classList.remove("active")
  profileButtonEl.classList.remove("active")
  addButtonEl.classList.remove("active")
  //set
  buttonEl.classList.add("active")
  setTimeout(() => {
    console.log("removing...")
    mainBodyFrameEl.classList.remove("loading")
  }, 500)
}

const mainBodyFrameEl = document.querySelector('[data-js="main-body-frame"]')
const homeButtonEl = document.querySelector('[data-js="home-button"]')
const bookmarkButtonEl = document.querySelector('[data-js="bookmark-button"]')
const profileButtonEl = document.querySelector('[data-js="profile-button"]')
const addButtonEl = document.querySelector('[data-js="add-button"]')

// mainBodyFrameEl.addEventListener("load", function () {
//   this.classList.add("loaded")
// })

addButtonEl.addEventListener("click", () => {
  setActiveButton(addButtonEl)

  sessionStorage.setItem("defaultPage", "add")
  setTimeout(() => {
    mainBodyFrameEl.src = pages.get("add")
  }, transitionSpeed)
  mainBodyFrameEl.classList.remove("loaded")
})

homeButtonEl.addEventListener("click", () => {
  setActiveButton(homeButtonEl)
  setTimeout(() => {
    mainBodyFrameEl.src = pages.get("home")
  }, transitionSpeed)
  sessionStorage.setItem("defaultPage", "home")
})

bookmarkButtonEl.addEventListener("click", () => {
  setActiveButton(bookmarkButtonEl)
  setTimeout(() => {
    mainBodyFrameEl.src = pages.get("bookmark")
  }, transitionSpeed)
  sessionStorage.setItem("defaultPage", "bookmark")
})

profileButtonEl.addEventListener("click", () => {
  setActiveButton(profileButtonEl)
  setTimeout(() => {
    mainBodyFrameEl.src = pages.get("profile")
  }, transitionSpeed)
  sessionStorage.setItem("defaultPage", "profile")
})

const qsAndAs = [
  {
    question: "What is the name of the school that Harry Potter attends?",
    answer: "Hogwarts School of Witchcraft and Wizardry",
    tags: ["#harrypotter", "#hogwarts"],
    isBookmarked: false
  },
  {
    question: "Who is Harry Potter's best friend throughout the series?",
    answer: "Ron Weasley",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the lightning bolt-shaped scar on Harry Potter's forehead?",
    answer: "The Dark Mark",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "Which magical creature guards the entrance to the Gryffindor common room?",
    answer: "The Fat Lady (portrait)",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the game played on flying broomsticks in the wizarding world?",
    answer: "Quidditch",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the three-headed dog that guards the Sorcerer's Stone?",
    answer: "Fluffy",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "Which professor is the head of Slytherin House at Hogwarts?",
    answer: "Severus Snape",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What is the name of the dark wizard who killed Harry Potter's parents and tried to kill him as a baby?",
    answer: "Lord Voldemort (Tom Riddle)",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question: "What type of creature is Dobby?",
    answer: "House Elf",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  },
  {
    question:
      "What magical object allows the Marauders to create a map of Hogwarts that shows its layout and the location of people within it?",
    answer: "The Marauder's Map",
    tags: ["#harrypotter", "#ronweasley"],
    isBookmarked: false
  }
]

if (!localStorage.getItem("qsAndAs")) {
  localStorage.setItem("qsAndAs", JSON.stringify(qsAndAs))
}

window.addEventListener("DOMContentLoaded", (event) => {
  const defaultPage = sessionStorage.getItem("defaultPage")
  if (defaultPage) {
    mainBodyFrameEl.src = pages.get(defaultPage)
    switch (defaultPage) {
      case "home":
        setActiveButton(homeButtonEl)
        break
      case "bookmark":
        setActiveButton(bookmarkButtonEl)
        break
      case "add":
        setActiveButton(addButtonEl)
        break
      case "profile":
        setActiveButton(profileButtonEl)
        break
      default:
        setActiveButton(homeButtonEl)
    }
  }
})