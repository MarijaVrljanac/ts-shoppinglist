let items: Item[] = [];

interface IItem {
  id: number;
  name: string;
  itemtype: string;
  price: string;
  description?: string;
  delete(): void;
}

class Item implements IItem {
  id: number;
  name: string;
  itemtype: string;
  price: string;
  description?: string | undefined;
  delete(): void {
    console.log("nesto")
  }
  constructor(
    id: number,
    name: string,
    itemtype: string,
    price: string,
    description?: string
  ) {
    this.id = id;
    this.name = name;
    this.itemtype = itemtype;
    this.price = price;
    this.description = description;
  }
}

let createButton = document.getElementById("createButton");
let counter = 1;
createButton?.addEventListener("click", function (e) {
    console.log("nestoooo")
  e.preventDefault();

  let name = document.getElementById("name") as HTMLInputElement;
  if (name?.value == "") {
    alert("Please enter the item name");
    return;
  }

  let price = document.getElementById("price") as HTMLInputElement;
  let itemtype = document.getElementById("itemtype") as HTMLSelectElement;
  let valueId = itemtype.selectedIndex;
  let valueText = itemtype.options[valueId].text;
  if (valueId == 0) {
    alert("Please choose the type of item");
    return;
  }
  let description = (document.getElementById("description") as HTMLInputElement)
    .value;

  const item = new Item(
    counter,
    name.value,
    valueText,
    price.value,
    description
  );
  counter++;
  items.push(item);
  setTable(items);
});


let table = document.getElementById("table") as HTMLTableElement;
function setTable(items: Item[]): void {
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
function delete2(id: number) {
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