"use client"

import React, { useState,useEffect } from 'react';
import getTokenFromCookies from "@/components/helpers/getcookie";
import Dashboard from "@/components/admin/product/productadd/productAdd"

// import ProductImageCard from "@/components/admin/forms/productImage"
export default function Productadd() {
   
    
    return (
        <div >
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Dashboard />
            </div>
        </div>

    )
}



