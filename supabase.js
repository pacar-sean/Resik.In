import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm'

const SUPABASE_URL = 'https://dljidtzrnavsvxppdkdb.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsamlkdHpybmF2c3Z4cHBka2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTg5NjcsImV4cCI6MjA5NDczNDk2N30.QzqUNPeQt7tEc7hiz6l3JWV4EM2hQP0AoAfRyYQ1M30'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)