// Conectando API com HTTPS e Callback
// Nesta aula vamos verificar se estamos entendendo como que funciona o callback e o assincronismo no JavaScript.

// OBS: Esse código é para ser executado com node.js

const https = require('http')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
	console.log(res.statusCode)
})

console.log('conectando API')