import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const supabase = createClient(
  'https://ooadkyctfhsyakhmeesy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vYWRreWN0ZmhzeWFraG1lZXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNjI0NzcsImV4cCI6MjA1NDYzODQ3N30.rsDmPDCgKV_-AX68nmi4p9FEr8F-R2UA-pHBLscnG68',
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
)
