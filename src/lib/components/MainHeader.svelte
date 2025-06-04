<script>
  // src/lib/supabaseClient.ts
  import {handleLogout} from '$lib/auth';
  import DarkmodeButton from "./DarkmodeButton.svelte";
  import IconLink from "./IconLink.svelte";
  import GithubIcon from "./svg/GithubIcon.svelte";

  import Logo from "./svg/logo.png";
  import YoutubeIcon from "./svg/YoutubeIcon.svelte";
  // Make sure supabase and goto are imported or available in this scope
  // import { supabase } from 'path/to/your/supabaseClient';
  // import { goto } from '$app/navigation';
</script>

<header
  class="fixed z-10 top-0 inset-x-0 border-b
    bg-white dark:bg-dark-background dark:border-gray-800"
>
  <nav
    class="flex items-center justify-between max-w-5xl
    mx-auto px-4 h-24"
  >
    <a href="/"><img src={Logo} alt="Logo" class="w-28 h-28" /></a>

    <div class="flex space-x-1 items-center">
      <DarkmodeButton />

      <!-- <IconLink
        href="https://www.youtube.com/@joseanmartinez/featured"
        target="_blank"
      >
        <YoutubeIcon class="w-8 h-8 fill-current" />
      </IconLink> -->
      <IconLink
        href="https://github.com/Tanha478"
        target="_blank"
      >
        <GithubIcon class="w-8 h-8 fill-current" />
      </IconLink>

      <button on:click={() => {
         console.log('Logout button clicked');
        handleLogout();
}} class="border border-[#c352c3] bg-transparent text-[#c352c3] p-2 rounded-md hover:bg-purple-500 hover:text-[white]">Logout</button>

    </div>
  </nav>
</header>
