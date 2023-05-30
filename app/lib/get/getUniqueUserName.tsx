import { supabase } from "@/app/utils/supabase";

export default async function getUniqueUserName(uniqueUserName){
    const {data,error}=await supabase
    .from("user_profile")
    .select()
    .eq("unique_user_name",uniqueUserName)
console.log('', data)
    if(error) throw error
    return data
}