let name= prompt('What\s your name');
name = 'i am ' + name;
console.log(name)

let age= prompt ('How old are you?');
age = age +' years old';
console.log(age);

let continent= prompt('what continent are you from?');
continent = 'from '+ continent;
console.log(continent);

let greetings = confirm(name + age + continent);
console.log(greetings);