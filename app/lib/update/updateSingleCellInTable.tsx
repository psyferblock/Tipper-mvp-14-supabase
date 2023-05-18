import { supabase } from "@/app/utils/supabase-browser";

export async function updateSingleCell(tableName,rowId,columnName,cellValue){
    const {data,error}=await supabase.from(tableName).update({
  entityId: rowId,
  column_name: columnName,
  value: cellValue,
});
}