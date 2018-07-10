//creating a constructor function, (template, blueprint)
let Wizard = function(name, age, house, pet) {
    this.name = name;
    this.age = age;
    this.house = house;
    this.pet = pet;
}

let wizardArray = []

let myBody = document.getElementById('main-content')
let newTable = document.createElement('table')
myBody.appendChild(newTable)


let form = document.getElementById('hogwarts-form')

let footer = document.createElement('div')

let userText = form.wizardName
let userNumber = form.wizardAge
let userSelect = form.wizardHouse
let userRadio = form.wizardPet

let age = 0


function renderWizards() {
    let newRow = document.createElement('tr')
    newRow.setAttribute('class', 'wizardRow')
    newTable.appendChild(newRow)
    let newTh = document.createElement('th')
    newRow.appendChild(newTh)
    newTh.textContent = wizardArray[wizardArray.length - 1].name
}

function addAges() {
    for(let i = 0; i < wizardArray.length; i++) {
        age += parseInt(wizardArray[i].age)
    }

}

function renderAges() {
    let wizardRows = document.getElementsByClassName('wizardRow')
    // let newFooter = document.createElement('th')
    // console.log(wizardRows)
    wizardRows[wizardRows.length - 1].appendChild(footer)
    footer.textContent = age
}

function submitHandler(event) {
    event.preventDefault()
    let newWizard = new Wizard(userText.value, userNumber.value, userSelect.value, userRadio.value)
    wizardArray.push(newWizard)
    addAges()
    console.log(wizardArray)
    renderWizards()
    console.log(age)
    renderAges()
}

form.addEventListener('submit', submitHandler)








