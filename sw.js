var CACHE="recall-react-v2-2";
var FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==CACHE}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(function(x){var c=x.clone();caches.open(CACHE).then(function(ch){ch.put(r,c)});return x}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('index.html')})}));return}
 e.respondWith(caches.match(r).then(function(m){return m||fetch(r)}))});
