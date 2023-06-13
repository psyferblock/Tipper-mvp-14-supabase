import { supabase } from "@/app/utils/supabase-browser";

export async function getUserFromEmailAddress(emailAddress) {
  const { data, error } = await supabase
    .from("user_profile")
    .select()
    .eq("email_address", emailAddress)
    .limit(1)
    .single();
  if (error) throw error;
  console.log("user with the email address:", data);
  return data;
}
