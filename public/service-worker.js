// This runs in the Service Worker scope
self.addEventListener('install', (event) => {
  console.log('✅ [SW] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('✅ [SW] Activated');
  self.clients.claim();
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-sketches') {
    event.waitUntil(syncSketches());
  }
});

async function syncSketches() {
  console.log('📦 [SW] Syncing sketches...');
  const sketches = await getSketches();
  console.log('✅ [SW] Fetched sketches from client:', sketches.length);
  // Fake sending to server
}

function getSketches() {
  return new Promise((resolve) => {
    self.clients.matchAll().then((clients) => {
      if (clients && clients.length) {
        const client = clients[0];
        const channel = new MessageChannel();

        channel.port1.onmessage = (event) => {
          if (event.data && event.data.type === 'SKETCHES_DATA') {
            resolve(event.data.sketches || []);
          } else {
            resolve([]);
          }
        };

        client.postMessage({ type: 'GET_SKETCHES' }, [channel.port2]);
      } else {
        resolve([]);
      }
    });
  });
}
