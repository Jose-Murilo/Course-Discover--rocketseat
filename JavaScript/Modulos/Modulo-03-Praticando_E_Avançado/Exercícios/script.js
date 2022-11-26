// 1. Declare uma variável de nome weight
// Resposta: let weight;

// 2. Que tipo de dado é a variável acima?
// Resposta: console.log(typeof weight);

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/

//Resposta:
// let name = "Murilo";
// let age = 16;
// let weight = 52.6;
// let isSubscribed = true;



    // 4. A variável student abaixo é de que tipo de dado?

    //Resposta:
    // let student = {};
    // console.log(student);
    // Objeto

  //  4.1 Atribua a ela as mesmas propriedade e valores do exercicio 3.

    //Resposta:
        let student = {
            name: "Murilo",
            age: 16,
            weight: 52.6,
            isSubscribed: true,    
        };
   
   
  // 4.2 Mostre no console a seguinte mensagem:

  //  <name> de idade <age> pesa <weight> pelos valores de cada propriedade de objeto:

    //Reposta:
        console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)


  // 5. Declare uma variável do tipo Array, de nome students ea atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = [];

  // 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

  students = [
    student
  ]

 
  // 7. Coloque no console o valor da posição zero do Array acima

  console.log(students[0])

  // 8. Crie um novo student e coloque na posição 1 do Array students

  const john = {
    nome: "John",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
  }

  students[1] = john;
  console.log(students);

  // 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Apps sua resposta, rode o código e veja se você acertou.

  console.log(a)
  var a = 1