 let name = prompt("what is your name?");
 let country = prompt("What is your orgin?");
 let age = prompt("how old are you?");
 let food = prompt("what is your fravorite food?");
let language = prompt("What languages do you speak?");

let myArray = ['soccer', 'basketball', 'lakers'];
let emptyArray = [];
let checkHuman;

for(let i = 0; i < myArray.length; i++) {
   checkHuman = confirm('Do you play ' + myArray[i]);
   if(checkHuman) {
       emptyArray.push(myArray[i]);
   }
}

if(myArray === emptyArray) {
   alert('Welcome Human');
}

if(name){
    document.getElementById('userName').innerText = name;
}




console.log(name);
console.log(country);
console.log(age);
console.log(food);
console.log(language); 