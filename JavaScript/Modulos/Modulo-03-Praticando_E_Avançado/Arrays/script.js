// Array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
];

// acessar valores dentro do Array
console.log(animals[1]);

{
    // Posso ter um array e dentro desse array, posso ter um objeto, no caso aí é um objeto que ta tendo o nome e a idade do gato
    const animals = [
        'Lion',
        'Monkey',
        {
            nome: 'cat',
            age: 3
        }
    ];
    console.log(animals[2].nome); // dessa maneira é para puxar um obejto dentro de array.

    console.log(animals.length); // Ele vai puxar valores tem dentro do array
};