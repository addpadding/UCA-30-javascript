// ========= (001) =========

// Document Object Model

// console.dir(document);

// console.log(document.title);

// document.title = "new js"

// console.log(document.body);
// console.log(document.head);
// console.log(document.forms);
// console.log(document.links);

// console.log(document.documentElement);

// console.log(document.domain);

// console.log(document.URL);

// console.log(document.all);

// console.log(document.all[2]);

// console.log(document.doctype);

// console.log("001 = Document Object Model");

// ========= (002) =========

var heading_002 = document.getElementById("demo");

console.log(heading_002)
console.log(heading_002.innerText)
console.log("---innerText---");
console.log(heading_002.textContent)
console.log("---textContent---");

heading_002.innerText = "test html"
heading_002.textContent = "js js"
heading_002.textContent = "Hello Dom"

heading_002.style.color = "#fff"
heading_002.style.fontSize = "30px"
heading_002.style.backgroundColor = "green"


console.log("002 = getElementById");


// ========= (003) =========

var class_003 = document.getElementsByClassName("desc")
console.log(class_003[0])
console.log(class_003[1])

console.log(class_003[1].getAttribute("class"))

class_003[1].setAttribute("title", "aaaaa")

console.log(class_003[1])

// class_003[0].style.color = "red"
// class_003[1].style.color = "red"

for (var i = 0; i < class_003.length; i++) {
    // ========
    class_003[i].style.color = "red"
    // ========
}


console.log("003 = ClassName");

// ========= (004) =========
var pr_004 = document.getElementsByTagName("p")
console.log(pr_004)

pr_004[1].style.color = "blue"
pr_004[1].textContent = "test"



console.log("004 = TagName");

// ========= (005) =========


var x_005 = document.querySelector("#demo");
var p_005 = document.querySelector("p");

console.log(p_005)

console.log(x_005.innerText)

x_005.innerText += " hhh"


console.log("005 = querySelector");

// ========= (006) =========


var x_006 = document.querySelectorAll("p");
console.log(x_006)

x_006[0].style.color = "green"

console.log("006 = Selector All");

// ========= (007) =========


var input_007 = document.querySelector("input[type=text]");
var submit_007 = document.querySelector("input[type=submit]");

console.log(input_007)
console.log(submit_007)

submit_007.value = "code"

console.log(input_007.parentNode)
console.log(input_007.parentElement)


console.log("007 = input");

// ========= (008) =========


var x_008 = document.querySelector("form");

console.log(x_008)
console.log(x_008.childNodes)
console.log(x_008.children)

console.log(x_008.firstChild)
console.log(x_008.firstElementChild)

console.log(x_008.nextSibling)
console.log(x_008.nextElementSibling)

console.log(x_008.previousSibling)
console.log(x_008.previousElementSibling)


console.log("008 = form");

// ========= (009) =========


var my_div_009 = document.createElement("div");

console.log(my_div_009)

my_div_009.id = "myid"
my_div_009.className = "myclass"

my_div_009.setAttribute("id", "myid_2")
my_div_009.setAttribute("class", "myclass_2")

console.dir(my_div_009)

var text_009 = document.createTextNode("hello dom js")
my_div_009.appendChild(text_009)

console.log(my_div_009)

var ct_009 = document.querySelector(".container")
var span_009 = document.querySelector("#myspan")

ct_009.insertBefore(my_div_009, span_009)



console.log("009 = create");