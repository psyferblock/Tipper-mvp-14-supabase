import Image from "next/image";
import Link from "next/link";
import React from "react";

function GoToTipperHomePage() {
  return (
    <div className="h-12">
      {" "}
      <Link href="/">
        <Image
          src="https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/tipper/websiteItems/Primary/Tipper_Logos_Primary_Ruby.png"
          width={500}
          height={500}
          alt="Logo"
          className="w-24 h-14 object-fill"
        />
      </Link>
    </div>
  );
}

export default GoToTipperHomePage;
