//Capitalize first letter of every word in the string:

function capitalizeString(input) {
    if (typeof input !== 'string') return 'Incorrect string!'

    let output = ''
    let previousIsSpace = true

    for (let s of input) {
        if (previousIsSpace) s = s.toUpperCase()
        s === ' ' ? previousIsSpace = true : previousIsSpace = false
        output = output + s
    }
    return output
}



// --- Tests -----

const tests = []

tests[0] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet, autem doloremque dolorum' +
    ' expedita facere, minima molestiae nesciunt nihil numquam pariatur porro quasi quibusdam reprehenderit sequi sint sunt tempore unde?'

tests[1] = ''

tests[2] = 5

tests[3] = 'a'

tests[4] = 'a B'

tests[5] = ' a aab  ff'


tests.forEach(t => console.log(capitalizeString(t)))
