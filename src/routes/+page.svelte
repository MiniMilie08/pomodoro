<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { DEFAULT_CONFIG } from '$lib/stores/timer';
	import TimerDisplay from '$lib/components/TimerDisplay.svelte';
	import Controls from '$lib/components/Controls.svelte';
	import ConfigSection from '$lib/components/ConfigSection.svelte';

	let timeLeft = 25 * 60;
	let isRunning = false;
	let currentSession = 0;
	let timerInterval;
	let progress = spring(100);
	let config = { ...DEFAULT_CONFIG };
	let isBreak = false;
	let isLongBreak = false;

	function toggleTimer() {
		if (isRunning) {
			clearInterval(timerInterval);
		} else {
			timerInterval = setInterval(updateTimer, 1000);
		}
		isRunning = !isRunning;
	}

	function updateTimer() {
		if (timeLeft > 0) {
			timeLeft--;
			$progress = (timeLeft / (getCurrentPeriodTime() * 60)) * 100;
		} else {
			handlePeriodEnd();
		}
	}

	function getCurrentPeriodTime() {
		if (isLongBreak) return config.longBreakTime;
		if (isBreak) return config.shortBreakTime;
		return config.sessionTime;
	}

	function handlePeriodEnd() {
		if (!isBreak) {
			currentSession++;
			if (currentSession % config.sessionsBeforeLongBreak === 0) {
				isLongBreak = true;
				isBreak = true;
			} else {
				isBreak = true;
				isLongBreak = false;
			}
		} else {
			isBreak = false;
			isLongBreak = false;
		}

		timeLeft = getCurrentPeriodTime() * 60;
		$progress = 100;
	}

	function resetTimer() {
		clearInterval(timerInterval);
		isRunning = false;
		currentSession = 0;
		isBreak = false;
		isLongBreak = false;
		timeLeft = config.sessionTime * 60;
		$progress = 100;
	}

	function updateTimerOnConfigChange() {
		if (!isRunning) {
			timeLeft = getCurrentPeriodTime() * 60;
			$progress = 100;
		}
	}

	$: if (config) updateTimerOnConfigChange();
</script>

<svelte:head>
	<title>Pomodoro Timer</title>
</svelte:head>

<div class="container">
	<div class="timer-section">
		<TimerDisplay
			{timeLeft}
			progress={progress}
			{currentSession}
			maxSessions={config.maxSessions}
			{isBreak}
			{isLongBreak}
		/>
		<Controls
			{isRunning}
			onToggle={toggleTimer}
			onReset={resetTimer}
		/>
	</div>
	<ConfigSection bind:config />
</div>

<style>
	.container {
		display: flex;
		gap: 2rem;
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.timer-section {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;
		}
	}
</style>