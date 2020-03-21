let db;
const request = indexedDB.open("budget", 1);


request.onsuccess = function(event){
    db = event.target.result;

    checkDatabase(db);
}