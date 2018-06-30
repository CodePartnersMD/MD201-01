// JS Code for Dan's Test Site

let firstName = prompt("Hello welcome to my site, what\'s your first name?");
    console.log (" User's First Name = " + firstName)
    document.getElementById('firstName').innerHTML = firstName;

let lastName = prompt('What\'s your last name?')
    console.log (" User's Last Name = " + lastName)
    document.getElementById('lastName').innerHTML = lastName;

let age = prompt('How old are you? ')
    console.log (" User Age = " + age)
    document.getElementById('age').innerHTML = age;

let origin = prompt('Where are you from?')
    console.log (" User's hometown or origin = " + origin)
    document.getElementById('origin').innerHTML = origin;

let favColor = prompt ('What is your favorite color? ')
    console.log (" User's favorite color = " + favColor)
    document.getElementById('favColor').innerHTML = favColor;

let freeTime = prompt('What do you enjoy doing in your free time? ')
    console.log (" User's free time activity = " + freeTime)
    document.getElementById('freeTime').innerHTML = freeTime;

let confirm = alert('Hello ' + firstName + lastName + ' from ' + origin + ' that is ' + age + ' years old ' +  'I like the color ' + favColor + ' too\. It\'s pretty cool that you like to ' + freeTime)
    console.log ('Concatenates Users input =' + confirm)
