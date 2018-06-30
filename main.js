let name = prompt("What\'s your name?");
console.log(name);
let human = ['AhO42', 'Gkr6p', 'TtQy5', 'SjvL2'];
let random = Math.floor(Math.random() * 3);
let test = human[random];
let humanCheck = prompt('Type in the following word to prove you are human ' + name + " : " + test)
let greeting = confirm("Hi " + name + " nice to meet you" );
let resident = confirm("Are you a lawful resident of US " + name +"?");
let date = prompt("When did you enter to US " + name + "?");
let myLocation = prompt("Which airport did you use it, when you enter to Us on " + date +" "+ name + " ?");
console.log(greeting);
console.log(resident);
console.log(date);
console.log(myLocation);
console.log(alert("Let\'s go " + name));
let myArray= [' White', 'Hispanic or Latino', 'African-American' ,'East Asia']
let captcha = prompt('Please write your race ' + myArray)

var country = ["Iran" , "Canada" , "Egipt"]
for (var i=0; i< country.length ; i++){
    confirm ("Is your country? " + country[i]);
}
if(name != null){
    document.getElementById('name').innerText = name
}
