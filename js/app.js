

// try {
//     // code to run
//     function test() {
//         console.log(test)
//     }

//     test()
// }

// catch (e) {
//     console.log(e.description)
// }


// var x = 12;
// console.log(x)

// "use strict";

// myfun()

// function myfun() {
//     let y = 3.14
// }


// x = 3.14
// myfun()

// function myfun() {
//     "use strict";
//     y = 3.14
// }


// "use strict";

// x = 3.14

// delete x

// "use strict";
// function x(p1, p1) {

// }



// var arr = [1, 2, 3]

// arr.forEach(function (Item1, index, array) {

//     console.log(Item1, index, array)
// });




// const arr = [1, 2, 3]

// // const doubled = arr.map(function (item) {
// //     return item * 2;
// // })

// const doubled = arr.map((item) => item * 2)

// console.log(arr)
// console.log(doubled)










// const numbers = [1, 4, 9, 16]

// // let roots = numbers.map(function (num) {
// //     return Math.sqrt(num)
// // })

// const roots = numbers.map(num => Math.sqrt(num))

// console.log(roots)
// console.log(numbers)








// let kv_array = [

//     { key: 1, value: 10, },

//     { key: 2, value: 20, },

//     { key: 3, value: 30, },
// ]

// let re_format_array = kv_array.map((obj_item) => {
//     let r_obj = {}

//     r_obj[obj_item.key] = obj_item.value;

//     // r_obj[1] = 10;
//     // r_obj[2] = 20;
//     // r_obj[3] = 30;

//     // [
//     //     {
//     //         1: 10
//     //     },
//     //     {
//     //         2: 20
//     //     },
//     //     {
//     //         3: 30
//     //     },
//     // ]

//     return r_obj
// })

// console.log(re_format_array)




// const ints = [1, 2, 3, 4, 8]

// // const even_s = ints.filter(function (item) {
// //     return item % 2 === 0;
// // })

// const even_s = ints.filter(item => item % 2 === 0)

// console.log(even_s)




// const words = ["aaaaa", "bbbbb", "ccccc", "ddddddd", "eeeeeeee", "ffffffffff",]

// const result = words.filter(word_item => word_item.length > 6)

// console.log(words)
// console.log(result)












// let friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
// }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
// }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
// }];


// let allbooks = friends.reduce(function (prev, curr) {
//     return [...prev, ...curr.books];
// }, ['Alphabet']);

// console.log(allbooks)







const arr = [1, 2, 3, -1, 4]

const has_Negative_Numbers = arr.some(function (item) {
    return item < 0;
});
console.log(has_Negative_Numbers)