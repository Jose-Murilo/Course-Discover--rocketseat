// # Async/Await

// - Maneira de escrever promises
// - Syntactic Sugar

// await = esperar/aguardar uma promessa

let pedido = true;
const promessa = new Promise((resolve, reject) => {

  if (pedido) {
      resolve("Ok, deu certo!");
    } 
    
    reject("Não deu ):");
});

async function start() {
  try {
    const promise = await promessa;
    return console.log(promise);
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    console.log("Terminado");
  }
}





start();

// Eu fazendo!
async function nameGitHub(name) {
  const nameUser = name;
  const url = `https://api.github.com/users/${nameUser}`;
  const searchName = await fetch(url).then((response) => response.json());

  console.log(searchName.name);
  console.log(searchName.bio);
}

nameGitHub("Jose-Murilo");
