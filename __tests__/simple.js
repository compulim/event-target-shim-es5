import EventTarget, { defineEventAttribute } from '../lib/index';

test('EventTarget should be a class', () => {
  expect(new EventTarget()).toBeTruthy();
});

test('defineEventAttribute should be a function', () => {
  expect(typeof defineEventAttribute).toBe('function');
});
