//install functionality
self.addEventListener("install", e => {
  //using the event object to cache 
  e.waitUntil(
    //set the cache name (static). Then get the cache
    caches.open("static").then(cache => {
      //pass here the cache assets
      return cache.addAll(["./", "./src/master.css", "./images/logo.png"])      
    })
  );
});