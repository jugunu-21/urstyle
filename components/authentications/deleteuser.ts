"use client"
import React from "react";
import { useEffect } from "react";
import getTokenFromCookies from "@/components/authentications/deleteUser";
import getJwtTokenFromCookies from "../helpers/getCookie";
const token =getJwtTokenFromCookies()
import ApiDeleteUser from "../authentications/authfunction/apiDelete"

export default function DeleteUser() {
      const token =getJwtTokenFromCookies()
      if ( token) {
       ApiDeleteUser( token);
      }
}