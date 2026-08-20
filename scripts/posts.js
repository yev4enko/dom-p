import { modal } from "./modal.js";
import { cut } from "./math.js";

const post = function (arr) {
    if (arr === null || arr === undefined) {
        return '';
    }
    let postContent = `<div id="${arr.postID}"class="post">
        <div class="post-upper">
            <div class = "upper-text">
                <div class="tittle">${arr.postTittle}</div>
                <div class="author">by. ${arr.authorName}</div>
                <div class="tags">${arr.postTags}</div>
                <div class="descr">${cut(arr.postDescr, 250)}</div>
            </div>
        </div> 
        <div class="post-nav">
            <button id = "save-nav" class="post-btn"><i class="fa-solid fa-bookmark"></i></button>
            <button id = "edit-nav" class="post-btn"><i class="fa-solid fa-pen"></i></button>
            <button id = "delete-nav" class="post-btn"><i class="fa-solid fa-trash"></i></button>
        </div> 
    </div>`
    return postContent;
}

export function getData() {
    return fetch('./posts.json')
        .then(responce => responce.json())
}

export function renderPosts(arr) {
    const contentContainer = document.getElementById("content-text-main");
    contentContainer.innerHTML += post(arr)
}

export function eventHandler() {
    const contentContainer = document.querySelector(".content-container"),
        contentPosts = document.querySelector(".content-text"),
        deleteModalDOM = document.getElementById("delete-modal");

    const button1 = document.getElementById("delete-modal-apply");
    const button2 = document.getElementById("delete-modal-cancel");

    // deleteModalDOM.addEventListener("click", async (e) => {
    //     const target = e.target;
    //     const button1 = target.closest("delete-modal-apply");
    //     const button2 = target.closest("delete-modal-cancel");

    //     const res = await modal(deleteModalDOM, button1, button2);
    //     res ? deletePost(delet.closest(".post"), deleteModalDOM) : deleteModalDOM.close();
    // })

    contentPosts.addEventListener("click", async (e) => {
        const target = e.target;
        const delet = target.closest("#delete-nav"),
            save = target.closest("#save-nav"),
            edit = target.closest("#edit-nav"),
            post = target.closest(".post-upper"),
            postID = target.closest(".post");

        if (delet) {
            const button1 = "#delete-modal-apply"
            const button2 = "#delete-modal-cancel"
            const res = await modal(deleteModalDOM, button1, button2);
            res ? deletePost(delet.closest(".post"), deleteModalDOM) : deleteModalDOM.close();
        }
        if (post) {
            goTo(postID)
        }
    })

}

function deletePost(post, modal) {
    modal.close()
    const p = document.getElementById(`${post.id}`);
    p.remove();
    localStorage.removeItem(`${post.id}`);
}

function goTo(postID) {
    const postData = JSON.parse(localStorage.getItem(`${postID.id}`))
    const parsedTittle = postData.postTittle.split(" ")
        .join(" ");
    const link = `./pages/post.html?id=${postID.id}&tittled=${parsedTittle}`
    window.location.href = link;
}

// function editPost(post) {

// }

// function savePost(post) {

// }
