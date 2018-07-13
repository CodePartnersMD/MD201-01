//Constructor
function Store(name, product, location, supplies, sold) {
    this.name = name;
    this.product = product;
    this.location = location;
    this.supplies = supplies;
    this.sold = sold;
    
    this.checkSales = function() {
        return this.supplies - this.sold;
        console.log(checkSales);
    };
};

//getting element of form from html
let elStore = document.getElementById('storeInfo');

//form user variables
let userStoreName = elStore.storeName;
let userStoreProduct = elStore.storeProduct;
let userStoreLoc = elStore.storeLoc;
let userStoreSup = elStore.storeSup;
let userStoreSold = elStore.storeSold;

//creating a table
let elBody = document.getElementById('newBody');
let elTable = document.createElement('table');
elBody.appendChild(elTable);
let elRow = document.createElement('tr');
elTable.appendChild(elRow);
let elTh = document.createElement('th');

elRow.appendChild(elTh);
elTh.innerText = userStoreName.value;

let elTd = document.createElement('td');
elRow.appendChild(elTd);
elTd.innerText = userStoreProduct.value;

let elTd2 = document.createElement('td');
elRow.appendChild(elTd2);
elTd.innerText = userStoreLoc.value;

let elTd3 = document.createElement('td');
elRow.appendChild(elTd3);
elTd.innerText = userStoreSup.value;

//Store Array
let storeArray = [];

//Instances
let vanCookie = new Store ('Vanilla Store', 'Vanilla Cookies', 'Baltimore', 120, 58);
storeArray.push(vanCookie);
let choCookie = new Store ('Chocolate Store', 'Chocolate Cookies', 'Bethesda', 170, 110);
storeArray.push(choCookie);
let cashCookie = new Store ('Cashew Store', 'Cashew Cookies', 'Rockville', 160, 90);
storeArray.push(cashCookie);

//addEventListener
elStore.addEventListener('submit', function(event) {
    event.preventDefault()
    let newStore = new Store(userStoreName.value, userStoreProduct.value, userStoreLoc.value, userStoreSup.value, userStoreSold.value);
    storeArray.push(newStore);
    console.log(storeArray);
    console.log(newStore);
});

console.log(storeArray);

