import globalThis from '@babel/runtime-corejs3/core-js/global-this';

import EventTarget, {
  defineCustomEventTarget,
  defineEventAttribute,
  Event,
  getEventAttributeValue,
  setErrorHandler,
  setEventAttributeValue,
  setWarningHandler
} from 'event-target-shim';

const scope = typeof globalThis === 'undefined' ? 0 : globalThis;

if (scope) {
  EventTarget.defineCustomEventTarget = defineCustomEventTarget;
  EventTarget.defineEventAttribute = defineEventAttribute;
  EventTarget.Event = Event;
  EventTarget.getEventAttributeValue = getEventAttributeValue;
  EventTarget.setErrorHandler = setErrorHandler;
  EventTarget.setEventAttributeValue = setEventAttributeValue;
  EventTarget.setWarningHandler = setWarningHandler;

  // The shimmed version offer more features, such as signal.
  // Even the native implementation exists, we want to enable developers to use an implementation with broader feature set.
  scope.EventTargetShim = EventTarget;

  // We will polyfill only if the environment does not have it, despite the version from the environment may have narrower feature set.
  if (typeof scope.EventTarget === 'undefined') {
    scope.EventTarget = EventTarget;
  }
}
