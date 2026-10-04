import { localStorageAPI } from "../api/localStorageAPI.js";
import { UAChecker } from "../api/userAccountChecker.js";
import { DOMElements } from "./domElements.js";
import { renderTheme } from "./UI/ui.js";
import { UIForms } from "./UI/uiForms.js";
DOMElements.navbar.addEventListener("click", (e) => {
    const target = e.target;

    const home = target.closest("#index"),
        saved = target.closest("#saved"),
        create = target.closest("#create"),
        settings = target.closest("#settings"),
        themeSwitch = target.closest("#theme-switch"),
        user = target.closest("#user-account"),
        leftNavLock = target.closest("#navbar-oppener");

    const leftNavbarLockState = document.querySelector(".left-navbar-state")
    const data = localStorageAPI.loadDataArr("user_account");

    if (home) {
        redir("/");
    }
    if (saved) {
        redir("saved.html")
    }
    if (create) {
        redir("create.html")
    }
    if (settings) {
        redir("settings.html")
    }
    if (themeSwitch) {
        let theme = renderTheme()
        if (theme["theme"] === "dark") {
            theme["theme"] = "light"
            localStorageAPI.saveDataToLocalStorageByKey(theme, "settings")
            renderTheme()
        }
        else if (theme["theme"] === "light") {
            theme["theme"] = "dark"
            localStorageAPI.saveDataToLocalStorageByKey(theme, "settings")
            renderTheme()
        }
    }
    if (user) {
        console.log(UAChecker.isLoggedIn)
        UAChecker.isLoggedIn() ? redir("user.html") : redir("login.html")
    }
    if (leftNavLock) {
        DOMElements.navbar.classList.toggle("open")
        if (DOMElements.navbar.classList.contains("open")) {
            leftNavLock.innerHTML = `<i class="fa-solid fa-lock"></i>`
            leftNavbarLockState.innerHTML = `.lock`
        }
        else {
            leftNavLock.innerHTML = `<i class="fa-solid fa-unlock"></i>`
            leftNavbarLockState.innerHTML = `.open`
        }
    }
})

function redir(link) {
    let redirLink = `${link}`
    const currentlink = window.location.pathname
    if (currentlink.includes("/pages")) {
        if (redirLink === "/") {
            redirLink = "../"
            window.location.href = redirLink
        }
        else {
            redirLink = `./${link}`
            window.location.href = redirLink
        }
    }
    if (currentlink === ("/")) {
        if (redirLink === "/") {
            return
        }
        else {
            redirLink = `./pages/${link}`
            window.location.href = redirLink
        }
    }
}

const isRegistered = (data) => data["registered"] === true;

const isLoggedIn = (data) => data["logged"] === true;