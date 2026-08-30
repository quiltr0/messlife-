
const CACHE = 'messlife-v39';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apps/jugadores/index.html',
  './apps/checkpoints/index.html',
  './apps/manifiesto/index.html',
  './apps/riesgos/index.html',
  './apps/dados/index.html',
  './apps/visor/index.html',
  './assets/messlife-cover.png',
  './assets/dice-holographic-reference.png',
  './assets/icons/messlife-192.png',
  './assets/icons/messlife-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
