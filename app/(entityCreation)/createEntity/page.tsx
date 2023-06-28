"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useHasMounted } from "@/app/hooks/useHasMounted";
import getEntityTypes from "@/app/lib/get/getEntityTypes";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import createEntity from "@/app/lib/create/createEntity";
import createExchangeRate from "@/app/lib/create/createExchangeRate";
import createMenuCategory from "@/app/lib/create/createMenuCategory";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import updateUserProfile from "@/app/lib/update/updateUserProfile";
import { updateUserHasEntity } from "@/app/lib/update/updateUserHasEntity";
import { createEntityMenu } from "@/app/lib/create/createEntityMenu";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import { supabase } from "@/app/utils/supabase-browser";
import addOpeningHours from "@/app/lib/update/addOpeningHours";
import addClosingHours from "@/app/lib/update/addClosingHours";

const EntityCreationPage = () => {
  const router = useRouter();

  const { session } = useSupabase();
  // const userId = session?.user.id;
  const {
    userId,
    profileId,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    profilePictureUrl,
    emailAddress,
    uniqueUserName,
    hasEntity,
    setHasEntity,
  } = useUsersContext();

  const [entityName, setEntityName] = useState("");
  const [entityPhoneNumber, setEntityPhoneNumber] = useState(0);
  const [entityEmailAddress, setEntityEmailAddress] = useState("");
  const [entityArea, setEntityArea] = useState("");
  const [entityAddress, setEntityAddress] = useState("");

  /////////    /////////     /////////

  /////////    /////////     /////////

  // handling the types of entities that exist
  const [listOfEntityTypes, setListOfEntityTypes] = useState([]);
  const [entityType, setEntityType] = useState("restaurant");
  const [entityUniqueName, setEntityUniqueName] = useState("");
  const [entityTypeId, setEntityTypeId] = useState(0);
  // const [entityId, setEntityId] = useState("");

  /////////    /////////     /////////

  // console.log("entityTypeId", entityTypeId);

  //Error states
  const [entityNameIsNullError, setEntityNameIsNullError] = useState(false);
  const [entityAreaIsNullError, setEntityAreaIsNullError] = useState(false);
  const [entityAddressIsNullError, setEntityAddressIsNullError] =
    useState(false);
  const [entityEmailAddressIsNullError, setEntityEmailAddressIsNullError] =
    useState(false);
  const [entityPhoneNumberIsNullError, setEntityPhoneNumberIsNullError] =
    useState(false);
  /////////    /////////     /////////

  // submits the entity information

  const setTheErrorState = () => {
    setEntityNameIsNullError(false);
    setEntityAddressIsNullError(false);
    setEntityEmailAddressIsNullError(false);
    setEntityPhoneNumberIsNullError(false);
  };

  // get types of businesses from the database

  useEffect(() => {
    const getTypes = async () => {
      const response = await getEntityTypes();
      if (!response) {
        console.log("returned void from");
      } else {
        setListOfEntityTypes(response);
      }
    };

    getTypes();
  }, [session]);

  // SETTING THE UNIQUE NAME AND THE ARRAY TAGS
  useEffect(() => {
    const splitEntityName = entityName?.split(" ");
    const entityAreaSplit = entityArea?.split(" ");
    const connectedArea = entityAreaSplit?.join("");
    const filteredWords = splitEntityName?.filter(
      (word) => word != "the" && word != "and"
    );
    let uuidSample = userId?.slice(10, 15);

    const newName = filteredWords?.join("");
    const sEntityUniqueName = newName + "-" + connectedArea + "-" + uuidSample;
    setEntityUniqueName(sEntityUniqueName);
  }, [entityName, entityArea]);

  //Finding the entity type's id

  useEffect(() => {
    const isTypeObject = (type) => {
      return type.entity_type_name === entityType;
    };
    // return entityTypeId;
    let eTypeId = listOfEntityTypes.find(isTypeObject);
    setEntityTypeId(eTypeId?.id);
  }, [entityType,listOfEntityTypes]);
  console.log("listOfEntityTypes", listOfEntityTypes);
  console.log("eTypeId", entityTypeId);

  ///////////// //////////// /////////// //////////////

  //HANDLE CREATE NOW BUTTON MAN
  async function handleCreateNowButton() {
    // Checking for Errors
    setTheErrorState();
    if (!entityName) {
      setEntityNameIsNullError(true);
      console.log("were at the entity name ");
    } else if (!entityArea) {
      setEntityAreaIsNullError(true);
      console.log("were at the entity area ");
    } else if (!entityAddress) {
      setEntityAddressIsNullError(true);
      console.log("were at the entity address ");
    } else if (!entityEmailAddress) {
      setEntityEmailAddressIsNullError(true);
      console.log("were at the entity email ");
    } else if (!entityPhoneNumber) {
      setEntityPhoneNumberIsNullError(true);
      console.log("were at the entity number ");
    } else {
      // Creating the entity

      //Create the entity

      const response = await createEntity(
        userId,
        entityName,
        entityUniqueName,
        entityArea,
        entityAddress,
        entityEmailAddress,
        entityPhoneNumber,
        entityTypeId
      );
      if (response) {
        const entityId = response.id;

        console.log("entityId", entityId);
        //Creating an exchange rate row in DB referring to the newly created entity
        await createExchangeRate(entityId, "1500");

        // creating the first menu category
        const menuName = "original";
        const firstMenu = await createEntityMenu({
          entityId: entityId,
          menuName: menuName,
        });
        console.log("firstMenu", firstMenu);
        const firstMenuId = firstMenu?.id;
        console.log("firstMenuId", firstMenuId);

        let isPublic = true;
        let categoryName = "main";
        const firstMenuCategory = await createMenuCategory({
          categoryName: categoryName,
          isPublic: isPublic,
          menuId: firstMenuId,
        });
        console.log("firstMenuId", firstMenuId);
        const firstMenuCategoryId = firstMenuCategory.id;
        console.log("firstMenuCategoryId", firstMenuCategoryId);
        await addOpeningHours({
          openingHoursMondayFriday: "8:00",
          openingHoursSaturday: "9:00",
          openingHoursSunday: "9:00",
          entityId: entityId,
        });
        await addClosingHours({
          closingHoursMondayFriday: "20:00",
          closingHoursSaturday: "20:00",
          closingHoursSunday: "20:00",
          entityId: entityId,
        });

        if (firstMenuCategoryId) {
          router.push(
            `/entity/${entityUniqueName}/menu/${firstMenuId}/category/${firstMenuCategoryId}`
          );
        }
        setHasEntity(true);
        console.log("hasEntity", hasEntity);
        // await updateUserProfile({
        //   userId: userId,
        //   firstName: firstName,
        //   lastName: lastName,
        //   dateOfBirth: dateOfBirth,
        //   gender: gender,
        //   contactNumber: contactNumber,
        //   profilePictureUrl: profilePictureUrl,
        //   emailAddress: emailAddress,
        //   uniqueUserName: uniqueUserName,
        //   hasEntity: true,
        // });
        await supabase
          .from("user_profile")
          .update({ has_entity: true })
          .match({ id: profileId });
      } else {
        throw new Error("sorry something went wrong");
      }
      // const userHasEntity=true
      // updateUserHasEntity(userId,userHasEntity)
    }
  }
  // const HandleChange = (e) => {
  //   setEntityState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  return (
    <>
      <div className="max-h-full w-full bg-amethyst ">
        {/* LEFT SCREEN SETUP  */}
        {/* LEFT PART OF SCREEN */}
        <div className=" mb-0 p-3">
          <Link href={`/home`} className="flex items-center " passHref>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
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
        {/* where the entity is being created  */}
        <div className="p-4">
          <div>
            <h1 className="text-xl font-medium">Create an Entity Here</h1>
            <h1 className="text-lg font-medium">Welcome to the network.</h1>
            <h2 className="text-sm">
              when your done well reach out to you within the next days. and
              would love to meet you in person
            </h2>
          </div>
          {/* /////////// /////// ///////// //// */}
          <div className="space-y-3">
            {/* BUSINESS NAME  */}
            <div>
              <h1 className="ml-4 font-bold">Entity Name *</h1>

              <div className="text-grey-500 relative m-3 mb-3">
                <input
                  type="text"
                  name="entityName"
                  id="entityName"
                  className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none"
                  placeholder="entityName"
                  value={entityName || ""}
                  required
                  onChange={(e) => setEntityName(e.target.value)}
                />

                <label
                  htmlFor="entityName"
                  className="text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
                
                "
                >
                  Entity name
                </label>
                <h1
                  className={
                    entityNameIsNullError
                      ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                      : "invisible"
                  }
                >
                  Password should be minimum of 6 characters
                </h1>
              </div>
            </div>
            {/* ENDING OF BUSINESS NAME  */}
            {/* BUSINESS AREA  */}
            <div>
              <h1 className="ml-4 font-bold">Entity Area *</h1>
              <h1>
                please make sure this represents the area you are in with one
                word.
              </h1>

              <div className="text-grey-500 relative m-3 mb-3">
                <input
                  type="text"
                  name="entityArea"
                  id="entityArea"
                  className="text-wrap peer inline-block h-12 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent  shadow focus:border-ruby-shade focus:outline-none
                  "
                  placeholder="Enter Area"
                  // ref={entityAreaRef}
                  required
                  value={entityArea || ""}
                  onChange={(e) => setEntityArea(e.target.value)}
                />

                <label
                  htmlFor="BusinessName"
                  className="text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
                
                "
                >
                  Entity Area
                </label>
                <h1
                  className={
                    entityAreaIsNullError
                      ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                      : "invisible"
                  }
                >
                  Password should be minimum of 6 characters
                </h1>
              </div>
            </div>
            {/* //////// /////// /////// ///////  */}

            {/* CONTACT NUMBER   */}
            <div>
              <h1 className="ml-4 font-bold">Contact Number *</h1>

              <div className="text-grey-500 relative m-3 mb-3">
                <input
                  type="number"
                  name="entityPhoneNumber"
                  id="entityPhoneNumber"
                  className="text-wrap peer inline-block h-12 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent  shadow focus:border-ruby-shade focus:outline-none
                  "
                  placeholder="Contact Number"
                  // ref={entityPhoneNumberRef}
                  required
                  // value={entityPhoneNumber || 0}
                  onChange={(e) => setEntityPhoneNumber(e.target.value)}
                />

                <label
                  htmlFor="entityPhoneNumber"
                  className="text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute  left-4  top-3 
                
                z-10
                text-lg
               
                 transition-all peer-placeholder-shown:text-base    peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
                
                "
                >
                  Contact Number
                </label>
                <h1
                  className={
                    entityPhoneNumberIsNullError
                      ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                      : "invisible"
                  }
                >
                  Password should be minimum of 6 characters
                </h1>
              </div>
            </div>
            {/* //////// /////// /////// ///////  */}

            {/* EMAIL ADDRESS  */}
            <div>
              <h1 className="ml-4 font-bold">Email Address *</h1>

              <div className="text-grey-500 relative m-3 mb-3">
                <input
                  type="text"
                  name="entityEmailAddress"
                  id="entityEmailAddress"
                  className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none"
                  placeholder="Enter emailAddress"
                  // ref={entityEmailAddressRef}
                  required
                  value={entityEmailAddress || ""}
                  onChange={(e) => setEntityEmailAddress(e.target.value)}
                />

                <label
                  htmlFor="entityEmailAddress"
                  className="
text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600                
                "
                >
                  Email Address
                </label>
                <h1
                  className={
                    entityEmailAddressIsNullError
                      ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                      : "invisible"
                  }
                >
                  Password should be minimum of 6 characters
                </h1>
              </div>
            </div>
            {/* //////// /////// /////// ///////  */}

            {/* BUSINESS LOCATION  */}
            <div>
              <h1 className="ml-4 font-bold">Business Location *</h1>

              <div className="text-grey-500 relative m-3 mb-3">
                <input
                  type="text"
                  name="entityAddress"
                  id="entityAddress"
                  className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none"
                  placeholder="Enter Number"
                  // ref={entityAddressRef}
                  required
                  value={entityAddress || ""}
                  onChange={(e) => setEntityAddress(e.target.value)}
                />

                <label
                  htmlFor="entityAddress"
                  className="text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
                
                "
                >
                  Entity Location
                </label>
                <h1
                  className={
                    entityAddressIsNullError
                      ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                      : "invisible"
                  }
                >
                  Password should be minimum of 6 characters
                </h1>
              </div>
            </div>
            {/* //////// /////// /////// ///////  */}
            {/* BUSINESS TYPE  */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs font-medium text-gray-600"
              >
                Entity Type*
              </label>
              {/* BUSINESS TYPE FIELD */}
              <select
                defaultValue={"restaurant"}
                name="entityType"
                id="entityType"
                className="mb-3 block h-12 w-full rounded-md border-gray-300 pl-4 pr-12 text-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Select a type"
                onChange={(e) => {
                  const selectedType = e.target.value;
                  setEntityType(selectedType);
                }}
              >
                {listOfEntityTypes.map((entityTypeObject) => (
                  <option
                    key={entityTypeObject.id}
                    value={entityTypeObject.entity_type_name}
                  >
                    {entityTypeObject.entity_type_name}
                  </option>
                ))}
              </select>
            </div>
            {/* ENTING OF BUSINESS TYPE  */}
            {/* BUTTON  */}
            <button
              className="text-md m-3 mt-8 h-10 w-11/12 rounded-xl bg-diamond text-amethyst hover:bg-ruby-tint hover:text-lg"
              onClick={handleCreateNowButton}
            >
              go for it
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntityCreationPage;
