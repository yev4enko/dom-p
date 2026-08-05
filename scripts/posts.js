import { printModal } from "./modal.js";

export function getData() {
    return fetch('./posts.json')
        .then((responce) => { return responce.json() })
}

export function printPost(arr) {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML +=
        `<div class="post">
            <button class="content-btn"></button>
            <button class="modal-btn"></button>
            <h1 class="author">${arr.authorName}</h1>
            <h1 class="tittle">${arr.title}</h1>
            <div class="descr">${arr.description}</descr>
        </div>`
}

export function eventHandler() {
    const container = document.querySelector(".content");

    container.addEventListener("click", (event) => {

        const button = event.target.closest(".content-btn");
        const modalButton = event.target.closest(".modal-btn");
        if (event.target.closest(".content-btn")) {
            if (!button) return;
            const post = button.closest(".post");
            post.classList.toggle("extended")
        }
        if (event.target.closest(".modal-btn")) {
            if (!modalButton) return;
            printModal();
        }
    });
}