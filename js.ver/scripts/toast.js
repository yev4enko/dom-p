import { DOMElements } from "./domElements.js"
import { UIForms } from "./UI/uiForms.js"

const toast = document.getElementById("toast")


toast.addEventListener("click", (e) => {
    const t = e.target,
        closeButton = t.closest("#toast-closer")
    if (closeButton) {
        toast.classList.toggle("open")
    }
})


export const openToast = (text) => {
    toast.classList.toggle("open")
    setTimeout(() => toast.classList.toggle("open"), 3000)
}
