import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {  cookies } from "next/headers";
export const createServerClient = async () =>{

const supabaseServer= await createServerComponentClient ({
    cookies,
  });
  return supabaseServer
}
