//creating prompts for user to input value and storing those values using console.log
//wrapping Variables into for a given questiion into a function.

let nameIntoFunction = function() { 
let name= prompt('What\s your name');
name =  name;
console.log(name)
return name;
}
let newNameFunction = nameIntoFunction();




let ageIntoFunction = function() {
let age= prompt ('How old are you?');
age = age +' years old';
console.log(age);
return age;
}
let newAgeFunction = ageIntoFunction();



let continentIntoFunction = function(){
let continent= prompt('what continent are you from?');
continent = 'from '+ continent;
console.log(continent);
return continent;
}
let  newContientFuntion =continentIntoFunction();



let greetingsIntoFunction = function(){
let greetings = confirm(name + " " + age + " " +continent);
console.log(greetings);
return greetings;
}
let newGreetingsFunction = greetingsIntoFunction();



//wrapping logic into for a given questiion into a function.
//replacing html with user input

let nameReplacement = function(){
if(name){
    document.getElementById('Name-Of-User').innerText = name
}   
};
nameReplacement();


let ageReplacement = function(){
if(age){
    document.getElementById('Your-Age').innerText = age
}
};
ageReplacement();


let continentReplacement = function() {
if(continent){
    document.getElementById('Birth-Place').innerText = continent
}
};
continentReplacement();




//testing putting values in an array to check if user is a human

let checkingHuman = function() {
let areYouHuman= [ 'like soccer', 'watch soccer','root for Brazil']

//creating a for loop function to check if the use answer affirmatively or negatively to the values in the loop
let emptyArray = []
let myResponse;

for(var i = 0; i<areYouHuman.length;i++) {
    myResponse = confirm(name + ", " + "do you "+ areYouHuman[i] + "?")   
    emptyArray.push(myResponse)  
    };
console.log(emptyArray);
//inserting an "if and else" statement to confirm that the user is human based on his/her answers

if(emptyArray[0]==true && emptyArray[1] == true && emptyArray[2]== true ){
    alert('Welcome my fellow human')
} else {
    alert('I\'m sorry, I can\'t verify your humaneness')
}
};
checkingHuman();



/*Ask Zach to show the counter loop in Javascript

let count = 0; 

for(let 1 =0; 1 < areYouHuman.length; i++) {
    checkHuman = confirm( 'Do you" + 'likr soccer)
    if (checkHuman)  {
        count++
    }
}if (count= areYouHuman.length) {
    alert('Welcome Human')
} else {
    alert ('I'm sorry, I can't verify your humaneness)
}
