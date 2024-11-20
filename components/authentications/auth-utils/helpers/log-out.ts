
import { app } from "@/app/config";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const handleLogout = (router: AppRouterInstance) => {
    try {
        const auth = getAuth(app);
        Cookies.remove('jwtToken', { expires: 0 });
        signOut(auth).then(
        );
        toast.success("You Signed Out ");
        router.push("/");
    } catch (error) {
        console.error("Error signing out:", error);
    }
};