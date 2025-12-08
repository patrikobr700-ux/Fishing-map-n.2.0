self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  // jednoduchá offline fallback strategie - síť, jinak cache
  event.respondWith(
    fetch(event.request).catch(()=>caches.match(event.request))
  );
});
