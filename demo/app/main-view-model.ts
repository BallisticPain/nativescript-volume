import { Observable } from 'tns-core-modules/data/observable';
import { Volume } from 'nativescript-volume';

export class HelloWorldModel extends Observable {
  public message: string;
  private volume: Volume;

  constructor() {
    super();

    this.volume = new Volume();
    this.message = this.volume.message;
  }
}
