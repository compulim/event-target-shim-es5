import EventTarget, { Event, getEventAttributeValue, setEventAttributeValue } from 'event-target-shim-es5';

class MyComponent extends EventTarget {
  get onload() {
    return getEventAttributeValue(this, 'load');
  }

  set onload(value) {
    setEventAttributeValue(this, 'load', value);
  }
}

const component = new MyComponent();

component.addEventListener('load', event => process.send(`"${event.type}" addEventListener`));
component.onload = event => process.send(`"${event.type}" onload`);

const loadEvent = new Event('load');

component.dispatchEvent(loadEvent);
