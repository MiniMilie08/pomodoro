<script>
	export let config;
</script>

<div class="config-section">
	<h2>Configuration</h2>
	<div class="config-grid">
		<label>
			Session Time (min)
			<input type="number" bind:value={config.sessionTime} min="1" max="60" />
		</label>
		<label>
			Short Break (min)
			<input type="number" bind:value={config.shortBreakTime} min="1" max="30" />
		</label>
		<label>
			Long Break (min)
			<input type="number" bind:value={config.longBreakTime} min="1" max="60" />
		</label>
		<label>
			Sessions before Long Break
			<input type="number" bind:value={config.sessionsBeforeLongBreak} min="1" max="10" />
		</label>
		<label>
			Max Sessions
			<input type="number" bind:value={config.maxSessions} min="1" max="20" />
		</label>
	</div>
</div>

<style>
	.config-section {
		flex: 1;
		background: var(--color-bg-2);
		padding: 2rem;
		border-radius: 10px;
	}

	.config-section h2 {
		margin-top: 0;
		color: var(--color-theme-1);
		font-size: 1.5rem;
	}

	.config-grid {
		display: grid;
		gap: 1rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-weight: bold;
		color: var(--color-text);
	}

	input {
		padding: 0.5rem;
		border: 1px solid var(--color-bg-1);
		border-radius: 5px;
		font-size: 1rem;
	}

	input:focus {
		outline: 2px solid var(--color-theme-1);
		border-color: transparent;
	}
</style>