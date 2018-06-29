let name = prompt("what is your name?");
let country = prompt("What is your orgin?");
let age = prompt("how old are you?");
let food = prompt("what is your fravorite food?");
let language = prompt("What languages do you speak?");

if(name){
    document.getElementById('userName').innerText = name;

console.log(name);
console.log(country);
console.log(age);
console.log(food);
console.log(language);

var questions = [
    ['Do you like Pizza', 'Yes']
];

var input = document.getElementById("user_input").value;
if (input.toLowerCase() == questions[i][1].toLowerCase()) {
    
}