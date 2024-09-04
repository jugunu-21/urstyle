"use client"
import React, { useState } from "react";
;
import { useParams } from 'next/navigation';

import Link from "next/link";

import Sitelink from "@/components/reusable-components/site-link";

import itemsData from "@/public/items.json"
import Image from "next/image";
import Star from '@/components/reusable-components/star-icon';
// import Summary from '@/components/details/overview/summary/Summary';
import Faq from "./faq"
import Customereview from "./customer-review"
import License from "./license"
import { ICartItem, Icollection } from "../interface"
export default function Moredetails({ finalItem }: { finalItem: ICartItem }) {
    const [selectedContent, setSelectedContent] = useState("customers");
    interface Review {
        rating: number;
    }

    const calculateAverageRating = (reviews: Review[] | undefined): number => {
        if (!reviews || reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
        return totalRating / reviews.length;
    };

    return (
        <div className=" text-slate-900 p-4 lg:grid lg:grid-cols-2 lg:grid-rows-4  space-x-4 -space-y-1 bg-stone-200">
            <div className="lg:col-span-1  lg:row-span-2 ">
                <div
                    className="  rounded-lg overflow-hidden"
                    style={{ height: "600px" }}
                >
                    <Image
                        width={100}
                        height={100}
                        src={finalItem.image_url}
                        className=" object-cover object-center h-full w-full hover:border-4 hover:border-stone-300"
                        alt=""
                    />
                </div>
            </div>
            <div className="lg:col-span-1  lg:row-span-4 pr-10 ">
                <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <h1 className="pt-4 pb-2 text-3xl font-bold">{finalItem.name}</h1>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="flex">
                                <Star len={calculateAverageRating(finalItem.review)} />
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="font-bold my-2"> Total Price : {finalItem.price}</div>
                    <h1 className="pb-4  ">Your look should talk rather than you</h1>
                    <div className="space-y-6">
                        <p className="text-base  ">{finalItem.description}</p>
                    </div>
                </div>

                <div className="h-8 w-28 my-2 ">
                    <Sitelink setsitelink={finalItem.image_url} sitelink={finalItem.link} />
                </div>
                <div className="my-2 border-t border-gray-200  "></div>

                <div className="mt-2">
                    <h3 className="text-sm m text-gray-900   font-bold">Highlights</h3>

                    <div className="mt-4">
                        <ul className="list-disc space-y-2 pl-4 text-sm">
                            <li>
                                <span className=" ">Hand cut and sewn locally</span>
                            </li>
                            <li className=" ">
                                <span className=" ">Dyed with our proprietary colors</span>
                            </li>
                            <li className=" ">
                                <span className=" ">Pre-washed &amp; pre-shrunk</span>
                            </li>
                        </ul>
                    </div>
                    <div className="my-4 border-t border-gray-200 "></div>
                </div>
                <div className="mt-10">
                    <h2 className="text-sm text-gray-900   font-bold">License</h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-sm  ">
                            The 6-Pack includes two black, two white, and two heather gray
                            Basic Tees. Sign up for our subscription service and be the first
                            to get new, exciting colors, like our upcoming &quot;Charcoal
                            Gray&quot; limited release.
                        </p>
                    </div>
                </div>
                <div className="my-4 border-t border-gray-200 "></div>
                <div className=" mt-10 pb-10 ">
                    <h2 className="text-sm  text-gray-900   font-bold pb-4 ">Share </h2>
                    <div className=" flex  space-x-6  ">
                        <Link href="#" className="aspect-square size-5  ">
                            <Image
                                width={100}
                                height={100}
                                src="https://1.bp.blogspot.com/-qYwreqeIN6w/XN0LzjGE2GI/AAAAAAAAAmA/PV1m0NfGuxUEXFBS8Ge4VMXWE34XzrfYgCPcBGAYYCw/s20/facebook-logo-Grey-%2Bhigh%2Bresolution.png"
                                alt=""
                            />
                        </Link>
                        <Link href="#" className="aspect-square size-5 ">
                            <Image
                                width={100}
                                height={100}
                                src="https://www.iconninja.com/files/611/75/580/instagram-icon.png"
                                alt=""

                            />
                        </Link>
                        <Link href="#" className="aspect-square size-8   ">
                            <Image
                                width={100}
                                height={100}
                                className="rounded-full"
                                src="https://logowik.com/content/uploads/images/twitter-x-line9741.logowik.com.webp"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1 lg:row-span-4 pt-10 ">
                <div className="  inline-flex space-x-5  ">
                    <button
                        aria-label="customer review"
                        className="border border-transparent group  hover:border-b-gray-500   focus:border-b-black "
                        onClick={() => setSelectedContent("customers")}
                    >
                        Customers Review
                    </button>
                    <button
                        className="border border-transparent group hover:border-b-gray-700
          focus:outline-none focus:border-b-black"
                        onClick={() => setSelectedContent("FAQ")}
                    >
                        FAQ
                    </button>
                    <button
                        className="border border-transparent group hover:border-b-gray-700 focus:outline-none focus:border-b-black"
                        onClick={() => setSelectedContent("License")}
                    >
                        License
                    </button>
                </div>

                <div className="my-4 border-t border-gray-200 "></div>
                <div>
                    {selectedContent === "customers" && (
                        <Customereview reviewData={finalItem.review} />
                    )}
                </div>

                <div>{selectedContent === "FAQ" && <Faq />}</div>
                <div>{selectedContent === "License" && <License />}</div>
            </div>
        </div>
    );
}

