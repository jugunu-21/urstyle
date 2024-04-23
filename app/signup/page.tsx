"use client"
import Signup from "@/components/signup/Signup";
import { app } from "@/app/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"; // Corrected import path
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
//  }));
 
 // Example of mocking the router's implementation
//  (useRouter as jest.Mock).mockImplementation(() => ({
//      pathname: '/',
//      push: jest.fn(),
//  }));
import { useEffect } from "react";

export default function Page() { // Renamed to start with an uppercase letter
 const router = useRouter();
 const auth = getAuth(app);

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });

    // Cleanup function to unsubscribe from auth state changes
    return () => unsubscribe();
 }, [auth, router]);

 return (
    <div>
      <Signup />
    </div>
 );
}


