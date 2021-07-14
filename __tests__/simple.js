import EventTargetFromRoot, {
  defineCustomEventTarget,
  defineEventAttribute,
  Event,
  EventTarget,
  getEventAttributeValue,
  setErrorHandler,
  setEventAttributeValue,
  setWarningHandler
} from '../lib/index';

test('EventTarget from default export should be same as named export', () => {
  expect(EventTargetFromRoot).toBe(EventTarget);
});

test('EventTarget should be a class', () => {
  expect(new EventTarget()).toBeTruthy();
});

test('Event should be a class', () => {
  expect(new Event()).toBeTruthy();
});

test('defineCustomEventTarget should be a function', () => {
  expect(typeof defineCustomEventTarget).toBe('function');
});

test('defineEventAttribute should be a function', () => {
  expect(typeof defineEventAttribute).toBe('function');
});

test('getEventAttributeValue should be a function', () => {
  expect(typeof getEventAttributeValue).toBe('function');
});

test('setErrorHandler should be a function', () => {
  expect(typeof setErrorHandler).toBe('function');
});

test('setEventAttributeValue should be a function', () => {
  expect(typeof setEventAttributeValue).toBe('function');
});

test('setWarningHandler should be a function', () => {
  expect(typeof setWarningHandler).toBe('function');
});
