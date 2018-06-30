
let captchaArray = ["CC25l", "DDeF9", "qRSTu9", "55JjK", "TTl09", "66iUJ", "rSTU8", "Pgh2m", "Wfz5m", "werP8", "98EezJ","ZzYu6"];
let captcha = captchaArray[Math.floor(Math.random() * captchaArray.length)];

alert("We would appreciate if you can take this survey"); 
let captchaResponse = prompt("Let's check you are a human. Please type this below: " + captcha);

if (captcha == captchaResponse){

    let name = prompt("What\'s your name?");
    let origin = prompt("Thanks, " + name + ". Where are you from?");
    console.log(name);
    console.log(origin)

    let malariaCountries = prompt(name + ", can you tell me where malaria is so common?");

    malariaCountries = ["Afghanistan", "Nigeria", "Uganda"];

    for (let i=0; i<malariaCountries.length; i++) {

    confirm("Is " +malariaCountries[i]+ " one of the malaria countries?");
    console.log(malariaCountries)

    };

}

else{
    let notHuman = alert("please reload the page and try again.");
    console.log(notHuman)
};

let healthStat = ("Afghanistan has one physician for every 3,750 people")

if(healthStat) {
    document.getElementById("malaria-stat").innerText = healthStat
    console.log(healthstat)

};
