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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RefetchOptions } from "@tanstack/react-query"
import { useState } from "react";
import { StarRatinginWords } from "@/components/reusable-components/star-icon";
export interface Product {
    subCategory: string;
    name: string;
    link: string;
    webLink: string;
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
function calculateTotalPrice(products: Product[]) {
    return products.reduce((total, product) => {
        const price = parseFloat(product.price);
        if (isNaN(price)) {
            console.error(`Invalid price: ${product.price}`);
            return total;
        }
        return total + price;
    }, 0);
}
export const CollectionCard = ({ productColl, refetch }: { productColl: ProductCollection, refetch: (options?: RefetchOptions) => Promise<any>; }) => {
    const router = useRouter()
    const [likeButton, setLikeButton] = useState<boolean>(productColl.likestatus || false);
    const likemut = api.collection.collectionLike.useMutation();
    const handleLikeClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLikeButton((prev) => !prev)
        try {
            const result = await likemut.mutateAsync({
                collectionId: productColl.collectionId,
            });
            if (!result.status) {
                setLikeButton((prev) => !prev);
            }
            else {
                refetch();
            }
        } catch (error) {
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
                    <CardTitle className="text-lg">{productColl.name}</CardTitle>
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

                    </div>
                </CardContent>
                <CardFooter className="grid grid-cols-2 " >

                    <div className="">
                        <span className="inline-flex sm:mt-0 justify-start space-x-1">
                            {['Amazon', 'Flipkart', 'messho'].map((platform) => {
                                const amazonItem = productColl.products.find(item => item.webLink === platform);
                                return amazonItem && (
                                    <span key={platform}>
                                        {platform === 'Amazon' ? (
                                            <Link href="https://amazon.com" className="text-xl">
                                                <FaAmazon className="text-[#157A6E] hover:text-[#cf8750]" />
                                            </Link>
                                        ) : platform === 'Flipkart' ? (
                                            <Link href="https://flipkart.com" className="-xl">
                                                <SiFlipkart className="text-[#157A6E] hover:text-[#cf8750]" />
                                            </Link>
                                        ) : (
                                            <Link href="https://meesho.com" className="text-xl">
                                                <CiShop className="text-[#157A6E] hover:text-[#cf8750]" />
                                            </Link>
                                        )}
                                    </span>
                                );
                            })}
                        </span>

                    </div>
                    <div className="flex items-top justify-end">
                        <StarRatinginWords rating={4.5} totalStars={5} />
                    </div>
                    <div className="text-[12px]"> Rs. {calculateTotalPrice(productColl.products)}</div>
                </CardFooter>
            </Card>
        </Link>
    );
};
