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


postNav.addEventListener("click", (event) => {
    if (event.target.classList.contains("lock2")) {
        event.target.parentElement.classList.toggle("lock-vertical")
    }
    if(event.target.classList.contains("mid1")){
        postsCon.classList.toggle("visible")
    }
})

const n = ()=> {
    console.log(getDescr.value);
}
apply.addEventListener("click", n)

