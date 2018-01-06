import { Observable } from 'tns-core-modules/data/observable';
import { Volume } from 'nativescript-volume';
import * as app from 'tns-core-modules/application';

export class HelloWorldModel extends Observable {
  private volume: Volume;

  constructor() {
    super();

    this.volume = new Volume();
  }

  mute() {
    this.volume.mute();
  }

  unmute() {
    this.volume.unmute();
  }

  volumeUp() {
    this.volume.volumeUp();
  }

  volumeHalf() {
    if (app.ios) {
      this.volume.setVolume(0.5);
    } else if (app.android) {
      this.volume.setVolume(7);
    }
  }

  volumeDown() {
    this.volume.volumeDown();
  }

  getVolume() {
    alert('Volume is: "' + this.volume.getVolume() + '"');
  }
}
