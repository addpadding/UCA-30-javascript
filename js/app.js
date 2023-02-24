// function fun(a = 5, b = 1) {
//     console.log(a, b);
// }
// fun(1, 3)
// fun(1)
// fun()




// function call_fun(thing = fun_2()) {
//     // return thing
//     console.log(thing)
// }

// let number = 0
// function fun_2() {
//     number += 1
//     return number
// }

// // console.log(call_fun())
// call_fun() // 1
// call_fun() // 2
// call_fun(5)
// call_fun()






// function greet(name, greeting, message = greeting + " " + name) {
//     return [name, greeting, message]
// }

// // greet("hamza", "hi")
// console.log(greet("hamza", "hi", "test"))










// const arr = [1, 2, 3]

// // console.log(...arr);

// function add(x, y, z) {
//     console.log(x + y + z)
// }

// add(...arr)
// // add(1, 2, 3)






// const obj = {
//     x: 1,
//     y: 2
// }

// // const obj2 = {
// //     x: 1,
// //     y: 2,
// //     z: 3
// // }
// // console.log(obj2)

// const obj2 = {
//     ...obj,
//     z: 3,
// }
// console.log(obj2)





// const register = {
//     firstName: "hamza",
//     lastName: "nabil",
//     password: "123",
//     email: "gamil@gmail",
// }

// // function make_register(firstName, lastName, password, email) {
// //     console.log(firstName, lastName, password, email)
// // }
// // make_register(register.firstName, register.lastName)


// function make_register(data) {
//     // request
//     // console.log(...data)
// }


// make_register(register)










//Dest-ruc-tions
//Destructions

// const data = [1, 2, 3]

// const n1 = data[0]
// const n2 = data[1]
// const n3 = data[2]

// const data = [1, 2, 3]

// const [n1, n2, n3] = data
// console.log(n1, n2, n3)

// const [, , n3] = data
// console.log(n3)









// const data2 = {
//     x: 2,
//     z: "hamza",
//     y: "hamada"
// }

// // console.log(data2.x)

// // const x = data2.x
// // const z = data2.z

// const { x, z: name, y = "test" } = data2
// console.log(x, name, y)




// let [name1, ...rest, name2] = ["first", "second", "test_1", "test_2"]
// console.log(name1, rest, name2)

// let [name1, name2, ...rest] = ["first", "second", "test_1", "test_2"]
// console.log(name1, name2, rest)



// let [name = "hamza", lastName = "Badr"] = ["nabil"]










// const template =
//     "<div>" +
//     "< span > this is span </>" +
//     "</div >";

// const data = "test"

// const template2 = `
// <div>
// <span> ${data} </span>
// </div>
// `
// console.log(template2)






// this

// this.x = 2;
// console.log(this.x)
// console.log(window.x)

// function test_this() {
//     return this
// }
// console.log(test_this())

// var person = {

//     F_Name: " jon",
//     L_Name: " doe",
//     full_Name: function () {
//         console.log(this)
//         return this.F_Name + " " + this.L_Name
//     }

// }
// console.log(person.full_Name())





// var obj = {
//     a: "custom"
// }

// var a = "Global"

// function what_this() {
//     return this.a // global
// }

// console.log(what_this());

// // what_this.call(obj);
// console.log(what_this.call(obj))

// // what_this.apply(obj);
// console.log(what_this.apply(obj));







// var person1 = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// // console.log(person1.fullName())

// var person2 = {
//     firstName: "jon",
//     lastName: "ddd"
// }

// // person1.fullName.call(person2)
// console.log(person1.fullName.call(person2))



const youtube = {

    title: "coder",
    tag_s: ["js", "html"],

    return_Title_fun() {
        console.log(this.title);
    },

    return_Tags_fun() {
        var that = this

        that.tag_s.forEach(function (tag) {
            console.log(that);
        })

    },
}

// youtube.return_Title_fun();
youtube.return_Tags_fun();

