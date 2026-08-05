let modal = `<div class = "modal">MODALdsfgdsgfdsfgdsfgdfsg</div>`

export function printModal() {
    const body = document.querySelector("body");
    const fstChild = document.createElement("div")
    body.prepend(fstChild)
    fstChild.classList.add("modal-container")
    fstChild.innerHTML = modal
}
