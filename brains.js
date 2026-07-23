const button = document.querySelector(".header-container .link-list .btn");
const cont = document.querySelector(".header-container");
const list = document.querySelector(".header-container .link-list");

button.addEventListener('click', stateChange);

function stateChange() {
    // let li = button.classList;
    if (button.classList.contains("state1")) {
        removeState([button, cont, list], "state1");
        addState([button, cont, list], "state2");
    }
    else if (button.classList.contains("state2")) {
        removeState([button, cont, list], "state2");
        addState([button, cont, list], "state1");
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
