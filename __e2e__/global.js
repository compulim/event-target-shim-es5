require('event-target-shim-es5/dist/event-target-shim-es5.production.min.js');

class MyComponent extends EventTargetShim {
  get onload() {
    return EventTargetShim.getEventAttributeValue(this, 'load');
  }

  set onload(value) {
    EventTargetShim.setEventAttributeValue(this, 'load', value);
  }
}

const component = new MyComponent();

component.addEventListener('load', event => process.send(`"${event.type}" addEventListener`));
component.onload = event => process.send(`"${event.type}" onload`);

component.dispatchEvent(new EventTargetShim.Event('load'));
