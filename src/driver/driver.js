'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {
    console.log(`picked up ${payload.order.orderID}`);
  }, 2000);

  console.log('in transit', payload);
  
  console.log(`order is deliverd ${payload.order.orderID}`);
};


// module.exports = driver;