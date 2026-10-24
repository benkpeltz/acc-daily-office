const CACHE_PREFIX = 'acc-daily-office-';
const CACHE_NAME = `${CACHE_PREFIX}v9`;
const BASE_PATH = '/acc-daily-office';
const ASSETS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/psalms.json`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icon-192.png`,
  `${BASE_PATH}/icon-512.png`
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          // Only delete old caches belonging to this specific repository/PWA
          if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Network-first with offline cache fallback so manifest.json and index.html are never stale
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.includes(BASE_PATH)) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
