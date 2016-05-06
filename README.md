# Cordova Supercomputer Plugin


This plugin provides a way to do some super computing on device.

This plugin defines global objects including `navigator.supercomputer`.

Although in the global scope, they are not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.supercomputer);
    }

## Installation

    cordova plugin add https://github.com/velmyk/cordova-plugin-supercomputer.git

## Supported Platforms

navigator.supercomputer<br />

- iOS