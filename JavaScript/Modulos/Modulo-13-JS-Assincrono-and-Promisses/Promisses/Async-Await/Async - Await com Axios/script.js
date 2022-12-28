// Async / Await com Axios



async function start() {
    try {
        const url = 'https://api.github.com/users/Jose-Murilo'
        const user =  await axios.get(url)
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data);
    } catch (error) {
        console.log(error);
    }
}

start().catch(erro => console.log(erro))