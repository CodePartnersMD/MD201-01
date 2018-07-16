//creating a constructor function, (template, blueprint)
let Wizard = function(name, age, house, pet) {
    this.name = name;
    this.age = age;
    this.house = house;
    this.pet = pet;
}

//creating an array of class names that will act as my Table header and which I will iterate through to create values for each Wizard
let classArray = ['Dark Magic', 'Potions', 'Astronomy', 'Beasts and Creatures']

//creating an empty array that will contain my new wizards that I create
let wizardArray = []

//creating new instances of the Wizard object
let wizardOne = new Wizard('Harry', 15, 'Gryffindor', 'Toad')
let wizardTwo = new Wizard('Ron', 15, 'Gryffindor', 'Owl')

//pushing my new wizards into the wizard array
wizardArray.push(wizardOne)
wizardArray.push(wizardTwo)

//finding the body in HTML by ID
let myBody = document.getElementById('main-content')
//creating a new table
let newTable = document.createElement('table')
//apending the table to the body
myBody.appendChild(newTable)

//looping through the wizard array to populate a row for each wizard that has been created
for(let i=0; i < wizardArray.length; i++) {
    let newRow = document.createElement('tr')
    newTable.appendChild(newRow)
    let newTh = document.createElement('th')
    newRow.appendChild(newTh)
    newTh.textContent = wizardArray[i].name
    //looping through the class array and generating a random number then displaying that number in a new Td
    for(let j=0; j < classArray.length; j++) {
        let sortingNumber = Math.floor(Math.random() * 10)
        let newTd = document.createElement('td')
        newRow.appendChild(newTd)
        newTd.textContent = sortingNumber
    }
}


let form = document.getElementById('hogwarts-form')

let footer = document.createElement('tr')
let total = document.createElement('th')
footer.appendChild(total)

let userText = form.wizardName
let userNumber = form.wizardAge
let userSelect = form.wizardHouse
let userRadio = form.wizardPet

function renderWizards() {
    let newRow = document.createElement('tr')
    newTable.appendChild(newRow)
    let newTh = document.createElement('th')
    newRow.appendChild(newTh)
    newTh.textContent = wizardArray[wizardArray.length - 1].name
}


function addAges() {
    let age = 0
    for(let i = 0; i < wizardArray.length; i++) {
        age += parseInt(wizardArray[i].age)
    }
    return age

}

function renderAges() {
    let wizardRows = document.getElementsByClassName('wizardRow')
    age = addAges()
    newTable.appendChild(footer)
    total.textContent = age
}

function submitHandler(event) {
    event.preventDefault()
    let newWizard = new Wizard(userText.value, userNumber.value, userSelect.value, userRadio.value)
    wizardArray.push(newWizard)
    renderWizards()
    renderAges()
}

form.addEventListener('submit', submitHandler)









