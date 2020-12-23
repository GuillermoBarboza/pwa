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

/* let deferredPrompt;
const installBtn = document.querySelector(".install");
installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e);

  e.preventDefault();

  deferredPrompt = e;

  installBtn.style.display = "block";

  installBtn.addEventListener("click", (e) => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
}); */

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
