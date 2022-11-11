// Uma callback function é uma função que está sendo passada para outra função como parâmetro.

// Callback function

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log("Estou em uma callback")
    }
)