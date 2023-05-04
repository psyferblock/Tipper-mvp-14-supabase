import { supabase } from "@/app/utils/supabase";

export default async function createUserProfile(userId,emailAddress){

    

    const {data,error}= await supabase
    .from('user_profile')
    .insert({
        user_id:userId,
        email_address:emailAddress,
        // firstName:userName
    })
    .select()
    .single()
    console.log('create User Profile Data returned', data)
    if (error) throw error
    

}
// this function returns all the user data that exists in the user_profile 
// so we can extract from it the id and all the good stuff 
