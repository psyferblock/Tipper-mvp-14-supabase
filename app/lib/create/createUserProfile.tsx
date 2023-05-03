import { supabase } from "@/app/utils/supabase";

export default async function createUserProfile(userId,emailAddress){

    

    const {data,error}= await supabase
    .from('user_profile')
    .insert({
        user_id:userId,
        email_address:emailAddress,
        // firstName:userName
    })
}
