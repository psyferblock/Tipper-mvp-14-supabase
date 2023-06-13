import { supabase } from "@/app/utils/supabase-browser";

export async function getAllEntitiesServer({ supabaseServer: supabaseServer }) {
  const { data, error } = await supabaseServer
    .from("entity")
    .select(
      `id,entity_unique_name,entity_name,industry_id,entity_type_id,entity_address,entity_logo_url,entity_area,
      entity_menu_id(id,
        menu_category(id)
        ),
      entity_basic_media(media_category,media_url)
      `
    )
    .match({ is_verified: false });
  if (error) throw error;
  console.log("data from getAllEntitiesServer", data);
  return data;
}

// created_at: '2023-05-29T08:00:53.25679',
// id: '885c9273-1869-4466-b67e-935f51d06ad0',
// entity_name: 'smurf village',
// entity_address: 'the smurfin world',
// entity_email: 'psyferblock.io@gmail.com',
// entity_phone_number: '316219',
// whatsapp_phone_number: '03123456',
// instagram_link: 'https://www.instagram.com/lexfridman/?hl=en',
// facebook_link: 'https://www.facebook.com/claude.massaad.7',
// about_us_description: "'the about us section ",
// about_us_picture_url: 'https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/restaurant_images/885c9273-1869-4466-b67e-935f51d06ad0/8cd8e065-ddfa-4415-8ff3-454dd06d3c15',
// contact_us_description: 'this is the contact us page man ',
// contact_us_picture_url: 'https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/restaurant_images/885c9273-1869-4466-b67e-935f51d06ad0/ca6b25c3-09bc-4840-a5ed-046e59ada5c1',
// entity_logo_url: 'https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/logos/885c9273-1869-4466-b67e-935f51d06ad0/833eeb7b-aeda-4791-b08d-708dd3f557cf',
// user_id: '5cec353f-3692-4099-a777-c3075c9ba808',
// industry_id: 5,
// entity_type_id: 4,
// location_id: null,
// entity_tags: [ 'something', 'somewhere', 'someone' ],
// is_contact_us_public: true,
// is_verified: false,
// is_instagram_url_public: true,
// is_facebook_url_public: true,
// is_whatsapp_number_public: true,
// entity_unique_name: 'smurfvillage-78-692-4',
// entity_area: '78'
