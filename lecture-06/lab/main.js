let storeOne = {
    name: 'Chocolate Store',
    product : 'chocolate cookies',
    customers: 200,
    employees: 3,
    location: 'Bethesda',
    createCustomer: function() {
        this.customers += 100
    }
}

let storeTwo = {
    name: 'Vanilla Store',
    product : 'vanilla cookies',
    customers: 200,
    employees: 10,
    location: 'Baltimore',
    getProduct: function() {
        console.log(this.product)
    }
}

let myBody = document.getElementById('myBody')

let storeOneTitle = document.createElement('h1')
myBody.appendChild(storeOneTitle)
storeOneTitle.setAttribute('class', 'store')
storeOneTitle.innerText = storeOne.name

let storeOneLocation = document.createElement('p')
myBody.appendChild(storeOneLocation)
storeOneLocation.setAttribute('id', 'store-one-location')
storeOneLocation.innerText = storeOne.location

let storeOneCustomers = document.createElement('p')
myBody.appendChild(storeOneCustomers)
storeOneCustomers.innerText = `# of customers    ${storeOne.customers} in ${storeOne.location}`
'# of customers ' + storeOne.customers 




// let heading = document.createElement('h1')
// heading.setAttribute('class', 'newClass')
// myBody.appendChild(heading)
// heading.textContent = 'Heading'

// console.log(heading)

// let elClass = document.getElementsByClassName('myClass') 
// for(let i = 0; i < elClass.length; i++) {
//     elClass[i].textContent = 'Hello Again'
// }

// console.log(elClass)

// let elId = document.getElementById('myId')
// elId.innerText = 'Hello world'

