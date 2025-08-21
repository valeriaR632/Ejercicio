const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //lo llama por la clase
const $b = document.querySelector('#blog'); //lo llama por id
const $l = document.querySelector('.location');//lo llama por la clase

async function displayUser(username) { //async es una funcion de display, se agrego para que permitiera usar await
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);//pide datos de github
  const data=await response.json();
  console.log(data);
  $n.textContent = data.name; //Se quito las comillas para que permitiera que la consola lo llamara.
  $b.textContent = data.blog;
  $l.textContent = data.location;
}catch (err){
  handleError(err);
}
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');//catch(handleError);