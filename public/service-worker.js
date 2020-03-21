ServiceWorker.addEventListern("activate", function(evt){
    caches.keys().then(()=>
    res.json().then(()=> caches(res.json()));
})