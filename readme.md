<p align="center">
  <img width="300" alt="okinawa.js logo" src="/assets/okinawa_logo.png">
</p>

# okinawa.js

[![travis](https://img.shields.io/travis/com/okinawajs/okinawa.js/master?label=travis%20build%20%28master%29)](https://travis-ci.com/github/okinawajs/okinawa.js/branches)
[![travis](https://img.shields.io/travis/com/okinawajs/okinawa.js/develop?label=travis%20build%20%28develop%29)](https://travis-ci.com/github/okinawajs/okinawa.js/branches)

[![npm](https://img.shields.io/npm/v/okinawa.js)](https://www.npmjs.com/package/okinawa.js)
![npm](https://img.shields.io/npm/dt/okinawa.js)
[![david](https://david-dm.org/okinawajs/okinawa.js.svg)](https://david-dm.org/okinawajs/okinawa.js)
[![david](https://david-dm.org/okinawajs/okinawa.js/dev-status.svg)](https://david-dm.org/okinawajs/okinawa.js?type=dev)

## A simple javascript 2D game engine

A javascript game engine with no package dependencies.

Current list of features:

- [x] Multiple scenes/levels
- [x] Each level with its own hierarchy of items on screen
- [x] Item positioning and rotation inside the hierarchy
- [x] Independent background collection attached to the scene (with parallax)
- [x] Image preloading
- [x] GUI elements (text, console, menus, windows/frames)
- [x] Css fonts rendering to images (only re-rendered when text changes)
- [x] Simple item behaviour attaching it to a tracker (bezier curves, circles, sine movement, follow)
- [x] Particle system
- [x] Input controller per scene (key events subscribing or checking key status in real time)
- [x] Input combos: consecutive or simultaneous keys
- [x] Basic touch controls for touch devices
- [x] Clock subcriptions to wait for certain events
- [x] Basic audio support

## Demos (in separate projects)

- [Asteroids clone](https://github.com/okinawajs/okinawa-asteroids) demo in https://dev.neverbot.com/okinawa-asteroids/

## To Do

- [ ] Better audio system
- [ ] Item collections in the scene (multiple layers of items)
- [ ] Upload more examples of how to use the engine
- [ ] Some documentation or tutorial would be useful, don't you think?

