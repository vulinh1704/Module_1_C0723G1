let shop = new Store();
// function main() {
//     let sp1 = new Product(1, 'Hong',200, 1);
//     let sp2 = new Product(2, 'LOng con', 300, 1);
//
//     shop.addProduct(sp1);
//     shop.addProduct(sp2);
//     shop.remove(1);
//
//     let listProductInStore = shop.findAll();
//     for (let i = 0; i < listProductInStore.length; i++) {
//         console.log(listProductInStore[i]);
//     }
// }
// main();

function showAll() {
    let listProductInStore = shop.findAll();
    let stringHtml = ``;
    for (let i = 0; i < listProductInStore.length; i++) {
        stringHtml += `
            <tr>
                <td>${listProductInStore[i].id}</td>
                <td>${listProductInStore[i].name}</td>
                <td>${listProductInStore[i].price}</td>
                <td>${listProductInStore[i].quantity}</td>
                <td><button style="background-color: #165050; color: white; border-radius: 50px" onclick="showFormEdit(${i})">Edit</button></td>
                <td><button style="background-color: #e72929; color: white" onclick="removeProduct(${i})">Delete</button></td>
            </tr>
        `
    }
    document.getElementById('list-product').innerHTML = stringHtml;
}

showAll();

function showFormAdd() {
    document.getElementById('form-add').innerHTML = `
        <h3>Form ADD</h3>
        <input type="number" id="id" placeholder="Id">
        <br>
        <input type="text" id="name" placeholder="Name">
        <br>
        <input type="number" id="price" placeholder="Price">
        <br>
        <input type="number" id="quantity" placeholder="Quantity">
        <br>
        <button onclick="save()">Save</button>
    `
}

function save() {
    let id = +document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = +document.getElementById('price').value;
    let quantity = +document.getElementById('quantity').value;

    let newProduct = new Product(id, name, price, quantity);
    shop.addProduct(newProduct);
    showAll();
    document.getElementById('form-add').innerHTML = '';
}

function removeProduct(index) {
    let checkRemove = confirm("Are you sure?");
    if(checkRemove) {
        shop.remove(index);
        showAll();
    }
}

function showFormEdit(index) {
    let listProductInStore = shop.findAll()
    let productEdit = listProductInStore[index];
    document.getElementById('form-edit').innerHTML = `
        <h3>Form Edit</h3>
        <input type="number" id="idEdit" placeholder="Id" value="${productEdit.id}">
        <br>
        <input type="text" id="nameEdit" placeholder="Name" value="${productEdit.name}">
        <br>
        <input type="number" id="priceEdit" placeholder="Price" value="${productEdit.price}">
        <br>
        <input type="number" id="quantityEdit" placeholder="Quantity" value="${productEdit.quantity}">
        <br>
        <button onclick="saveEdit(${index})">Save</button>
    `
}

function saveEdit(index) {
    let idEdit = +document.getElementById('idEdit').value;
    let nameEdit = document.getElementById('nameEdit').value;
    let priceEdit = +document.getElementById('priceEdit').value;
    let quantityEdit = +document.getElementById('quantityEdit').value;
    let newProduct = new Product(idEdit, nameEdit, priceEdit, quantityEdit);
    shop.edit(index, newProduct);
    showAll();
    document.getElementById('form-edit').innerHTML = '';
}