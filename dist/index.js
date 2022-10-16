"use strict";
let items = [];
class Item {
    constructor(id, name, itemtype, price, description) {
        this.id = id;
        this.name = name;
        this.itemtype = itemtype;
        this.price = price;
        this.description = description;
    }
    delete() {
        console.log("nesto");
    }
}
let createButton = document.getElementById("createButton");
let counter = 1;
createButton === null || createButton === void 0 ? void 0 : createButton.addEventListener("click", function (e) {
    console.log("nestoooo");
    e.preventDefault();
    let name = document.getElementById("name");
    if ((name === null || name === void 0 ? void 0 : name.value) == "") {
        alert("Please enter the item name");
        return;
    }
    let price = document.getElementById("price");
    let itemtype = document.getElementById("itemtype");
    let valueId = itemtype.selectedIndex;
    let valueText = itemtype.options[valueId].text;
    if (valueId == 0) {
        alert("Please choose the type of item");
        return;
    }
    let description = document.getElementById("description")
        .value;
    const item = new Item(counter, name.value, valueText, price.value, description);
    counter++;
    items.push(item);
    setTable(items);
});
let table = document.getElementById("table");
function setTable(items) {
    let counter = 1;
    table.innerHTML = "";
    items.forEach((item) => {
        table.innerHTML += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.itemtype}</td>
    <td>${item.price}</td>
    <td>${item.description}</td>
    <td class='btn btn-danger' onClick='delete2(${item.id})'>X</td>
    </tr>`;
    });
    counter++;
}
function delete2(id) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            const index = items.indexOf(items[i], 0);
            if (index > -1) {
                items.splice(index, 1);
            }
        }
    }
    setTable(items);
}
