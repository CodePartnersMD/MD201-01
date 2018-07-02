//# Technical Requirements

//xxx - You may do the work in the same HTML file that we used for our class demo today. Because the originals from class are saved in the class GitHub repo, there is no worry in overwriting them or need for saving an unnecessary extra copy.
//xxx - Using a total of four JavaScript 'prompt' or 'confirm' statements along the lines of our class demo from today, have a user answer four questions.
//xxx - The user's response to each question (input) should be stored in a separate variable. Name your variables carefully.
//XXX - Using these responses, return an alert to the user (output) that concatenates their response into some kind of reply like we did in class.
//XXX- Strive to have your alert for each question utilize the responses to all of the prior questions such that by the fourth question, your response would look something like, "Greetings, *Iggy* from *Ipanema*, I also like to eat *bananas* while on vacation in *Paris*."
// XXX- Be creative and have fun with your questions/responses! They can be whatever you want so long as the input/output requirements are met.
// XXX- In addition, for each response, create a console.log() message that indicates the nature of the question and the user's response, as we did in class.
// - In the HTML portion of the file, place the four questions within a series of <p> tags so that they are listed on the screen.
// - If there are any lingering issues with the setup or functionality of your laptop and the software installations, we need to individually address that right away.

let firstName = prompt("Hello, what\'s your first name?");
    console.log (" User's First Name = " + firstName)

let lastName = prompt('What\'s your last name?')
    console.log (" User's Last Name = " + lastName)

let origin = prompt('Where are you from?')
    console.log (" User's hometown or origin = " + origin)

let favFood = prompt('What is your favorite food?')
    console.log (" User's favorite food = " + favFood)

let confirm = alert('Hello ' + firstName + lastName + ' from ' + origin + ' I like ' + favFood + ' too ')
    console.log ('Concatenates Users input =' + confirm)



