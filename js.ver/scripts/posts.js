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
        а = t.closest("#upwote"),
        postDownwote = t.closest("#downwote")

    if (post && !postDelete && !postEdit && !postSave && !postDownwote && !postUpwote) {
        UAChecker.updateUserAccountData("resentPost", post.id)
        goToPost(post.id)
    }

    if (postDelete) {
        UAChecker.isLoggedIn() ? goToPostEdit(post.id) : openToast()
    }
    if (postEdit) {
        UAChecker.isLoggedIn() ? goToPostEdit(post.id) : openToast()
    }
    if (postSave) {
        UAChecker.isLoggedIn() ? goToPostEdit(post.id) : openToast()
    }
    if(postDownwote){
        UAChecker.isLoggedIn() ? goToPostEdit(post.id) : openToast()
    }
     if(postUpаwote){
        UAChecker.isLoggedIn() ? goToPostEdit(post.id) : openToast()
    }

})


function goToPost(postID) {
    const link = `../pages/post.html?postID=${postID}`
    window.location.href = link
}

const goToPostEdit = (postID) => {
    const link = `../pages/post.html?postID=${postID}&action=edit`
    window.location.href = link
}
