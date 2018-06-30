console.log(alert("Let\'s go"));

// CAPTCHA test
// hi

let tchalla = prompt('To verify you are a human, please enter "tchalla" in the box.') ;
console.log("tchalla first ask: " + tchalla)
while (tchalla != "tchalla") {
    tchalla = prompt('To verify you are a human, please enter "tchalla" in the box.')
    console.log("tchalla while loop ask: " + tchalla)
}

/*if (tchalla = "tchalla") {
    console.log(alert("Ok, terrific! Let\'s go!")) ; 
} else {
    while (tchalla != "tchalla") {
    tchalla = prompt('To verify you are a human, please enter "tchalla" in the box.') ;
    }
}*/

// create a function to store the scope of (i) creating an array, and (ii) the values assigned to the array, to facilitate accessing those values so the program can concatenate a string at the end of the function 
// NOTE: this (above) turned out to be unnecessary. the original errors that i was running into was because i used multiple let statements, and you CANNOT declare a variable multiple times.  The fix was to eliminate the the let statements, and just have aboutUser[x] = (reassigning the value)

// Create an array to hold--what was previously--the separate variables name, origin, coder, and months

let aboutUser = ["name", "origin", "coder", "months", "why", "nickname"] ;

// Populate the array using four var statements that correspond to name, origin, coder, and months

aboutUser[0] = prompt("What\'s your name?") ;
console.log("User name: " + aboutUser[0])

/* aboutUser[5] = prompt("Cool " + aboutUser[0] + ". What about a nickname?") ;
console.log("User nickname: " + aboutUser[5]) 
i was going to add a nickname prompt*/

aboutUser[1] = prompt("Hi " + aboutUser[0] + ". Where are you from?") ;
console.log("User origin: " + aboutUser[1])

let continny = confirm(aboutUser[0] + " to continue please press OK.") ;

aboutUser[2] = prompt("What type of coder do you want to be?") ;
console.log("User type of coder becoming: " + aboutUser[2])

aboutUser[3] = prompt("In how many months do you want to be a " + aboutUser[2] + " by?") ;
console.log("User desired months to become " + aboutUser[2] + ": " + aboutUser[3])

// concatenate a string using the four values stored in the area and display it as a msg in a JavaScript box

let msgtoyou = alert("Keep up the good work " + aboutUser[0] + " from " + aboutUser[1] + ", you will be a " + aboutUser[2] + " in " + aboutUser[3] + " months if you work hard.") ;

// just when you thought it was over ... one more !!!
// additional insight: for a nice stretch goal, learn to create a custom alert box, because as it stands now, you cannot make the "why" italicized (or bold) since it isn't rendered in HTML

aboutUser[4] = prompt("Before we go, one more question " + aboutUser[0] + ", why do you want to become a " +aboutUser[2] + "?")
console.log("First ask of Why: ", aboutUser[4])

// this is an if-then-else statement, taking the answer to the final Why question. please notice the condition! Originally, this line wasn't working properly for a few reasons: (i) i wasn't using a strict check, which it needs ===, i was using = which is to assign; also, (ii) i had the "WOW..." alert as the if statement when it should have been the else statement.

if (aboutUser[4] === "") {
    alert("I don't see a why.  A clear why can be a powerful aid when things get tough.")
} else {
    alert("WOW, " + aboutUser[0] + " that's a tremendous why.  Keep that in mind and good luck!")
}

/* A simpler way may be to check the length. Remember, strings are array-like objects. So to check the length of the string, use the code below.

if (aboutUser[4].length === 0) {
    alert("I don't see a why.  A clear why can be a powerful aid when things get tough.")
} else {
    alert("WOW, " + aboutUser[0] + " that's a tremendous why.  Keep that in mind and good luck!")
} */


// This is how we are getting the information from JavaScript question boxes back onto the index.html page

if (aboutUser[0] != null) {
    document.getElementById('userName').innerText = aboutUser[0]
}
if (aboutUser[1] != null) {
    document.getElementById('userOrigin').innerText = aboutUser[1]
}
if (aboutUser[2] != null) {
    document.getElementById('userCoder').innerText = aboutUser[2] 
}
if (aboutUser[4] != null) {
    document.getElementById('userWhy').innerText = aboutUser[4] 
}
/*if (aboutUser[5] != null) {
    document.getElementById('userWhy').innerText = aboutUser[5] 
} 
this was to go with the nickname prompt */


/* June 28, 2018 note - Below is the prior iteration of code with separate variables
let name = prompt("What\'s your name");
console.log(name)

let origin = prompt("Hi " + name + ". Where are you from?")
console.log(origin)
let continny = confirm(name + " to continue please press OK.")
let coder = prompt("What type of coder do you want to be?")
console.log(coder)
let months = prompt("In how many months do you want to be a " + coder + " by?")
console.log(months)
let msgtoyou = alert("Keep up the good work " + name + " from " + origin + ", you will be a " + coder + " in " + months + " months IF you work hard.")


if (name != null) {
    document.getElementById('userName').innerText = name 
}
// or document.getElementByID('blue').innerHTML

if (origin != null) {
    document.getElementById('userOrigin').innerText = origin 
}
if (coder != null) {
    document.getElementById('userCoder').innerText = coder 
}*/



// Beginnings of a personal stretch goal #1: Store the data entered by the user in an array
//let spitBack = [name, origin, coder]
// Beginnings of a personal stretch goal #2: A guessing game that the end user tries to guess a random integer between 1 and 10 generated by the computer 
// Code Needed:
// 1. Generate a random integer
// 2. Ask the user for their guess
// 3. If the guess >= 1 && guess <= 10 then proceed
// 3a. If the guess != parameters, pop-up alert & go back to Step 2
// 4. Store guess and return guess alert "You guessed x"
// 5. If guess = random integer, then "Yup! Good job!"
// 5a. If guess != random integer, "Nope, guess again. Your guess is too (high/low).
// >>>>>>> Not sure at all how to let them know the guess is too high or too low
//***end comments from June 27, 2018 ***/
// 
//Initial stab at the above (with prelude confirm box)
//let gameIntro = confirm("Before you go, let\'s play a game. Press OK to begin.")
//     if gameIntro = false then { ;
//         alert("Come on. Don't go. One game. Please") ;
//     }
// let number = prompt("What\'s my favorite integer? To make it easier, it's between 1 and 10.")
//         if number < 1 || number < 10 then {
//             alert("Come on, that's not even a proper guess! Between 1 and 10!")
//         }