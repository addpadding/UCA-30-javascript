

// ======== (01) ========

function F_01(name_item) {
    this.name = name_item

    let B_01_2 = function () {
        console.log("prise is 200");
    }

    this.F_01_2 = function () {
        console.log(`person name is ${this.name}`);
        B_01_2()
    }
}


let B_01 = new F_01("hamza")
B_01.F_01_2()

// ========================================
console.log("---01---");
// ========================================


// ======== (02) ========

function person_02(name_item) {
    this.name = name_item

    this.data_02 = function () {
        console.log(`person name is ${this.name}`);
    }
}

// function person_022(name_item) {
//     this.name = name_item

//     this.data_02 = function () {
//         console.log(`person name is ${this.name}`);
//     }

//     this.sayHello = function () { }
// }

function stu_02(name, age) {
    this.age = age
    person_02.call(this, name)
}

let s1_02 = new stu_02("ahmed", 20)



// ========================================
console.log("---02---");
// ========================================

// ======== (03) ========

function Student_03(name) {
    this.name = name;
}

let s1_03 = new Student_03("ahmed", 20);


// ========================================
console.log("---03---");
// ========================================

// ======== (04) ========

let obj_04 = {
    title: "JavaScript",
    test: function () {
        console.log("test code");
    }
}

// ========================================
console.log("---04---");
// ========================================

// ======== (05) ========

let a_05 = {
    title: "java"
}

// Object.keys(a_05)
console.log(Object.keys(a_05))

let per_obj_05 = Object.getPrototypeOf(a_05)

let desc_05 = Object.getOwnPropertyDescriptor(per_obj_05, "toString")
console.log(desc_05)

// ========================================
console.log("---05---");
// ========================================

// ======== (06) ========

let a_06 = {
    title: "java"
};

Object.defineProperty(a_06, "title", {
    configurable: false,
    writable: true,
    enumerable: true,
})

// delete a_06.title
a_06.title = "css"

// console.log(a_06)
console.log(Object.keys(a_06))

// ========================================
console.log("---06---");
// ========================================

// ======== (07) ========

function person_07(name) {
    this.name = name
}

let p_07 = new person_07("ahmed")

person_07.prototype = p_07.__proto__

// ========================================

console.log("---07---");
// ========================================

// ======== (08) ========

function person_08(name) {
    this.name = name
}

let p_08 = new person_08("ahmed")

person_08.prototype = p_08.__proto__

// ========================================

console.log("---08---");
// ========================================


