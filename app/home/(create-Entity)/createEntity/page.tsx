"use client";
import React, { useRef, useState,useEffect } from "react";
import Link from "next/link";
import { useHasMounted } from "@/app/hooks/useHasMounted";
import getEntityTypes from "@/app/lib/get/getEntityTypes";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

function EntityCreationPage() {
  const router = useRouter();

  const { session } = useSupabase();
  const userId = session?.user.id;

   //States
  const [entityName, setEntityName] = useState<string | undefined>();
  const [entityAddress, setEntityAddress] = useState<string | undefined>();
  const [entityEmailAddress, setEntityEmailAddress] = useState<
    string | undefined
  >();
  const [entityPhoneNumber, setEntityPhoneNumber] = useState<
    number | undefined
  >();
      /////////    /////////     /////////

  // handling the types of entities that exist 
  const [listOfEntityTypes,setListOfEntityTypes]=useState([])
  const [entityTypeNameSelected, setEntityTypeNameSelected] = useState();
    /////////    /////////     /////////

  //Error states
  const [entityNameIsNullError, setEntityNameIsNullError] = useState(false);
  const [entityAddressIsNullError, setEntityAddressIsNullError] =
    useState(false);
  const [entityEmailAddressIsNullError, setEntityEmailAddressIsNullError] =
    useState(false);
  const [entityPhoneNumberIsNullError, setEntityPhoneNumberIsNullError] =
    useState(false);
    /////////    /////////     /////////


  // submits the entity information
  const handleEntityCreation = () => {};
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
// checking for validity of the input 
const checkForEntityName=(value)=>{
  if(value.length<1){
    set
  }
}
  useEffect(()=>{
    const getTypes=async ()=>{
      const response=await getEntityTypes()
      setListOfEntityTypes(response)
    }
    getTypes()
  },[])

 async function handleCreateNowButton() {
    // Checking for Errors
    setEntityNameIsNullError(false);
    setEntityAddressIsNullError(false);
    setEntityEmailAddressIsNullError(false);
    setEntityPhoneNumberIsNullError(false);
    if (!entityName?.length) {
      setEntityNameIsNullError(true);
    } else if (!entityAddress?.length) {
      setEntityAddressIsNullError(true);
    } else if (!entityEmailAddress?.length) {
      setEntityEmailAddressIsNullError(true);
    } else if (!entityPhoneNumber) {
      setEntityPhoneNumberIsNullError(true);
    } else {
      // Creating the entity

      //Finding the entity type's id
      let entityTypeId;
      listOfEntityTypes.map((entityTypeObject) => {
        if (entityTypeObject.entity_type_name == entityTypeNameSelected) {
          entityTypeId = entityTypeObject.id;
        }
      });
      const arrOfTags = [entityTypeNameSelected];

      //Create the entity
      const response = await createEntity(
        userId,
        entityName,
        entityTypeId,
        entityAddress,
        entityEmailAddress,
        entityPhoneNumber,
        arrOfTags
      );

      
    }
  }

  return (
    <div className="bg-amethyst w-screen ">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className=" mb-0 p-3">
          <Link href={`home`} className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className="text-md font-medium">Back</div>
          </Link>
        </div>
      </div>
      {/* where the entity is being created  */}
      <div className="p-4">
        <div>
          <h1 className="font-medium text-xl">Create an Entity Here</h1>
          <h1 className="text-lg font-medium">Welcome to the network.</h1>
          <h2 className="text-sm">
            when your done well reach out to you within the next days. and would
            love to meet you in person
          </h2>
        </div>
        <div className="space-y-3">
          {/* BUSINESS NAME  */}
          <div>
            <h1 className="ml-4 font-bold">Entity Name *</h1>

            <div className="relative text-grey-500 m-3 mb-3">
              <input
                type="text"
                name="BusinessName"
                id="BusinessName"
                className="peer h-12 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                placeholder="Enter Number"
                ref={entityNameRef}
                required
              />

              <label
                htmlFor="BusinessName"
                className="absolute left-4 top-3 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:text-grey-400
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
              >
                Entity name
              </label>
            </div>
          </div>
          {/* ENTING OF BUSINESS NAME  */}
          {/* CONTAT NUMBER   */}
          <div>
            <h1 className="ml-4 font-bold">Contact Number *</h1>

            <div className="relative text-grey-500 m-3 mb-3">
              <input
                type="text"
                name="ContactNumber"
                id="ContactNumber"
                className="peer h-12 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                placeholder="Contact Number"
                ref={contactNumberRef}
                required
                onChange={()=>{
                  checkForinput()
                }}
              />

              <label
                htmlFor="ContactNumber"
                className="absolute left-4 top-3 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:text-grey-400
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
              >
                Contact Number
              </label>
            </div>
          </div>
          {/* ENTING OF CONTACT NUMBER  */}
          {/* EMAIL ADDRESS  */}
          <div>
            <h1 className="ml-4 font-bold">Email Address *</h1>

            <div className="relative text-grey-500 m-3 mb-3">
              <input
                type="email"
                name="EmailAddress"
                id="EmailAddress"
                className="peer h-12 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                placeholder="Enter Number"
                ref={entityEmailAddressRef}
                required
              />

              <label
                htmlFor="EmailAddress"
                className="absolute left-4 top-3 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:text-grey-400
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
              >
                Email Address
              </label>
            </div>
          </div>
          {/* ENTING OF EMAIL ADDRESS  */}
          {/* BUSINESS LOCATION  */}
          <div>
            <h1 className="ml-4 font-bold">Business Location *</h1>

            <div className="relative text-grey-500 m-3 mb-3">
              <input
                type="text"
                name="BusinessLocation"
                id="BusinessName"
                className="peer h-12 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                placeholder="Enter Number"
                ref={entityLocationRef}
                required
              />

              <label
                htmlFor="BusinessLocation"
                className="absolute left-4 top-3 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:text-grey-400
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
              >
                Entity Location
              </label>
            </div>
          </div>
          {/* ENTING OF BUSINESS LOCATION  */}
          {/* BUSINESS TYPE  */}
          <div className="space-y-1">
            <label
              htmlFor="names"
              className="text-xs text-gray-600 font-medium"
            >
              Entity Type*
            </label>
            {/* BUSINESS TYPE FIELD */}
            <select
              name="business type"
              id="business type"
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Select a type"
              onChange={(e)=>{setEntityTypeNameSelected(e.target.value)}}
            >
              {entityTypes.map((entityTypeObject) => (
                  <option>{entityTypeObject.entity_type_name}</option>
                ))}
            </select>
          </div>
          {/* ENTING OF BUSINESS TYPE  */}
          {/* BUTTON  */}
          <button
            className="w-11/12 h-10 mt-8 hover:bg-ruby-tint hover:text-lg rounded-xl bg-diamond text-amethyst text-md m-3"
            // onClick={handleSignInButton}
          >
            <Link href="home">Proceed</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntityCreationPage;
