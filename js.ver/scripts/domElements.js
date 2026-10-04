export const DOMElements = (() => {
    const navbar = document.querySelector("#navbar-container"),
        postsContainer = document.querySelector("#posts-container"),
        createPostContainer = document.getElementById("create-container"),
        infoMainModal = document.getElementById("info-modal"),
        imageMainModal = document.getElementById("image-modal"),
        deletePostModal = document.getElementById("delete-modal"),
        cancelPostCreationModal = document.getElementById("cancel-post-modal"),
        infoPostCreationModal = document.getElementById("info-post-modal"),
        authorsPostsContainer = document.querySelector("#authors-posts-container"),
        postContainer = document.querySelector(".post-container"),
        searchContainer = document.querySelector(".search-container"),
        statsContainer = document.querySelector(".stats-container"),
        toastMainContainer = document.getElementById("toast"),
        recentPostContainer = document.querySelector(".recent-post-conteiner"),
        loginContainer = document.getElementById("login-container"),
        registerContainer = document.getElementById("register-container")

    return {registerContainer, loginContainer, recentPostContainer, toastMainContainer, imageMainModal, searchContainer, statsContainer, postContainer, authorsPostsContainer, navbar, postsContainer, deletePostModal, cancelPostCreationModal, infoPostCreationModal, infoMainModal, createPostContainer }
})()