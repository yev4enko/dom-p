const body = document.querySelector("body"),
    navOpenClose = document.querySelectorAll(".nav-toggle"),
    navVisible = document.querySelector(".navbar-container"),
    navBtnsAll = document.querySelectorAll(".nav-btn"),
    headerC = document.querySelector(".header-container"),
    ddlists = document.querySelectorAll(".ddlists"),
    stylesB = document.querySelector(".styles-b"),
    navC = document.querySelector(".nav-list");

navOpenClose.forEach(function (button) {
    button.addEventListener("click", () => {
        navVisible.classList.toggle("open")
    })
})

navC.addEventListener("click", (event) => {
    const parent = event.target.parentElement;
    parent.classList.toggle("open1");
})

stylesB.addEventListener("click", (event) => {
})

