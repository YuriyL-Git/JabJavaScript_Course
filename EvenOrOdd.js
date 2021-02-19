//check if number is even or odd

function evenOrOdd(inputNumber) {
    if (!isFinite(inputNumber)) return 'incorrectNumber'
    if (!Number.isInteger(inputNumber)) return 'notInteger'
    if (inputNumber % 2 === 0) return 'even'
    return 'odd'
}

const input = -4
console.log(evenOrOdd(input))