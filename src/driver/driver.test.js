'use strict';

const handleDriver = require('./driver');
const eventPool = require('../eventPool');
const { describe } = require('node:test');


jest.mock(eventPool, () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('Handle Driver Test', () => {
  console.log = jest.fn();

  test('log and emit ', () => {
    handleDriver({});
    expect(console.log).toHaveBeenCalledWith('Driver: Package Picked Up', {});
    expect(eventPool.emit).toHaveBeenCalledWith('Driver: Package Picked Up', {});
  });
});