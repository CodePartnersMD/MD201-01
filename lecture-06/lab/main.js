let storeOne = {
    name: 'Chocolate Store',
    product : 'chocolate cookies',
    customers: 40,
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

//array of objects
let objArray = [storeOne, storeTwo]

//creating elements
let elBody = document.getElementById('table-container')
let elTable = document.createElement('table')

//setting a class to the new table we just created
elTable.setAttribute('id', 'id-table')

//appending our table to the body
elBody.appendChild(elTable)

//looping through the array of objects 
for(let i = 0; i < objArray.length; i++) {
    let elRow = document.createElement('tr')
    elTable.appendChild(elRow)
    let elTh = document.createElement('th')
    elTh.innerText = objArray[i].name
    elRow.appendChild(elTh)
    let product = document.createElement('td')
    product.innerText = objArray[i].product
    elRow.appendChild(product)
    let location = document.createElement('td')
    location.innerText = objArray[i].location
    elRow.appendChild(location)
    

    // console.log(objArray[i].name)
    // console.log(objArray[i].location)
    // console.log(objArray[i].employees)
    // objArray[i].price = 10
    // objArray[i].revenue = objArray[i].price * objArray[i].customers
    // console.log(objArray[i].revenue)
    // console.log(objArray[i])
}


// storeTwo.hours = '9-5'

// let myBody = document.getElementById('myBody')

// let storeOneTitle = document.createElement('h1')
// myBody.appendChild(storeOneTitle)
// storeOneTitle.setAttribute('class', 'store')
// storeOneTitle.innerText = storeOne.name

// let storeOneLocation = document.createElement('p')
// myBody.appendChild(storeOneLocation)
// storeOneLocation.setAttribute('id', 'store-one-location')
// storeOneLocation.innerText = storeOne.location

// let storeOneCustomers = document.createElement('p')
// myBody.appendChild(storeOneCustomers)
// storeOneCustomers.innerText = `# of customers    ${storeOne.customers} in ${storeOne.location}`
// '# of customers ' + storeOne.customers 






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

