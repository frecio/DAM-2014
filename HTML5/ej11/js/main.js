window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
                window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange ||
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

function onerror(e) {
    console.log(e);
}

function open () {
    var version = 4;
    var request = indexedDB.open("todo-list", version);


    request.onupgradeneeded = function(e) {
        db = e.target.result;

        var store = db.createObjectStore("todo-list",
                    { keyPath: "timeStamp" });
    };

    request.onerror = onerror;

    request.onsuccess = function(e) {
        db = e.target.result;
        console.log("DB opened");
        getAllTodoItems();
    };
}

function add (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var data = {
        "text": todoText,
        "timeStamp": new Date().getTime()
    };

    var request = store.put(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: " + e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };

    store.transaction.oncomplete = function(e){
        getAllTodoItems();
    };
}

function getAllTodoItems() {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var transaction = db.transaction(["todo-list"]);
    var store = transaction.objectStore("todo-list");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result == false) return;
        console.log(result.value);
        todos.innerHTML+=
        '<li data-timestamp="' + result.value.timeStamp + '">' + result.value.text + '</li>';
        result.continue();
    };

    cursorRequest.onerror = onerror;
}

function del(timestamp){
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var request = store.delete(parseInt(timestamp));

    request.onsuccess = function(e){
        console.log("Deleted");
    };

    request.onerror = onerror;

    store.transaction.oncomplete = function(e){
        getAllTodoItems();
    };


}

function addTodo() {
    var todo = document.getElementById("todo");
    add(todo.value);
    todo.value = "";
}

var deleteTodo = function(e) {
    console.log(this);
    console.log(this.dataset.timestamp);
    del(this.dataset.timestamp);
};

function init() {
    open();

}

window.addEventListener("DOMContentLoaded", init, false);

$(document).on('click', '#todoItems li', deleteTodo);

