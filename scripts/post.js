import { textParagr, datE } from "./math.js";

const param = new URLSearchParams(window.location.search)
const postID = param.get("id");
printPostPage(postID)

function printPostPage(postID) {
    const post = JSON.parse(localStorage.getItem(`${postID}`));
    const uniqePostPage = document.getElementById("content-post")
    if (post !== null) {
        let uniqePost = `<div class="post">
                            <div class="upper-text">
                                <div id = "post-logo"class="text logo"><i class="fa-solid fa-l"></i><i class="fa-solid fa-o"></i><i class="fa-solid fa-g"></i><i class="fa-solid fa-o"></i></div>
                                <div id = "post-date"class="text date">${datE(post.createDate)}</div>
                                <div id = "post-tittle"class="text tittle">${post.postTittle}</div>
                                <div id = "post-author"class="text author">.by${post.authorName}</div>
                            </div>    
                            <div class="main-text">
                                <div class="rating">
                                    <div class="tags">${post.postTags}</div>  
                                </div>
                                <div class = "text p">
                                    ${textParagr(post)}
                                </div>
                                <div class="post-nav">
                                    <div class ="likes">
                                        <div>likes:${post.postLikes}</div>
                                        <ul>
                                            <button id="like"><i class="fa-solid fa-thumbs-down"></i></button>
                                            <button id="like"><i class="fa-solid fa-thumbs-up"></i></button>
                                        </ul>                                  
                                    </div>  
                                </div>
                            </div>
                        </div>`
        uniqePostPage.innerHTML = uniqePost;
    }
    else {
        let uniqePostError = `<div id = "error" class="uniqe-post-text">
                POST WITH CERTAIN URL WAS DELETED OR DOES NOT EXIST
                </div>`
        uniqePostPage.innerHTML = uniqePostError;
    }
}

