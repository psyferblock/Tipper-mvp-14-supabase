import { supabase } from "@/app/utils/supabase-browser";

export default async function updateEntityInfos({
  entityTags: entityTags,
  entityPhoneNumber: entityPhoneNumber,
  entityEmailAddress: entityEmailAddress,
  instagramUrl: instagramUrl,
  isInstagramUrlPublic: isInstagramUrlPublic,
  facebookUrl: facebookUrl,
  isFacebookUrlPublic: isFacebookUrlPublic,
  whatsappNumber: whatsappNumber,
  isWhatsappNumberPublic: isWhatsappNumberPublic,
  aboutUsDescription: aboutUsDescription,
  aboutUsPictureUrl: aboutUsPictureUrl,
  isContactUsSectionPublic: isContactUsSectionPublic,
  contactUsDescription: contactUsDescription,
  contactUsPictureUrl: contactUsPictureUrl,
  isAboutUsPublic:isAboutUsPublic,
  // entityArea: entityArea,
  // entityAddress: entityAddress,
  entityId: entityId,
  entityLogoUrl: entityLogoUrl,
}) {
  //Entity Infos Updating from Database
  console.log("entityId top", entityId);

  const { data, error } = await supabase
    .from("entity")
    .update({
      entity_tags: entityTags,
      entity_logo_url: entityLogoUrl,
      entity_phone_number: entityPhoneNumber,
      entity_email: entityEmailAddress,
      instagram_link: instagramUrl,
      is_instagram_url_public: isInstagramUrlPublic,
      facebook_link: facebookUrl,
      is_facebook_url_public: isFacebookUrlPublic,
      whatsapp_phone_number: whatsappNumber,
      is_whatsapp_number_public: isWhatsappNumberPublic,
      about_us_description: aboutUsDescription,
      about_us_picture_url: aboutUsPictureUrl,
      is_contact_us_public: isContactUsSectionPublic,
      contact_us_description: contactUsDescription,
      contact_us_picture_url: contactUsPictureUrl,
      is_about_us_public:isAboutUsPublic,
      // entity_area: entityArea,
      // entity_address: entityAddress,
    })
    .match({ id: entityId });
  // .select()
  console.log("entityId from update entity infos ", entityId);

  if (error) throw error;
  console.log(data);
  return data;
}
