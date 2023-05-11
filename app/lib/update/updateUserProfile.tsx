import { supabase } from "@/app/utils/supabase-browser";

export default async function updateUserProfile(
  userId,
  firstName,
  lastName,
  dateOfBirth,
  gender,
  contactNumber,
  profilePictureUrl
) {
  const { data, error } = supabase.from("user_profile").update({
    
    first_name: firstName,
      last_name: lastName,
      gender: gender,
      phone_number: contactNumber,
      date_of_birth: dateOfBirth,
      profile_picture_url: profilePictureUrl,
})
   .eq("user_id", userId)
    .select();
  if (error) throw error;
  console.log(data);
}
