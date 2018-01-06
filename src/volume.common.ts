import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';


export class Common extends Observable {
  constructor() {
    super();
  }

  public getVolume(): number { return null; }
  public mute() { }
  public setVolume(value: number) { }
  public unmute() { }
  public volumeDown() { }
  public volumeUp() { }
}
