import { printModal } from "./modal.js";

const post = function (arr) {
    if (arr === null || arr === undefined) {
        return '';
    }
    let postContent = `<div id="postID${arr.postID}"class="post">
        <div class="post-upper">
            <div class = "post-upper-text">
                <a href="#postID-${arr.postID}" id="content-extend" class="tittle">${arr.title}</a>
                <div class="author">by.${arr.authorName}</div>
                <div class="saved">${arr.savedPost}</div>
                <div class="tags">${arr.tags}</div>
            </div>
            <div class="post-descr">   
                <div class="descr">${arr.description}</div>
            </div>
        </div> 
        <div class="post-nav">
            <button id = "save-nav" class="post-btn"><i class="fa-solid fa-bookmark"></i></button>
            <button id = "edit-nav" class="post-btn"><i class="fa-solid fa-pen"></i></button>
            <button id = "remove-nav" class="post-btn"><i class="fa-solid fa-trash"></i></button>
        </div> 
    </div>`
    return postContent;
}

function removePost(arr) {
    arr.remove()
}

export function getData() {
    return fetch('./posts.json')
        .then((responce) => { return responce.json() })
}

export function printPost(arr) {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML += post(arr)
}

export function eventHandler() {
    const contentContainer = document.querySelector(".content");
    const searchContainer = document.querySelector(".search-container")

    contentContainer.addEventListener("click", e => {
        const target = e.target
        const link = target.closest("#content-extend")
        if (!link) {
            return;
        }
        const post = link.closest(".post")
        const text = post.querySelector(".descr");
        text.classList.toggle("extended")
        post.classList.toggle("extended")
    })
    contentContainer.addEventListener("click", e => {
        const target = e.target
        const saveButton = target.closest("#save-nav");
        if (!saveButton) {
            return;
        }
        const post = saveButton.closest(".post")
        const saveCounter = post.querySelector(".saved")
        const postOjb = JSON.parse(localStorage.getItem(`${post.id}`))

        postOjb.savedPost = postOjb.savedPost === true ? false : true;
        const postObjString = JSON.stringify(postOjb)
        localStorage.setItem(`${post.id}`, postObjString)
        const postPostObj = JSON.parse(localStorage.getItem(`${post.id}`))
        saveCounter.textContent = postPostObj.savedPost

    })
    contentContainer.addEventListener("click", e => {
        const target = e.target
        const deleteButton = target.closest("#remove-nav");
        if (!deleteButton) {
            return;
        }
        const post = deleteButton.closest(".post")
        localStorage.removeItem(`${post.id}`)
        removePost(post)
    })

}

export function eventHandlerSearch() {
    const searchContainer = document.querySelector(".search-container")
    searchContainer.addEventListener("click", (e) => {
        const target = e.target;
        const savedFilter = target.closest("#saved-posts")
        const posts = document.querySelectorAll(".post")
        if (!savedFilter) {
            return
        }
        let postsObj = getAllPostsFromLSByKey("postID")
        postsObj.filter(p => p.savedPost === true)
    })

}


function getAllPostsFromLSByKey(key) {
    const posts = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(key)) {
            const post = JSON.parse(localStorage.getItem(key));
            posts.push(post);
        }
    }
    return posts;
}