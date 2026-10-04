import { localStorageAPI } from "../../api/localStorageAPI.js";
import { DOMElements } from "../domElements.js";
import { newUser } from "../newObj.js"

DOMElements.registerContainer.addEventListener("click", (e) => {

    e.preventDefault();
    const t = e.target,
        singUpButton = t.closest("#sign-up")

    let firstnameRegister = document.getElementById("firstname-register").value,
        lastnameRegister = document.getElementById("lastname-register").value,
        emailRegister = document.getElementById("phone-register").value,
        phoneRegister = document.getElementById("email-register").value,
        password1Register = document.getElementById("password-register1").value,
        password2Register = document.getElementById("password-register2").value;

    if (singUpButton) {
        if (firstnameRegister.length === 0 || lastnameRegister.length === 0 || emailRegister.length === 0 || phoneRegister.length === 0 || password1Register.length === 0 || password2Register.length === 0) {
            console.log("Fields marked (*) needs to be filled in!")
        }
        else if (password1Register !== password2Register) {
            console.log("Passwords should match!")
        }
        else {
            const user = new newUser(firstnameRegister, lastnameRegister, emailRegister, phoneRegister, password2Register);
            localStorageAPI.saveDataToLocalStorageByKey(user, "user_account")
            document.getElementById("phone-register").value = "";
            document.getElementById("firstname-register").value = "";
            document.getElementById("lastname-register").value = "";
            document.getElementById("email-register").value = "";
            document.getElementById("password-register1").value = "";
            document.getElementById("password-register2").value = "";
            
        }
    }
})