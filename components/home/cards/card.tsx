
import { GoHeartFill } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
import { api } from "@/trpc/react"
import { useEffect, useState } from "react";
import { RefetchOptions } from "@tanstack/react-query"
import Link from "next/link";
import { FaAmazon, } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { SiFlipkart } from "react-icons/si";
import { Button } from "@/components/ui/button";
export interface Product {
    subCategory: string;
    name: string;
    link: string;
    description: string;
    category: string;
    price: string;
    image: string;
    id: string;
    review: Record<string, unknown>[];
}
export interface ProductCollection {
    name: string;
    description: string;
    products: Product[];
    collectionId: string
    likestatus?: boolean
}
export const Card = ({ productColl, refetch }: { productColl: ProductCollection, refetch: (options?: RefetchOptions) => Promise<any>; }) => {
    const likemut = api.collection.collectionLike.useMutation()
    const backgroundStyle = (url: string) => ({
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
    });
    return (
        <Link className=" rounded-lg  text-lg font-semibold text-neutral-950" href={`/details/${productColl.collectionId}`}>
            <div className="my-4 p-2 bg-white  ">
                <div>{productColl.name}</div>
                <div className=" relative h-72 md:h-80 grid grid-cols-3">
                    <div className="mt-2 col-span-2">  <div className="" style={backgroundStyle(productColl.products[0].image)}></div>

                    </div>
                    <div className=" col-span-1 grid grid-rows-3 ">
                        <div className={`mx-2 mt-2 relative ${productColl.products[3] ? "" : "bg-red-100"}`}>
                            <div
                                className="row-span-1"
                                style={productColl.products[1] ? backgroundStyle(productColl.products[1]?.image) : {}}
                            ></div>

                        </div>

                        <div className={`mx-2 mt-2 relative ${productColl.products[3] ? "" : "bg-red-100"}`}>
                            <div
                                className="row-span-1"
                                style={productColl.products[2] ? backgroundStyle(productColl.products[2]?.image) : {}}
                            ></div>

                        </div>


                        <div className={`mx-2 mt-2 relative ${productColl.products[3] ? "" : "bg-red-100"}`}>
                            <div
                                className="row-span-1"
                                style={productColl.products[3] ? backgroundStyle(productColl.products[3]?.image) : {}}
                            ></div>
                            {productColl.products.length > 4 && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 h-full w-full">
                                    <div className="bg-black bg-opacity-70 px-3 py-1 flex items-center justify-center text-white h-full w-full">
                                        <FiPlus className="font-bold text-3xl " />
                                        <span className="font-mono text-3xl">{productColl.products.length - 4}</span>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>


                    {productColl.hasOwnProperty('likestatus') &&
                        <button className="absolute bottom-0  right-1 z-30" onClick={(e) => {
                            e.preventDefault();
                            likemut.mutateAsync({ collectionId: productColl.collectionId })
                            refetch()
                        }}>
                            {productColl.likestatus ? <GoHeartFill fill='#ff8000' className=" aspect-square rounded-full h-8 w-8  p-1  bg-white" /> :
                                <IoHeartOutline className=" aspect-square rounded-full h-8 w-8  p-1  bg-white" />
                            }
                        </button>
                    }
                </div>
                <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start p-2">
                    <Link href="#" className="text-xl">
                        <FaAmazon className="text-cyan-800 hover:text-rose-600" />
                    </Link>
                    <Link href="#" className="ml-3  text-xl ">
                        <SiFlipkart className="text-cyan-800 hover:text-rose-600" />
                    </Link>
                    <Link href="#" className="ml-3   text-xl ">
                        <CiShop className="text-cyan-800 hover:text-rose-600" />
                    </Link>
                </span>

                <Button variant="ghost" className="flex flex-row  m-0 p-0    " >
                    <Link href={`/details/${productColl.collectionId}`} className=" text-black  hover:text-rose-600 " > see all details</Link>
                </Button>


            </div>
        </Link>)
}