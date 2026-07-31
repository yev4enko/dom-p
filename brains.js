const mainBody = document.querySelector("body"),
    headerContainer = document.querySelector(".header-container"),
    contentContainer = document.querySelector(".content-container"),
    navigationBar = document.querySelector(".navbar-container"),
    titleInput = document.querySelector(".title-text-area"),
    post = document.querySelector(".post"),
    descrInput = document.querySelector(".descr-text-area");

const clear = '';

headerContainer.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("fa-moon")) {
        mainBody.classList.add("style-white")
        event.target.classList.replace("fa-moon", "fa-sun");
    } else if (event.target.classList.contains("fa-sun")) {
        event.target.classList.replace("fa-sun", "fa-moon");
        mainBody.classList.remove("style-white")
    }
})

navigationBar.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-lock-open")) {
        event.target.classList.replace("fa-lock-open", "fa-lock");
        navigationBar.classList.add("locked")
    } else if (event.target.classList.contains("fa-lock")) {
        event.target.classList.replace("fa-lock", "fa-lock-open");
        navigationBar.classList.remove("locked")
    }
})

navigationBar.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-btn")) {
        event.target.parentElement.classList.toggle("navbar-list-opener")
    }
})

post.addEventListener("click", (event) => {
    if (event.target.classList.contains("send") && descrInput.value !== clear && titleInput.value !== clear) {
        const inputTitle = titleInput.value
        const inputDescr = descrInput.value;
        descrInput.value = clear;
        titleInput.value = clear;
    }
})

descrInput.addEventListener("input", () => {
    const descrWordSum = document.querySelector(".sum");
    const maxLength = 250;
    const deLength = descrInput.value.length;
    descrWordSum.textContent = `Total: ${deLength} out of: ${maxLength}`;
    if (descrInput.value.length > 250) {
        descrInput.value = descrInput.value.slice(0, 249);
    }
});