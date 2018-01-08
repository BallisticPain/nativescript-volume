# NativeScript-Volume

This plugin allows you to programmatically control the volume in a NativeScript application. This is compatible with both iOS and Android.

## Installation

Run the following command from the root of your project:

```javascript
tns plugin add nativescript-volume
```

This command automatically installs the necessary files, as well as stores nativescript-volume as a dependency in your project's package.json file.

## Usage 

This plugin can be used with any flavor of NativeScript (Core, Angular, Vue, TypeScript, and/or JavaScript).

#### TypeScript
```TypeScript
import { Volume } from 'nativescript-volume';

export SomeClass {
  private volume: Volume;

  constructor() {
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
      // iOS Volume goes from 0 to 1. With its increments being 1/16.
      this.volume.setVolume(0.5);
    } else if (app.android) {
      // Android Volume I'm unsure of the range, but believe it to be 0 to 15 at least for the music stream.
      this.volume.setVolume(7);
    }
  }

  volumeDown() {
    this.volume.volumeDown();
  }

  getVolume() {
    // Please see Android TODO in the Api Section
    alert('Volume is' + this.volume.getVolume());
  }
}
```

## API

| Method: ReturnType | Description | Notes |
| ------------------ | ----------- | ----- |
| `mute(): void` | Mutes the volume of the Device | 
| `unmute(): void` | Unmutes the volume of the Device | 
| `volumeDown(): void` | Decreases the volume of the Device. | **Android** The device picks the active sound stream.
| `volumeUp(): void` | Increases the volume of the Device. | **Android** The device picks the active sound stream.
| `getVolume(): number` | Gets the current volume of the Device. | **Android** This currently only gets the music stream's volume.
| `setVolume(value: number): void` | Sets the current volume of the Device. | **Android** This currently only sets the music stream's volume.
    
## License

The MIT License
