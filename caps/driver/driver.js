'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`picked up ${payload.order.orderID}`);
  eventPool.emit('in transit', payload);
  eventPool.emit(`order is deliverd ${payload.order.orderID}`);
};