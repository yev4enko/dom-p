import { localStorageAPI } from "../../api/localStorageAPI.js"
import { UAChecker } from "../../api/userAccountChecker.js"

export const UIForms = (() => {
    const navbarForm =
        `       
    <div class="navbar-section posts">
        <div class="navbar-section-title">
            <hr><span>POSTS</span>
        </div>
        <div class="navbar-section-buttons">
            <div class="navbar-section-button-wraper">
                <button title="Home-Page" id="index"> <i
                        class="fa-solid fa-house-chimney-window"></i><span>HOME</span></button>
            </div>
           <div class="navbar-section-button-wraper">
                <button title="Saved-Posts" id="saved"> <i class="fa-solid fa-bookmark"></i><span>SAVED</span></button>
            </div>
        </div>
    </div>
    <div class="navbar-section actions">
        <div class="navbar-section-title">
            <hr><span>ACTION</span>
        </div>
        <div class="navbar-section-buttons">
            <div class="navbar-section-button-wraper">
                <button title="Create-Post" id="create"> <i class="fa-solid fa-plus"></i><span>CREATE</span></button>
            </div>
        </div>
    </div>
    <div class="navbar-section system">
        <div class="navbar-section-title">
            <hr><span>SYSTEM</span>
        </div>
        <div class="navbar-section-buttons">
            <div class="navbar-section-button-wraper">
                <button title="Settings" id="settings"> <i class="fa-solid fa-gear"></i></button>
            </div>
            <div class="navbar-section-button-wraper">
                <button title="Theme-Switch" id="theme-switch"></button>
            </div>
            <div class="navbar-section-button-wraper">
                <button title="NavBar-Locker" id="navbar-oppener"><i class="fa-solid fa-unlock"></i></button>
            </div>
        </div>
    </div>
    <div class="navbar-section user">
        <div class="navbar-section-title">
            <hr><span>USER</span>
        </div>
        <div class="navbar-section-buttons">
            <div class="navbar-section-button-wraper">
                <button title="User-Account" id="user-account"><i class="fa-solid fa-user"></i><span>USER</span></button>
            </div>
        </div>
    </div>
               
                `
    const postForm = (post) => {

        let user = localStorageAPI.getDataById("users", post.userId)
        if (user == null) {
            user = {
                firstname: "DUMMY",
                lastname: "DUMMER"
            }
        }
        let postForm = ``;
        if (UAChecker.getUserAccountParams("logged") === true) {
            postForm =
                `
        <div id="${post.id}" class="post">
            <div class="post-section-upper">
                <div class="post-section title">
                    <div class="post-section-text-wraper">
                        <div id="title">${post.title}</div>
                    </div>
                </div>
                <div class="post-section author">
                    <div class="post-section-text-wraper">
                        <div id="author">by<span><a href="../pages/author.html?authorID=${post.userId}"
                                    class="post-author">
                                    ${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()} </a></span>
                        </div>
                    </div>
                </div>
                <div class="post-section image">
                    <div class="post-section-image-wraper">
                        <img id="post-image" class="image" src="${post.image}">
                    </div>
                </div>

                <div class="post-section content">
                    <div class="post-section-text-wraper">
                        <div id="post-content">${post.content}</div>
                    </div>
                </div>

                <div class="post-section tags">
                    <div class="post-section-text-wraper">
                        <div id="post-tags">

                        </div>
                    </div>
                </div>
            </div>
            <div class="post-section-navigation">
                <div class="post-section-navigation-rating">
                    <div class="post-section-button-wraper">
                        <button id="upwote"><i class="fa-solid fa-arrow-up"></i></button>
                    </div>
                    <div class="post-section-text-wraper">
                        <div id = "post-likes">${post.likeCount}</div>    
                    </div>
                    <div class="post-section-button-wraper">
                        <button id="downwote"><i class="fa-solid fa-arrow-down"></i></button>
                    </div>
                </div>
                <div class="post-section-navigation-management">
                    <div class="post-section-button-wraper">
                        <button id="post-save"><i class="fa-regular fa-star"></i></button>
                    </div>
                     <div class="post-section-button-wraper">
                        <button id="post-edit"><i class="fa-solid fa-pen"></i></button>
                    </div>
                     <div class="post-section-button-wraper">
                        <button id="post-delete"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        </div>    `}
        else if(!UAChecker.getUserAccountParams("logged") === true){
            postForm = `
            
        <div id="${post.id}" class="post">
            <div class="post-section-upper">
                <div class="post-section title">
                    <div class="post-section-text-wraper">
                        <div id="title">${post.title}</div>
                    </div>
                </div>
                <div class="post-section author">
                    <div class="post-section-text-wraper">
                        <div id="author">by<span><a href="../pages/author.html?authorID=${post.userId}"
                                    class="post-author">
                                    ${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()} </a></span>
                        </div>
                    </div>
                </div>
                <div class="post-section image">
                    <div class="post-section-image-wraper">
                        <img id="post-image" class="image" src="${post.image}">
                    </div>
                </div>

                <div class="post-section content">
                    <div class="post-section-text-wraper">
                        <div id="post-content">${post.content}</div>
                    </div>
                </div>

                <div class="post-section tags">
                    <div class="post-section-text-wraper">
                        <div id="post-tags">

                        </div>
                    </div>
                </div>
            </div>
        </div>    
            `}
        return postForm
    }

    const postFormEdit = (post) => {

        let user = localStorageAPI.getDataById("users", post.userId)
        if (user == null) {
            user = {
                firstname: "DUMMY",
                lastname: "DUMMER"
            }
        }

        const postForm = `<div id="${post.id}"class="post">
                <div class="post-text">
                    <div class = "upper-content">
                        <input type="text" id="edit-title">
                        <a href="../pages/author.html?authorID=${post.userId}" class="post-author">by. ${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()} </a>     
                    </div>
                    <div class="lower-content">   
                        <div class = "post-image">
                            <div class = "image-wraper">
                                <img class="image" src = "${post.image}">
                                </div>
                                </div>
                        <div class ="post-descr">
                            <input type="text" id="edit-content">
                        </div>   
                    </div>  
                    <input type="text" id ="edit-tags">
                    <div>
                    <button id = "edit-save">SAVE</button>
                    </div>    
                </div>
             </div>`
        return postForm


    }
    const authorsPostForm = (post) => {

        let postForm = ` 
        <div id=${post.id} class="post">
        <div class="ap-post-text-part">
            <div class="ap-post-title-image">
                <div class="authors-post-image-wraper">
                    <div class="authors-post-image">
                        <img class="ap-image" src="${post.thumbnail}">
                    </div>
                </div>
                <div class="authors-post-text-wraper">
                    <div class="authors-post-title">
                        <div id="ap-title">${post.title}</div>
                    </div>
                </div>
            </div>
            <div class="ap-post-content">
                <div class="authors-post-text-wraper">
                    <div class="authors-post-content">
                        <div id="ap-content">${post.content}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ap-post-nav-part">
            <div class="authors-post-nav-wraper">
                <div class="authors-post-buttons">
                    <div class="ap-post-btn">
                        <button id = "ap-post-oppener"><i class="fa-solid fa-angles-down"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `

        return postForm
    }
    const tagForm = (tag) => {

        let form = `
        <span>#${tag}</span>
        `
        return form
    }



    const darkThemeSwitch = `
    <i class="fa-regular fa-moon"></i>
    `
    const lightThemeSwitch = `
    <i class="fa-solid fa-sun"></i>`


    const searchForm = (dataarr) => `
            <div class = "search">
                <div class ="search-section input">
                <div class="search-input-wraper">
                    <input type="text" placeholder="Search" id="search-input">
                </div>

                <div class="search-buttons-wraper">
                    <div class="search-button">
                        <button id="search-send"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div class="search-button">
                        <button id="search-settings"><i class="fa-solid fa-sliders"></i></button>
                    </div>
                </div> 
                </div>
                    <div class ="search-section search-settings">
                        <div>searchSettings</div>
                    </div>
            </div>

            `
    const statsForm = (dataarr) => `
            
      <div class="stats-wraper overall">
        <div class="stats-title">
            <div class="stats-btn">
                <button class="right-icon" id="stats-oppener"><i class="fa-solid fa-angle-up"></i></button>
            </div>
            <div class="stats-naming">
                <hr><span>STATS</span>
            </div>
            <div class="stats-btn">
                    <button class="left-icon"><i class="fa-solid fa-chart-line"></i></i></button>
            </div>
        </div>
        <div class="stats-content">
            <div class="stats-wraper main">
                <div class="stats-title">
                <div class="stats-nav-buttons">
                        <div class="stats-btn">
                            <button id="main-stats-oppener"><i class="fa-solid fa-angle-up"></i></button>
                        </div>
                    </div>
                    <div class="stats-naming">
                        <hr><span>MAIN STATISTICS</span>
                    </div>
                </div>
                <div class="stats-content">
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">POSTS POSTED:<span class = "stats-content-data-span"> ${dataarr.postCounter}</span></div>
                    </div>
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">TOTAL LIKE STATS:<span class = "stats-content-data-span">  ${dataarr.likeCounter}</span> </div>
                    </div>
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">TOTAL USERS:<span class = "stats-content-data-span">  ${dataarr.totalUsers}</span> </div>
                    </div>

                </div>
            </div>
            <div class="stats-wraper top">
                <div class="stats-title">
                <div class="stats-nav-buttons">
                        <div class="stats-btn">
                            <button id="top-stats-oppener"><i class="fa-solid fa-angle-up"></i></button>
                        </div>
                    </div>
                    <div class="stats-naming">
                        <hr><span>TOP STATISTICS</span>
                    </div>

                </div>
                <div class="stats-content">
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">THE MOST LIKED POST: <span class = "stats-content-data-span"><a
                                    href="./pages/post.html?postID=${parseInt(dataarr.mostLikedPost.id)}">click</a></span></div>
                    </div>
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">THE MOST POSTED AUTHOR:
                        <span class = "stats-content-data-span">
                            ${dataarr.mostPostedAuthor.firstname}
                            ${dataarr.mostPostedAuthor.lastname}</span></div>
                    </div>
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">THE MOSED LIKED AUTHOR:
                        <span class = "stats-content-data-span">
                            ${dataarr.mostLikedAuthor.firstname}
                            ${dataarr.mostLikedAuthor.lastname}</span> </div>
                    </div>
                    <div class="stats-content-text-wraper">
                        <div class = "stats-content-text">THME MOST POPULAR TAG: <span class = "stats-content-data-span">#${dataarr.mostPopularTag}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
               
            `

    const recentPostForm = (postData) => {

        let recentPostF = `  
        <div class="recent-wraper">
            <div class="recent-title">
                    <div class="recent-btn">
                         <button id="recent-oppener"><i class="fa-solid fa-angle-up"></i></button>
                    </div>

                <div class="recent-naming">
                    <hr><span>RECENT POST</span>
                </div>
                <div class="recent-btn">
                         <button id="recent-oppener"><i class="fa-solid fa-hourglass-half"></i></button>
                </div>
            </div>
            <div class= "recent-content">
                <div class="recent-content-wraper">
                    <div class="image-wraper">
                        <img id ="recent-img" src=${postData.thumbnail}>
                    </div>
                </div>
                <div class="title-wraper">
                    <div id="recent-title">${postData.title}</div>
                </div>
            </div>
        </div>`

        return recentPostF;
    }

    const recentEndefinedPostForm = () => {

        let recentPostF = `  
        <div class="recent-wraper">
            <div class="recent-title">
            <div class="recent-nav-buttons">
                <div class="recent-btn">
                 <button id="recent-oppener"><i class="fa-solid fa-angle-up"></i></button>
               </div>
                <div class="recent-naming">
                    <hr><span>RECENT POST</span>
                </div>
            </div>
        </div>
        <div class= "recent-content"
        <div class="recent-content-wraper">
            <div class ="recent-text-wraper">
                <div>U WATCHED ZERO POSTS</div>
            </div>
        </div>
        </div>
        </div>`

        return recentPostF;
    }

    const toastErrorForm = () => {

        let form = `
        <div class = "toast-section">
            <div class="warning-cirle">!</div>
            <div class="toast-text"><span>ERROR</span>U must be logged in, in order to "SAVE", "EDIT", "DELETE" or "CREATE" </div>
            <div class ="toast-button">
                <button id = "toast-close"X</button>
            </div>    
        </div>`
        return form;
    }


    const loginForm = `
        <form id="login-form" class="login-form">
            <div class="login-title-section">
                <div id="login-title"><span>Sign in</span></div>
            </div>
            <div class="login-input-sections">
                <div class="login-input-section email">
                    <div class="login-input-title-wraper email"><span>E-mail*</span><span class="email error"></span>
                    </div>
                    <div class="login-input-wraper email">
                        <input id="login-email" type="text" placeholder="Enter E-mail">
                    </div>
                    <div class="login-checker email">
                        <div>Email must:</div>
                        <div class="checker-status" class="login-input" id="login-email-validation"><span><i class="fa-solid fa-circle"></i></span>: contain the format: email-name@company.domain</div>
                    </div>
                </div>
                <div class="login-input-section password">
                    <div class="login-input-title-wraper password"><span>Password*</span><span class="password error"></span>
                    </div>
                    <div class="login-input-wraper password">
                        <input maxlength=16 class="login-input" id="login-password" type="password" placeholder="Enter password">
                        <button id="password-peek"><i class="fa-solid fa-eye-slash"></i></button>
                    </div>
                    <div class="login-checker password">
                        <div>Password must:</div>
                        <div class="checker-status" id="login-password-length"><span><i class="fa-solid fa-circle"></i></span>:be between 6 and 16
                            symbols!</div>
                        <div class="checker-status" id="login-password-symbols"><span><i class="fa-solid fa-circle"></i></span>:have at least one
                            special symbol!</div>
                        <div class="checker-status" id="login-password-number"><span><i class="fa-solid fa-circle"></i></span>:have at least one number
                        </div>
                        <div class="checker-status" id="login-password-upperchar"><span><i class="fa-solid fa-circle"></i></span>:have at least one
                            uppercase character
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-message-section">
                <div class="login-message-wraper empty">
                    <div>Please fill in all required fields (*).</div>
                </div>
                <div class="login-message-wraper validation">
                    <div>Please check the highlighted fields. Validation Error!</div>
                </div>
                <div class="login-message-wraper login-error">
                    <div>Incorrect email/login or password.</div>
                </div>
                
            </div> 

            <div class="login-navigation-section">
                <div class="login-navigation-button-wraper">
                    <button id="signup-login-redir">SIGN_UP</button>
                </div>
                <div class="login-navigation-button-wraper">
                    <button id="ffff">LOG_IN</button>
                </div>
            </div>
        </form>`
    return {
        loginForm,
        recentPostForm,
        recentEndefinedPostForm,
        toastErrorForm,
        searchForm, statsForm, postFormEdit, darkThemeSwitch, lightThemeSwitch, statsForm, tagForm, navbarForm, postForm, authorsPostForm
    }

})()