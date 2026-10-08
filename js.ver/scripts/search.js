import { localStorageAPI } from "../api/localStorageAPI.js";
import { DOMElements } from "./domElements.js";
import { renderTheme } from "./UI/ui.js";
import { UIForms } from "./UI/uiForms.js";

const mainStats = document.querySelector(".stats-wraper.main"),
topStats = document.querySelector(".stats-wraper.top"),
allStatsContainer = document.querySelector(".stats-wraper.overall")

DOMElements.searchContainer.addEventListener("click", (e) => {
    const t = e.target;
    const button = t.closest(".search-btn")
    const searchInput = document.getElementById("search-input")
    if (button && searchInput.value.length !== 0) {
        console.log(search(searchInput.value.trim()));
        searchInput.value = ``
    }
})

const search = (searchInput) => {
    let searchOutput = []
    const authors = localStorageAPI.getDataByParams("users", ["firstname", "lastname", "email"], searchInput)
    const posts = localStorageAPI.getDataByParams("users_posts", ["slug", "title", "content", "tags"], searchInput)

    searchOutput.push(authors)
    searchOutput.push(posts)

    return searchOutput;
}   

// mainStats.addEventListener("click", (e)=>{
//     const t = e.target;
//     const oppenerButton = t.closest("#main-stats-oppener");
//     if(oppenerButton){
//         mainStats.classList.toggle("open");
//     }
// })

// topStats.addEventListener("click", (e)=>{
//     const t = e.target;
//     const oppenerButton = t.closest("#top-stats-oppener");
//     if(oppenerButton){
//         topStats.classList.toggle("open");
//     }
// })

// allStatsContainer.addEventListener("click", (e)=>{
//     const t = e.target;
//     const oppenerButton = t.closest("#stats-oppener");
//     if(oppenerButton){
//         allStatsContainer.classList.toggle("open");
//     }
// })

// DOMElements.recentPostContainer.addEventListener("click", (e)=>{
//     const t = e.target;
//     const button = t.closest("#recent-oppener")
//     const m = document.querySelector(".recent-content")
//     if(button){
//         m.classList.toggle("open");
//     }
// })