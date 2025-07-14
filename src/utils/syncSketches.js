
export function simulateBackgroundSync() {
  const unsynced = JSON.parse(localStorage.getItem('sketches') || '[]');

  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    console.log('📡 Simulating background sync...');

    navigator.serviceWorker.ready.then((sw) => {
      return sw.sync.register('sync-sketches');
    });
  }

  setTimeout(() => {
    console.log('✅ Synced to server (simulated):', unsynced.length, 'items');
  }, 2000);
}
