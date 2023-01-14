const EventEmitter = require('events');

const customEmitter = new EventEmitter();

const data = {
    name : 'mohnish',
    surname : 'chandiramani'
}

customEmitter.on('response', (data)=>{
    console.log(`Data received. Your name is ${data.name}`);
})

customEmitter.emit('response', data);