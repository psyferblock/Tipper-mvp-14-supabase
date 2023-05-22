'use client'
import { useUsersContext } from '@/app/context/userContextStore'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/app/utils/supabase-browser'
import Link from 'next/link'
import { getEntityInfos } from '@/app/lib/get/getEntityInfos'
import { useSupabase } from '@/app/supabase-provider'
import { getMyEntityInfos } from '@/app/lib/get/getMyEntityInfos'
import { getEntityMenu } from '@/app/lib/get/getEntityMenu'

function GoToEntityButton() {
    const [entityData,setEntityData]=useState("")
    const [menuId,setMenuId]=useState("")
    const {session}= useSupabase()
const userId=session?.user.id
    // const {userId,
    // firstName,
    // lastName,
    // dateOfBirth,
    // gender,
    // contactNumber,
    // profilePictureUrl,
    // emailAddress,
    // uniqueUserName,
    // hasEntity,
    // setContactNumber,
    // setDateOfBirth,
    // setGender,
    // setProfilePicUrl,
    // setUserId,
    // setUserLastName,
    // setUserName,
    // setEmailAddress,
    // setUniqueName,
    // setHasEntity,}=useUsersContext()

    useEffect(()=>{
        const entityData= async ()=>{
            const entity=await getMyEntityInfos(userId)
            console.log('entity', entity)
        
            setEntityData(entity)
        }
        entityData()
    },[])
console.log('entityData.id', entityData.id)
    useEffect(()=>{
        const getMenuId=async ()=>{
            const menuData=await getEntityMenu(entityData.id)
            console.log('menuData', menuData)
            setMenuId(menuData.id)
        }
        getMenuId()
    },[entityData])
    console.log('entityData', entityData)
    console.log('menuId', menuId)

  return (

    <div>
        <button className="border-spacing-4 w-10 h-10 border-white">
            {/* <Link href={`entity/${entityData.entity_unique_name}/menu/${menuId}`}>
            go to entity
            </Link> */}
            go to entity 
        </button>
    </div>
  )
}

export default GoToEntityButton