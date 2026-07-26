/* Runner — Planilla de Movilidad · Service Worker
 *
 * Estrategia:
 *  - Navegaciones (el propio HTML): network-first con respaldo a caché, para
 *    que la app cargue offline pero reciba actualizaciones cuando hay red.
 *  - Recursos GET (fuentes, JSZip, Tesseract, etc.): stale-while-revalidate,
 *    se sirven al instante desde caché y se refrescan en segundo plano.
 *  - Google Identity / Drive / userinfo: SIEMPRE red, nunca se cachean
 *    (son tokens y llamadas autenticadas que no deben quedar almacenadas).
 */
const CACHE = 'runner-v1';
const APP_SHELL = ['./', './index.html'];

// Hosts que jamás deben pasar por caché
const NO_CACHE_HOSTS = [
  'accounts.google.com',
  'oauth2.googleapis.com',
  'www.googleapis.com',
  'apis.google.com',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (NO_CACHE_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith('.' + h))) {
    return; // dejar pasar a la red sin intervenir
  }

  // Navegaciones → network-first
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match('./index.html')))
    );
    return;
  }

  // Resto de GET → stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
