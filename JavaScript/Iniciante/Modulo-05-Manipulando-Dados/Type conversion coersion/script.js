// Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5) // Type coersion: é quando o JS faz a conversão padrão para que o programa não dê erro, por exemplo no console vai dar 95 por que? Porque ele vai meio que transformar o 5 em uma string para evitar o erro

// Já o Type conversion é

console.log(Number('9') + 5) // Type conversion: Quando nós explicitamente fazemos a troca de um dado por outro (manualmente)