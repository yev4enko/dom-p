const mainBody = document.querySelector("body"),
    headerContainer = document.querySelector(".header-container"),
    contentContainer = document.querySelector(".content-container"),
    navigationBar = document.querySelector(".navbar-container"),
    titleInput = document.querySelector(".title-text-area"),
    post = document.querySelector(".post"),
    descrInput = document.querySelector(".descr-text-area"),
    postedPostsContainer = document.querySelector(".posted-posts-container")
postNoticeWarnming = document.querySelector(".post-notice-varning ");
const clear = '';

const posts = document.querySelector(".posts");

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
        createPost(inputTitle, inputDescr, posts);
        descrInput.value = clear;
        titleInput.value = clear;
    }
    if (event.target.classList.contains("close-post")) {
        post.classList.add("flex-none");
    }
    if (event.target.classList.contains("cancel")) {
        if (descrInput.value !== clear || titleInput.value !== clear) {
            postNoticeWarnming.classList.remove("flex-none")
        } else {
            post.classList.add("flex-none");
        }
    }
    postNoticeWarnming.addEventListener("click", (event) => {
        if (event.target.classList.contains("ok")) {
            postNoticeWarnming.classList.add("flex-none");
            descrInput.value = clear;
            titleInput.value = clear;
            post.classList.add("flex-none");
        }
        else if (event.target.classList.contains("back")) {
            postNoticeWarnming.classList.add("flex-none");
        }
    })
})

descrInput.addEventListener("input", () => {
    const descrWordSum = document.querySelector(".sum");
    const maxLength = 250;
    const descrLength = descrInput.value.length;
    descrWordSum.textContent = `Total: ${descrLength} out of: ${maxLength}`;
});

postedPostsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("create-post")) {
        post.classList.remove("flex-none");
    }
})

function createPost(tittle, description, destinationContainer) {
    const post = document.createElement('div')
    const posttittle = document.createElement('h1')
    const descriptionf = document.createElement('div')

    post.classList.add("posted-post", "flex-column")

    posttittle.textContent = tittle;
    posttittle.classList.add("post-tittle")

    descriptionf.textContent = description;
    descriptionf.classList.add("post-descr")

    destinationContainer.appendChild(post)
    post.appendChild(posttittle)
    post.appendChild(descriptionf)
}