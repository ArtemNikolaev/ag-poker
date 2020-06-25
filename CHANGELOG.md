# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- begin life cycle for round
- deck functionality
- add/remove/update user logic
- connect svelte
- playerName component
- playerList component
- reducer for chat

## [v0.5.0] - 2020-06-03
### Added
- class for game
- begin game functionality
- leave table functionality
- begin game functionality

## [v0.4.0] - 2020-06-02
### Changed
- fully rewrite store to simplify it

## [v0.3.0] - 2020-06-01
### Added
- logger
- logs for init.events
- logs for generateToken
- show in logs url for run from parent system if runned in wsl
- initialization page and styles

### Changed
- promisify index.js logic
- move logic from index.js to main.js in `server` folder
- move static js files to special 

## [v0.2.0] - 2020-05-23
### Added
- generateToken util
- init event for generating token
- back to commonJS, because Jest not working from the box with and i dont want to spend any time to fix it
- add index page with working initialization functionality

### Removed
- pug(for now), something not working from the box, will fix it later and back it to the project

## [v0.1.1] - 2020-05-18
### Changed
- rename modules to *.mjs
- change title in readme

## [v0.1.0] - 2020-05-18
### Added
- noop data model implementation
- set `type` field in package.json as module
### Changed
- js files rewrited to es6 modules manner
- moved routing to pages file
- moved socket functionality to socket file
- moved express to separate file

## [v0.0.2] - 2020-05-17
### Added
- README.md

## [v0.0.1] - 2020-05-17
### Added
- changelog
- express, pug, socket.io
- simple server realization
- simple socket realization
- repository field
- npm script named start to run easy server

[Unreleased]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.5.0...HEAD
[v0.5.0]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.4.0...v0.5.0
[v0.4.0]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.3.0...v0.4.0
[v0.3.0]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.2.0...v0.3.0
[v0.2.0]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.1.1...v0.2.0
[v0.1.1]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.1.0...v0.1.1
[v0.1.0]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.0.2...v0.1.0
[v0.0.2]: https://github.com/ArtemNikolaev/ag-poker/compare/v0.0.1...v0.0.2
[v0.0.1]: https://github.com/ArtemNikolaev/ag-poker/compare/c07530c21e64f4eb402614144fdc8b0c53dfe086...v0.0.1
