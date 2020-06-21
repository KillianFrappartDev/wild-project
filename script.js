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

//ROBOT
// ---> Variables
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.querySelector(".contact__form-button");
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

    getJoke();

  } else {
    alert("Inputs can not be empty, please type something first");
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
        console.log(jokeObj.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
