//Write a function that returns middle caracter or characters for the string

// function getMiddleCharacter(inputString) {
//     if (typeof inputString != 'string') return 'error'
//
//     let middle = Math.ceil(inputString.length / 2)
//     let index = 1 - inputString.length % 2
//     return inputString.slice(middle-1, middle + index)
//
// }

function getMiddleCharacter(inputStr) {
    if (typeof inputStr != 'string') throw new Error
    if (inputStr === '') return ''

    const middle = Math.floor(inputStr.length / 2)
    if (inputStr.length % 2 === 0) {
        return inputStr.slice(middle - 1, middle + 1)
    }
    return inputStr[middle]
}


const input = '123'
console.log(getMiddleCharacter(input))