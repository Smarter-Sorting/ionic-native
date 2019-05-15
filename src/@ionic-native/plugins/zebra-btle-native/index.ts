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

@Plugin({
  pluginName: 'ZebraBTLENative',
  plugin: 'zebraprinterbtle', // npm package name, example: cordova-plugin-camera
  pluginRef: 'ZebraPrinterBTLE', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/jaredro/ZebraBluetoothLE.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android']
})
@Injectable()
export class ZebraBTLENative extends IonicNativePlugin {
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  listPrinters(arg0: any): Observable<string> {
    return;
  }

  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  getPrinters(arg0: any): Observable<string> {
    return;
  }

  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  print(arg0: any): Observable<string> {
    return;
  }
}
