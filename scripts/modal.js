
export function printModal(text) {
    let modal = `<div class = "modal">${text}</div>`
    const body = document.querySelector("body");
    const fstChild = document.createElement("div")
    body.prepend(fstChild)
    fstChild.classList.add("modal-container")
    fstChild.innerHTML = modal
}