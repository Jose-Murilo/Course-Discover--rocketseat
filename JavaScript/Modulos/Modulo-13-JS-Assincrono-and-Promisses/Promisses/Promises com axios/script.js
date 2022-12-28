// Promises com axios

// axios.get('https://api.github.com/users/Jose-Murilo')
// .then(response => {
//     const user = response.data
//     console.log(user.repos_url);

//     return axios.get(user.repos_url)
// })
// .then(res => console.log(res.data))


// Mesmo resultado só que mais curto
// axios.get('https://api.github.com/users/Jose-Murilo')
// .then(response => axios.get(response.data.repos_url))
// .then(res => console.log(res.data))

// Mesmo processo só que com fetch
fetch('https://api.github.com/users/Jose-Murilo')
.then(response => response.json())
.then(res => fetch(res.repos_url))
.then(repos => repos.json())
.then(result => console.log(result.data))