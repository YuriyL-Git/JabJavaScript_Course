//create accum function
// accum('abcd') returns 'A-Bb-Ccc-Dddd'
//accum('RqaEz') returns 'R-Qq-Aaa-Eeee-Zzzzz'
//accum('p') returns 'P'

function accum(input) {
    if (typeof input !== 'string') return 'incorrect string!'
    let output = ''

    for (let i = 0; i < input.length; i++) {
        output += input[i].toUpperCase() + input[i].toLowerCase().repeat(i) + '-'
    }

    return output.slice(0,output.length-1)
}



const test = 'RqaE'
console.log(accum(test))