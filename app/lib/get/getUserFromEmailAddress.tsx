import {supabase} from '@/app/utils/supabase'

export async function getUserFromEmailAddress(emailAddress){
    const {data,error}=await supabase
    .from('user_profile')
    .select()
    .eq('email_address',emailAddress)
    .limit(1)
    .single()
console.log('data', data)
    if (error) throw error
    return data
}