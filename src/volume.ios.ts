import { Common } from './volume.common';

export class Volume extends Common {
  constructor() {
    super();
  }

  public mute(): void {
    LxVolumeManager.mute();
  }

  public unmute(): void {
    LxVolumeManager.unmute();
  }

  public volumeDown() {
    this.setVolume(LxVolumeManager.currentVolume() - (1 / 16));
  }

  public volumeUp() {
    this.setVolume(LxVolumeManager.currentVolume() + (1 / 16));
  }

  public getVolume(): number {
    return LxVolumeManager.currentVolume();
  }

  public setVolume(value: number) {
    LxVolumeManager.setVolume(value);
  }
}
