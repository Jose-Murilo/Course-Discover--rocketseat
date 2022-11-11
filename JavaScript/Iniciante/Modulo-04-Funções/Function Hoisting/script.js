//O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

// function hoisting

console.log(sayMyName());

function sayMyName() {
    let nome = 'Murilo'
    return nome;
}


// Dessa forma ela faz o hoisting ou seja elevação.


// Já dessa forma:

// sayMyName();

// const sayMyName = function() {
//     console.log('Murilo')
// }

// Se chamar primeiro a função ele irá da problema, porque dessa maneira elá não vai fazer o hoisting nem com o var.

// Já assim ela irá funcionar:


// const sayMyName = function() {
//     console.log('Murilo')
// }
// sayMyName();