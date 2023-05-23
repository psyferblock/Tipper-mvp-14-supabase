import { supabase } from "@/app/utils/supabase-browser";

export default async function uploadPictureToBucket({
  file,
  storageSchema,
  bucket,
  id,
  uuid
}
  
) {
  const storageUrl =
    "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/";

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(
       id + "/" + uuid,
      file as File
    );
  if (error) throw error;
  console.log("after picture is uploaded to bucket:", data);

  const pictureUrl = `${storageUrl}/${storageSchema}/${bucket}/${data.path}`;
  console.log('pictureUrl', pictureUrl)
  return pictureUrl;
}
