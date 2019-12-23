# event-target-shim-es5

[![npm version](https://img.shields.io/npm/v/event-target-shim-es5.svg)](https://www.npmjs.com/package/event-target-shim-es5) [![Build Status](https://travis-ci.org/compulim/event-target-shim-es5.svg?branch=master)](https://travis-ci.org/compulim/event-target-shim-es5)

This package is based on [`event-target-shim`](https://npmjs.com/package/event-target-shim). The original package is not transpiled for ES5 browsers. Including it directly or indirectly will break web apps running on ES5 browsers.

On install, this package will transpile your version of `event-target-shim` to make it compatible with ES5 browsers.

Package authors should consider using this package instead of `event-target-shim` , so your packages will not break your users due to having `event-target-shim` as a transient dependency.

## How to use

To install in your project, run:

```sh
npm install event-target-shim event-target-shim-es5
```

## How it works

On `postinstall`, this package will run Babel and Webpack to transpile `event-target-shim` into a single file.

This package peer-depends on `event-target-shim`. Thus, you can select your own version of `event-target-shim`.

### Updating `event-target-shim`

When you update `event-target-shim`, re-run `npm install event-target-shim-es5` to get the latest package transpiled.

## Alternatives

### Including the source code

Instead of relying on this package, you can also copy the source code of `event-target-shim` into your web app and use your build pipeline transpile the original package.

When copying, be sure to include the original license and continue to depends on the package to make sure `npm audit` will scan for vulnerabilities.

### Modify your bundler configuration

Webpack do not transpile code under `/node_modules/` unless specified explicitly. Modify `webpack.config.js` to include `/node_modules/event-target-shim` and use `babel-loader` to transpile it on-the-fly.

## Contributions

Like us? [Star](https://github.com/compulim/event-target-shim-es5/stargazers) us.

Want to make it better? [File](https://github.com/compulim/event-target-shim-es5/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/event-target-shim-es5/pulls) a pull request.
