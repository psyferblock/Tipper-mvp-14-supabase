"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import ToggleButton from "@/app/root_components/tools_components/ToggleButton";
// import { useManageEntityInfosContext } from "../Contexts/EntityInfoContext";

export default function ManageSocialMedia() {
  const {
    entityPhoneNumber,
    entityEmailAddress,
    instagramUrl,
    isInstagramUrlPublic,
    facebookUrl,
    isFacebookUrlPublic,
    whatsappNumber,
    isWhatsappNumberPublic,
    setPhoneNumber,
    setEmailAddress,
    setInstagramUrl,
    setIsInstagramUrlPublic,
    setFacebookUrl,
    setIsFacebookUrlPublic,
    setWhatsappNumber,
    setIsWhatsappNumberPublic,
    changeInput,
  } = useEntityContext();

  //Changing the state in context of isPublic to the opposite boolean value of current state
  function handleInstagramToggleButton(boolean:boolean) {
    setIsInstagramUrlPublic(boolean);
  }

  function handleFacebookToggleButton(boolean:boolean) {
    setIsFacebookUrlPublic(boolean);
  }
  function handleWhatsappToggleButton(boolean:boolean) {
    setIsWhatsappNumberPublic(boolean);
  }

  return (
    <div className=" rounded-lg bg-white p-3 drop-shadow-lg sm:p-4">
      <div className="mb-1 text-lg font-bold">Phone Number & Social Media</div>
      <div className="divide-y">
        {/* PHONE NUMBER ROW */}
        <div className="items-center justify-start space-y-2 py-5 sm:flex sm:space-y-0">
          <div className="flex space-x-2 sm:w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <div>Phone Number</div>
          </div>
          {/* PHONE NUMBER INPUT FIELD */}
          <div className="sm:w-96">
            <input
              type="numeric"
              name="entityPhoneNumber"
              id="entityPhoneNumber"
              className="block h-12 rounded-md border-gray-400 pl-7 pr-12 focus:border-amethyst  focus:ring-amethyst sm:w-3/4 sm:text-sm"
              placeholder="03 456 789"
              value={entityPhoneNumber}
              onChange={(e) => changeInput(e.target.value)}
            />
          </div>
          {/* <div className="flex space-x-2 sm:space-x-3 grow sm:px-9">
            <div className="mt-0.5">
            <ToggleButton
                
              />
            </div>
            <p className=" sm:text-sm text-gray-500">Show on your page</p>
          </div> */}
        </div>
        {/* EMAIL ADDRESS ROW */}
        <div className="items-center justify-start space-y-2 py-5 sm:flex sm:space-y-0">
          <div className=" flex space-x-2 sm:w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <div>Email Address</div>
          </div>
          {/* EMAIL ADDRESS INPUT FIELD */}
          <div className=" sm:w-96">
            <input
              type="text"
              name="entityEmailAddress"
              id="entityEmailAddress"
              className="block h-12 rounded-md border-gray-400 pl-7 pr-12 focus:border-amethyst  focus:ring-amethyst sm:w-3/4 sm:text-sm"
              placeholder="Email Address"
              value={entityEmailAddress}
              onChange={(e) => changeInput(e.target.value)}
            />
          </div>
          {/* <div className="flex space-x-2 sm:space-x-3 grow sm:px-9">
            <div className="mt-0.5">
              <ToggleButton />
            </div>
            <p className=" sm:text-sm text-gray-500">Show on your page</p>
          </div> */}
        </div>
        {/* INSTAGRAM ROW */}
        <div className="items-center justify-start space-y-2 py-5 sm:flex sm:space-y-0">
          <div className=" flex space-x-2 sm:w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 w-6"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>

            <div>Instagram</div>
          </div>
          {/* INSTAGRAM INPUT FIELD */}
          <div className=" sm:w-96">
            <input
              type="text"
              name="instagramUrl"
              id="instagramUrl"
              className="block h-12 rounded-md border-gray-400 pl-7 pr-12 focus:border-amethyst  focus:ring-amethyst sm:w-3/4 sm:text-sm"
              placeholder="Link"
              value={instagramUrl}
              onChange={(e) => changeInput(e.target.value)}
            />
          </div>
          <div className="flex grow space-x-2 sm:space-x-3 sm:px-9">
            <div className="mt-0.5">
              <ToggleButton
                handleToggleButton={handleInstagramToggleButton}
                switchedOn={isInstagramUrlPublic}
              />
            </div>
            <p className=" text-gray-500 sm:text-sm">Show on your page</p>
          </div>
        </div>
        {/* FACEBOOK ROW */}
        <div className="items-center justify-start space-y-2 py-5 sm:flex sm:space-y-0">
          <div className=" flex space-x-2 sm:w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-6 w-6"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>

            <div>Facebook</div>
          </div>
          {/* FACEBOOK INPUT FIELD */}
          <div className=" sm:w-96">
            <input
              type="text"
              name="facebookUrl"
              id="facebookUrl"
              className="block h-12 rounded-md border-gray-400 pl-7 pr-12 focus:border-amethyst  focus:ring-amethyst sm:w-3/4 sm:text-sm"
              placeholder="Link"
              value={facebookUrl}
              onChange={(e) => changeInput(e.target.value)}
            />
          </div>
          <div className="flex grow space-x-2 sm:space-x-3 sm:px-9">
            <div className="mt-0.5">
              <ToggleButton
                handleToggleButton={handleFacebookToggleButton}
                switchedOn={isFacebookUrlPublic}
              />
            </div>
            <p className=" text-gray-500 sm:text-sm">Show on your page</p>
          </div>
        </div>
        {/* WHATSAPP ROW */}
        <div className="items-center justify-start space-y-2 py-5 sm:flex sm:space-y-0">
          <div className=" flex space-x-2 sm:w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 w-6"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>

            <div>Whatsapp</div>
          </div>
          {/* WHATSAPP INPUT FIELD */}
          <div className=" sm:w-96">
            <input
              type="numeric"
              name="whatsappNumber"
              id="whatsappNumber"
              className="block h-12 rounded-md border-gray-400 pl-7 pr-12 focus:border-amethyst focus:ring-amethyst sm:w-3/4 sm:text-sm"
              placeholder="Whatsapp Number"
              value={whatsappNumber}
              onChange={(e) => changeInput(e.target.value)}
            />
          </div>
          <div className="flex grow space-x-2 sm:space-x-3 sm:px-9">
            <div className="mt-0.5">
              <ToggleButton
                handleToggleButton={handleWhatsappToggleButton}
                switchedOn={isWhatsappNumberPublic}
              />
            </div>
            <p className="text-gray-500 sm:text-sm">Show on your page</p>
          </div>
        </div>
      </div>
    </div>
  );
}
