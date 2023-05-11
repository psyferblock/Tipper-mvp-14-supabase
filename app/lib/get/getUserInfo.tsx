import { supabase } from "@/app/utils/supabase-browser";

export async function getMyUserInfos(userId){
    const {data,error}=await supabase
    .from("user_profile")
    .select()
    .eq("user_id",userId)
    if (error)throw error
    console.log('user profile data', data)
    return data[0]
}

export async function getMyUserInfoServer(supabaseServerClient,userId){
    const {data,error} = await supabaseServerClient
    .from("user_profile")
    .select()
    .eq("user_id",userId)
    if (error) throw error
    console.log('server side user information data', data)
    return data[0]
}



// looks like it returns an array of Objects 