import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Handle missing variables gracefully during build
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase credentials missing. If this is during build, ensure they are set in your environment if needed.")
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
)
