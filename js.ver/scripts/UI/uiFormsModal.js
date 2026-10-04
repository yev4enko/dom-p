export const UIFormsModal = (() => {

    const imageModal = (img) => `
        <div class ="img-modal">
            <img src = "${img}">
            <button id = "close-image-modal"><i class="fa-solid fa-minimize"></i></button>
        <div>

    `
    return { imageModal }
})()