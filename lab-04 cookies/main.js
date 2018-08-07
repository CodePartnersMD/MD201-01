function Store(name, location, product, costumers) {
    this.storeName = name;
    this.storeLoc = location;
    this.storeProduct = product;
    this.storeCostumers = costumers;
}

let storeOne = new Store('Vanilla Store', 'Baltimore', 'Vanilla Cookies', 150);
let storeTwo = new Store('Chocolate Store', 'Bethesda', 'Chocolate Cookies', 180);

console.log(storeOne);
console.log(storeTwo);

Store.prototype.price = 7.30;
Store.prototype.revenue = 0;

Store.prototype.calRevenue = function(){
    this.revenue = this.costumers*this.price;
}

console.log(storeOne);
console.log(storeTwo);
// let storeOne = {
//     name: 'Chocolate Store',
//     product: 'Chocolate Cookies',
//     costumers: 150,
//     employees:  5,
//     location: 'Bethesda',
//     createCostumer: function() {
//         console.log(this.product);
//     }

// }

// let storeTwo = {
//     name: 'Vanilla Store',
//     product: 'Vanilla Cookies',
//     costumers: 200,
//     employees: 10,
//     location: 'Baltimore',
//     getProduct: function() {
//         console.log(this.product);
//     }
// }

// //array of objects
// let objArray = [storeOne, storeTwo];

// //creating elements
// let elBody = document.getElementById('myBody');
// let elTable = document.createElement('table');
// console.log(elTable);
// elTable.setAttribute('class', 'class-table');
// elBody.appendChild(elTable);

// //looping through the array of objects
// for(let i = 0; i < objArray.length; i++) {
//     let elRow = document.createElement('tr');
//     elRow.textContent = objectArray[i].name;
    
    
    
    
//     console.log(objArray[i].name);
//     console.log(objArray[i].location);
//     console.log(objArray[i].employees);
//     objArray[i].price = 10;
//     objArray[i].revenue = objArray[i].price * objArray[i].costumers;
//     console.log(objArray[i]);
// }