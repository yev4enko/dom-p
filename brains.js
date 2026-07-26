const button = document.querySelector(".header-container .link-list .btn");
const cont = document.querySelector(".header-container");
const list = document.querySelector(".header-container .link-list");
const postContent = document.getElementById("post-content");
const postContent1div = document.getElementsByClassNa

const text = document.getElementById("text-input");
const send = document.getElementById("btn-send");
const textSize = document.getElementById("textSize");


button.addEventListener('click', stateChange);
text.addEventListener("input", textValue);
text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        createPost();
    }
});
send.addEventListener("click", createPost)

const textV = 250;

//const c = (num) => num * num;

function textValue() {
    textSize.textContent = `Value: ${text.value.length} / ${textV}`;
    if (text.value.length > textV) {
        textSize.textContent = `Value: ${text.value.length} / u.o.r.`;
        text.style.color = "blue";
    }
    else {
        text.style.color = "ghostwhite";
    }
}

function stateChange() {
    if (button.classList.contains("state1")) {
        removeState([button, cont, list], "state1");
        addState([button, cont, list], "state2");
    }
    else if (button.classList.contains("state2")) {
        removeState([button, cont, list], "state2");
        addState([button, cont, list], "state1");
    }
}

function createPost() {
    //  const clear = '';
    textSize.textContent = `Value: ${text.value.length} / ${textV}`
    if (text.value !== '') {
        const newDiv = document.createElement("div");
        const newDiv1 = document.createElement("div");
        newDiv.classList.add("post-content");
        newDiv1.classList.add("post-text")
        newDiv1.textContent = `${text.value} ///POST COUNT :`;
        postContent.appendChild(newDiv);
        newDiv.appendChild(newDiv1);
        console.log("text cleared")
        text.value = '';
    }
}
//const c = (num) => num * num;

function addState(elem, arg) {
    elem.forEach(function (e) {
        return e.classList.add(arg)
    });
}

function removeState(elem, arg) {
    elem.forEach(function (e) {
        return e.classList.remove(arg)
    });
}
