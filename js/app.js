// function

var x_01 = 2
var y_01 = 3

console.log(x_01 + y_01)
console.log("x_01");
// =====

// function definition
function log_fun_02() {
    var x_02 = 2
    var y_02 = 3

    console.log(x_02 + y_02)
    console.log("x_02");
}

// trigger function   call function
log_fun_02()

// =====

// parameters
function log_fun_03(x_03, y_03) {
    //===
    console.log(x_03 + y_03)
    //===
}

log_fun_03(1, 2) // arguments
log_fun_03(5, 6)

console.log("x_03");
// =====


function fun_04(x_04, y_04) {
    //===
    var z_04 = 2;
    return z_04;
    //===
}

var data_04 = fun_04()
console.log(data_04)

console.log("x_04");
// =====

// function expressions

var fn_05 = function () {
    console.log("expressions function");
}
fn_05()

console.log("x_05");
// =====

var fn_06 = function test_06() {
    console.log("test");
}
fn_06()

console.log("x_06");
// =====

(function code_07() {
    //===
    console.log("code_07");
    //===
})();


console.log("x_07");
// =====

// Events

document.getElementById("btn-08").onclick = function () {
    document.getElementById("demo-08").innerHTML = "js"
}

console.log("x_08 onclick");
// =====

document.getElementById("btn-09").ondblclick = function () {
    document.getElementById("demo-09").innerHTML = "js"
}

console.log("x_09 ondblclick");
// =====

document.getElementById("btn-10").onmouseenter = function () {
    document.getElementById("demo-10").innerHTML = "js"
}

console.log("x_10 onmouseenter");
// =====

var x_11 = 1;

document.getElementById("btn-11").onmousemove = function () {
    document.getElementById("demo-11").innerHTML = ++x_11;
}

console.log("x_11 onmousemove");
// =====

var x_12 = 1;

document.getElementById("btn-12").onmouseenter = function () {
    document.getElementById("demo-12").innerHTML = ++x_12;
}

console.log("x_12 onmouseenter");
// =====

var x_13 = 1;

document.getElementById("btn-13").onmouseleave = function () {
    document.getElementById("demo-13").innerHTML = ++x_13;
}

console.log("x_13 onmouseleave");
// =====



var btn_14 = document.getElementById("btn-14");
var div_14 = document.getElementById("demo-14");


console.log(btn_14)
console.log(div_14)

btn_14.onmouseleave = function () {
    div_14.innerHTML = "code";
}

console.log("x_14 onmouseleave");
// =====



var btn_15 = document.getElementById("btn-15");
var div_15 = document.getElementById("div-15");


// btn_15.onmouseleave = ;

function action_15() {
    div_15.innerHTML = "code_15";
    console.log("code_15")
}

action_15();

console.log("x_15 ");
// =====



var btn_16 = document.getElementById("btn-16");
var div_16 = document.getElementById("div-16");



function action_16() {
    div_16.innerHTML = "code_16";
    console.log("code_16")
}

btn_16.onclick = action_16;



console.log("x_16 ");
// =====

// ========== (17) ==========

// keybord events

var input_17 = document.getElementById("input-17");
console.log(input_17)

input_17.onkeyup = function () {
    console.log("test 17")
}



console.log("x_17 onkeyup");
// =====

// ========== (18) ==========

// keybord events

var input_18 = document.getElementById("input-18");
console.log(input_18)

input_18.onkeydown = function () {
    console.log("test 18")
}



console.log("x_18 onkeydown");
// =====

// ========== (19) ==========

// keybord events

var input_19 = document.getElementById("input-19");
console.log(input_19)

input_19.onkeyup = function () {
    console.log("test 19")
}



console.log("x_19 onkeyup");

// ========== (20) ==========

// keybord events

var input_20 = document.getElementById("input-20");
console.log(input_20)

input_20.onkeypress = function () {
    console.log("test 20")
}



console.log("x_20 onkeypress");

// ========== (21) ==========


window.onload = function () {
    // alert("yes loaded")
    // console.log("loaded 21")

}



console.log("x_21 onload"); // fff

// ========== (22) ==========

var input_22 = document.getElementById("input-22");

input_22.addEventListener("keyup", function (prams) {
    console.log("test 22")
})



console.log("x_22 addEventListener"); // fff

// ========== (23) ==========

var input_23 = document.getElementById("input-23");

function fun_23() {
    console.log("test 23")
}

input_23.addEventListener("keyup", fun_23);



console.log("x_23"); // fff

// ========== (24) ==========

// loop

/*
    - intialization
    - condition
    - update
 */

for (var x_24 = 1; x_24 <= 5; x_24++) {
    console.log(x_24)
    console.log("test 24 for")
}


console.log("x_24 loop for"); // fff

// ========== (25) ==========


var x_25 = 1;
while (x_25 <= 5) {
    console.log(x_25)
    console.log("test 25 while")
    x_25++
}


console.log("x_25 loop while"); // fff

// ========== (26) ==========


var x_26 = 1;

do {
    console.log(x_26)
    console.log("test 26 do")
    x_26++

} while (x_26 <= 5);


console.log("x_26 loop do"); // fff

// ========== (27) ==========

// bad for


// for (x_27 = 5; x_27 > 1; x_27++) {
//     console.log(x_27)
//     console.log("bad (-__-) 27")
// }

console.log(" bad (-__-) "); // fff