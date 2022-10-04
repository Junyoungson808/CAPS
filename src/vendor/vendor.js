'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`thank you ${payload.order.customer}`);
};

// const order = {
//   store: chance.company(),
//   orderID: chance.guid({version: 4}),
//   customer: chance.name(),
//   address: chance.address(),
// };