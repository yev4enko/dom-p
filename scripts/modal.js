export async function modal(modal, button1ID, button2ID) {
    return new Promise((resolve) => {
        modal.showModal()
        modal.addEventListener("click", (e) => {
            const target = e.target;
            const button1 = target.closest(button1ID),
                button2 = target.closest(button2ID);
            if (button1) {
                resolve(true);
            }
            if (button2) {
                resolve(false);
            }
        });
    });
}