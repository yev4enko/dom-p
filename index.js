import { getData, printPost, eventHandler, eventHandlerSearch } from "./scripts/posts.js";
import { printModal } from "./scripts/modal.js";
import { reverse } from "./scripts/math.js";

const contentNavbarContainer = document.getElementById("content-navbar");

getData()
    .then((posts) => posts = reverse(posts))
    .then((posts) => {
        if (localStorage.length === 0) {
            posts.forEach(post => {
                localStorage.setItem(`postID${post.postID}`, JSON.stringify(post))
            })
        }
        return posts;
    })
    .then((posts) => {
        if (localStorage !== 0) {
            posts.forEach((post) => {
                const postss = JSON.parse(localStorage.getItem(`postID${post.postID}`))
                printPost(postss)
            })
        }
    })
    .then(() => {
        eventHandler();
        eventHandlerSearch();
    })