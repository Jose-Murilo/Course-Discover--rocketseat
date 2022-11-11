// Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

// function scope

let subject = "Video"

function createThink(subject) {
    subject = "Olá"
    return subject
}
console.log(subject)
console.log(createThink())
console.log(subject)

// Quando eu não estou definindo que eu irei trabalhar com a variável dentro da função, ela irá somente reatribuir, basicamente. Mas se você colocar a passar o parametro dentro da função, no caso a variável, você está dizendo que vai trabalhar com aquela variavel na aquele determinado escopo de bloco