import Link from "next/link";
import NavBarSignOutButton from "./NavBarSignOutButton";
import DefaultProfilePicture from "@/public/DefaultProfilePicture.jpg";
import Image from "next/image";
import { createServerClient } from "@/app/utils/supabase-server";
import { getMyUserInfoServer } from "@/app/lib/get/getMyUserInfo";

export default async function Navbar({ session }) {
  let profilePictureUrl = "";
  if (session) {
    const supabase = createServerClient();
    const res = await getMyUserInfoServer(supabase, session.user.id);
    profilePictureUrl = res?.profile_picture_url;
  }
  return (
    <>
      <div className="fixed z-10 flex h-16 w-full justify-between bg-gray-500 px-3 sm:h-[78px] sm:items-center sm:justify-between sm:px-12">
        <Link
          href="/"
          className="py-4 text-2xl font-light text-white hover:text-purple-400 sm:py-[18px] sm:text-4xl sm:font-normal"
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
                className="h-6 w-6 text-white"
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
              className="hidden items-center pr-9 text-xs text-white sm:flex sm:space-x-2"
            >
              <div className="relative inline-block h-6 w-6 overflow-hidden rounded-full  sm:ring-2">
                {profilePictureUrl ? (
                  <Image src={profilePictureUrl} alt="profile picture" fill />
                ) : (
                  <Image src={DefaultProfilePicture} alt="" fill />
                )}
              </div>
              <div className="pt-1 text-sm font-light text-white hover:text-sky-400 sm:pt-0 sm:text-sm sm:font-normal">
                My account
              </div>
            </Link>

            {/* MOBILE VERSION */}
            <Link href={`manageUserProfile`} className="pt-2 sm:hidden">
              <div className="relative inline-block h-6 w-6 overflow-hidden rounded-full ring-2">
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
          <div className="flex items-center space-x-3 pt-1 text-sm font-light text-white sm:space-x-5 sm:pt-0 sm:text-sm sm:font-normal ">
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
