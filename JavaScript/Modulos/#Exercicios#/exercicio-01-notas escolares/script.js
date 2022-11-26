// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let nota1 = 70
let nota2 = 180

function calcMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2

    if (!media) {
        media = "Insira apenas valores validos!!"
    }
    return media
}

function abcAverage(average) {
    let abc
    
    if (average >= 90 && average <= 100) {
        abc = "A"
    } else if (average >= 80 && average <= 89) {
        abc = "B"
    } else if (average >= 70 && average <= 79) {
        abc = "C"
    } else if (average >= 60 && average <= 69) {
        abc = "D"
    } else if (average >= '' && average <= 59) {
        abc = "F"
    } else {
        abc = "Nota invalida!!"
    }
    
    return abc
}

let averageStudent = calcMedia(nota1, nota2)
let abcMedia = abcAverage(averageStudent)

console.log(averageStudent)
console.log(abcMedia)