import Image from "next/image";
import { GoHeartFill } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { api } from "@/trpc/react";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { SiFlipkart } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefetchOptions } from "@tanstack/react-query"
import { boolean } from "zod";
import { useState } from "react";
import { StarRating, StarRatinginWords } from "@/components/reusable-components/star-icon";
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

import { IoArrowRedoSharp } from "react-icons/io5";
export interface ProductCollection {
    name: string;
    description: string;
    products: Product[];
    collectionId: string
    likestatus?: boolean
}
export const CollectionCard = ({ productColl, refetch }: { productColl: ProductCollection, refetch: (options?: RefetchOptions) => Promise<any>; }) => {
    const router = useRouter()
    const [likeButton, setLikeButton] = useState<boolean>(productColl.likestatus || false);
    const likemut = api.collection.collectionLike.useMutation();

    const handleLikeClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Toggle the like button state immediately
        setLikeButton((prev) => !prev)
        try {
            // Call the mutation
            const result = await likemut.mutateAsync({
                collectionId: productColl.collectionId,
            });

            // Check if the API response is successful
            if (!result.status) {
                // If the API response status is not true, revert the like button state
                setLikeButton((prev) => !prev);
            } else {
                // Optionally refetch to sync data
                refetch();
            }
        } catch (error) {
            // On error, revert the like button state
            setLikeButton((prev) => !prev);
        }
    };
    return (
        <Link
            className="rounded-lg text-lg font-semibold text-neutral-950"
            href={`/details/${productColl.collectionId}`}
        >
            <Card>
                <CardHeader>
                    <CardTitle>{productColl.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-white">
                        <div className="relative h-72 md:h-80 grid grid-cols-3 gap-2">
                            <div className=" col-span-2 relative">
                                {productColl.products[0] ? (
                                    <Image
                                        src={productColl.products[0].image}
                                        alt={productColl.products[0].name}
                                        fill // Automatically fills the parent container
                                        className=" w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="bg-red-100 h-full w-full"></div>
                                )}
                            </div>
                            <div className="col-span-1 grid grid-rows-3 gap-2">
                                {productColl.products[1] ? (
                                    <div className="relative h-full">
                                        <Image
                                            src={productColl.products[1].image}
                                            alt={productColl.products[1].name}
                                            fill
                                            className=" w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="bg-red-100 h-full w-full"></div>
                                )}
                                {productColl.products[2] ? (
                                    <div className="relative h-full">
                                        <Image
                                            src={productColl.products[2].image}
                                            alt={productColl.products[2].name}
                                            fill
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="bg-red-100 h-full w-full"></div>
                                )}
                                <div className="relative h-full">
                                    {productColl.products[3] ? (
                                        <Image
                                            src={productColl.products[3].image}
                                            alt={productColl.products[3].name}
                                            fill
                                            className=" w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="bg-red-100 h-full w-full"></div>
                                    )}
                                    {productColl.products.length > 4 && (
                                        <div className="absolute inset-0 flex items-center justify-center z-10 h-full w-full">
                                            <div className="bg-black bg-opacity-70 px-3 py-1 flex items-center justify-center text-white h-full w-full">
                                                <FiPlus className="font-bold text-3xl" />
                                                <span className="font-mono text-3xl">
                                                    {productColl.products.length - 4}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute -bottom-2 right-1 z-30 flex flex-row gap-1">
                                {productColl.hasOwnProperty("likestatus") && (
                                    <button onClick={handleLikeClick}>
                                        {likeButton ? (
                                            <GoHeartFill
                                                fill="#ff8000"
                                                className="aspect-square rounded-full h-8 w-8 p-1 bg-white"
                                            />
                                        ) : (
                                            <IoHeartOutline
                                                className="aspect-square rounded-full h-8 w-8 p-1 bg-white"
                                            />
                                        )}
                                    </button>
                                )}
                                <button onClick={() => router.push("/details/${productColl.collectionId")}>
                                    <IoArrowRedoSharp className="aspect-square rounded-full h-8 w-8 p-1 bg-white" />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 py-4">
                            <span className="inline-flex sm:mt-0 justify-start space-x-2">
                                <Link href="#" className="text-xl">
                                    <FaAmazon className="text-[#157A6E] hover:text-[#FFD639] " />
                                </Link>
                                <Link href="#" className="ml-3 text-xl">
                                    <SiFlipkart className="text-[#157A6E] hover:text-[#FFD639] " />
                                </Link>
                                <Link href="#" className="ml-3 text-xl">
                                    <CiShop className="text-[#157A6E] hover:text-[#FFD639] " />
                                </Link>
                            </span>


                            <div className="flex items-center justify-end">
                                <StarRatinginWords rating={4.5} totalStars={5} />
                            </div>
                        </div>


                        {/* <Button className="flex flex-row  ml-1 my-0 hover:bg-[#FFD639] hover:text-black bg-[#ff0366] ">
                            <Link
                                href={`/details/${productColl.collectionId}`}
                                className=" "
                            >
                                Details
                            </Link>
                        </Button> */}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
