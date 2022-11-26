// const sum = function() >> Chamada de função anônima
// Function expression
// function anonymous


// Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

// parâmetros (parameters)
const sum = function(number1, number2) {
    let total = (number1 + number2)
    return total
}


let num1 = 25;
let num2 = 40 

sum(num1, num2)

console.log(`o número 1 é ${num1}`)
console.log(`o número 2 é ${num2}`)
console.log(`a soma é ${sum(num1, num2)}`)
