// ========= (001) =========


function fun_001() {
    // =========
    console.log("result_001");
    // =========
}
// =========

var btn_001 = document.getElementById("btn_001");

btn_001.onclick = fun_001;

console.log("---001---");

// ========= (002) =========

var btn_002 = document.getElementById("btn_002")

btn_002.addEventListener("click", function () {
    // =========
    console.log("result_002");
    // =========
})


console.log("---002---");

// ========= (003) =========


function fun_003() {
    // =========
    console.log("result_003");
    // =========
}
// =========

var btn_003 = document.getElementById("btn_003")

btn_003.addEventListener("click", fun_003)

console.log("---003---");

// ========= (004) =========


function fun_004() {
    // =========
    console.log("result_004");
    // =========
}
// =========

var btn_004 = document.getElementById("btn_004")

btn_004.addEventListener("dblclick", fun_004)

console.log("---004--- dblclick");
// -----------------------------------------------

// ========= (005) =========

function fun_005(event) {
    // =========
    console.log("result_005", event);
    // =========
}
// =========

var btn_005 = document.getElementById("btn_005")

btn_005.addEventListener("dblclick", fun_005)

console.log("---005---");
// -----------------------------------------------

// ========= (006) =========

function fun_006(event) {
    // =========
    console.log("result_006", event.target);
    console.log("result_006", event.target.id);
    console.log("result_006", event.target.className);
    console.log("result_006", event.target.textContent);
    console.log("result_006", event.clientX);
    console.log("result_006", event.clientY);
    console.log("result_006", event.offsetX);
    console.log("result_006", event.type);
    // =========
}
// =========

var btn_006 = document.getElementById("btn_006")

btn_006.addEventListener("click", fun_006)

console.log("---006--- event.target");
// -----------------------------------------------

// ========= (007) =========


function fun_007() {
    // =========
    console.log("result_007");
    // =========
}
// =========
fun_007


var demo_007 = document.querySelector(".demo_007")

demo_007.addEventListener("mousedown", fun_007)


console.log("---007--- mousedown");
// -----------------------------------------------

// ========= (008) =========


function fun_008() {
    // =========
    console.log("result_008");
    // =========
}
// =========
fun_008


var demo_008 = document.querySelector(".demo_008")

demo_008.addEventListener("mouseup", fun_008)


console.log("---008--- mouseup");
// -----------------------------------------------

// ========= (009) =========


function fun_009() {
    // =========
    console.log("result_009");
    // =========
}
// =========
fun_009


var demo_009 = document.querySelector(".demo_009")

demo_009.addEventListener("mouseenter", fun_009)


console.log("---009--- mouse-enter");
// -----------------------------------------------

// ========= (010) =========


function fun_010(event) {
    // =========
    console.log(event.type)
    // console.log("result_010");
    // =========
}
// =========


var demo_010 = document.querySelector(".demo_010")

demo_010.addEventListener("mouseenter", fun_010)
demo_010.addEventListener("mouseover", fun_010)


console.log("---010--- mouse-over");
// -----------------------------------------------


// ========= (011) =========


function fun_011() {
    // =========
    console.log("result_011");
    // =========
}
// =========
fun_011


var demo_011 = document.querySelector(".demo_011")
var input_011 = document.querySelector("input")

demo_011.addEventListener("mouseleave", fun_011)
demo_011.addEventListener("mouseout", fun_011)
demo_011.addEventListener("mousemove", fun_011)


console.log("---011--- mouse");
// -----------------------------------------------


// ========= (012) =========





var input_012 = document.querySelector(".input_012")
var select = document.querySelector("#select")
var form = document.querySelector("form")
var input_222 = document.querySelector(".input_222")

input_012.addEventListener("keydown", fun_012)
input_012.addEventListener("keyup", fun_012)
input_012.addEventListener("keypress", fun_012)
input_012.addEventListener("focus", fun_012)
input_012.addEventListener("blur", fun_012)
input_012.addEventListener("cut", fun_012)
input_012.addEventListener("paste", fun_012)

input_012.addEventListener("input", fun_012)
select.addEventListener("change", fun_select)



form.addEventListener("submit", fun_form)

input_222.addEventListener("change", fun_012)

function fun_012(e) {
    console.log(e.type)
}

function fun_select(e) {
    console.log(e.target.value)
}

function fun_form(eee) {
    eee.preventDefault()
    console.log(eee.type)
}

// -----------------------------------------------

