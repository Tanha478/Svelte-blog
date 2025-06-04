<script lang="ts">
  import { goto } from '$app/navigation'
  import '../app.css'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
  export let data: LayoutData;
	let { supabase, session } = data
	$: ({ supabase, session } = data)
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})
     if (!session && pagePath !== '/login') {
    goto('/login');
  }
		return () => data.subscription.unsubscribe()
	})
  import MainHeader from "$lib/components/MainHeader.svelte";
  import ThemeInitializer from "$lib/components/ThemeInitializer.svelte";
  import { fly } from "svelte/transition";
  import "../app.css";
  import type { LayoutData } from "./$types";

  

  import { page } from '$app/stores';
  $: pagePath = $page.url.pathname;
  
</script>

<ThemeInitializer>
  <MainHeader />
  {#key pagePath}
    <main
      in:fly={{ y: -15, duration: 200, delay: 300 }}
      out:fly={{ y: 15, duration: 200 }}
      class="pt-24 max-w-5xl mx-auto"
    >
      <slot />
    </main>
  {/key}
</ThemeInitializer>
