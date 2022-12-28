
let pedido = true
Promise.all([
    new Promise((resolve, reject) => {
        
        if (pedido) {
            return resolve('Deu certo')
        }

        return reject('Deu Ruim ):')
    }),
    axios.get('https://api.github.com/users/Jose-Murilo/repos')
])
.then((response => {
    console.log(response[0])
    console.log(response[1].data.length)
}))
.catch((erro) => console.log(erro))


// OBS: Ele só vai retornar o valor da promise se os dois valores for resolve, mesmo se um valor for reject ela já da erro

// Basicamente a Promise.all() ela é uma unica promise com promises dentro, ela retonar quando todas as promises for resolve(), se tiver pelo menos uma promessa reject ela já da erro. Ela vai retornar como se fosse uma unica promise