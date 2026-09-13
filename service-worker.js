const CACHE='kawil-v15-draft-media';
const ASSETS=[
 './','./index.html','./style.css','./config.js','./script.js','./manifest.json',
 './images/kawil-guide-home-left.png','./images/kawil-guide-tandaan-left.png','./images/kawil-guide-tandaan-clean.png',
 './images/kawil-guide-neutral.png','./images/kawil-guide-correct.png','./images/kawil-guide-wrong.png','./images/kawil-guide-complete.png','./images/kawil-guide-mahusay.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
