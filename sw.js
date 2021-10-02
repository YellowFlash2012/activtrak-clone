// const staticCache = 'static-cache';
// const dynamicCache = 'dynamic-cache';

// const assets = [
//     // "/",
//     // "/index.html",
//     // ".style.css",
//     // "/app.js"
// ]

// const limitNumCache = (cacheName, num) => {
//     caches.open(cacheName).then(cache => {
//         cache.keys().then(keys => {
//             if (keys.length > num) {
//                 cache.delete(keys[0]).then(limitNumCache(cacheName, num))
//             }
//         })
//     })
// }

// //installation process
// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(staticCache).then(cache => {
//             cache.addAll(assets);
//     }))
// })

// //activation
// self.addEventListener('activate', e => {
//     console.log('sw is activated');
// })

// //fetch
// self.addEventListener('fetch', e => {
//     e.respondWith(
//         caches.match(e.request).then(staticRes => {
//             return staticRes || fetch(e.request).then(async dynamicRes => {
//                 return caches.open(dynamicCache).then(cache => {
//                     cache.put(e.request.url, dynamicRes.clone())
//                     limitNumCache(dynamicCache, 1000)
//                     return dynamicRes;
//                 })
//             })
//         })
//     )
// })