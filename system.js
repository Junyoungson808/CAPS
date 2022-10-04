'use strict';

const eventPool = require('./src/eventPool');
const driverHandler = require('./src/driver/driver');
const vendorHandler = require('./src/vendor/vendor');

const Chance = require('chance');
const chance = new Chance();

eventPool.on('PICKUP', driverHandler);
eventPool.on('TRANSIT', vendorHandler);
eventPool.on('DELIVERY', driverHandler);

setInterval(() => {
  const order = {
    store: chance.company(),
    orderID: chance.guid({version: 4}),
    customer: chance.name(),
    address: chance.address(),
  };

  console.log('---------------------New Interval Begins--------------------');
  eventPool.emit('PICKUP', {order});
  eventPool.emit('DELIVERY', {order});
  eventPool.emit('TRANSIT', {order});
},3000);