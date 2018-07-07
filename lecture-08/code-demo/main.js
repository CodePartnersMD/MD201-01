//creating a constructor function, (template, blueprint)
let Wizard = function(name, age, house, pet) {
    this.name = name;
    this.age = age;
    this.house = house;
    this.pet = pet;
}

let wizardArray = []

let form = document.getElementById('hogwarts-form')

let userText = form.wizardName
let userNumber = form.wizardAge
let userSelect = form.wizardHouse
let userRadio = form.wizardPet

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let newWizard = new Wizard(userText.value, userNumber.value, userSelect.value, userRadio.value)
    wizardArray.push(newWizard)
    
    console.log(wizardArray)
})





