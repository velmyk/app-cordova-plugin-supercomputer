#import "CDVSupercomputer.h"
#import <Cordova/CDVPlugin.h>

@implementation CDVSupercomputer

- (void)senseOfLife:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    int three = 42;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:three];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end