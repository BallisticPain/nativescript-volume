import * as app from 'tns-core-modules/application';
import { Common } from './volume.common';

export class Volume extends Common {
  private _audioManager: android.media.AudioManager;
  public AudioManager = android.media.AudioManager;

  constructor() {
    super();
    this._audioManager = app.android.context.getSystemService(android.content.Context.AUDIO_SERVICE);
  }

  public mute(): void {
    // Need the ADJUST_MUTE constant
    // this._audioManager.adjustVolume(this.AudioManager.ADJUST_MUTE, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
    this._audioManager.adjustVolume(-100, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
  }

  public unmute(): void {
    // Need the ADJUST_UNMUTE constant
    // this._audioManager.adjustVolume(this.AudioManager.ADJUST_UNMUTE, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
    this._audioManager.adjustVolume(100, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
  }

  public volumeDown() {
    this._audioManager.adjustVolume(this.AudioManager.ADJUST_LOWER, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
  }

  public volumeUp() {
    this._audioManager.adjustVolume(this.AudioManager.ADJUST_RAISE, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
  }

  public getVolume(): number {
    return this._audioManager.getStreamVolume(this.AudioManager.STREAM_MUSIC);
  }

  public setVolume(value: number) {
    this._audioManager.setStreamVolume(this.AudioManager.STREAM_MUSIC, value, this.AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE);
  }
}
