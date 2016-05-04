# Cordova useless plugin


This plugin provides a way to do some useless things with device.

This plugin defines global objects including `navigator.useless`.

Although in the global scope, they are not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.useless);
    }

## Installation

    cordova plugin add https://github.com/velmyk/cordova-plugin-useless.git

## Supported Platforms

navigator.useless<br />

- iOS