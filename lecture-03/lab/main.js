let myArray = ['like soccer', 'watch soccer', 'root for Brazil']
let emptyArray = []
let checkHuman

for(let i = 0; i < myArray.length; i++) {
    checkHuman = confirm('Do you ' + myArray[i])
    if(checkHuman) {
        emptyArray.push(myArray[i])
    }
}

if (myArray.length === emptyArray.length) {
    alert('welcome Human')
} else {
    alert('sorry robot!')
}

let count = 0

for(let i = 0; i < myArray.length; i++) {
    checkHuman = confirm('Do you ' + myArray[i])
    if(checkHuman) {
        count++
    }
}

if(count === myArray.length) {
    alert('hello human')
} else {
    alert('sorry robot')
}