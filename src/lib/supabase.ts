import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubxuzhytajrlndftekqi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVieHV6aHl0YWpybG5kZnRla3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjQ0NTIsImV4cCI6MjA0MTU0MDQ1Mn0.Jw7JEA_mAdDL1pRQTckT8FKc3O_G5bLK-JUBGV7ti8c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)