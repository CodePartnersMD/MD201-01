let captchaArray = ["erFY4", "br9kl", "qwbM7", "DejK8", "CDxz8", "wefk3", "qwkl8", "Pgh2m", "Wfz5m", "Tgh3M"];
let captcha = captchaArray[Math.floor(Math.random() * captchaArray.length)];

alert("Hi!"); 
let captchaResponse = prompt("First, let's make sure you're human. Please type the following (case sensitive): " + captcha);

if (captcha == captchaResponse)
{
    let name = prompt("What's your name?");
    console.log(name);
    let faveColor = prompt("What's your favorite color?");
    console.log(prompt);
    let faveAnimal = prompt("What's your favorite animal?"); 
    console.log(faveAnimal);
    let faveBand = prompt("What's your favorite band?");
    console.log(faveBand);
    confirm("Hi, "+ name + "! It's nice to meet you. My favorite color is " + faveColor + " too. But I'm allergic to " + faveAnimal + "s. Did you hear that " + faveBand + " is in town next week?");
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

