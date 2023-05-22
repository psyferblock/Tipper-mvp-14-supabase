import Link from "next/link";
import NavBarSignOutButton from "./NavBarSignOutButton";
import DefaultProfilePicture from "@/public/DefaultProfilePicture.jpg";
import Image from "next/image";
import { createServerClient } from "@/utils/supabase-server";
import { getMyUserInfosServer } from "@/lib/get/getMyUserInfos";

export default async function Navbar({ session }) {
  let profilePictureUrl = "";
  if (session) {
    const supabase = createServerClient();
    const res = await getMyUserInfosServer(supabase, session.user.id);
    profilePictureUrl = res?.profile_picture_url;
  }
  return (
    <>
      <div className="bg-gray-500 fixed w-full z-10 flex justify-between sm:justify-between sm:items-center h-16 sm:h-[78px] px-3 sm:px-12">
        <Link
          href="/"
          className="py-4 sm:py-[18px] font-light sm:font-normal text-white hover:text-purple-400 text-2xl sm:text-4xl"
        >
          Tipper
        </Link>

        {session ? (
          <div className="flex items-center space-x-4 sm:space-x-2 ">
            {/* SEARCH ICON */}
            <button className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            {/* DESKTOP VERSION */}
            <Link
              href={`manageUserProfile`}
              className="hidden sm:flex items-center sm:space-x-2 text-xs text-white pr-9"
            >
              <div className="relative w-6 h-6 inline-block rounded-full sm:ring-2  overflow-hidden">
                {profilePictureUrl ? (
                  <Image src={profilePictureUrl} alt="profile picture" fill />
                ) : (
                  <Image src={DefaultProfilePicture} alt="" fill />
                )}
              </div>
              <div className="hover:text-sky-400 text-white text-sm sm:text-sm pt-1 sm:pt-0 font-light sm:font-normal">
                My account
              </div>
            </Link>

            {/* MOBILE VERSION */}
            <Link href={`manageUserProfile`} className="pt-2 sm:hidden">
              <div className="relative w-6 h-6 inline-block rounded-full ring-2 overflow-hidden">
                {profilePictureUrl ? (
                  <Image src={profilePictureUrl} alt="profile picture" fill />
                ) : (
                  <Image src={DefaultProfilePicture} alt="" fill />
                )}
              </div>
              {/* <img
                className="w-6 h-6 inline-block rounded-full sm:ring-2 "
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              /> */}
            </Link>
            <NavBarSignOutButton />
          </div>
        ) : (
          <div className="text-white text-sm sm:text-sm pt-1 sm:pt-0 font-light sm:font-normal flex items-center space-x-3 sm:space-x-5 ">
            <Link href="" className="hover:text-purple-400">
              About Us
            </Link>
            <Link href="" className="hover:text-green-400">
              Contact Us
            </Link>
            <Link href="/signIn" className="hover:text-sky-400">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
