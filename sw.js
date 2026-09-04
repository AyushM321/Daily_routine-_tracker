const CACHE = 'dailyx-v19';
const ASSETS = ['./','./index.html','./manifest.json','./sw.js','./version.js','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);
 const shell=r.method==='GET'&&(u.pathname.endsWith('/')||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/version.js')||u.pathname.endsWith('/sw.js')||u.pathname.endsWith('/manifest.json'));
 if(shell){e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c));return res}).catch(()=>caches.match(r)));return;}
 e.respondWith(caches.match(r).then(x=>x||fetch(r)));
});
