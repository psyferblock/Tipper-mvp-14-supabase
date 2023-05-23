'use client'
import { useUsersContext } from '@/app/context/userContextStore'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/app/utils/supabase-browser'
import Link from 'next/link'
import { getEntityInfos } from '@/app/lib/get/getEntityInfos'
import { useSupabase } from '@/app/supabase-provider'
import { getMyEntityInfos } from '@/app/lib/get/getMyEntityInfos'
import { getEntityMenu } from '@/app/lib/get/getEntityMenu'
import { getEntityOfUser } from '@/app/lib/get/getEntityOfUser'
import { getMenuCategories } from '@/app/lib/get/getMenuCategories'

function GoToEntityButton( ) {
    const [entityState,setEntityState]=useState({})
    const [menuId,setMenuId]=useState(0)
    const {session}= useSupabase()
    const [categories,setCategories]=useState([])

const userId=session?.user.id
useEffect(()=>{
    const getEntity=async ()=>{
      const entityInfos=await getEntityOfUser(userId)
      setEntityState( entityInfos)
    }
    getEntity()


  },[])
   
    console.log('entityData', entityState)

   
const entityId=entityState.id
console.log('entityId', entityId)

// get the menu from the database using the entity Id
    useEffect(()=>{
        const getMenuId=async ()=>{
            const menuData=await getEntityMenu(entityId)
            console.log('menuData', menuData)
            setMenuId(menuData.id)
        }
        getMenuId()
    },[entityState])

    // get the category from database using mnu id 

    useEffect(()=>{
        const getMenuId=async ()=>{
            const categoriesArray=await getMenuCategories(menuId)
            console.log('categoriesArray', categoriesArray)
            setCategories(categoriesArray.id)
        }
        getMenuId()
    },[menuId])
    const firstCategoryId=categories[0].id
    console.log('entityData from effect ', entityState)
    console.log('menuId from effect', menuId)
const entityUniqueName=entityState?.entity_unique_name
console.log('entityUniqueName', entityUniqueName)
  return (

    <div>
        <button className="border-spacing-4 w-10 h-10 border-white">
            <Link href={`entity/${entityUniqueName}/menu/${menuId}/category/${firstCategoryId}`}>
            go to entity
            </Link>
        </button>
    </div>
  )
}

export default GoToEntityButton