'use strict';

const eventPool = require('./eventPool');
const driverHandler = require('./driver/driver');
const vendorHandler = require('./vendor/vendor');
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
  eventPool.emit('Pickup', {order});
  eventPool.emit('Delivery', {order});
},8000);