---
title: "How To Setup SvelteKit with Supabase in VSCode"
imgUrl: "/post-images/terminal-setup.jpg"
youtubeId: "lEWghUOta-4"
publishedAt: "2025-06-04"
summary: "This is a complete walkthrough to set up SvelteKit with Supabase in your VSCode environment. Follow along to initialize the project, connect Supabase, and run your app smoothly."
---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [VSCode](https://code.visualstudio.com/)
- [Supabase Account](https://supabase.com/)

## Create SvelteKit Project

```bash
npm create svelte@latest sveltekit-supabase-app
cd sveltekit-supabase-app
npm install

...existing content...

## Set Up Supabase

1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Once your project is ready, navigate to the Project Settings and copy your **Project URL** and **anon public key**.

## Install Supabase Client

In your SvelteKit project directory, install the Supabase JS client:

```bash
npm install @supabase/supabase-js
```

## Configure Supabase in SvelteKit

Create a new file for your Supabase client, for example: `src/lib/supabaseClient.ts`

```typescript
// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_PUBLIC_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

Replace `YOUR_PROJECT_ID` and `YOUR_ANON_PUBLIC_KEY` with your actual Supabase credentials.

## Test the Connection

You can now use the Supabase client in your SvelteKit routes or components. For example, fetch user data in a page:

```typescript
// src/routes/+page.ts
import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data, error } = await supabase.from('users').select('*');
  return { users: data ?? [], error };
}
```

## Run Your App

Start your development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to see your SvelteKit app running.

---

## Next Steps

- Set up authentication with Supabase (email, OAuth, etc.)
- Create and manage tables in the Supabase dashboard
- Deploy your SvelteKit app to Vercel, Netlify, or your preferred platform

Happy coding!