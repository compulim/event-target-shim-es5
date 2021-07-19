// When bundling with esbuild:
// - If we "import", it load ESM from "event-target-shim-es5/module". The default imported object is () => any.
// - If we "require", it load CJS from "event-target-shim-es5/main". The default imported object is () => any.

// When bundling with Webpack:
// - Nomatter we "import" or "require", it always load ESM from "event-target-shim-es5/module", based on the "webpack.config.json/mainFields".
// - If we "import", the default imported object is () => any.
// - If we "require", the default imported object is { default: () => any }.
// - If we "require" and "mainFields" is "main", the default imported object is () => any.

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
