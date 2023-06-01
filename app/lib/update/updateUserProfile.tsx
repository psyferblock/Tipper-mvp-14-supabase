import { supabase } from "@/app/utils/supabase-browser";

export default async function updateUserProfile({
  profileId: profileId,
  firstName: firstName,
  lastName: lastName,
  dateOfBirth: dateOfBirth,
  gender: gender,
  contactNumber: contactNumber,
  // profilePictureUrl:profilePictureUrl,
  // emailAddress:emailAddress,
  // uniqueUserName:uniqueUserName,
  // hasEntity:hasEntity
}) {
  const { data, error } = await supabase
    .from("user_profile")
    .update({
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      phone_number: contactNumber,
      date_of_birth: dateOfBirth,
      // profile_picture_url: profilePictureUrl,
      // email_address: emailAddress,
      // unique_user_name: uniqueUserName,
      // has_entity:hasEntity
    })
    .match({ id: profileId })
    .select();
  if (error) throw error;
  console.log(data);
}

export async function updateProfilePictureUrl({
  profilePictureUrl: profilePictureUrl,
  profileId: profileId,
}) {
  const { data, error } = await supabase
    .from("user_profile")
    .update({
      profile_picture_url: profilePictureUrl,
    })
    .match({ id: profileId })
    .single();
  if (error) {
    throw error;
  }
  console.log("data from update profilePictureUrl ", data);
  return data;
}
