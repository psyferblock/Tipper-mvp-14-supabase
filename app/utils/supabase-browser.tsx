"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

 export const supabase =  createClientComponentClient(
    


);
export default supabase

