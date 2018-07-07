//creating a constructor function, (template, blueprint)
let Store = function(name, location, customers, price, cookiesSold){
    this.name = name;
    this.location = location;
    this.customers = customers;
    this.price = price;
    this.cookiesSold = cookiesSold
    this.getRevenue = function() {
        this.revenue = this.price * this.cookiesSold
    }
};

let storeArray = []
let storeOne = new Store('Chocolate Store', 'Bethesda', 4, 5, 20)
let storeTwo = new Store('Vanilla Store', 'Baltimore', 6)

storeArray.push(storeOne)
storeArray.push(storeTwo)




Store.prototype.price = 10
Store.prototype.revenue = 0

Store.prototype.calRevenue = function() {
    this.revenue = this.customers * this.price
}





