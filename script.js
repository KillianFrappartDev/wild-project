// SIDEBAR
// ---> Variables
const hamburgerBtn = document.querySelector(".navbar__hamburger");
const backdrop = document.querySelector(".backdrop");
const sidebar = document.querySelector(".sidebar");
const sidebarItems = Array.from(document.querySelectorAll(".sidebar__item"));

// ---> Event Listeners
hamburgerBtn.addEventListener("click", openSidebar);

backdrop.addEventListener("click", closeSidebar);

sidebarItems.map((item) => {
  item.addEventListener("click", closeSidebar);
});

// ---> Functions
function openSidebar() {
  backdrop.classList.add("visible-backdrop");
  sidebar.classList.add("visible-sidebar");
}

function closeSidebar() {
  backdrop.classList.remove("visible-backdrop");
  sidebar.classList.remove("visible-sidebar");
}

//CAROUSEL
// ---> Variables
const carouselItems = Array.from(
  document.querySelectorAll(".hero__carousel-item")
);
let currentIndex = -1;

// ---> Functions
setInterval(() => {
  if (carouselItems[currentIndex]) {
    carouselItems[currentIndex].classList.remove("carousel-active");
  }

  if (currentIndex === carouselItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carouselItems[currentIndex].classList.add("carousel-active");
  carouselItems[currentIndex].style.zIndex += 1;
}, 8000);

//Chat
// ---> Variables
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.querySelector(".contact__form-button");
const chat = document.querySelector(".chat");
const chatBox = document.querySelector(".chat__messages");
const chatBtn = document.querySelector(".chat__input-btn");
const userInput = document.querySelector(".chat__input");
let userName;

// ---> Event Listeners
submitBtn.addEventListener("click", () => {
  if (
    nameInput.value.trim() &&
    emailInput.value.trim() &&
    messageInput.value.trim()
  ) {
    userName = nameInput.value;
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    chat.classList.add("visible-chat");

    const welcomeMsg = document.createElement("div");
    welcomeMsg.classList.add("chat__robot-text");
    welcomeMsg.innerHTML = "Hello " + userName + " your message has been successfully sent ! ✔";
    setTimeout(() => {
        chatBox.appendChild(welcomeMsg);
    }, 1000)

    const secondMsg = document.createElement("div");
    secondMsg.classList.add("chat__robot-text");
    secondMsg.innerHTML = "I'm a dummy robot, I can only tell jokes... Do you want to laugh ? ";
    setTimeout(() => {
        chatBox.appendChild(secondMsg);
    }, 2000)

  } else {
    alert("Inputs can not be empty, please type something first");
  }
});

chatBtn.addEventListener("click", () => {
    if (userInput.value.trim()) {
        const userMsg = userInput.value;
        const newMsg = document.createElement("div");
        newMsg.classList.add("chat__user-text");
        newMsg.innerHTML = userMsg;
        chatBox.appendChild(newMsg);
        userInput.value = "";
        setTimeout(() => {
            getJoke();
        }, 1000)
    }
});

// ---> Functions
function getJoke() {
  fetch("https://joke3.p.rapidapi.com/v1/joke", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "joke3.p.rapidapi.com",
      "x-rapidapi-key": "86969e7dbdmsh8049a39fd70f765p1acae1jsn02f9c7197efc",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((jokeObj) => {
        const newJoke = document.createElement("div");
        newJoke.classList.add("chat__robot-text");
        newJoke.innerHTML = jokeObj.content;
        chatBox.appendChild(newJoke);
    })
    .catch((err) => {
      console.log(err);
    });
}
