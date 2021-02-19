//--- Count quantity of vowels in the string ---------

function countVowels(inputString) {
    if (typeof inputString !== 'string') return 0

    const vowelsSet = 'aeiouy'
    let vowelsCount = 0
    for (const c of inputString) {
        if (vowelsSet.includes(c)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

const input = 'Test string'
console.log(countVowels(input))

