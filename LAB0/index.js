// WEB322-Berkin-Sezgun

// 1. Write your firs app that outputs "Hello World" to the console
console.log("Hello World");

// 2. Run the application

// 3. Debug the application
//    Debug the application in chrome

// 4. What are: __dirname,__filename, process
console.log(__dirname);
console.log(__filename);

// 5. Use setTimeout
//    Use setIntreval

setTimeout(() => {
    myEmitter.emit("my-event")
}, 3100);

setTimeout(() => {
    myEmitter.emit("our-event")
}, 3100);

console.log("Hello!");

let n=0;

setInterval(() => {
    n++

    if(n > 5){
        process.exit()
    }

    console.log("===========================")
}, 2000);

// 6. URL

const url = new URL("https://www.google.com");
console.log(url);

// 7. EventEmitter()

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('my-event', () => {
    console.log("done");
});

myEmitter.on('our-event', () => {
    console.log("Comrade");
});
