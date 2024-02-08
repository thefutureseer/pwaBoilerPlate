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

//add event listener for fetch request to make app installable
self.addEventListener("fetch", e => {
  e.respondWith(
    //cache first then go to the network if needed
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});