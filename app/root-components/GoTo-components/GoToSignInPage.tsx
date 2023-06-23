import Link from "next/link";
import React from "react";

function GoToSignInPage() {
  return (
    <div className="text-base">
      {" "}
      <Link  href="signIn">Sign In</Link>
    </div>
  );
}

export default GoToSignInPage;
