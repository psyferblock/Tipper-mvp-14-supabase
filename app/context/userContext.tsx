"use client";

import React from 'react'
import {useEffect,useReducer,createContext,useContext} from 'react'

const userContextState={

}
const userContext=createContext(userContextState)


function userContext() {
  return (
    <div>userContext</div>
  )
}

export default userContext