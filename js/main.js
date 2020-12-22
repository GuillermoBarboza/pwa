window.onload = () => {
  'use strict';
  console.log('inicios');
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

document.getElementById('button').addEventListener('click', ()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    let powers = document.createElement('p')
    powers.innerHTML = 'Powers Activated!'
    document.getElementById('container').appendChild(powers)
    console.log(json)
  })
})