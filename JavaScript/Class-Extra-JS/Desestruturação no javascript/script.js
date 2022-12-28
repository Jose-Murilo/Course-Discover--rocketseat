// Desestruturar 
// Tirar um valor primitivo ou uma estrutura de dados de dentro de outra estrutura

// *Objeto

// const pessoa = {
//     name: 'Elton',
//     age: 26
// }

// const { name } = pessoa
// const { age } = pessoa

// console.log(name);
// console.log(age);
// console.log(pessoa);


// >>>>>> Renomeando propriedades <<<<<<

// const { name:nomePessoa } = pessoa
// const { age:idade } = pessoa

// console.log(nomePessoa);
// console.log(idade);
// console.log(pessoa);


// >>>>>> Renomeando propriedades (Gerando um erro) <<<<<<

// let idade;

// const pessoa2 = {
//     name: 'Murilo',
//     age: 16
// };

// ({ age:idade } = pessoa2)
// const { name:nomePessoa } = pessoa2

// console.log(nomePessoa);
// console.log(idade);

// >>>>>> OBS <<<<<<

// Para tirar o erro, basta você tirar a palavra const e colocar toda a expressão dentro de parenteses
// O erro de inicialização antes do objeto ocorreu por conta do ";"


// >>>>>> *Array <<<<<<

// const fruits = ["banana", "pera", "uva"];

// const [banana, pera] = fruits
// const [b, p] = fruits
// const [,b, p] = fruits

// console.log(banana);
// console.log(pera);

// console.log(b);
// console.log(p);

// >>>>>> rest and spread (operator) <<<<<<

// const fruits = ["banana", "pera", "uva"];

// const [banana, ...frutas] = fruits

// console.log(banana, frutas); // rest operator

// console.log(...frutas, 'maça'); // spread operator


// >>>>>> Functions (desestruturação com obj) <<<<<<

// function liquidificador({banana, ...frutas}) {
    
//     console.log(banana);
//     console.log(frutas);
// }

// const fruits = {
//     banana: "banana",
//     pera: "pera",
//     uva: "uva"
// }

// liquidificador(fruits)


// >>>>>> Functions (desestruturação com Array) <<<<<<

// function liquidificador([banana, ...rest]) {
    
//     console.log(banana);
//     console.log(rest);
//     console.log(...rest); //spread operator
// }

// liquidificador(['banana', 'melancia', 'maça'])
