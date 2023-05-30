import { supabase } from "@/app/utils/supabase-browser";

export default async function updateUserProfile(
{ userId:userId,
  firstName:firstName,
  lastName:lastName,
  dateOfBirth:dateOfBirth,
  gender:gender,
  contactNumber:contactNumber,
  profilePictureUrl:profilePictureUrl,
  emailAddress:emailAddress,
  uniqueUserName:uniqueUserName,
  hasEntity:hasEntity
}
) {
  const { data, error } = await supabase
    .from("user_profile")
    .update({
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      phone_number: contactNumber,
      date_of_birth: dateOfBirth,
      profile_picture_url: profilePictureUrl,
      email_address: emailAddress,
      unique_user_name: uniqueUserName,
      has_entity:hasEntity
    })
    .eq("user_id", userId)
    .select();
  if (error) throw error;
  console.log(data);
}
