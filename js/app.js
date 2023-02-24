console.log(window.innerWidth);
console.log(window.innerHeight);


var x = 10;
console.log(x)

console.log(window.x)

window.confirm(" do wont delete this item")

var x = window.confirm(" do wont delete this item")
console.log(x)

var x = window.prompt(" title ")
console.log(x)


window.open("", "", "width=900, height=500")

function add_window() {
    window.open("", "", "width=900, height=500")
}


let popup;

function open_window() {
    popup = window.open("https://www.google.com/", "", "width=900, height=500")
}

function close_window() {
    popup.close()
}

document.querySelector(".open").addEventListener("click", open_window)
document.querySelector(".close").addEventListener("click", close_window)


console.log(screen.width);
console.log(screen.availWidth);

console.log(screen.height);
console.log(screen.availHeight);

console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.onLine);