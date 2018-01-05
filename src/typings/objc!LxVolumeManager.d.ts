
declare class LxVolumeManager extends NSObject {

	/**
	 * Returns a new instance of the receiving class.
	 */
	static alloc(): LxVolumeManager; // inherited from NSObject

	static beginObserveVolumeChange(volumeChangeCallBack: (p1: number) => void): void;

	static currentVolume(): number;

	static mute(): void;

	/**
	 * Allocates a new instance of the receiving class, sends it an init message, and returns the initialized object.
	 */
	static new(): LxVolumeManager; // inherited from NSObject

	static setVolume(volume: number): void;

	static stopObserveVolumeChange(): void;

	static unmute(): void;
}

declare var LxVolumeManagerVersionNumber: number;

declare var LxVolumeManagerVersionString: interop.Reference<number>;
