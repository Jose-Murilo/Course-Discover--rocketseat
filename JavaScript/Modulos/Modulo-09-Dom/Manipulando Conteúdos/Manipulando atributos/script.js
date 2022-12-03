// Manipulando Conteúdo
// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header') // setar o atributo

const headerID = document.querySelector('#header')
console.log(headerID)
console.log(headerID.getAttribute('class')) // pegar o atributo


header.setAttribute('class', 'bg outraClasse') // pode setar mais de uma classe
// header.removeAttribute('id')
// header.removeAttribute('class')





// Eu treinando


const div = document.querySelector('div')

div.setAttribute('class', 'div-01')
div.removeAttribute('class', 'div-01')


// Extra = Navagação entre paginas com o click do botão
// const button = document.querySelector('button')
// button.addEventListener('click', () => {
    // window.location = 'pages/page.html'
// })

