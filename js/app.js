// ======== (01) ========

class Student_01 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const obj_st_01 = new Student_01("hamza", 20)
console.log(obj_st_01)


// ========================================
console.log("---01---");
// ========================================

// =
// =
// =
// =
// =

// ======== (02) ========

class Student_02 {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.info = function () {
            console.log(`Name: ${this.name} and age : ${this.age}`);
        }
    }
}

const obj_st_02 = new Student_02("hamza", 20)
console.log(obj_st_02)
obj_st_02.info()


// ========================================
console.log("---02---");
// ========================================

// =
// =
// =
// =
// =

// ======== (03) ========

class Student_03 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`Name: ${this.name} and age : ${this.age}`);
    }
}

const obj_st_03 = new Student_03("hamza", 20)
console.log(obj_st_03)
obj_st_03.info()

console.log(typeof Student_03)

// ========================================
console.log("---03---");
// ========================================

// =
// =
// =
// =
// =

// ======== (04) ========

class Student_04 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`Name: ${this.name} and age : ${this.age}`);
    }
}

const obj_st_04 = new Student_04("hamza", 20)
console.log(obj_st_04)
obj_st_04.info()

console.log(typeof Student_04)


function hamada_1() { }

const hamada_2 = function () { }

class hamada_3 { }

const hamada_4 = class { }

// ========================================
console.log("---04---");
// ========================================

// =
// =
// =
// =
// =

// ======== (05) ========

class Math {

    static abs() { }

    abs() { }

}

Math.abs()

class Student_05 {

    test = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
    }
}

// Student_05.

// const st = new Student_01()
// st.


// ========================================
console.log("---05---");
// ========================================

// =
// =
// =
// =
// =

// ======== (06) ========


class Student_06 {

    static number;
    // static get_number() { }

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
    }
}

// Student_06.get_number()

// const st_06 = new Student_06()
// st_06.get_number()


// ========================================
console.log("---06---");
// ========================================

// =
// =
// =
// =
// =

// ======== (07) ========

// "use strict";

const Student_07 = function () {
    this.info = function () {
        console.log(this)
    }
}

const st_07 = new Student_07();
st_07.info(); // method call

const s_07 = st_07.info;
s_07(); // function call

// ========================================
console.log("---07---");
// ========================================

// =
// =
// =
// =
// =

// ======== (08) ========


class Student_08 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(this)
    }
}

const st_08 = new Student_08();
st_08.info();

const s_08 = st_08.info;
s_07();


// ========================================
console.log("---08---");
// ========================================

// =
// =
// =
// =
// =

// ======== (09) ========


class Student_09 {
    constructor(name, age) {
        let _name = name
        let _age = age


        this.setName = function (name) {
            _name = name
        }

        this.setAge = function (age) {
            _age = age
        }

        this.get_name = function () {
            return _name
        }

        this.get_age = function () {
            return _age
        }

    }

}

const obj_09 = new Student_09();
obj_09.setName("hamza")
obj_09.setAge(20)


const new_name_09 = obj_09.get_name()
const new_age_09 = obj_09.get_age()

console.log(new_name_09, new_age_09)


// console.log(obj_09)

// ========================================
console.log("---09---");
// ========================================

// =
// =
// =
// =
// =

// ======== (10) ========


class Person_10 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    data_10() {
        // console.log(this.name, this.age);
        console.log("test");
    }

}

class Student_10 extends Person_10 { }

const obj_10 = new Student_10();

obj_10.data_10()

// console.log(obj_10)


// ========================================
console.log("---10---");

// =
// =
// =
// =
// =

// ======== (11) ========


class Person_11 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    data_11() {
        console.log(this.name, this.age);
    }

}

class Student_11 extends Person_11 {
    constructor(name, age) {
        super(name, age)
    }
}

const obj_11 = new Student_11("hamza", 20);


// ========================================
console.log("---11---");
// ========================================

// =
// =
// =
// =
// =

// ======== (12) ========


class Person_12 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    data_12() {
        console.log(this.name, this.age);
    }

}

class Student_12 extends Person_12 {
    constructor(name, age) {
        super(name, age)
    }

    data_12() {
        super.data_12()
        console.log("test");
    }
}

const obj_12 = new Student_12("hamza", 20);

obj_12.data_12()


// ========================================
console.log("---12---");
// ========================================


