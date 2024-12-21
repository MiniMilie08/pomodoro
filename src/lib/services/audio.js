export class AudioService {
	constructor() {
		this.audio = new Audio('/alarm.mp3');
	}

	playAlert() {
		this.audio.currentTime = 0;
		this.audio.play().catch(error => {
			console.warn('Audio playback failed:', error);
		});
	}
}

export const audioService = new AudioService();
