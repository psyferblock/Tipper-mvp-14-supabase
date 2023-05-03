import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { Database } from '../database.types'

export const supabaseBrowser = createBrowserSupabaseClient()
export const createBrowserClient = () => createBrowserSupabaseClient();
