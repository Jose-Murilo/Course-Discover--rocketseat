// Manipulando String e Números

//Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// Quando uma função é atrelada ao objeto ex: .toFixed() chama-se de método também.

let number = 235.2663
console.log(number.toFixed(2).replace(".", ","))

// .toFixed() é um método vai definir quantas casas decimais depois do ponto

// .replace vai trocar o (. por ,) e ele vai transformar em "string"