import { localStorageAPI } from "../api/localStorageAPI.js"
import { DOMElements } from "./domElements.js";
import { newPost } from "./newPost.js";
import { renderTheme } from "./UI/ui.js";
import { UIForms } from "./UI/uiForms.js";


const param = new URLSearchParams(window.location.search)

const postID = param.get("postID");
const action = param.get("action");
const k = localStorageAPI.getDataById("users_posts", parseInt(postID))


if (action && action === "edit") {
    DOMElements.postContainer.innerHTML = UIForms.postFormEdit(k)
    const editTitle = document.getElementById("edit-title")
    const editContent = document.getElementById("edit-content")
    const tagsContent = document.getElementById("edit-tags")

    editTitle.value = k.title;
    editContent.value = k.content
    tagsContent.value = k.tags.join(" ")

    DOMElements.postContainer.addEventListener("click", (e) => {
        const t = e.target;
        const editTags = tagsContent.value.split(",")
        const saveButton = t.closest("#edit-save")
        if(saveButton){
            let editedPost = new newPost("",editTitle.value.trim(),"",editContent.value.trim(),editTags,"")
            console.log(editedPost)
            localStorageAPI.updatePostByID("users_posts",parseInt(postID),editedPost)
        }
    })
}
else {
    DOMElements.postContainer.innerHTML = UIForms.postForm(k)
}

