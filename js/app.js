// ========= (001) =========

// literals
var car_001 = {

    name: "BMW",
    year: "2014",

}
console.log(car_001.name)
console.log(car_001.year)

console.log(car_001["name"])
console.log(car_001["year"])



console.log("002 = literals");

// ========= (002) =========

// use new
var book_002 = new Object()

book_002.name = "javascript"
book_002.author = "hamza"

console.log(book_002)
console.log(book_002.name)
console.log(book_002["name"])


console.log("002 = new");

// ========= (003) =========

// object.create
var car_003 = Object.create(car_001, {
    code: {
        value: "123456"
    }
})

console.log(car_003)



console.log("003 = create");

// ========= (004) =========

// object.create

var test_004 = {}

var car_004 = Object.create(test_004, {
    code: {
        value: "123456"
    }
})

console.log(car_004)



console.log("004 = create test");

// ========= (005) =========

var student_005 = {}

var data_005 = Object.create(student_005, {
    name: {
        value: "test"
    },
    sss: {
        value: "yes"
    }
})

var data_0055 = {
    name: "test"
}

console.log(data_005)
console.log(data_0055)



console.log("005 = create student");