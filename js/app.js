// ========= (01) =========

var all_item_01 = document.querySelectorAll(".list-01 li")

var content_01 = document.querySelector("#content-01")

var btn_01 = document.querySelector("#add_to_cart-01")


all_item_01.forEach(function (item) {
    // =====
    console.log(item)
    // =====
    item.onclick = function () {
        // =====
        console.log(item)
        // =====
        content_01.innerHTML = item.textContent
        // =====
    }
    // =====
})


// ========= (002) =========

var all_item_002 = document.querySelectorAll(".list-002 li")

var content_002 = document.querySelector("#content-002")

var btn_002 = document.querySelector("#add_to_cart-002")


all_item_002.forEach(function (item) {
    // =====
    item.onclick = function () {
        // =====
        content_002.innerHTML += item.textContent + " "
        // =====
    }
    // =====
})

// ========= (003) =========

var all_item_003 = document.querySelectorAll(".list-003 li")

var content_003 = document.querySelector("#content-003")

var btn_003 = document.querySelector("#add_to_cart-003")

all_item_003.forEach(function (item) {
    // =====
    item.onclick = function () {
        // =====
        content_003.innerHTML += item.textContent + " "
        // =====
        if (content_003.innerHTML != " ") {
            btn_003.style.display = "block"
        }
    }
    // =====
})

// ========= (004) =========

var all_item_004 = document.querySelectorAll(".list-004 li")

var content_004 = document.querySelector("#content-004")

var btn_004 = document.querySelector("#add_to_cart-004")

var total_price_004 = 0;

all_item_004.forEach(function (item) {
    // =====
    item.onclick = function () {
        // =====
        total_price_004 += item.getAttribute("price")
        // =====
        content_004.innerHTML += item.textContent + " "
        // =====
        if (content_004.innerHTML != " ") {
            // =====
            btn_004.style.display = "block"
            // =====
        }
        // =====
    }
    // =====
})

btn_004.onclick = function () {
    console.log(total_price_004);
}

// ========= (005) =========

var all_item_005 = document.querySelectorAll(".list-005 li")

var content_005 = document.querySelector("#content-005")

var btn_005 = document.querySelector("#add_to_cart-005")

var total_price_005 = 0;


// get every item
all_item_005.forEach(function (item) {
    // =========
    // when press onclick = do that
    item.onclick = function () {
        // =========
        // get price and save in total_price
        total_price_005 += parseInt(item.getAttribute("price"))
        // =========
        // get div  = and put inside = li (kaybord)
        content_005.innerHTML += item.textContent + " "
        // =========
        // I am asking = Is inside div = Does it contain 
        if (content_005.innerHTML != " ") {
            // =========
            btn_005.style.display = "block"
            // =========
        }
        // =========
    }
    // =========
})

btn_005.onclick = function () {
    console.log(total_price_005);
}