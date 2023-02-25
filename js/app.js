// let carName = "BMW"
// let model = 2010

// function fun_n(carName, model) {
//     console.log(carName, model)
// }

// fun_n(carName, model)



// let car = {
//     model: 2010,
//     carName: "BMW",

//     fun_n: function () {
//         console.log(this.model, this.carName);
//     }
// }

// car.fun_n()


// let obj = {
//     name: "hhh",
//     hello: function () {
//         console.log("hello");
//     },
// }

// obj.hello()

// let obj = {
//     name: "hhh",
//     hello: function () {
//         console.log("hello");
//     },
// }

// obj.hello()

// let obj2 = {
//     name: "hhh",
//     hello: function () {
//         console.log("hello");
//     },
// }

// obj.hello()
// obj2.hello()


// function fun(name) {
//     return {
//         name,
//         hello: function () {
//             console.log("hello");
//         },
//     }
// }

// const fun1 = fun("hhh")
// fun1.hello()

// const fun2 = fun("aaa")
// fun2.hello()

// ======== (01) ========

function fun_01(item) {
    this.name = item
    this.Hello_fun = function () {
        console.log("hello");
    }
}

const obj_01 = new fun_01("hamza")

// ========================================
console.log("---01---");
// ========================================


// ======== (02) ========

function fun_02(item_name, item_age) {
    let obj_02 = {}
    obj_02.name = item_name
    obj_02.age = item_age
    return obj_02
}

const obj_023 = fun_02("hamza", 24)
console.log(obj_023)

const obj_024 = fun_02("ahmed", 26)
console.log(obj_024)
// ========================================
console.log("---02---");
// ========================================


// ======== (03) ========
function fun_03(item) {
    // var this = {}

    this.name = item
    this.Hello_fun = function () {
        console.log("hello");
    }

    // return this;
}

const obj_03 = new fun_03("hamza")
console.log(obj_03)

// ========================================
console.log("---03---");
// ========================================


// ======== (04) ========
function fun_04(item) {
    // var this = {}

    this.name = item
    this.Hello_fun = function () {
        console.log("hello");
    }

    // return this;
}

const obj_04 = new fun_03("hamza")
console.log(obj_03.constructor)

// ========================================
console.log("---04---");
// ========================================

// ======== (05) ========

let obj_05 = {
    name: "hamza",
    hello_fun_05: function () {
        console.log("hello");
    },
}

let obj_051 = {}
let obj_052 = new Object()

console.log(obj_05.constructor)

// ========================================
console.log("---05---");
// ========================================

// ======== (06) ========

let obj_06_car = {}


obj_06_car.name = "bmw"

let obj_06_model = "model"

obj_06_car[obj_06_model] = 2020


delete obj_06_car["model"]
delete obj_06_car["name"]
delete obj_06_car.name

console.log(obj_06_car)




// ========================================
console.log("---06---");
// ========================================

