"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function GoToTipperHomePage() {
  return (
    <div className="h-12">
      {" "}
      <Link href="/" passHref>
        <div>
          <Image
            src="https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/tipper/websiteItems/Primary/Tipper_Logos_Primary_Ruby.png"
            width={500}
            height={500}
            alt="Logo"
            className="h-14 w-24 object-fill"
          />
        </div>
      </Link>
    </div>
  );
}

export default GoToTipperHomePage;
