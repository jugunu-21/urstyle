"use client"
import Signin from "@/components/authentications/Signin";

import { app } from "@/app/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/signout'); // Redirect to sign out page if user is authenticated
      } else {
        setIsLoading(false); // Set loading to false if no user is found
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  if (isLoading) {
    return null; // Return null or a loading indicator while waiting for authentication state
  }

  // Only render the Signin component once the authentication state is resolved
  return <Signin />;
}