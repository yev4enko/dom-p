const body = document.querySelector("body"),
    navOpenClose = document.querySelectorAll(".nav-toggle"),
    navVisible = document.querySelector(".navbar-container"),
    navBtnsAll = document.querySelectorAll(".nav-btn"),
    headerC = document.querySelector(".header-container"),
    ddlists = document.querySelectorAll(".ddlists"),
    stylesB = document.querySelector(".styles-b"),
    postNav = document.querySelector(".post-nav"),
    postsCon = document.querySelector(".post-container"),

    getTittle = document.querySelector(".tittle"),
    getDescr = document.querySelector(".description"),

    cancel = document.querySelector(".cancel"),
    apply = document.querySelector(".apply"),

    navC = document.querySelector(".nav-list"),

    styleing = document.querySelector(".styleing"),

    locked = document.querySelector(".locked");

navOpenClose.forEach(function (button) {
    button.addEventListener("click", () => {
        navVisible.classList.toggle("open")
    })
})

navC.addEventListener("click", (event) => {
    const parent = event.target.parentElement;
    parent.classList.toggle("open1");
})

const n = () => {
    const clear = '';
    const text = getDescr.value
    console.log(text);
    getDescr.value = clear;

}
apply.addEventListener("click", n)

styleing.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-moon")) {
        event.target.classList.replace("fa-moon", "fa-sun");
        body.classList.replace("style-black", "style-white");
    } else if (event.target.classList.contains("fa-sun")) {
        event.target.classList.replace("fa-sun", "fa-moon");
        body.classList.replace("style-white", "style-black");
    }
})

locked.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-lock-open")) {
        event.target.classList.replace("fa-lock-open", "fa-lock");
        navVisible.classList.add("lock3");
    }
    else if (event.target.classList.contains("fa-lock")) {
        event.target.classList.replace("fa-lock", "fa-lock-open");
        navVisible.classList.remove("lock3");
    }
})