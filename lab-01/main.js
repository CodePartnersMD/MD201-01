// This code includes everything uploaded to gh-pages, not what was on the origin branch that was originally cloned -hw

let captchaArray = ["erFY4", "br9kl", "qwbM7", "DejK8", "CDxz8", "wefk3", "qwkl8", "Pgh2m", "Wfz5m", "Tgh3M"];
let captcha = captchaArray[Math.floor(Math.random() * captchaArray.length)];

alert("Hi!"); 
let captchaResponse = prompt("First, let's make sure you're human. Please type the following (case sensitive): " + captcha);

let nameFunction = function() {
    return prompt("What's your name?");
}

let colorFunction = function() {
    return prompt("What's your favorite color?");
}

let animalFunction = function() {
    return prompt("What's your favorite animal?");
}

let bandFunction = function() {
    return prompt("What's your favorite band?");
}

if (captcha == captchaResponse)
{
    //Brittany's updated code for NAME that is wrapped in a function
    let name = nameFunction()
    console.log(name)
    
    //Brittany's original code (does not include functions)
    //let name = prompt("What's your name?");
    //console.log(name);
    
    //Brittany's updated code for COLOR that is wrapped in a function
    let color = colorFunction()
    console.log(color)
    
    //Brittany's original code (does not include functions)
    //let faveColor = prompt("What's your favorite color?");
    //console.log(prompt);
    
    //Brittany's updated code for ANIMAL that is wrapped in a function
    let animal = animalFunction()
    console.log(animal)

    //Brittany's original code (does not include functions)
    //let faveAnimal = prompt("What's your favorite animal?"); 
    //console.log(faveAnimal);

    //Brittany's updated code for BAND that is wrapped in a function
    let band = bandFunction()
    console.log(band)

    //Brittany's original code (does not include functions)
    //let faveBand = prompt("What's your favorite band?");
    //console.log(faveBand);


    confirm("Hi, "+ name + "! It's nice to meet you. My favorite color is " + color + " too. But I'm allergic to " + animal + "s. Did you hear that " + band + " is in town next week?");
    alert("What are your top three favorite movies?")
    let firstMovie = prompt("First favorite movie");
    console.log(firstMovie);
    let secondMovie = prompt("Second favorite movie");
    console.log(secondMovie);
    let thirdMovie = prompt("Third favorite movie");
    console.log(thirdMovie);
    confirm("Oh, I love " + firstMovie + "! But I haven't seen " + secondMovie + " or " + thirdMovie + " though.");

    if(name){
        document.getElementById('name').innerText = name
    }
    
    if(faveColor){
        document.getElementById('faveColor').innerText = faveColor
    }
    
    if(faveAnimal){
        document.getElementById('faveAnimal').innerText = faveAnimal
    }
    
    if(faveBand){
        document.getElementById('faveBand').innerText = faveBand
    }
    
    if(firstMovie){
        document.getElementById('firstMovie').innerText = firstMovie
    }
    
    if(secondMovie){
        document.getElementById('secondMovie').innerText = secondMovie
    }
    
    if(thirdMovie){
        document.getElementById('thirdMovie').innerText = thirdMovie
    }
}

else{
    let err = confirm("Sorry, incorrect response. Please reload the page.")
}
