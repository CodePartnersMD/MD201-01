//Constructor
function Store(name, product, location, supplies, sold) {
    this.name = name;
    this.product = product;
    this.location = location;
    this.supplies = supplies;
    this.sold = sold;
    
    this.checkSales = function() {
        return this.supplies - this.sold;
    };
};

//Store Array
let storeArray = [];

//getting element of form from html
let form = document.getElementById('storeInfo');

//Instances
let vanCookie = new Store ('Vanilla Store', 'Vanilla Cookies', 'Baltimore', 120, 58);
storeArray.push(vanCookie);
let choCookie = new Store ('Chocolate Store', 'Chocolate Cookies', 'Bethesda', 170, 110);
storeArray.push(choCookie);

//form user variables
let userStoreName = form.storeName;
let userStoreProduct = form.storeProduct;
let userStoreLoc = form.storeLoc;
let userStoreSup = form.storeSup;
let userStoreSold = form.storeSold;

//addEventListener
form.addEventListener('submit', function(event) {
    event.preventDefault()
    let newStore = new Store(userStoreName.value, userStoreProduct.value, userStoreLoc.value, userStoreSup.value, userStoreSold.value);
    storeArray.push(newStore);
    console.log(storeArray);
});

console.log(storeArray);
