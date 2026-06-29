import 'react-native-url-polyfill/auto'; 
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  "https://ehbdwhtmnjnrzliotsss.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYmR3aHRtbmpucnpsaW90c3NzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTI0MTkzOCwiZXhwIjoyMDk2ODE3OTM4fQ.XqpvryJaj7xPNNOb1bf7uWbVc9q8wnn-Gq7-V7pWMuE"
);