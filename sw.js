const CACHE_NAME='v1_cache_BCH_PWA';

var urlsToCache=[

    './',
    './windows11/LargeTile.scale-100.png',
    './windows11/LargeTile.scale-125.png',
    './windows11/LargeTile.scale-150.png',
    './windows11/LargeTile.scale-200.png',
    './index.html',
    '/main.js',
    '/manifest.json',
    './sw.js',
    './styles.css',
    './WhatsApp Image 2020-11-25 at 8.20.27 PM.jpeg',






]

self.addEventListener('install', e=>{

    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
                        .then(() =>{
                            self.skipWaiting(); 
                        })
        })
        .catch(err=>console.log('No se ha registrado el cache', err))
);
});

self.addEventListener('activate',e => {
    const cacheWhitelist = [CACHE_NAME];


    e.waitUntil(
        caches.keys()
                .then(cacheNames=>{
                return Promise.all(
                    cacheNames.map(cacheName =>{
                        if(cacheWhitelist.indexOf(cacheName)== -1)
                        {

                            return cache.delete(cacheName);
                        }
                    })
                );
               })
               .then(()=> {
                self.clients.claim(); 
               })
    );

});

self.addEventListener('fetch',e => {
    e.respondWith(
        caches.match(e.request)
                .then (res => {
                    if(res){
                        return res;
                    }
                    return fetch(e.request); 
                })
    );
});


  