
var obj = {

    // name: value,

}

var obj_02 = [

    {
        "name": "ahmed",
        "age": 20,
        "phone": 12345
    },

    {
        "string": "name",
        "number": 20,
        "Boolean": true,
        "object": {},
        "array": [],
        "array_nested_object": [
            {}
        ],
        "null": null

    }

]

console.log(obj_02)

// stringify = object => string
var str_02 = JSON.stringify(obj_02)

console.log(str_02)

// parse = string => object
var ob_02 = JSON.parse(str_02)

console.log(ob_02)


document.getElementById("div").innerHTML = str_02
