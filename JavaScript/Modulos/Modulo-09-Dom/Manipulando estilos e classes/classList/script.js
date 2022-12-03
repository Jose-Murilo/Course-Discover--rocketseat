// Alterando estilos
// classList

const element = document.querySelector('body')

element.classList.add('active', 'green')
element.classList.remove('active')
// element.classList.toggle('active')
console.log(element.classList);


// >>>>> Anotações <<<<<

// classList.add() = Vai adicionar classes ou classe
// classList.add() = Vai remover a classe
// classList.toggle() = Se já estiver com a classe ele ira remover, mas se a classe não estiver ele irá adicionar