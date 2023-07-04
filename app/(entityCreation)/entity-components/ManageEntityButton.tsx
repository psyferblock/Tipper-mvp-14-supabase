import Link from "next/link";
import React from "react";

function ManageEntityButton({entityUniqueName:entityUniqueName}) {
  return (
    <div>
      <button className="border-white-2  h-12 w-auto border-spacing-4  rounded-md border-2 border-amethyst bg-white p-3 text-center shadow-md shadow-amethyst-shade">
        <Link href={`/entity/${entityUniqueName}/manageEntity/manageEntityInfo`}>
          Manage Entity 
        </Link>
      </button>
    </div>
  );
}

export default ManageEntityButton;
