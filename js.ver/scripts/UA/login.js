import { localStorageAPI } from "../../api/localStorageAPI.js"
import { UAChecker } from "../../api/userAccountChecker.js";
import { DOMElements } from "../domElements.js";


DOMElements.loginContainer.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.target
    let loginEmail = document.getElementById("login-email").value
    let loginPassword = document.getElementById("login-password").value,
        registerRedir = t.closest("#register-redir"),
        signInButton = t.closest("#sign-in");

    if (registerRedir) {
        redir("register.html")
    }

    if (signInButton) {
        if (loginPassword.length === 0 || loginEmail.length === 0) {
            console.log("Fields marked (*) needs to be filled in!")
        }
        else {
            UAChecker.emailChecker(loginEmail.trim()) ? console.log("LOGGING IN") : console.log("Account with this E-Mail DOES NOT EXIST")
            
            document.getElementById("login-email").value = ""
            document.getElementById("login-password").value = ""
        }
    }




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

})
