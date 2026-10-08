import { localStorageAPI } from "../../api/localStorageAPI.js"
import { UAChecker } from "../../api/userAccountChecker.js";
import { DOMElements } from "../domElements.js";

import { renderLogin } from "../UI/ui.js";
renderLogin();

const emailInput = document.getElementById("login-email"),
    passwordInput = document.getElementById("login-password"),
    passwordPeekIcon = document.getElementById("password-peek"),
    loginCheckerPassword = document.querySelector(".login-checker.password"),
    loginCheckerEmail = document.querySelector(".login-checker.email"),

    loginInputsWrapers = document.querySelectorAll(".login-input-wraper");



const passwordLengthChecker = document.getElementById("login-password-length"),
    passwordSymbolChecker = document.getElementById("login-password-symbols"),
    passwordNumberChecker = document.getElementById("login-password-number"),
    passwordUpperCharChecker = document.getElementById("login-password-upperchar"),
    emailValidation = document.getElementById("login-email-validation");

const validationMessage = document.querySelector(".login-message-wraper.validation"),
    loginMessage = document.querySelector(".login-message-wraper.login-error"),
    emptyMessage = document.querySelector(".login-message-wraper.empty")


const message = document.querySelector(".login-message-wraper")

const specialSymbols = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `_`, `+`, `№`, `;`, `%`, `:`, `?`, `*`, `(`, `)`, `_`, `+`, `<`, `>`, `?`, `,`, `<`, `>`]
DOMElements.loginContainer.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.target;
    const t1 = t.closest(".login-form")
    const logInButton = t.closest("#ffff")
    const signUpRedirButton = t.closest("#signup-login-redir")



    if (logInButton) {
        console.log("LOGIN btn")
        //are fields empty?
        if (!areInputsFilled(emailInput, passwordInput)) {
            console.log("fields Are empty")
            highlight(...loginInputsWrapers)
            openMessage(emptyMessage)
            //paint red
            return;
        }
        if (!isMailValid(emailInput.value) || !isPasswordValid(passwordInput.value)) {
            highlight(...loginInputsWrapers)
            clearInputs(emailInput,passwordInput);
            openMessage(validationMessage)
            return;
        }
        if (isMailValid(emailInput.value.trim()) && isPasswordValid(passwordInput.value.trim())) {
            if (UAChecker.getUserAccountParams("email") === emailInput.value.trim() && UAChecker.getUserAccountParams("password") === passwordInput.value.trim()) {
                UAChecker.updateUserAccountData("logged", true)
                redir("/")
            }
            else {
                clearInputs(emailInput,passwordInput)
                highlight(...loginInputsWrapers)
                openMessage(loginMessage)
            }
        }
        
    }

    if (signUpRedirButton) {
        redir("register.html")
    }
    if (t1 && !logInButton) {
        closeAllMessages(validationMessage, loginMessage, emptyMessage)
        offHighlight(...loginInputsWrapers)
    }
})

DOMElements.loginContainer.addEventListener("mousedown", (e) => {
    const t = e.target,
        passwordPeekButton = t.closest("#password-peek")

    if (passwordPeekButton && passwordInput.type === "password") {
        passwordInput.type = "text"
        passwordPeekIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }
})

DOMElements.loginContainer.addEventListener("mouseup", (e) => {
    const t = e.target,
        passwordPeekButton = t.closest("#password-peek")

    if (passwordPeekButton && passwordInput.type === "text") {
        passwordInput.type = "password"
        passwordPeekIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
})

passwordInput.addEventListener("focus", (e) => {

    if (!loginCheckerPassword.classList.contains("open")) {
        loginCheckerPassword.classList.add("open")
        document.querySelector(".login-message-wraper.empty").classList.remove("open")
    }
})

passwordInput.addEventListener("blur", (e) => {

    if (loginCheckerPassword.classList.contains("open") && passwordInput.value <= 0) {
        loginCheckerPassword.classList.remove("open")
    }
})

emailInput.addEventListener("focus", (e) => {

    if (!loginCheckerEmail.classList.contains("open")) {
        loginCheckerEmail.classList.add("open")
    }

})

emailInput.addEventListener("blur", (e) => {

    if (loginCheckerEmail.classList.contains("open") && emailInput.value <= 0) {
        loginCheckerEmail.classList.remove("open")
    }
})


DOMElements.loginContainer.addEventListener("input", (e) => {

    if (passwordInput.value.length >= 6 && !passwordLengthChecker.classList.contains("true")) {
        passwordLengthChecker.classList.add("true")
    } else if (
        passwordInput.value.length < 6 && passwordLengthChecker.classList.contains("true")
    ) {
        passwordLengthChecker.classList.remove("true")
    }
    if (hasSpeciaSymbol(passwordInput.value) && !passwordSymbolChecker.classList.contains("true")) {
        passwordSymbolChecker.classList.add("true")
    }
    else if (!hasSpeciaSymbol(passwordInput.value) && passwordSymbolChecker.classList.contains("true")) {
        passwordSymbolChecker.classList.remove("true")
    }
    if (hasUppercase(passwordInput.value) && !passwordUpperCharChecker.classList.contains("true")) {
        passwordUpperCharChecker.classList.add("true")
    }
    else if (!hasUppercase(passwordInput.value) && passwordUpperCharChecker.classList.contains("true")) {
        passwordUpperCharChecker.classList.remove("true")
    }
    if (hasNumber(passwordInput.value) && !passwordNumberChecker.classList.contains("true")) {
        passwordNumberChecker.classList.add("true")
    } else if (!hasNumber(passwordInput.value) && passwordNumberChecker.classList.contains("true")) {
        passwordNumberChecker.classList.remove("true")
    }

    if (isMailValid(emailInput.value) && !emailValidation.classList.contains("true")) {
        emailValidation.classList.add("true")
    } else if (!isMailValid(emailInput.value) && emailValidation.classList.contains("true")) {
        emailValidation.classList.remove("true")
    }

})


const isPasswordValid = (str) => hasSpeciaSymbol(str) && hasNumber(str) && str.length >= 6 && hasUppercase(str);

const hasSpeciaSymbol = (str) => specialSymbols.some((symbol) => str.includes(symbol));
const hasNumber = (str) => {
    return /[0-9]/.test(str);
};

const hasUppercase = (str) => {
    return /[A-Z]/.test(str);
};

const isMailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


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


const highlight = (...inputs) => {
    inputs.forEach((input) => {
        if (!input.classList.contains("invalid")) {
            input.classList.add("invalid")
        }
    })
}
const offHighlight = (...inputs) => {

    inputs.forEach((input) => {
        if (input.classList.contains("invalid")) {
            console.log("has invalid")
            input.classList.remove("invalid")
        }
    })
}

const areInputsFilled = (...inputs) =>
    inputs.every((input) => input.value.trim().length > 0);

const clearInputs = (...inputs) => {
    inputs.forEach((input) => {
        input.value = ``
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("blur", { bubbles: true }));
    })
}

const closeAllMessages = (...messages) => {
    messages.forEach((message) => message.classList.remove("open"))
}

const openMessage = (message)=> message.classList.add("open")