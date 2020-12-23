var cacheName = 'funstuffv1.0.2';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log(cache, 'on install')
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  console.log('on fetch')
  e.respondWith(
    caches.match(e.request).then(function(response) {
      console.log(response)
      
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  var cacheKeeplist = cacheName;

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        console.log(cacheKeeplist.indexOf(key));
        console.log(key);
        
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});