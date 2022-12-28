// Async / Await com Fetch


// async function start() {
//     const response = await fetch('https://api.github.com/users/Jose-Murilo')
//     const user = await response.json()
//     const userRepos = await fetch(user.repos_url)
//     const repos = await userRepos.json()

//     console.log(repos);
// }

// start().catch(erro => console.log(erro))


// Maneira mais curta (Mas igual!)

async function start() {
    const url = 'https://api.github.com/users/Jose-Murilo'
    const user = await fetch(url).then(response => response.json()) 
    const repos = await fetch(user.repos_url).then(response => response.json())

    console.log(repos);
}

start().catch(erro => console.log(erro))