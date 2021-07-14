import { Event, EventTarget } from '../lib/esm/index.mjs';

const myNode = new EventTarget();

myNode.addEventListener('hello', event => process.send(event.type));

myNode.dispatchEvent(new Event('hello'));
