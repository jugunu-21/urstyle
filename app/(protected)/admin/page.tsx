"use client"
import React from "react"

export default function AdminDashboard() {
    return (
        <div className="ml-8">

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="  black tracking-widest font-medium title-font mb-1">URSTYLE ADMIN DASHBOARD</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Manage Your Products and Outfits</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 4V20M4 12H20"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Add New Products</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Easily add new products to the Urstyle platform, including details like product name, description,category, subCategory,price,image, and affiliate links. Expand your catalog with clothes, accessories, and more.
                                    </p>
                                    <a href="/admin/product/productadd" className="mt-3 black inline-flex items-center">Add product
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M4 6H20M4 12H20M4 18H20"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Create Outfits</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Combine products to create stylish outfits. Choose from the items you’ve added to build collections that complement each other, offering users curated looks that fit any occasion.
                                    </p>
                                    <a href="/admin/product/productfetch" className="mt-3 black inline-flex items-center">Create Collection
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M3 3h18v18H3V3z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Manage Collections</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Organize and manage your product collections. Update details, remove outdated items, and ensure your catalog is always fresh and relevant for your users.
                                    </p>
                                    <a href="/admin/collection/collectionfetch " className="mt-3 black inline-flex items-center">Manage Collection
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
