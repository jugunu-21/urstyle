

"use client"
// import React, { useEffect } from 'react';
import React, { useState,useEffect } from 'react';
import {Dashboard} from "@/components/admin/product/productFetch/productFetch"
import getTokenFromCookies from "@/components/helpers/getcookie";
// import Dashboard from "@/components/admin/product/productadd/productAdd"
import handleSubmit from "@/components/admin/product/productFunctions/handleSubmit"
// import ProductImageCard from "@/components/admin/forms/productImage"

import { useContext } from 'react';
export default function Productadd() {

    // const contextValue = useContext(MyContext);
    // const {value}=contextValue
    return (
        <div >
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
           <Dashboard />
            </div>
        </div>

    )
}
