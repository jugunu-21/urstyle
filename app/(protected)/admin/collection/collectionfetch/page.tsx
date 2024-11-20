
"use client"
import React, { useState, useEffect } from 'react';
import Dashboard from "@/components/admin/collection/collection-fetch/collection-fetch"
export default function CollectionFetch() {
    return (
        <div >
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Dashboard />
            </div>
        </div>
    )
}