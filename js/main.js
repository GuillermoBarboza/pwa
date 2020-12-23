window.onload = () => {
  "use strict";
  console.log("inicios");

  if ("serviceWorker" in navigator) {
    console.log("navigator", navigator);
    console.log(navigator.serviceWorker);
    navigator.serviceWorker
      .register("./sw.js")
      .then((res) => {
        console.log(res.scope);
      })
      .catch((error) => {
        // registration failed
        console.log("Registration failed with " + error);
      });
  }
};

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  console.log(e);
  
  let install = document.createElement("button");
  install.innerHTML = "Install!";
  document.getElementById("container").appendChild(install);

  e.prompt()
  e.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });
});

document.getElementById("button").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      let powers = document.createElement("p");
      powers.innerHTML = "Powers Activated!";
      document.getElementById("container").appendChild(powers);
      console.log(json);
    });
});
