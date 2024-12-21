<script>
	export let isRunning;
	export let onToggle;
	export let onReset;
</script>

<div class="controls">
	<button on:click={onToggle} class="control-btn">
		{isRunning ? 'Pause' : 'Start'}
	</button>
	<button on:click={onReset} class="control-btn reset">Reset</button>
</div>

<style>
	.controls {
		display: flex;
		gap: 1rem;
	}

	.control-btn {
		font-size: 1.2rem;
		padding: 0.5rem 2rem;
		border: none;
		border-radius: 5px;
		background-color: var(--color-theme-1);
		color: white;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.control-btn:hover {
		background-color: #ff5c2b;
	}

	.control-btn.reset {
		background-color: var(--color-theme-2);
	}

	.control-btn.reset:hover {
		background-color: #5085b6;
	}
</style>