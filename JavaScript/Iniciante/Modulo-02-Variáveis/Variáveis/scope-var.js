// Scope

// vamos iniciar um bloco
{ 
    // var x = 0
    // console.log(x)
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco



// Var 
// O var é global e poderá funcionar fora de um escopo de um bloco 

// Global é tudo do script, ou seja, tudo que está sendo execultado no script é global é o escopo invisivel ou seja o script todo.

// Local é um certo scopo ou seja o scopo visivel ex:
{
    // var x = 2
    // console.log(x)
}

// var é global e, também local.
// hosting: É como se o var estivesse no scopo e como ele é global meio que existe um var antes do escopo e ele vai pra pré setar antes pois ele é global ex:

// var x
// console.log('> existe x antes do bloco?', x)

{
    // var x = 0
    // x = 0
}

// console.log('> existe x depois do bloco?', x)


// Let e Const


// {
    // let y = 0
    // console.log('> existe y', y)
// }


// console.log('> existe y depois do bloco?', y)

// let y = 1
// {
//     let y = 0
//     console.log('> existe y', y)
// }

// console.log('> existe y depois do bloco?', y) // Ira da certo, pois está no mesmo scopo do y lá de cima



// let y = 1
// {
//     y = 0
//     console.log('> existe y', y)
// }

// console.log('> existe y depois do bloco?', y) // Ira atualizar para 0, pois ele não está especificando uma variável dentro do scopo acima, ele está apenas atualizando e pegando o valor da variável de cima, não reservando.

// Const

// const y = 1
// {
//     y = 0 // Não irá funcionar, pois a variável está constante
//     console.log('> existe y', y)
// }

// console.log('> existe y depois do bloco?', y)


// const y = 1
{
//    const y = 0 // irá funcionar, pois a variável está setada em um outro escopo não no mesmo do de cima
    // console.log('> existe y', y)
}

// console.log('> existe y depois do bloco?', y)

