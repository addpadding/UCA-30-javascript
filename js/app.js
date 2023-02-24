// var x = 1;

// var test = 12

// //scope
// var x = 2

// function test_code() {
//     var test = 14 // local
// }


// var x = 2
// console.log(window.x)

// let x2 = 2
// console.log(window.x2)

// var x = 2
// x = 5

// console.log(x)

// let x2 = 2
// x2 = 5

// console.log(x2)

// const x3 = 2
// x3 = 5

// console.log(x3)

// const x = "hamza"
// x = "yasser"

// console.log(x)

// const x = {
//     time: 5
// }

// x.time = 8;

// console.log(x)

// var x = 5

// var x = 2

// console.log(x)

// let x = 5

// let x = 2

// console.log(x)

// const x = 5

// const x = 2

// console.log(x)

// console.log(x)
// var x = 1
// console.log(x)

// console.log(x)
// let x = 1



// test()
// function test() {
//     var x = 1;
//     console.log(x);
// }
// test()



// test()
// var test = function () {
//     var x = 1;
//     console.log(x);
// }
// test()



// var x = 1;
// function host() {
//     if (false) {
//         var x = 2;
//     }
//     console.log(x);
// }
// host()


// let x = 1;
// function host() {
//     if (false) {
//         let x = 2;
//     }
//     console.log(x);
// }
// host()


// var host = 1;
// function host() {
//     console.log("test");
// }
// console.log(typeof host)


// var host;
// function host() {
//     console.log("test");
// }
// console.log(typeof host)


// var host;
// function host() {
//     console.log("test");
// }
// console.log(typeof host)

//------------------- 01
function arrow_1(x) {
    console.log(x)
}
arrow_1(1)

//------------------- 02
var arrow_2 = (x) => {
    console.log(x);
}
arrow_2(2)

//------------------- 03
var arrow_3 = x => {
    console.log(x);
}
arrow_3(3)

//------------------- 04
var arrow_4 = x => console.log(x);
arrow_4(4)

//------------------- 05
var arrow_5 = (x, y) => console.log(x, y);
arrow_5(6, 10)
//-------------------