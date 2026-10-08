import { DOMElements } from "../domElements.js";
import { UIForms } from "./uiForms.js";
import { localStorageAPI } from "../../api/localStorageAPI.js";
import { UAChecker } from "../../api/userAccountChecker.js";

export const renderNavbar = () => DOMElements.navbar.innerHTML = UIForms.navbarForm
export function renderPosts(usedIDs, count, maxLength) {
    let number = count;

    const postsData = localStorageAPI.loadDataArr("users_posts");

    let postIDs = usedIDs === null ? [] : usedIDs;

    let neededPosts = [];

    for (let i = 0; i < number; i++) {
        if (postsData[i] !== undefined) {

            if (postIDs.includes(postsData[i].id)) {
                console.log(`post.number${postsData[i].id} skipped`);
                number++;
            } else {
                console.log(postsData[i].id);

                postIDs.push(postsData[i].id);

                neededPosts.push({
                    ...postsData[i]
                });
            }
        }
    }

    neededPosts.forEach((post) => {
        if (post.content.length > maxLength) {
            post.content = post.content.slice(0, maxLength) + "...";
        }

        DOMElements.postsContainer.innerHTML += UIForms.postForm(post);

        const postContainer = document.getElementById(post.id);
        const tagsContainer = postContainer.querySelector("#post-tags");

        post.tags.forEach((tag) => {
            tagsContainer.innerHTML += UIForms.tagForm(tag);
        });
    });

    console.log(postIDs);

    return postIDs;
}
const returnName = (post, usersData) => {
    let name;
    usersData.forEach(user => {

        if (user.id === post.userId) {
            name = `${user.firstname} ${user.lastname}`;
        }

    });
    return name;
}

export function renderTheme() {
    const themeSwitcher = document.getElementById("theme-switch")
    const theme = localStorageAPI.loadDataArr("settings")
    if (theme["theme"] === "dark") {
        document.documentElement.dataset.theme = "dark"

        themeSwitcher.innerHTML = UIForms.darkThemeSwitch

    } else if (theme["theme"] === "light") {
        document.documentElement.dataset.theme = "light"
        themeSwitcher.innerHTML = UIForms.lightThemeSwitch
    }
    return theme;
}

export function renderSearch() {
    DOMElements.searchContainer.innerHTML = UIForms.searchForm()
}
export function renderStats() {
    const postsData = localStorageAPI.loadDataArr("users_posts");
    const usersData = localStorageAPI.loadDataArr("users");

    const statsData = {
        totalUsers: 0,
        postCounter: 0,
        likeCounter: 0,
        mostLikedPost: null,
        mostPostedAuthor: null,
        mostLikedAuthor: null,
        mostPopularTag: null
    };
    postsData.forEach((post) => {
        if (post) {
            statsData.postCounter++;
            statsData.likeCounter += post.likeCount;
        }
    });

    usersData.forEach((user) => {
        if (user) {
            statsData.totalUsers++;
        }
    });

    statsData.mostLikedPost = postsData.reduce((maxPost, post) =>
        post.likeCount > maxPost.likeCount ? post : maxPost
    );

    const mostPostedAuthor = postsData.reduce((authors, post) => {
        authors[post.userId] = (authors[post.userId] || 0) + 1;
        return authors;
    }, {});

    const mostPostedAuthorId = Object.keys(mostPostedAuthor).reduce(
        (maxId, userId) => {
            return mostPostedAuthor[userId] > mostPostedAuthor[maxId]
                ? userId
                : maxId;
        }
    );

    const mostPostedAuthorData = localStorageAPI.getDataById(
        "users",
        Number(mostPostedAuthorId)
    );

    statsData.mostPostedAuthor = mostPostedAuthorData;

    const authorLikes = postsData.reduce((authors, post) => {
        authors[post.userId] =
            (authors[post.userId] || 0) + post.likeCount;

        return authors;
    }, {});

    const mostLikedAuthorId = Object.keys(authorLikes).reduce(
        (maxId, userId) => {
            return authorLikes[userId] > authorLikes[maxId]
                ? userId
                : maxId;
        }
    );

    const mostLikedAuthorData = localStorageAPI.getDataById(
        "users",
        Number(mostLikedAuthorId)
    );

    statsData.mostLikedAuthor = mostLikedAuthorData;

    const tagCounter = postsData.reduce((tags, post) => {
        post.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1;
        });

        return tags;
    }, {});

    const mostPopularTag = Object.keys(tagCounter).reduce(
        (maxTag, tag) => {
            return tagCounter[tag] > tagCounter[maxTag]
                ? tag
                : maxTag;
        }
    );

    statsData.mostPopularTag = mostPopularTag;


    DOMElements.statsContainer.innerHTML =
        UIForms.statsForm(statsData);
}

export const renderRecentPosts = () => {
    const recentPostContainer = document.querySelector(".recent-post-conteiner")
    let postId = UAChecker.getUserAccountParams("resentPost")
    console.log(postId)
    if (postId === undefined || postId === "") {
        console.log("gotopost")
        recentPostContainer.innerHTML = UIForms.recentEndefinedPostForm()
    } else {
        const postData = localStorageAPI.getDataById("users_posts", parseInt(postId))
        console.log(postData)
        recentPostContainer.innerHTML = UIForms.recentPostForm(postData)
    }

}

export const renderLogin = () => {
    DOMElements.loginContainer.innerHTML = UIForms.loginForm
}

export const renderPost = (link) => {

    const postID = link.get("postID");
    const action = link.get("action");

    const data = localStorageAPI.getDataById("users_posts", parseInt(postID))

    console.log(postID)

    DOMElements.postContainer.innerHTML = UIForms.postForm(data)
}