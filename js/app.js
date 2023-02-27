

// ======== (01) ========

function cat_01() { }

cat_01.prototype.walk = function () {
    console.log("cat walk")
}

let obj_01 = new cat_01()
console.log(obj_01)
// ========================================
console.log("---01---");
// ========================================

// ======== (02) ========

function cat_02() { }

cat_02.prototype.walk = function () {
    console.log("cat walk")
}



function Rabbit_02() { }

Rabbit_02.prototype.walk = function () {
    console.log("Rabbit walk")
}



let obj_02 = new cat_02()
console.log(obj_02)

// ========================================
console.log("---02---");
// ========================================

// ======== (03) ========

function Animal_03() { }

Animal_03.prototype.walk = function () {
    console.log("cat walk")
}

function cat_03() {
    // this.run_03 = function () {
    //     console.log("run_03")
    // }
}

// Object.create(Animal_03.prototype)

cat_03.prototype = Object.create(Animal_03.prototype)

// cat_03.prototype.walk = function () {
//     console.log("cat walk")
// }


let obj_03 = new cat_03()
console.log(obj_03)

// ========================================
console.log("---03---");
// ========================================

// ======== (04) ========

function Animal_04() { }
Animal_04.prototype.walk = function () {
    console.log("cat walk")
}

function cat_04() { }

cat_04.prototype = Object.create(Animal_04.prototype)
cat_04.prototype.constructor = cat_04
cat_04.prototype.run_04 = function () {
    console.log("run_04")
}



let obj_04 = new cat_04()
console.log(obj_04)

// ========================================
console.log("---04---");
// ========================================

// ======== (06) ========

function Animal_06(name) {
    this.name = name
}

Animal_06.prototype.walk = function () {
    console.log("cat walk")
}

function cat_06(name) {
    Animal_06.call(this, name)
}

cat_06.prototype = Object.create(Animal_06.prototype)
cat_06.prototype.constructor = cat_06




let obj_06 = new cat_06("cat")
console.log(obj_06)

// ========================================
console.log("---06---");
// ========================================

// ======== (07) ========

function Animal_07(name) {
    this.name = name
}

Animal_07.prototype.walk = function () {
    console.log("cat walk")
}

function cat_07(name) {
    Animal_07.call(this, name)
}

cat_07.prototype = Object.create(Animal_07.prototype)
cat_07.prototype.constructor = cat_07
// ==============

function Rabbit_07(name) {
    Animal_07.call(this, name)
}

Rabbit_07.prototype = Object.create(Animal_07.prototype)
Rabbit_07.prototype.constructor = Rabbit_07
// ==============




let obj_07 = new cat_07("cat")
let obj_07_2 = new Rabbit_07("rabbit")
console.log(obj_07)
console.log(obj_07_2)

// ========================================
console.log("---07---");
// ========================================

// ======== (08) ========

function extend_08(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Animal_08(name) {
    this.name = name
}

Animal_08.prototype.walk = function () {
    console.log("cat walk")
}

function cat_08(name) {
    Animal_08.call(this, name)
}

extend_08(cat_08, Animal_08)
// ==============

function Rabbit_08(name) {
    Animal_08.call(this, name)
}

extend_08(Rabbit_08, Animal_08)
// ==============




let obj_08 = new cat_08("cat")
let obj_08_2 = new Rabbit_08("rabbit")
console.log(obj_08)
console.log(obj_08_2)

// ========================================
console.log("---08---");
// ========================================

// ======== (09) ========

function extend_09(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Animal_09(name) {
    this.name = name
}

Animal_09.prototype.walk = function () {
    console.log("walk")
}

function cat_09(name) {
    Animal_09.call(this, name)
}

extend_09(cat_09, Animal_09)

cat_09.prototype.walk = function () {
    console.log("cat walk")
}
// ==============

function Rabbit_09(name) {
    Animal_09.call(this, name)
}

extend_09(Rabbit_09, Animal_09)

Rabbit_09.prototype.walk = function () {
    console.log("Rabbit walk")
}
// ==============




let obj_cat_09 = new cat_09("cat")
let obj_rabbit_09 = new Rabbit_09("rabbit")
console.log(obj_cat_09)
console.log(obj_rabbit_09)

// ========================================
console.log("---09--- overriding");
// ========================================

// ======== (10) ========

let can_walk_10 = {
    walk: function () {
        console.log("walk")
    }
}

let can_swim_10 = {
    swim: function () {
        console.log("swim")
    }
}

// ====(cat)====
function Cat_10(name) {
    this.name = name
}


Object.assign(Cat_10.prototype, can_walk_10)
// ===

// ====(fish)====
function fish_10(name) {
    this.name = name
}


Object.assign(fish_10.prototype, can_swim_10)
// ===

const obj_cat_10 = new Cat_10("cat")
const obj_fish_10 = new fish_10("fish")
console.log(obj_cat_10)
console.log(obj_fish_10)



// ========================================
console.log("---10---");
// ========================================

// ======== (11) ========

// walk
let can_walk_11 = {
    walk: function () {
        console.log("walk")
    }
}

// run
let can_run_11 = {
    run: function () {
        console.log("run")
    }
}

// swim
let can_swim_11 = {
    swim: function () {
        console.log("swim")
    }
}

// ====(cat)====
function Cat_11(name) {
    this.name = name
}


Object.assign(Cat_11.prototype, can_walk_11, can_run_11)
// ===

// ====(fish)====
function fish_11(name) {
    this.name = name
}


Object.assign(fish_11.prototype, can_swim_11, can_run_11)
// ===

const obj_cat_11 = new Cat_11("cat")
const obj_fish_11 = new fish_11("fish")
console.log(obj_cat_11)
console.log(obj_fish_11)



// ========================================
console.log("---11---");
// ========================================

// ======== (12) ========

function mixin_12(obj, ...params) {
    Object.assign(obj, ...params)
}

// walk
let can_walk_12 = {
    walk: function () {
        console.log("walk")
    }
}

// run
let can_run_12 = {
    run: function () {
        console.log("run")
    }
}

// swim
let can_swim_12 = {
    swim: function () {
        console.log("swim")
    }
}

// ====(cat)====
function Cat_12(name) {
    this.name = name
}


mixin_12(Cat_12.prototype, can_walk_12, can_run_12)
// ===

// ====(fish)====
function fish_12(name) {
    this.name = name
}


mixin_12(fish_12.prototype, can_swim_12, can_run_12)
// ===

const obj_cat_12 = new Cat_12("cat")
const obj_fish_12 = new fish_12("fish")
console.log(obj_cat_12)
console.log(obj_fish_12)



// ========================================
console.log("---12---");
// ========================================


