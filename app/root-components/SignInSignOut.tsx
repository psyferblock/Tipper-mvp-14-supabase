"use client";
import Link from "next/link";
import { supabase } from "../utils/supabase-browser";
import { useSupabase } from "../supabase-provider";
import { useRouter } from "next/navigation";
import { useHasMounted } from '../hooks/useHasMounted'

 function SignInSignOut() {
   const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  const{session}=useSupabase()
  console.log('session from sign in and out ', session)
  const router=useRouter()
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Redirect the user to the login page
    router.push("/") ;
  };
  return (
    <div>
      {!session ? 
        <li className="p-2">
          <Link href="signIn">Sign In</Link>
        </li>
       : 
        <div  className="p-2">
          <button onClick={(e) => handleSignOut()}>
           Sign out
          </button>
        </div>
      }
    </div>
  );
}

export default SignInSignOut;
