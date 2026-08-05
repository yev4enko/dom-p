//открывает модалки на весь экран при нажатия на кнопки удаляется 
//
//использовать local storage для замены стиля 
//mainTheme b/w
//fontColor
//borderColor
//backgroundcolor
//fontFamily

import { openElement, closeElement } from "./scripts/contentnav.js";
import { getData, printPost, eventHandler } from "./scripts/posts.js";
import { printModal } from "./scripts/modal.js";


const contentNavbarContainer = document.getElementById("content-navbar");

contentNavbarContainer.addEventListener("mouseenter", () => {
    if (event.target == contentNavbarContainer) {
        openElement(contentNavbarContainer)
    }
})
contentNavbarContainer.addEventListener("mouseleave", () => {
    if (event.target == contentNavbarContainer) {
        closeElement(contentNavbarContainer)
    }
})

getData()
    .then(posts => {posts.forEach(post => printPost(post)) })
    .then(eventHandler())

