
//creating a constructor function, (template, blueprint)
let Store = function(name, location, customers){
    this.name = name;
    this.location = location;
    this.customers = customers;
};

let storeArray = []
let storeOne = new Store('Chocolate Store', 'Bethesda', 4)
let storeTwo = new Store('Vanilla Store', 'Baltimore', 6)

storeArray.push(storeOne)
storeArray.push(storeTwo)




Store.prototype.price = 10;
Store.prototype.revenue =(storeTwo)

Store.prototype.revenue = function (){
    console.log(this.consumers * this.price);
}

console.log(storeArray)
