<script>
  import DarkmodeButton from "./DarkmodeButton.svelte";
  import IconLink from "./IconLink.svelte";
  import GithubIcon from "./svg/GithubIcon.svelte";

  import Logo from "./svg/logo.png";
  import YoutubeIcon from "./svg/YoutubeIcon.svelte";
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
    </div>
  </nav>
</header>
