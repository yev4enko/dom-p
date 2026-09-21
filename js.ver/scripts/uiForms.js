import { localStorageAPI } from "../api/localStorageAPI.js"

export const UIForms = (() => {

    const deletePostModalForm =
        `<div class="modal-text">
            <div class="text">Are u sure u want to delete this post?</div>
        </div>
        <ul class="modal-nav">
            <button id="delete-modal-cancel" class="modal-button-nav">Cancel</button>
            <button id="delete-modal-apply" class="modal-button-nav"><i class="fa-solid fa-trash"></i></button>
        </ul>`


    const cancelPostCreationModal =
        `<div class="modal-text">
            <div class="text">Post description is not empty!
            </div>
            <div class="text">You want to leave?
            </div>
        </div>
        <ul class="modal-nav">
            <button id="cancel-create-modal2" class="modal-button-nav">Cancel</button>
            <button id="apply-create-modal1" class="modal-button-nav">Yes</button>
        </ul>`

    const infoPostCreationModal =
        `<div class="modal-text">
            <div class="text">
                типо текст
            </div>
        </div>
        <ul class="modal-nav">
            <button id="info-button" class="modal-button-nav">!ok</button>
        </ul>`

    const navbarForm =
        `                <div class="posts navbar-mini-container">
                    <div class="line">
                        <hr ><span>POSTS</span>
                    </div>
                    <div class = "posts-text">
                        <button id ="index.html" class="home-redir nav-btn"> <i class="fa-solid fa-house-chimney-window"></i>
                        <span>HOME</span></button>
                        <button id="saved.html" class="saved-redir nav-btn"> <i class="fa-solid fa-bookmark"></i>
                        <span>SAVED</span></button>
                    </div>
                </div>
                <div class="actions  navbar-mini-container">
                <div class="line">
                        <hr ><span>ACTION</span>
                    </div>
                <div class = "posts-text">
                        <button id="create.html" class="create-redir nav-btn"> <i class="fa-solid fa-plus"></i>
                        <span>CREATE</span></button>
                    </div>
                </div>
                <div class="system  navbar-mini-container">
                    <div class="line">
                        <hr ><span>SYSTEM</span>
                    </div>
                        <div class = "posts-text">
                        <button id="settings.html" class="settings-redir double nav-btn"> <i class="fa-solid fa-gear"></i></button>
                        <button id="settings.html" class="double nav-btn"> <i class="fa-regular fa-sun"></i></button>
                        <button id="settings.html" class="double nav-btn"> <i class="fa-regular fa-sun"></i></button>
                    </div>
                    
                </div>
                <div class= "user navbar-mini-container">
                    <div class="line">
                        <hr ><span>USER</span>
                    </div>
                    <div class = "posts-text">
                        <button id = "user-account.html" class="nav-btn"><i class="fa-solid fa-user"></i><span>USER</span></button>
                    </div>
                </div>
                </div>
               
                `
    const postForm = (post) => {

        const user = localStorageAPI.getDataById("users", post.userId)

        const postForm = `<div id="${post.id}"class="post">
                <div class="post-text">
                    <div class = "upper-content">
                        <div class="title">${post.title}</div>
                        <a href="../pages/author.html?authorID=${post.userId}" class="author">by. ${user.firstname} ${user.lastname} </a>     
                    </div>
                    <div class="lower-content">   
                        <div class = "image">
                            <img src = "${post.image}">
                        </div>
                        <div class ="text">
                            <div class="descr">${post.content}</div>
                        </div>   
                    </div>  
                    <div class = "tags-content">
                    
                    </div>
                    <div class ="like-content">
                        <button class = "post-btn">up</button>
                        <div>${post.likeCount}</div>
                        <button class = "post-btn">down</button>
                    </div>
                    <div class="post-nav">
                        <div class="nav">
                             <button class="post-btn nav-oppener"><i class="fa-solid fa-ellipsis"></i></button>
                            <div>    <button id = "save-post-nav" class="post-btn"><i class="fa-solid fa-bookmark"></i></button></div> 
                            <div>    <button id = "edit-post-nav" class="post-btn"><i class="fa-solid fa-pen"></i></button></div> 
                            <div>    <button id = "delete-post-nav" class="post-btn"><i class="fa-solid fa-trash"></i></button></div> 
                        </div>
                </div> 
             </div>`
        return postForm
    }
    const authorsPostForm = (post) => {

        let postForm = ` 
        <div id=${post.id} class ="post">
        <div class="title">${post.title}</div>
        <div class="descr">${post.content}</div>
        </div>
        `

        return postForm
    }
    const tagForm = (tag) => {

        let form = `
        <div class ="tag">${tag}</div>
        `
        return form
    }

    const statsForm = () => {
        let form = `
        <div class="most-posts">

        </div>
        <div class ="most-tags">
        
        <div>
        `
    }

    return { statsForm, tagForm, deletePostModalForm, cancelPostCreationModal, infoPostCreationModal, navbarForm, postForm, authorsPostForm }

})()