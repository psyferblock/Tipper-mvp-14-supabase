import { createServerActionClient  } from "@supabase/auth-helpers-nextjs";
import {  cookies } from "next/headers";
export const createServerClient = () =>
createServerActionClient ({
    cookies,
  });
