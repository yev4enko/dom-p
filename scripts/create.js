import { userPost } from "./userPost.js";
import { modal } from "./modal.js";
import { parseDescr, parseTags } from "./math.js"

const createContainer = document.querySelector(".create-container")
createContainer.addEventListener("click", async (e) => {
    const target = e.target;

    const cancelModal1DOM = document.getElementById("create-modal-1"),
        infoModal2DOM = document.getElementById("create-modal-2");

    const button1 = document.getElementById("apply-create-modal1");
    const button2 = document.getElementById("cancel-create-modal2");

    const applyButton = target.closest("#create-apply"),
        cancelButton = target.closest("#create-cancel"),
        createInfo = target.closest("#create-info");

    let name = document.getElementById("author-name").value,
        tittle = document.getElementById("title").value,
        tags = document.getElementById("tag").value,
        descr = document.getElementById("descr").value;

    if (applyButton) {
        const newpew = new userPost(name, tittle, parseDescr(descr), parseTags(tags));
        newpew.loadToLS();
        window.location.href = `../index.html`
    }
    if (cancelButton) {
        if (descr.length !== 0) {
            const button1 = document.getElementById("apply-create-modal1"),
                button2 = document.getElementById("cancel-create-modal2");
            const res = await modal(cancelModal1DOM, button1, button2)
            res ? window.location.href = "../index.html" : cancelModal1DOM.close()
        }
        else { window.location.href = "../index.html" }
    }
    if (createInfo) {
        const button1 = "#info-button"
        const res = await modal(infoModal2DOM, button1)
        res ? infoModal2DOM.close() : null;
    }
})