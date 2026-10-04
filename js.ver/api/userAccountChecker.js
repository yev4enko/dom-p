import { localStorageAPI } from "./localStorageAPI.js"

export const UAChecker = (() => {
    let UAData = localStorageAPI.loadDataArr("user_account")

    const isLoggedIn = () => UAData["logged"] === true
    const isRegistered = () => UAData["registered"] === true

    const loginFirstNameChecker = (firstname) => UAData["firstName"] === firstname
    const loginLastNameChecker = (lastName) => UAData["lastName"] === lastName

    const emailChecker = (email) => UAData["email"] === email
    const loginPasswordChecker = (password) => UAData["password"] === password

    const savePost = (postID) => { UAData["savedPosts"].push(postID) }

    const updateUserAccountData = (param, newData) => {
        console.log(`user_data :${newData}, by param :${param} was updated!`)
        UAData[`${param}`] = newData
        localStorageAPI.saveDataToLocalStorageByKey(UAData, "user_account")
    }

    const getUserAccountParams = (param) => UAData[param]

    return { emailChecker, getUserAccountParams, updateUserAccountData, isLoggedIn, isRegistered, loginFirstNameChecker, loginLastNameChecker, loginPasswordChecker, savePost }
})()