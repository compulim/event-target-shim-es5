import EventTarget, { defineEventAttribute } from '../lib/index';

test('EventTarget should be a class', () => {
  class Car extends EventTarget {}

  expect(new Car()).toBeTruthy();
});

test('defineEventAttribute should be a function', () => {
  expect(typeof defineEventAttribute).toBe('function');
});
