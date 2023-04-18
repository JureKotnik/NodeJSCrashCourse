const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter{}

// Init objects
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// init event
myEmitter.emit('event');