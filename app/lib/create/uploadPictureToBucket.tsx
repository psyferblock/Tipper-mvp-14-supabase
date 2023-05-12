import { supabase } from "@/app/utils/supabase-browser";


export default async function uploadPictureToBucked(file, unqueUserName,bucket, folderLocationInBucket) {
  const storageUrl =
    "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/images-restaurant/";

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(folderLocationInBucket + folderLocationInBucket+file?.name, file as File);
  if (error) throw error;
  console.log("after picture is uploaded to bucket:", data);

  const pictureUrl = `${storageUrl}${data.path}`;
  return pictureUrl;
}
