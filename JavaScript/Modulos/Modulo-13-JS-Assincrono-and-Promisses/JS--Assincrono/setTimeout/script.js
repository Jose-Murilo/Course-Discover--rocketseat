// Function setTimeout and setInterval
// setTimeout(function, delay)
// setTimeout() é uma função que recebe como argumento uma outra função e um tempo para ser executada.

// A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo. No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s.

    // setTimeout(() => {
    //     console.log("Logo depois de 1s");
    // }, 1000)

    
    // setInterval(() => {
    //     console.log("Logo depois de 1s");
    // }, 1000)


// setTimeout = A função roda uma unica vez. 
// setInterval = A função roda após um intervalo de tempo


// para parar a função setTimeout = clearTimeout
    let timeout = setTimeout(() => {
        console.log("Logo depois de 1s");
    }, 1000)

clearTimeout(timeout)



// para parar a função setInterval = clearInterval

    let interval = setInterval(() => {
        console.log("Logo depois de 1s");
    }, 1000)

    clearInterval(interval)