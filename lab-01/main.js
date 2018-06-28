console.log(alert("Let's go"));

//These are the prompts section (pop-ups)
let name = prompt("What's your name?");
let movies = prompt('Do you like movies?');
let coder = prompt('Are you a coder?');
let faveNum = prompt('What is your favorite number?');
let sports = prompt('Do you play sports?');
let born = prompt('Are you born in the United States?');

//The "if" functions section
if(name){
    document.getElementById('name').innerText = name;
}

if(movies){
    document.getElementById('movies').innerText = movies;
}

if(coder){
    document.getElementById('coder').innerText = coder;
}

if(faveNum){
    document.getElementById('faveNum').innerText = faveNum;
}

if(sports){
    document.getElementById('sports').innerText = sports;
}

if(born){
    document.getElementById('born').innerText = born;
}

//This section is where I put my console.log(s)
console.log(name);
console.log(movies);
console.log(coder);
console.log(faveNum); 
console.log(born);

