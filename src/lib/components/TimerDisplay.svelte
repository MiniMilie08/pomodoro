<script>
	import { formatTime } from '$lib/stores/timer';
	export let timeLeft;
	export let progress;
	export let currentSession;
	export let maxSessions;
	export let isBreak;
	export let isLongBreak;
</script>

<div class="timer-display">
	<h1>{formatTime(timeLeft)}</h1>
	<div class="progress-bar">
		<div class="progress" style="width: {$progress}%"></div>
	</div>
	<p class="session-info">
		Session {currentSession} / {maxSessions}
		{#if isBreak}
			({isLongBreak ? 'Long Break' : 'Short Break'})
		{:else}
			(Work)
		{/if}
	</p>
</div>

<style>
	.timer-display {
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		margin: 10px;
		padding: 1em 2em;
		border-radius: 8px;
	}

	.timer-display h1 {
		font-size: 6rem;
		margin: 0;
		color: white;
	}

	.progress-bar {
		width: 100%;
		height: 20px;
		background-color: var(--color-bg-1);
		border-radius: 10px;
		overflow: hidden;
		margin: 1rem 0;
	}

	.progress {
		height: 100%;
		background-color: #1e58d4;
		transition: width 0.3s ease;
	}

	.session-info {
		font-size: 1.2rem;
		color: white;
		margin: 0.5rem 0;
	}
</style>