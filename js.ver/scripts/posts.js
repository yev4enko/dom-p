// import { modal } from "./modal.js";
import { localStorageAPI } from "../api/localStorageAPI.js"
import { DOMElements } from "./domElements.js";
import { modal } from "./modal.js";
import { UIFormsModal } from "./UI/uiFormsModal.js";
import { openToast } from "./toast.js";
import { UAChecker } from "../api/userAccountChecker.js";


DOMElements.postsContainer.addEventListener("click", async (e) => {

    const t = e.target,
        post = t.closest(".post"),
        postDelete = t.closest("#post-delete"),
        postEdit = t.closest("#post-edit"),
        postSave = t.closest("#post-save"),
        postUpwote = t.closest("#upwote"),
        postDownwote = t.closest("#downwote")

    if (post && !postDelete && !postEdit && !postSave && !postDownwote && !postUpwote) {
        UAChecker.updateUserAccountData("resentPost", parseInt(post.id))
        goToPost(post.id)
    }

})


function goToPost(postID) {
    const link = `../pages/post.html?postID=${postID}`
    window.location.href = link
}

// const goToPostEdit = (postID) => {
//     const link = `../pages/post.html?postID=${postID}&action=edit`
//     window.location.href = link
// }
