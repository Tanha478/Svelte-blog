<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, SubmitFunction } from './$types'

	export let form: ActionData;

	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			await update()
			loading = false
		}
	}
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 px-4">
<form class="w-full max-w-md p-6 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" method="POST" use:enhance={handleSubmit}>
	<div class="col-6 form-widget">
		<h1 class="text-3xl font-bold text-center mb-2" style="color: #c352c3">Blog App</h1>
		<p class="text-center text-sm text-gray-600 dark:text-gray-300 mb-6">Sign in via magic link with your email below</p>
		{#if form?.message !== undefined}
		<div class="success {form?.success ? '' : 'fail'}">
			{form?.message}
		</div>
		{/if}

		<div class="mb-4">
			<label for="email" class="block mb-1 font-medium text-sm">Email address</label>
			<input
				id="email"
				name="email"
				class="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
				type="email"
				placeholder="Your email"
				value={form?.email ?? ''}
			/>
		</div>
		{#if form?.errors?.email}
		<span class="text-sm text-red-600 dark:text-red-400">
			{form?.errors?.email}
		</span>
		{/if}
		<div>
			<button class="w-full bg-[#c352c3] hover:bg-purple-600 transition-colors text-white font-semibold py-2 px-4 rounded-md" disabled={loading}>
				{ loading ? 'Loading' : 'Send magic link' }
			</button>
		</div>
	</div>
</form>
</div>