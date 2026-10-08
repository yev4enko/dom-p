import { localStorageAPI } from "../../api/localStorageAPI.js";
import { UAChecker } from "../../api/userAccountChecker.js";
import { DOMElements } from "../domElements.js";
import { newUser } from "../newObj.js"
const specialSymbols = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `_`, `+`, `№`, `;`, `%`, `:`, `?`, `*`, `(`, `)`, `_`, `+`, `<`, `>`, `?`, `,`, `<`, `>`]
const firstnameInput = document.getElementById("register-firstname"),
    secondInput = document.getElementById("register-secondname"),
    emailInput = document.getElementById("register-email"),
    phoneInput = document.getElementById("register-phone"),
    password1Input = document.getElementById("register-password1"),
    password2Input = document.getElementById("register-password2"),

    emailChecker = document.querySelector(".register-checker.email"),
    password1Checker = document.querySelector(".register-checker.password1"),
    password2Checker = document.querySelector(".register-checker.password2"),
    phoneChecker = document.querySelector(".register-checker.phone");

const password1PeekIcon = document.getElementById("password1-register-peek"),
    password2PeekIcon = document.getElementById("password2-register-peek");

const passwordLengthCheckerRegister = document.getElementById("register-password-length"),
    passwordSymbolCheckerRegister = document.getElementById("register-password-symbols"),
    passwordNumberCheckerRegister = document.getElementById("register-password-number"),
    passwordUpperCharCheckerRegister = document.getElementById("register-password-upperchar"),
    passwordsEqualCheckerRegister = document.getElementById("register-password-equal"),
    emailValidationChecker = document.getElementById("register-email-validation"),
    phoneValidationChecker = document.getElementById("register-phone-validation");

const validationMessage = document.querySelector(".register-message-wraper.validation"),
    emptyMessage = document.querySelector(".register-message-wraper.empty")

const inputWrapers = document.querySelectorAll(".register-input-wraper")    

DOMElements.registerContainer.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.target;
    const t1 = t.closest(".register-form")
    const loginRedirButton = t.closest("#login-redir");
    const signUpButton = t.closest("#signup");

    if (signUpButton) {
        console.log("SIGNUP BUTTON")
        if (!areInputsFilled(firstnameInput, secondInput, emailInput, phoneInput, password1Input, password2Input)) {
            openElements(emptyMessage)
            highlight(...inputWrapers)
            clearInputs(firstnameInput, secondInput, emailInput, phoneInput, password1Input, password2Input)
            return;
        }
        if(!isMailValid(emailInput.value) && !isPasswordValid(password1Input.value) && (!arePasswordsEqual(password1Input.value, password2Input.value) || arePasswordsEqual(password1Input.value, password2Input.value))&& !isValidPhone(phoneInput.value)){
            openElements(validationMessage)
            highlight(...inputWrapers)
            clearInputs(firstnameInput, secondInput, emailInput, phoneInput, password1Input, password2Input)
            return;
        }
        if(isMailValid(emailInput.value) && isPasswordValid(password1Input.value) && arePasswordsEqual(password1Input.value, password2Input.value) && isValidPhone(phoneInput.value)){
            const newAccount = new newUser(firstnameInput.value.trim(),secondInput.value.trim(),emailInput.value.trim(),phoneInput.value.trim(),password1Input.value.trim());
         //   console.log(newAccount)
            if(newAccount){
                 console.log(newAccount)
                localStorageAPI.saveDataToLocalStorageByKey(newAccount, "user_account")
                redir("login.html")
            }
        }
    }
    if (t1 && !signUpButton) {
        closeAllElements(validationMessage, emptyMessage)
        offHighlight(...inputWrapers)
      //  clearInputs(firstnameInput, secondInput, emailInput, phoneInput, password1Input, password2Input)
    }
})

DOMElements.registerContainer.addEventListener("mousedown", (e) => {
    const t = e.target,
        password1PeekButton = t.closest("#password1-register-peek"),
        password2PeekButton = t.closest("#password2-register-peek")

    if (password1PeekButton && password1Input.type === "password") {
        password1Input.type = "text"
        password1PeekIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }
    if (password2PeekButton && password2Input.type === "password") {
        password2Input.type = "text"
        password2PeekIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }
})

DOMElements.registerContainer.addEventListener("mouseup", (e) => {
    const t = e.target,
        password1PeekButton = t.closest("#password1-register-peek"),
        password2PeekButton = t.closest("#password2-register-peek")

    if (password1PeekButton && password1Input.type === "text") {
        password1Input.type = "password"
        password1PeekIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
    if (password2PeekButton && password2Input.type === "text") {
        password2Input.type = "password"
        password2PeekIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
})



emailInput.addEventListener("focus", (e) => {
    if (!emailChecker.classList.contains("open")) {
        emailChecker.classList.add("open")
    }
})

emailInput.addEventListener("blur", (e) => {
    if (emailChecker.classList.contains("open") && emailInput.value.length <= 0) {
        emailChecker.classList.remove("open")
    }
})

phoneInput.addEventListener("focus", (e) => {
    if (!phoneChecker.classList.contains("open")) {
        openElements(phoneChecker)
    }
})

phoneInput.addEventListener("blur", (e) => {
    if (phoneChecker.classList.contains("open") && phoneInput.value.length <= 0) {
        closeAllElements(phoneChecker)
    }
})

password1Input.addEventListener("focus", (e) => {
    if (!password1Checker.classList.contains("open")) {
        openElements(password1Checker)
    }
})

password1Input.addEventListener("blur", (e) => {
    if (password1Checker.classList.contains("open") && password1Input.value.length <= 0) {
        closeAllElements(password1Checker)
    }
})

password2Input.addEventListener("focus", (e) => {
    if (!password2Checker.classList.contains("open")) {
        openElements(password2Checker)
    }
})
password2Input.addEventListener("blur", (e) => {
    if (password2Checker.classList.contains("open") && password2Input.value.length <= 0) {
        closeAllElements(password2Checker)
    }
})


DOMElements.registerContainer.addEventListener("input", (e) => {

    if (password1Input.value.length >= 6 && !passwordLengthCheckerRegister.classList.contains("true")) {
        passwordLengthCheckerRegister.classList.add("true")
    } else if (
        password1Input.value.length < 6 && passwordLengthCheckerRegister.classList.contains("true")
    ) {
        passwordLengthCheckerRegister.classList.remove("true")
    }
    if (hasSpeciaSymbol(password1Input.value) && !passwordSymbolCheckerRegister.classList.contains("true")) {
        passwordSymbolCheckerRegister.classList.add("true")
    }
    else if (!hasSpeciaSymbol(password1Input.value) && passwordSymbolCheckerRegister.classList.contains("true")) {
        passwordSymbolCheckerRegister.classList.remove("true")
    }
    if (hasUppercase(password1Input.value) && !passwordUpperCharCheckerRegister.classList.contains("true")) {
        passwordUpperCharCheckerRegister.classList.add("true")
    }
    else if (!hasUppercase(password1Input.value) && passwordUpperCharCheckerRegister.classList.contains("true")) {
        passwordUpperCharCheckerRegister.classList.remove("true")
    }
    if (hasNumber(password1Input.value) && !passwordNumberCheckerRegister.classList.contains("true")) {
        passwordNumberCheckerRegister.classList.add("true")
    } else if (!hasNumber(password1Input.value) && passwordNumberCheckerRegister.classList.contains("true")) {
        passwordNumberCheckerRegister.classList.remove("true")
    }

    if (isMailValid(emailInput.value) && !emailValidationChecker.classList.contains("true")) {
        emailValidationChecker.classList.add("true")
    } else if (!isMailValid(emailInput.value) && emailValidationChecker.classList.contains("true")) {
        emailValidationChecker.classList.remove("true")
    }

    if (arePasswordsEqual(password1Input.value, password2Input.value) && !passwordsEqualCheckerRegister.classList.contains("true")) {
        passwordsEqualCheckerRegister.classList.add("true")
    }

    else if (!arePasswordsEqual(password1Input.value, password2Input.value) && passwordsEqualCheckerRegister.classList.contains("true")) {
        passwordsEqualCheckerRegister.classList.remove("true")
    }

    if (isValidPhone(phoneInput.value) && !phoneValidationChecker.classList.contains("true")) {
    phoneValidationChecker.classList.add("true")
} else if (!isValidPhone(phoneInput.value) && phoneValidationChecker.classList.contains("true")) {
    phoneValidationChecker.classList.remove("true")
}

})

const arePasswordsEqual = (password1, password2) => password2 === password1 && password1.length > 0 && password2.length > 0

const isFirstnameValid = (str) => str.length > 0
const isLastnameValid = (str) => str.length > 0
const isPasswordValid = (str) => hasSpeciaSymbol(str) && hasNumber(str) && str.length >= 6 && hasUppercase(str);

const hasSpeciaSymbol = (str) => specialSymbols.some((symbol) => str.includes(symbol));
const isValidPhone = (phone) => {
    return /^\+?[0-9\s()-]{7,20}$/.test(phone) && /[0-9]/.test(phone);
};

const hasNumber = (str) => {
    return /[0-9]/.test(str);
};
const hasUppercase = (str) => {
    return /[A-Z]/.test(str);
}

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

const closeAllElements = (...messages) => {
    messages.forEach((message) => message.classList.remove("open"))
}

const openElements = (message) => message.classList.add("open")