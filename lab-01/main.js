
let firstName = prompt("Enter your first name", "First Name");

let lastName = prompt("Enter your last name", "Last Name");

let sex = prompt("Enter your sex");
let mSex = "Male";
let fSex = "Female";

let age = prompt("Enter your age", "Year");


console.log(firstName);
console.log(lastName);
console.log(age);

if (sex === "Male"){
    let nextStepMale = confirm("Welcome Mr. " + firstName);
    console.log(nextStepMale);
} else {
    let nextStepFemale = confirm("Welcome Ms. " + firstName);
    console.log(nextStepFemale)
};

if(firstName){
    document.getElementById('Name-of-the-candidate').innerText = "Welcome "+ firstName
}

if(age){
    document.getElementById('Age-of-the-candidate').innerText = firstName + " was born in " + age
}

let game = confirm("Do you want to play a game?");

alert("Which Famous Dictator I am?");
console.log ("Which Famous Dictator I am");

alert("This game allows you to find out which famous dictator had the same character traits as you. The bad guy you would had been if you were born in the same historical context");

let backgroundInformation = function(){
    let placeOfBirth = prompt("Where is your place of birth?", "Country");
    let college = prompt("Which college did you attend?");
    let fieldOfStudy = prompt("What is your field of study?");
    let profession = prompt("What is your profession?");
    
    console.log(placeOfBirth)
    console.log(college)
    console.log(fieldOfStudy)
    console.log(profession)
    }
    backgroundInformation();

alert ("Congratulations, " + firstName + ", you successfully passed the first step of the game: 1/2")

let secondStep = confirm("Do you want to continue? ")
console.log (secondStep)

let characterTraits = function(){
    let lovePeople = confirm("Do you love people? ")
    let leader = confirm("Do you consider yourself to be a leader? ")
    let analyticalThinker = confirm ("Are you an analytical thinker?")
    let loveArt = confirm ("Do you love Art? ")

    console.log (lovePeople)
    console.log (leader)
    console.log (analyticalThinker)
    console.log (loveArt)

}

characterTraits();

if (characterTraits === true){
    alert("You have the some character traits as these famous dictators: 'Hitler', 'Mussolini', 'Stalin', 'Mao', 'Pinochet'")
} else{
    alert("You have the some character traits as these famous dictators: ''Hitler', 'Mussolini', 'Stalin', 'Hussein', 'Mao', 'Pinochet'")
}

alert ("Thank you, " + firstName + "! ")
