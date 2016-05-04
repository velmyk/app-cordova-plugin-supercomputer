# Cordova harmful plugin


This plugin provides a way to do some useless things with device.

This plugin defines global objects including `navigator.harm`.

Although in the global scope, they are not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.harm);
    }

## Installation

    cordova plugin add https://github.com/velmyk/cordova-plugin-harmful.git

## Supported Platforms

navigator.harm<br />

- iOS