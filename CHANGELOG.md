# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2021-07-20

### Added

- Added ES Module entrypoint, in PR [#24](https://github.com/compulim/event-target-shim-es5/pull/24)

### Changed

- Moved to [`esbuild`](https://npmjs.com/package/esbuild) from Webpack, in PR [#22](https://github.com/compulim/event-target-shim-es5/pull/22) and [#23](https://github.com/compulim/event-target-shim-es5/pull/23)
- Move to end-to-end tests from unit tests, in PR [#24](https://github.com/compulim/event-target-shim-es5/pull/24)
- Ponyfill `globalThis` and `Promise` via `core-js-pure` by usage, in PR [#24](https://github.com/compulim/event-target-shim-es5/pull/24)

## [1.2.2] - 2021-07-13

### Changed

- Set peer dependencies of [`event-target-shim`](https://npmjs.com/package/event-target-shim) to `>= 6` in PR [#20](https://github.com/compulim/event-target-shim-es5/pull/20)

## [1.2.1] - 2021-07-13

### Changed

- Bumped dependencies in PR [#18](https://github.com/compulim/event-target-shim-es5/pull/18)
   - [`@babel/core@7.14.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.14.7`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.2.2`](https://npmjs.com/package/babel-loader)
   - [`event-target-shim@6.0.2`](https://npmjs.com/package/event-target-shim)
   - [`jest@27.0.6`](https://npmjs.com/package/jest)
   - [`webpack-cli@4.7.2`](https://npmjs.com/package/webpack-cli)
   - [`webpack@4.46.0`](https://npmjs.com/package/webpack)

## [1.2.0] - 2020-08-06

### Changed

- Bumped dependencies
   - [`@babel/core@7.11.1`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.11.0`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.1.0`](https://npmjs.com/package/babel-loader)
   - [`webpack@4.44.1`](https://npmjs.com/package/webpack)
   - [`webpack-cli@3.3.12`](https://npmjs.com/package/webpack-cli)
- Revert `npx` because [`.npmrc` issues with `NpmAuthenticateV0`](https://github.com/microsoft/azure-pipelines-tasks/issues/13265)

## [1.1.0] - 2020-05-25

### Changed

- CI/CD moved to GitHub Actions from Travis CI
- Use `npx` as much as possible to reduce footprint
- Lockdown versions of dependencies to reduce package maintenance
- Skip minification to speed up build

## [1.0.1] - 2019-12-24

### Added

- Accepts `abort-controller` package from parent `node_modules` folders

## [1.0.0] - 2019-12-23

### Added

- Initial commit
