# event-target-shim-es5

[![npm version](https://img.shields.io/npm/v/event-target-shim-es5.svg)](https://www.npmjs.com/package/event-target-shim-es5) ![Node.js CI](https://github.com/compulim/event-target-shim-es5/workflows/Node.js%20CI/badge.svg)

This package is based on [`event-target-shim`](https://npmjs.com/package/event-target-shim). Although the original package contains an [ES5 bundle](https://unpkg.com/event-target-shim/dist/event-target-shim.umd.js), it did not contains an ES5 module. Importing the module directly or indirectly may break web apps running on ES5 browsers.

On install, this package will transpile your version of `event-target-shim` to make it compatible with ES5 browsers.

Package authors should consider importing this package instead of `event-target-shim`, so your packages will not break your users due to having `event-target-shim` as a transient dependency.

## How to use

To install in your project, run:

```sh
npm install event-target-shim event-target-shim-es5
```

In your code:

```js
import EventTarget, { defineEventAttribute } from 'event-target-shim-es5';

class YourComponent extends EventTarget {
  handleClick() {
    this.dispatchEvent(new Event('click'));
  }
}

defineEventAttribute(YourComponent.prototype, 'click');
```

## How it works

On `postinstall`, this package will run Babel and Webpack to transpile `event-target-shim` into a single file.

This package peer-depends on `event-target-shim`. Thus, you can select your own version of `event-target-shim`.

### Updating `event-target-shim`

When you update `event-target-shim`, re-run `npm install event-target-shim-es5` to get the latest package transpiled.

## Alternatives

Instead of importing this package, there are alternative workarounds you can use.

### Including the source code

You can copy the source code of `event-target-shim` into your web app and use your build pipeline transpile the original package.

When copying, be sure to include the original license and continue to depends on the package to make sure `npm audit` will scan for vulnerabilities.

### Modify your bundler configuration

Webpack do not transpile code under `/node_modules/` unless specified explicitly. You can modify `webpack.config.js` to include `/node_modules/event-target-shim/` and use `babel-loader` to transpile it on-the-fly.

## Contributions

Like us? [Star](https://github.com/compulim/event-target-shim-es5/stargazers) us.

Want to make it better? [File](https://github.com/compulim/event-target-shim-es5/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/event-target-shim-es5/pulls) a pull request.
