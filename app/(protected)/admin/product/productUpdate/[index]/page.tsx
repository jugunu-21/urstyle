"use client"

import React, { useState,useEffect } from 'react';

import Dashboard from "@/components/admin/product/productUpdate/productUpdate"
import { useParams } from 'next/navigation';

  export default function ProductUpdate() {
    const params = useParams();
    const productIdArray = Array.isArray(params.index)
      ? params.index
      : [params.index];
    const [param1] = productIdArray;
    const groupIndex= param1 ? parseInt(param1, 10) : undefined;
    
    return (
        <div >
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
            
                <Dashboard index={ groupIndex} />
            </div>
        </div>

    )
}



