const body = document.querySelector("body"),
    navOpenClose = document.querySelectorAll(".nav-toggle"),
    navVisible = document.querySelector(".navbar-container"),
    navBtnsAll = document.querySelectorAll(".nav-btn"),
    headerC = document.querySelector(".header-container"),
    navC = document.querySelector(".nav-list");

navOpenClose.forEach(function (button) {
    button.addEventListener("click", () => {
        navVisible.classList.toggle("display")
    })
})

navC.addEventListener("click", (event) => {
    const elem = event.target.nextElementSibling;
    if (elem != null && elem.classList.contains("ddlists")) {
        elem.classList.toggle("display");
    }
})
