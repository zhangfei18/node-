let events = require('events');
let myEmitter = new events.EventEmitter();
myEmitter.on('error', err =>{
    console.log(`ERROR: ${err}`);
})
myEmitter.emit('error', new Error('飞哥太帅了'))