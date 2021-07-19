import EventTarget, {
  defineCustomEventTarget,
  defineEventAttribute,
  Event,
  getEventAttributeValue,
  setErrorHandler,
  setEventAttributeValue,
  setWarningHandler
} from 'event-target-shim';

export default EventTarget;

export {
  defineCustomEventTarget,
  defineEventAttribute,
  Event,
  EventTarget,
  getEventAttributeValue,
  setErrorHandler,
  setEventAttributeValue,
  setWarningHandler
};
