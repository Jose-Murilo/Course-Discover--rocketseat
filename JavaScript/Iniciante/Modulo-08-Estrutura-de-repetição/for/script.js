// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

// A estrutura de repetição for tem a seguinte sintaxe:

// for(inicialização de uma variável; condição de continuação para o loop; expressão final)

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        break;
    }
    console.log(i)
}

console.log("Fim do programa")