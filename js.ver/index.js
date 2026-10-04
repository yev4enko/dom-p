
import { localStorageAPI } from "./api/localStorageAPI.js";
import {renderRecentPosts, renderStats, renderSearch, renderNavbar, renderTheme, renderPosts } from "./scripts/UI/ui.js";

const MAX_TEXT_LENGTH = 300;


const userPosts = "users_posts";
const users = "users";
const settings = "settings";
const userAccount = "user_account"

async function loadData() {

    if (!localStorageAPI.loadDataArr(userPosts)) {

        const data =
            await localStorageAPI.fetchDataByLink("./data/posts.json");

        localStorageAPI.saveDataToLocalStorageByKey(
            data,
            userPosts
        );
    }

    if (!localStorageAPI.loadDataArr(users)) {

        const data =
            await localStorageAPI.fetchDataByLink("./data/users.json");

        localStorageAPI.saveDataToLocalStorageByKey(
            data,
            users
        );
    }

    if (!localStorageAPI.loadDataArr(settings)) {

        const data =
            await localStorageAPI.fetchDataByLink("./data/settings.json");

        localStorageAPI.saveDataToLocalStorageByKey(
            data,
            settings
        );
    }
    if (!localStorageAPI.loadDataArr(userAccount)) {

        const data =
            await localStorageAPI.fetchDataByLink("./data/user_account.json");

        localStorageAPI.saveDataToLocalStorageByKey(
            data,
            userAccount
        );
    }
}
let usedIDs = null;

async function init() {
    await loadData();

    renderNavbar();
    renderTheme();

    if (window.location.pathname === "/") {
        usedIDs = renderPosts(null, 10, MAX_TEXT_LENGTH);
        //renderRecentPosts()
        renderSearch();
      //  renderStats();
    }
}

init();

window.addEventListener("scroll", () => {
    const reachedEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    if (reachedEnd) {
        console.log("POSTS RENDERED");
        console.log(usedIDs);
        console.log(Array.isArray(usedIDs));

        usedIDs = renderPosts(
            usedIDs,
            10,
            MAX_TEXT_LENGTH
        );
    }
});