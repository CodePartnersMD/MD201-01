const testFunc = require('./testFunc')
const strFunc = require('./strFunc')
const ifElse = require('./ifElse')

test('testFunc should be function', () => {
    expect(typeof testFunc).toEqual('function')
})

test('should evaluate to 4', () => {
    expect(testFunc(2)).toEqual(4)
})

test('should evaluate to 7', () => {
    expect(testFunc(5)).toEqual(7)
})

test('should evaluate to 4', () => {
    expect(testFunc(10)).toEqual(12)
})

test('strFunc should be function', () => {
    expect(typeof strFunc).toEqual('function')
})

test('strFunc should be a string', () => {
    expect(typeof strFunc('This is', 'a string')).toEqual('string')
})

test('should evaluate to "You Rock"', () => {
    expect(strFunc('You', 'Rock')).toEqual('You Rock')
})

test('ifElse should be a funcion', () => {
    expect(typeof ifElse).toEqual('function')
})

test('ifElse should return true', () => {
    expect(ifElse(11)).toBeTruthy()
})

test('ifElse should return false', () => {
    expect(ifElse(9)).toBeFalsy()
})