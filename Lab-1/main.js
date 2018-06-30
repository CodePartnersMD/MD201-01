//Author:Ishmael Sunday | github.com/okayishmael
//Code 201 Project1 @ Code Partners > https://codepartners.net

let instruction = alert("Hello and welcome to Code 2o1. We need to collect some information (Name, Current City, Gender and confirm if you are a coder) from you before you can access the site.")
let name = prompt("What\'s your name?"); //declare var use prompt to display value in browser and collect user input
if (name != null){
alert("Hi "+ name +"! Please click the \"OK button\" to enter your current city.")}; // using alert function. no input
let origin = prompt(" Enter your current City:"); // prompt, input require
let gender = prompt("Please enter your Gender:");// prompt, input require
let coder = confirm('Finally, please  Click "OK" if you are a coder.'); // declare var confirm to collect user input
console.log(name); // printing place function name in the paranthesis 
console.log(origin); // printing place function name in the paranthesis 
console.log(gender); // printing place function name in the paranthesis 
console.log(coder); // printing place function name in the paranthesis 

// Displaying user's input into the html page.

//Name

if(name){
    document.getElementById('name').innerText = name
} 
// Origin/Current City
if(origin){
    document.getElementById('origin').innerText = origin
} 
//user Gender
if(gender){
    document.getElementById('gender').innerText = gender
} 
//Is user a coder. True or false wil be displyed
if(coder){
    document.getElementById('coder').innerText = coder
};

