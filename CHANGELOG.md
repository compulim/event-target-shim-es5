# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
