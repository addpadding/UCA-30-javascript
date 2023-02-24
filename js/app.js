var product_btn = document.getElementById("product_btn")
var product_container = document.getElementById("product_container")

var data = [

    {
        id: 1,
        name: "product 01",
        desc: "pal pla pla"
    },

    {
        id: 2,
        name: "product 02",
        desc: "pal pla pla"
    },

    {
        id: 3,
        name: "product 03",
        desc: "pal pla pla"
    },

    {
        id: 4,
        name: "product 04",
        desc: "pal pla pla"
    }

]

// draw_Ui
function draw_Ui(items) {
    // =
    product_container.innerHTML = "";
    // =
    items.forEach(function (ele) {
        // =
        // console.log(ele)
        // product_container.innerHTML += "<div>" + ele.name + "</div>";

        product_container.innerHTML += `
        <div onclick="delete_item_fun(${ele.id})">
        ${ele.name}
        </div>
        `;
    })
    // =
}

// load data
window.onload = function () {
    // =
    draw_Ui(data)
    // =
}

// add item
product_btn.addEventListener("click", add_item)

function add_item() {
    // =
    var product_input = document.getElementById("product_input")

    // =
    if (product_input.value == "") {
        // =
        alert("you should enter product")
        // =
    }

    // =
    var last_id = data.length ? data[data.length - 1].id : 0;

    console.log(++last_id)

    // add to array
    data.push(
        {
            id: ++last_id,
            name: product_input.value,
            desc: "pal pla pla"
        }
    )

    // =
    console.log(data);

    // =
    var add_item = data[data.length - 1]
    console.log(add_item)

    // =
    // product_container.innerHTML += "<div>" + add_item.name + "</div>";
    product_container.innerHTML += `
        <div onclick="delete_item_fun(${add_item.id})">
        ${add_item.name}
        </div>
        `;

    // =
    product_input.value = "";

}

function delete_item_fun(id_item) {
    // console.log(id_item)

    // data.splice(0, 1)

    // =
    var index = data.map(function (i_i) {
        // =
        return i_i.id
    }).indexOf(id_item)

    // console.log(index)

    if (index !== 1) {
        // -
        data.splice(index, 1)
        // -
        draw_Ui(data)
    }

    console.log(data)

}
