import { supabase } from "@/app/utils/supabase-browser";

export default async function updateEntityInfos({
  entityName:entityName,
    entityTags:entityTags,
  entityPhoneNumber:entityPhoneNumber,
  entityEmailAddress:entityEmailAddress,
  instagramUrl:instagramUrl,
  isInstagramUrlPublic:isInstagramUrlPublic,
  facebookUrl:facebookUrl,
  isFacebookUrlPublic:isFacebookUrlPublic,
  whatsappNumber:whatsappNumber,
  isWhatsappNumberPublic:isWhatsappNumberPublic,
  aboutUsDescription:aboutUsDescription,
  aboutUsPictureUrl:aboutUsPictureUrl,
  isContactUsSectionPublic:isContactUsSectionPublic,
  contactUsDescription:contactUsDescription,
  contactUsPictureUrl:contactUsPictureUrl,
  entityOwnerId:entityOwnerId,
  industryId:industryId,
  entityTypeId:entityTypeId,
  locationId:locationId,
  isContactUsPublic:isContactUsPublic,
  isVerified:isVerified,
  entityUniqueName:entityUniqueName,
  entityArea:entityArea,
  entityAddress:entityAddress,
  entityId:entityId,
}

) {
  //Entity Infos Updating from Database
  const { data, error } = await supabase
    .from("entity")
    .insert({
      entity_name:entityName,
      entity_tags:entityTags,
      entity_phone_number:entityPhoneNumber,
      entity_email:entityEmailAddress,
      instagram_link:instagramUrl,
      is_instagram_url_public:isInstagramUrlPublic,
      facebook_link:facebookUrl,
      is_facebook_url_public:isFacebookUrlPublic,
      whatsapp_phone_number:whatsappNumber,
      is_whatsapp_number_public:isWhatsappNumberPublic,
      about_us_description:aboutUsDescription,
      about_us_picture_url:aboutUsPictureUrl,
      is_contact_us_public:isContactUsSectionPublic,
      contact_us_description:contactUsDescription,
      contact_us_picture_url:contactUsPictureUrl,
      user_id:entityOwnerId,
      is_verified:isVerified,
      industry_id:industryId,
      entity_type_id:entityTypeId,
      location_id:locationId,
      entity_unique_name:entityUniqueName,
      entity_area:entityArea,
      entity_address:entityAddress,
    })
    .eq("id", entityId)
    .select()
  if (error) throw error;
  console.log(data);
}
