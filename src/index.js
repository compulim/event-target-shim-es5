import EventTarget, {
  defineCustomEventTarget,
  defineEventAttribute,
  Event,
  getEventAttributeValue,
  setErrorHandler,
  setEventAttributeValue,
  setWarningHandler
} from 'event-target-shim';

// module.exports = EventTarget;

module.exports.default = EventTarget;
module.exports.defineCustomEventTarget = defineCustomEventTarget;
module.exports.defineEventAttribute = defineEventAttribute;
module.exports.Event = Event;
module.exports.EventTarget = EventTarget;
module.exports.getEventAttributeValue = getEventAttributeValue;
module.exports.setErrorHandler = setErrorHandler;
module.exports.setEventAttributeValue = setEventAttributeValue;
module.exports.setWarningHandler = setWarningHandler;
