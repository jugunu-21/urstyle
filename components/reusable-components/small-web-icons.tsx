
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { SiFlipkart } from "react-icons/si";
import { ProductCollection } from "../home/cards/card";


const PlatformLinks = ({ productColl }: { productColl: ProductCollection }) => {
    const platforms = ['Amazon', 'Flipkart', 'Meesho'];

    return (
        <div className="inline-flex sm:mt-0 justify-start space-x-1">
            {platforms.map((platform) => {
                const amazonItem = productColl.products.find(item => item.webLink === platform);
                return amazonItem && (
                    <span key={platform} className="">
                        {platform === 'Amazon' ? (
                            <Link href="https://amazon.com" className="">
                                <FaAmazon className="text-[#157A6E] hover:text-[#cf8750]" />
                            </Link>
                        ) : platform === 'Flipkart' ? (
                            <Link href="https://flipkart.com" className="">
                                <SiFlipkart className="text-[#157A6E] hover:text-[#cf8750]" />
                            </Link>
                        ) : (
                            <Link href="https://meesho.com" className="">
                                <CiShop className="text-[#157A6E] hover:text-[#cf8750]" />
                            </Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export { PlatformLinks };