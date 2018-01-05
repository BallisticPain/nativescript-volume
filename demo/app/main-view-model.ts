import { Observable } from 'tns-core-modules/data/observable';
import { Volume } from 'nativescript-volume';

export class HelloWorldModel extends Observable {
  public message: string;
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
    this.volume.setVolume(0.5);
  }

  volumeDown() {
    this.volume.volumeDown();
  }
}
