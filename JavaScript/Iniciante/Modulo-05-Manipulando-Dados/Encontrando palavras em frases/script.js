// Manipulando Strings

// Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

// case sensitive = Ou seja faz diferença entre maiúsculos e minúsculos

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.toLocaleLowerCase().includes("amor"))



// Exemplo
{
    let phrase = "Eu quero viver o Amor!"
    console.log(phrase.toLocaleLowerCase().includes("amor"))
}
// Está voltando true, porque estou transformando tudo em minusculas primeiro, depois eu procuro a palavra toda em minúscula.