//capitalize every word in input string

function capitalizeStr(input) {

}

const tests = []

tests[0] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet, autem doloremque dolorum' +
    ' expedita facere, minima molestiae nesciunt nihil numquam pariatur porro quasi quibusdam reprehenderit sequi sint sunt tempore unde?'

tests[1] = ''

tests[2] = 5

tests[3] = 'a'

tests[4] = 'a B'

tests.forEach(t => console.log(capitalizeStr(t)))
