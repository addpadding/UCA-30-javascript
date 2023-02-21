// ===






var x = 2;
var y = 3;

var x = 2,
    y = 3;

console.log(x + y);

x = y;
console.log(x + y);

var x2 = 2,
    y2 = 3;

console.log(x2 - y2);

console.log(x2 * y2);

console.log(x2 / y2);


var x03 = 11,
    y03 = 3;

console.log(x03 % y03);
// =====


var x4 = 11,
    y4 = 3;

console.log(y4 % x4);
// =====


var x5 = 8;

x5++; // post increment
++x5; // pre increment

console.log(x5++); // 10
// 11
console.log(++x5); // 12
console.log(--x5); // 11
console.log(x5--); // 11

console.log(x5);

x++
x = x + 1
// =====

var x6 = 8;

x6 = x6 ** 2;

console.log(x6)
// =====

var x7 = 8;


console.log(x7)
// =====

var x8 = +8;


console.log(x8)
// =====

var x9 = -8;


console.log(x9)
// =====

console.log(+3)
console.log(-3)
console.log(+"3") // 3
console.log(+true) // 1
console.log(+false) // 0
// =====

var x10 = 2,
    y10 = 2,
    z10 = 2;

x10 += 1; // x = x + 1 // x++

y10 -= 1; // x = x - 1 

z10 **= 5; // x = x ** 5


// =====

var x11 = 5;

if (x11 == 5) {
    console.log("yes x11")
} else {
    console.log("no x11")
}
// =====

var x12 = 6;

if (x12 == 5) {
    console.log("yes x12")
} else {
    console.log("no x12")
}
// =====

var x13 = 6,
    y13 = 5;

if (x13 == 6 && y13 == 5) {
    console.log("yes x13")
} else {
    console.log("no x13")
}
// =====

var x14 = 6,
    y14 = 5;

if (x14 == 6 && y14 == 6) {
    console.log("yes x14")
} else {
    console.log("no x14")
}
// =====

var x15 = 6,
    y15 = 5;

if (x15 == 6 || y15 == 6) {
    console.log("yes x15")
} else {
    console.log("no x15")
}
// =====

var x16 = 6,
    y16 = 5;

if (x16 == 8 || y16 == 6) {
    console.log("yes x16")
} else {
    console.log("no x16")
}
// =====

var x17 = 6,
    y17 = 5;

if (!(x17 == 6)) {
    console.log("yes x17")
} else {
    console.log("no x17")
}
// =====

var x18 = 6,
    y18 = 5;

if (!(y18 == 6)) {
    console.log("yes x18")
} else {
    console.log("no x18")
}
// =====

var x19 = 6,
    y19 = 5;

if (x19 == 6) {
    console.log("yes x19")
} else if (x19 == 7) {
    console.log("no x19")
} else {
    console.log("wrong x19")
}
// =====

var x20 = 7,
    y20 = 5;

if (x20 == 6) {
    console.log("yes x20")
} else if (x20 == 7) {
    console.log("no x20")
} else {
    console.log("wrong x20")
}
// =====

var x21 = 70,
    y21 = 5;

if (x21 == 6) {
    console.log("yes x21")
} else if (x21 == 7) {
    console.log("no x21")
} else {
    console.log("wrong x21")
}
// =====

// switch
var x22 = 6;

switch (x22) {
    case 6:
        console.log("yes x22");
        break;

    case 7:
        console.log("no x22");
        break;

    default:
        console.log("default x22");
}
// =====

var x23 = 7;

switch (x23) {
    case 6:
        console.log("yes x23");
        break;

    case 7:
        console.log("no x23");
        break;

    default:
        console.log("default x23");
}
// =====

var x24 = 70;

switch (x24) {
    case 6:
        console.log("yes x24");
        break;

    case 7:
        console.log("no x24");
        break;

    default:
        console.log("default x24");
}
// =====

var x25 = 6;

switch (x25) {
    case 6:
        console.log("yes x25");

    case 7:
        console.log("no x25");

    default:
        console.log("default x25");
}
// =====