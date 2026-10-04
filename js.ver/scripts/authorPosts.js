import { localStorageAPI } from "../api/localStorageAPI.js"
import { DOMElements } from "./domElements.js"
import { UIForms } from "./UI/uiForms.js";
import { UIFormsModal } from "./UI/uiFormsModal.js";
import { UAChecker } from "../api/userAccountChecker.js";

const link = new URLSearchParams(window.location.search)
const data = link.get("authorID")


const k = localStorageAPI.getDataByPId("users_posts", parseInt(data), "userId")

k.reverse().forEach((post) => { 
        
    DOMElements.authorsPostsContainer.innerHTML += UIForms.authorsPostForm(post) })

const authorsPostContainer = document.querySelector(".authors-posts-container")

authorsPostContainer.addEventListener("click", (e) => {
    const t = e.target;

    const post = t.closest(".post")
    const oppener = t.closest("#ap-post-oppener")
    if(post && !oppener){
        UAChecker.updateUserAccountData("resentPost", post.id)
        goToPost(post.id)
    }
    if (oppener) {
        post.classList.toggle("open")
    }

})

function goToPost(postID) {
    const link = `../pages/post.html?postID=${postID}`
    window.location.href = link
}
