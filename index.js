import { getData, renderPosts, eventHandler } from "./scripts/posts.js";
import { reverse } from "./scripts/math.js";
import { userPost } from "./scripts/userPost.js";

const contentNavbarContainer = document.getElementById("content-navbar");

getData()
    .then((posts) => reverse(posts))
    .then((posts) => {
        if (localStorage.length !== 0) {
            return;
        }
        const newPosts = posts.map((post) =>
            new userPost(
                post.authorName,
                post.postTittle,
                post.postDescr,
                post.postTags,
                post.postLikes
            )
        );
        newPosts.forEach((post) => {
            localStorage.setItem(
                post.postID,
                JSON.stringify(post)
            );
        });
    })
    .then(() => {
        if (localStorage.length !== 0) {
            const posts = Object.keys(localStorage)
                .map(key => JSON.parse(localStorage.getItem(key))) 
                .filter(post => post && post.createDate) 
                .sort((a, b) => b.createDate - a.createDate); 

            posts.forEach(post => renderPosts(post)); 
        }
    })
    .then(() => eventHandler())


