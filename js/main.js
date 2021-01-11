window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
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
  // Ambient Light Events
  let ambientLights = document.querySelector("#ambientLights");
  let lux = document.createElement("p");
  if ("ondevicelight" in window) {
    window.addEventListener("devicelight", function (event) {
      console.log("ambientLights", event);

      lux.innerHTML = event.value;
      ambientLights.appendChild(lux);
    });
  } else {
    let message = document.createElement("p");
    message.innerHTML = "not supported";
  }

  let gyroscope = new Gyroscope({ frequency: 60 });
  let htmlGyroscope = document.querySelector('#gyroscope')
  
  gyroscope.addEventListener("reading", (e) => {
    
    
    htmlGyroscope.innerHTML = `Gyroscope readings... x: ${gyroscope.x} y:${gyroscope.y} z: ${gyroscope.z}`
  });
  gyroscope.start();
  console.log(gyroscope);
};

//NOTIFICATIONS
/*  let notification = document.querySelector('.notification');
  notification.addEventListener('click', askAndshowNotification)
  function askAndshowNotification() {
  notification.innerHTML = "try and spamm xD"
  //thanks mdn
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Electrohack says hi!', {
            body: 'Wild notification appears!',
            vibrate: [100, 100]
          });
        });
      }
    });
  }
}; */

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
