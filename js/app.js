// ========= (001) =========

var str_01 = "hello world js"

var res_01 = str_01.split(" ");

console.log(res_01)
console.log(res_01[0])
console.log(res_01[1])
console.log(res_01[2])

console.log("001 = split");

// ========= (002) =========

var str_002 = "js code"

var res_002 = str_002.slice(0, 2);

console.log(str_002[0])

console.log(res_002)

console.log("002 = slice");

// ========= (003) =========

var str_003 = "js code"

var res_003 = str_003.toUpperCase();

console.log(res_003)

console.log("003 = toUpperCase");

// ========= (005) =========

var str_005 = "js code"

var res_005 = str_005.toLowerCase();

console.log(res_005)

console.log("005 = toLowerCase");

// ========= (006) =========

// string
var str_006 = "    js code      "
console.log(str_006)

// result
var res_006 = str_006.trim();
console.log(res_006)

console.log("006 = trim");

// ========= (007) =========

// string
var str_007 = "js code"
// console.log(str_007)

// result
var res_007 = str_007.indexOf("code");
var res_0077 = str_007.indexOf("test");
console.log(res_007)
console.log(res_0077)

console.log("007 = indexOf");

// ========= (008) =========

// array
var arr_008 = ["hamza", "yasser", "ahmed"]

// result
var res_008 = arr_008.join();

console.log(arr_008, res_008)


console.log("008 = join");

// ========= (009) =========

// array
var arr_009 = ["hamza", "yasser", "ahmed"]

// result
var res_009 = arr_009.pop();

console.log(arr_009, res_009)


console.log("009 = pop");

// ========= (010) =========

// array
var arr_010 = ["hamza", "yasser", "ahmed"]

// result
var res_010 = arr_010.push("test");

console.log(arr_010, res_010)


console.log("010 = push");

// ========= (011) =========

// array
var arr_011 = ["hamza", "yasser", "ahmed"]

// result
var res_011 = arr_011.shift();

console.log(arr_011, res_011)


console.log("011 = shift");

// ========= (012) =========

// array
var arr_012 = ["hamza", "yasser", "ahmed"]

// result
var res_012 = arr_012.unshift("test");

console.log(arr_012, res_012)


console.log("012 = unshift");

// ========= (013) =========

// array
var arr_013 = ["hamza", "yasser", "ahmed"]

// result
var res_013 = arr_013.length;

console.log(res_013)


console.log("013 = length");

// ========= (014) =========

// array
var arr_014 = ["hamza", "yasser", "ahmed"]

var c_14 = ["test", "code"]

// result
var res_014 = arr_014.concat(c_14);


console.log(arr_014, c_14, res_014)


console.log("014 = concat");

// ========= (015) =========

// array
var arr_015 = ["hamza", "yasser", "ahmed"]

// result
var res_015 = arr_015.slice(0, 2);

console.log(arr_015, res_015)


console.log("015 = slice");

// ========= (016) =========

console.log(Math.round(2.5));

console.log("016 = round");

// ========= (017) =========

console.log(Math.pow(2, 4));


console.log("017 = pow");

// ========= (018) =========

console.log(Math.sqrt(25));


console.log("018 = sqrt");

// ========= (019) =========

console.log(Math.ceil(2.4));


console.log("019 = ceil");

// ========= (020) =========

console.log(Math.floor(2.9));


console.log("020 = floor");

// ========= (021) =========

console.log(Math.random());

console.log(Math.ceil(Math.random() * 5));
console.log(Math.floor(Math.random() * 5));


console.log("021 = random");