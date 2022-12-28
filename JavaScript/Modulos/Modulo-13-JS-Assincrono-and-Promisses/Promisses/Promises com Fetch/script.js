// Promises com Fetch
// fetch = buscar
// then = então

console.log('Buscando');

fetch('https://api.github.com/users/Jose-Murilo')
.then(res => res.json())
.then(data => fetch(data.repos_url))
.then(res => res.json())
.then(d => console.log(d))
.catch(err => console.log('Error: ' + err))

console.log('Aguardando...');

// OBS: O exemplo acima podemos notar que na terceira linha de código usamos outro fetch, mas porque?

// Simplesmente porque eu estou acessando o valor do dado e esse valor gera um nova "api" então usamos o fetch para tratar e pegar os dados, logo depois transformamos em json(), depois mandamos imprimir no console