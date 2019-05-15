/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin
} from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Scale Native
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ScaleNative } from '@ionic-native/scale-native';
 *
 *
 * constructor(private scaleNative: ScaleNative) { }
 *
 * ...
 *
 *
 * this.scaleNative.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'ScaleNative',
  plugin: 'cordova-plugin-bluetooth-serial', // npm package name, example: cordova-plugin-camera
  pluginRef: 'bluetoothSerial', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/don/BluetoothSerial.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class ScaleNative extends IonicNativePlugin {
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  write(data: Uint8Array): Observable<any> {
    return;
  }

  @Cordova({
    successIndex: 0,
    errorIndex: 1,
    observable: true
  })
  read(): Observable<any> {
    return;
  }

  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  connect(macAddress: string): Observable<any> {
    return;
  }

  @Cordova({
    successIndex: 0,
    errorIndex: 1,
    observable: true
  })
  isConnected(): Observable<any> {
    return;
  }

  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  connectInsecure(macAddress: string): Observable<any> {
    return;
  }

  @Cordova({
    successIndex: 0,
    errorIndex: 1,
    observable: true
  })
  disconnect(): Observable<any> {
    return;
  }

  @Cordova({
    successIndex: 0,
    errorIndex: 1,
    observable: true
  })
  discoverUnpaired(): Observable<any> {
    return;
  }
}
