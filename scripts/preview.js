import { parseDescr, parseTags, datE, textParagr } from "./math.js";
import { userPost } from "./userPost.js";

const createContainer = document.querySelector(".create-container"),
    descr = document.getElementById("descr");

const previewDOM = document.getElementById("preview");

let name = document.getElementById("author-name").value || "Author Name",
    tittle = document.getElementById("title").value || "Post Title",
    tags = document.getElementById("tag").value || "#tags",
    descr1 = document.getElementById("descr").value || "Your post description here...";

const previewConsrt = new userPost(name, tittle, parseDescr(descr1), parseTags(tags));

printPrewiew(previewDOM, previewConsrt)


createContainer.addEventListener("input", (e) => {
    const target = e.target;

    const previewDOM = document.getElementById("preview");

    let name = document.getElementById("author-name").value,
        tittle = document.getElementById("title").value,
        tags = document.getElementById("tag").value,
        descr = document.getElementById("descr").value;

    const previewConsrt = new userPost(name, tittle, parseDescr(descr), parseTags(tags));

    printPrewiew(previewDOM, previewConsrt)

})

function printPrewiew(prewiewDOM, postObj) {

    let previewPost = `<div class="post">
                            <div class="upper-text">
                                <div>PREWIEW</div>
                                <div id = "post-logo"class="text logo"><i class="fa-solid fa-l"></i><i class="fa-solid fa-o"></i><i class="fa-solid fa-g"></i><i class="fa-solid fa-o"></i></div>
                                <div id = "post-date"class="text date">${datE(postObj.createDate)}</div>
                                <div id = "post-tittle"class="text tittle">${postObj.postTittle}</div>
                                <div id = "post-author"class="text author">.by ${postObj.authorName}</div>
                            </div>    
                            <div class="main-text">
                                <div class="rating">
                                    <div class="tags">${postObj.postTags}</div>  
                                </div>
                                <div class = "text p">
                                    ${textParagr(postObj)}
                                </div>
                                <div class="post-nav">
                                    <div class ="likes">
                                        <div>likes:${postObj.postLikes}</div>
                                        <ul>
                                            <button id="like"><i class="fa-solid fa-thumbs-down"></i></button>
                                            <button id="like"><i class="fa-solid fa-thumbs-up"></i></button>
                                        </ul>                                  
                                    </div>  
                                </div>
                            </div>
                        </div>`

    prewiewDOM.innerHTML = previewPost
}
