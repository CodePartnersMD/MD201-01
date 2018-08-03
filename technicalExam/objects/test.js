const Person = require('./index')

let Zach = new Person('Zach', 33, 'Instructor')
let Patrice = new Person('Patrice', 30, 'Student')


test('newObj should be function', () => {
    expect(typeof newObj).toEqual('function')
})

test('newObj should be Object', () => {
    expect(typeof Zach).toEqual('object')
})

test('Zach should be a new object with properties of name:Zach, age:33, and jobTitle:Instructor', () => {
    expect(Zach).toEqual({name: 'Zach', age: 33, jobTitle: 'Instructor'})
})

test('Patrice.name should be Patrice', () => {
    expect(Patrice.name).toEqual('Patrice')
})

test('Patrice.age should be 30', () => {
    expect(Patrice.age).toEqual(30)
})

test('Patrice.jobTitle should be Student', () => {
    expect(Patrice.jobTitle).toEqual('Student')
})


