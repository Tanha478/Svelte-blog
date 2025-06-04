---
title: "How To Setup And Use Next.js With Supabase In VSCode"
imgUrl: "/post-images/yabai-setup.jpg"
youtubeId: "WdA6b0jPNv4"
publishedAt: "2025-06-04"
summary: "Follow this guide to set up a Next.js project with Supabase in VSCode. You'll learn how to initialize your project, connect Supabase, and implement authentication and database features."
---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [VSCode](https://code.visualstudio.com/)
- [Supabase Account](https://supabase.com/)
- [Git](https://git-scm.com/) (optional, but recommended)

## Create a Next.js Project

Open your terminal and run:

```bash
npx create-next-app@latest nextjs-supabase-app
cd nextjs-supabase-app
npm install
```

You can use `yarn` or `pnpm` if you prefer.

## Open the Project in VSCode

```bash
code .
```

## Install Supabase Client

In your project directory, install the Supabase JS client:

```bash
npm install @supabase/supabase-js
```

## Set Up Supabase Project

1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Once your project is ready, go to Project Settings > API and copy your **Project URL** and **anon public key**.

## Configure Supabase Client in Next.js

Create a new file for your Supabase client, for example: `lib/supabaseClient.ts`

```typescript
// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_PUBLIC_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

Replace `YOUR_PROJECT_ID` and `YOUR_ANON_PUBLIC_KEY` with your actual Supabase credentials.

## Add Environment Variables (Recommended)

Instead of hardcoding your keys, create a `.env.local` file in your project root:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_PUBLIC_KEY
```

Then update your `lib/supabaseClient.ts`:

```typescript
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
```

## Test Supabase Connection

Try fetching data from a table (e.g., `users`) in a page or API route:

```typescript
// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ users: data });
}
```

## Add Authentication (Magic Link Example)

Create a simple sign-in form in `pages/signin.tsx`:

```tsx
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : 'Check your email for the magic link!');
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Magic Link</button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

## Run Your App

Start your development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your Next.js app running.

## Useful VSCode Extensions

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Supabase](https://marketplace.visualstudio.com/items?itemName=supabase.supabase-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Next Steps

- Set up Supabase Row Level Security (RLS) and policies
- Add OAuth providers (Google, GitHub, etc.)
- Deploy your Next.js app to Vercel or Netlify
- Explore Supabase Storage and Realtime features

---

Happy coding with Next.js and Supabase!