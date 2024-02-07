//If services workers are supported by the browser
if ("serviceWorker" in navigator) {
  //if so run this service worker. 
  navigator.serviceWorker.register("sw.js").then(
    registration => {
      console.log("S.W. Registered!");
      console.log("this is registration: "+registration)
    }
  ).catch(error => {
    console.log("SW registration failed")
    console.log(error);
  })
}