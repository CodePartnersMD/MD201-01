let blankVar
console.log(blankVar)

let filledVar = 'This is a what?'
console.log(filledVar)

let numVar = 2 + 2
console.log(numVar)

let myArr = ['Harry', 15, true]

for(let i=0; i<myArr.length; i++) {
    console.log(myArr[i])
}
 //
function standardFunc(str) {
    console.log(str)
}

function valFunc(str) {
    return 'this will give you this string' + str
}

standardFunc('a string')

valFunc('another string')
//

let newObj = {
    name: 'Zach',
    age: 33,
    languages: ['javascript', 'html', 'css', 'python']
}
console.log(newObj)

let Student = function(name, age, languages) {
    this.name = name
    this.age = age
    this.languages = languages
}
console.log(Student)

let empty = []

let Brittney = new Student('Brittney', 27, ['javascript', 'html', 'css'])
let Harold = new Student('Harald', 28, ['javascript', 'html', 'css'])

console.log(Brittney, Harold)

empty.push(Brittney, Harold)

console.log(empty)

Harold.name = 'Harold'
console.log(Harold.name)

empty[0].languages.push('java')
console.log(Brittney.languages)




