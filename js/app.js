

// =
// =
// =
// =
// =

// ======== (01) ========

const carr_01 = new WeakMap();

const obj_01 = { a: "b" }

carr_01.set(obj_01, "hamza")

console.log(carr_01.get(obj_01))



// ========================================
console.log("---01---");
// ========================================

// =
// =
// =
// =
// =

// ======== (02) ========

const _model_02 = new WeakMap();


class Car_02 {
    constructor(model) {
        _model_02.set(this, model)
    }

    data_02() {
        // _model_02.get(this)
        console.log(_model_02.get(this))
    }
}


const obj_car_02 = new Car_02("2015");



// ========================================
console.log("---02---");
// ========================================

// =
// =
// =
// =
// =

// ======== (03) ========

const _model_03 = new WeakMap();


class Car_03 {
    constructor(model) {
        _model_03.set(this, model)
    }

    data_03() {
        console.log(_model_03.get(this))
    }
}


const obj_car_03 = new Car_03("2015");
console.log(obj_car_03.data_03())



// ========================================
console.log("---03---");
// ========================================

/*
=
=
=
=
=
*/

// ======== (04) ========

const _model_04 = new WeakMap();
const _run_04 = new WeakMap();


class Car_04 {
    constructor(model) {
        _model_04.set(this, model)

        _run_04.set(this, () => {
            console.log(" run car");
        })
    }

    data_04() {
        // console.log(_model_04.get(this))
        _run_04.get(this)()
    }
}


const obj_car_04 = new Car_04("2015");
console.log(obj_car_04.data_04())



// ========================================
console.log("---04---");
// ========================================

/*
=
=
=
=
=
*/

// ======== (05) ========

const _model_05 = new WeakMap();
const _run_05 = new WeakMap();


class Car_05 {
    constructor(model) {
        _model_05.set(this, model)
    }

    get model_get() {
        console.log(_model_05.get(this))
    }

    set model_get(value) {
        _model_05.set(this, value)
    }
}


const obj_car_05 = new Car_05("2015");

// obj_car_05.model_get()


// ========================================
console.log("---05---");
// ========================================


