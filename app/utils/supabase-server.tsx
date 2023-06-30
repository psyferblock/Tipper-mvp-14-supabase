import { createServerActionClient  } from "@supabase/auth-helpers-nextjs";
import {  cookies } from "next/headers";
export const createServerClient = () =>{
// const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
 createServerActionClient ({
    cookies,
  });
}
