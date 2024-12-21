export const DEFAULT_CONFIG = {
	sessionTime: 25,
	shortBreakTime: 5,
	longBreakTime: 15,
	sessionsBeforeLongBreak: 4,
	maxSessions: 8
};

export function formatTime(seconds) {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}