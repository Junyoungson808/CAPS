'use strict';

const eventPool = require('./src/eventPool');
require('./src/driver/driver');
require('./src/vendor/vendor');

const Chance = require('chance');
const chance = new Chance();

eventPool.on('PICKUP',(payload) => logEvent('PICKUP', payload));
eventPool.on('TRANSIT',(payload) => logEvent('TRANSIT', payload));
eventPool.on('DELIVERED',(payload) => logEvent('DELIVERED', payload));

function logEvent(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}

setInterval(() => {
  const order = {
    store: chance.company(),
    orderID: chance.guid({version: 4}),
    customer: chance.name(),
    address: chance.address(),
  };

  console.log('NEW ORDER');
  eventPool.emit('PICKUP', {order});
},3000);
