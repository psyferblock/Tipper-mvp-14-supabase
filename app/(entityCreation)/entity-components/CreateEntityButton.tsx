import Link from "next/link";
import React from "react";

function CreateEntityButton() {
  // we need to check if the profile has been built.
  //so this should be a client compnent.
  // if username or user phone number or user
  // firstName,
  // lastName,
  // dateOfBirth,
  // gender,
  // contactNumber,
  // profilePictureUrl,
  // emailAddress,
  // uniqueUserName,
  // all of these meet the standard then we will allow to go create entity else we will ahve to let him go to fill his profile.
  return (
    <div>
      <button className="amethyst  mt-10 h-12 w-32 rounded-md border-2 border-amethyst bg-diamond text-sm text-obsidian shadow-md shadow-amethyst-shade hover:bg-pearl hover:text-lg">
        <Link href="/createEntity" className="">
          Create Now
        </Link>
      </button>
    </div>
  );
}

export default CreateEntityButton;
