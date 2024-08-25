"use client"
import React from "react";
import { useEffect } from "react";
import { useToken } from "../auth-utils/helpers/zustand";
const deleteUser = async (jwtToken: string) => {

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/user/delete`,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user details");
        }
        else {
            console.log("deleted user")
        }
        ;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default function DeleteUser() {
    const Token = useToken((state) => (state.token)); // Renamed to start with an uppercase letter
    useEffect(() => {
        {Token&&deleteUser(Token)};
    }, []);

    return (
        <div>
            delete user
        </div>
    )
}