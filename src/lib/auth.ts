// src/lib/auth.ts

import { goto } from '$app/navigation';
import { supabase } from './supabase';

/**
 * Logs out the current user and redirects to the login page.
 */
export async function handleLogout() {
 const res = await fetch('/logout', { method: 'POST' });

  if (res.ok) {
    window.location.href = '/login'; // Force reload
  } else {
    console.error('Logout failed');
  }
}
