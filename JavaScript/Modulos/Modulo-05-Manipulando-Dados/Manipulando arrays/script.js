// Manipulando Arrays

// Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

let techs = ["html", "css", "javascript"]


// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
// console.log(techs.slice(2, 3)) //primeiro argumento posição começando do index 0 e o outro argumento é a posição do lenght ou seja, a posição real

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2) // primeiro argumento vai a posição do array, no segundo argumento vai quantos você quer apagar depois do selecionado

// encontrar a posição de um elemento no array
// let index = techs.indexOf("javascript") // Saber posição aonde se encontra no array
// techs.splice(index, 1) 
// console.log(index)

console.log(techs)