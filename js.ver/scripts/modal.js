import { renderTheme } from "./UI/ui.js";
import { UIForms } from "./UI/uiForms.js";
import { UIFormsModal } from "./UI/uiFormsModal.js";


export async function modal(modal, modalForm) {
    return new Promise((resolve) => {
        modal.innerHTML = modalForm
        modal.showModal()
        modal.addEventListener("click", (e) => {
            const target = e.target;
            const button = target.closest("button")
            if(button){
                console.log(button.id)
                resolve(button.id)
            }
        });
    });
}
