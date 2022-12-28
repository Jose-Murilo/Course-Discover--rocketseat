// Promise

/*
* Promise
*
* A promessa de que algo irá acontecer
* Poderá dar certou ou errado
* mas irá acontecer

*/

// console.log('Pedindo uber');

// let pedido = false
// const promessa = new Promise((resolve, reject) => {

//     if (pedido) {
//         return resolve('Pedido aceito!')
//     }

//     return reject('Pedido negado!')
// })

// promessa
//  .then(result =>  console.log(result))
//  .catch(erro => console.log(erro))
//  .finally(() => console.log('Promessa terminada'))
//  console.log('Aguardando resposta');



// Eu fazendo com uma API!
console.log('Pedindo usuarios');

let pedido = true
const promessa = new Promise((resolve, reject) => {

    if (pedido) {
        return resolve(fetch('https://jsonplaceholder.typicode.com/users'))
    }

    return reject('Pedido de usuarios negado')
})

console.log('Aguardando pedido');

promessa
 .then(res => res.json())
 .then(person => console.log(person[0].name))
 .catch((erro) => console.log(erro))
 .finally(() => console.log('Promessa finalizada'))