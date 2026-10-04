import { localStorageAPI } from "../api/localStorageAPI.js";
import { newPost } from "./newPost.js";

const create = document.getElementById("create-form")
create.addEventListener("click", (e) => {
    const t = e.target;

    const slugInput = document.getElementById("new-slug")
    const titleInput = document.getElementById("new-title")
    const categoryInput = document.getElementById("new-category")
    const imageInput = document.getElementById("new-imageLink")
    const tagsInput = document.getElementById("new-tags")
    const contentInput = document.getElementById("new-content")
    const sendButton = t.closest("#create-post")
    let postData = localStorageAPI.loadDataArr("users_posts")

    let tagArr = tagsInput.value.trim().split(" ");
    if (sendButton) {
        let post = new newPost(slugInput.value.trim(), titleInput.value.trim(), imageInput.value.trim(), contentInput.value.trim(), tagArr, categoryInput.value.trim())
        const plainpost = {...post}
        console.log(plainpost)
        console.log(postData)
        postData.push(plainpost)
        console.log(postData)
        localStorageAPI.saveDataToLocalStorageByKey(postData, "users_posts")
    }
})