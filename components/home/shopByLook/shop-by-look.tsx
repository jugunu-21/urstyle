import Image from 'next/image';
import { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { fashionCategory } from '@/public/category';
export default function InteractiveImage({ look }: { look: string }) {
    const lookdetail = fashionCategory.find((item) => item.look === look) || {
        look: '',
        image: '/business-look.jpg',
        individualImages: [
            {
                relativePlace: { top: '33%', left: '52%' },
                image: 'https://m.media-amazon.com/images/I/71hndo6875L._SY879_.jpg',
            },
            {
                relativePlace: { top: '39%', left: '40%' },
                image: 'https://m.media-amazon.com/images/I/51lUi691Q2L._SY879_.jpg',
            },
            {
                relativePlace: { top: '70%', left: '53%' },
                image: 'https://m.media-amazon.com/images/I/51p+CqAP4oL._SY879_.jpg',
            },
        ],
    };
    return (
        <div className="flex">
            <div className='aspect-[3/4] sm:max-w-[370px] '>   <div
                className="relative rounded-lg aspect-[3/4]"
            >
                <Image alt={"gvhbjnl"} src={lookdetail.image} height={100} width={100} className='h-full w-full'></Image>
                {lookdetail.individualImages.map((item, index) => (
                    <Popover key={index}>
                        <PopoverTrigger
                            className="absolute w-6 h-6 bg-blue-700 rounded-full cursor-pointer hover:bg-blue-900 transition border-[6px] border-blue-500 opacity-70"
                            style={{
                                top: item.relativePlace.top,
                                left: item.relativePlace.left,
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                        <PopoverContent className="h-32 w-32 p-2 bg-white shadow-md rounded-lg ">
                            <Image
                                src={item.image}
                                alt="Accessory detail"
                                layout="fill"
                                className="object-contain rounded-md"
                            />
                        </PopoverContent>
                    </Popover>
                ))}
            </div></div>
            <div className='h-[488px] w-[180px] hidden  mx-auto max-w-[190px] lg:grid lg:grid-rows ' >
                {lookdetail.individualImages.map((item, index) => (
                    <div key={index}>
                        <Image
                            alt="gvhbjnl"
                            src={item.image}
                            width={110}
                            height={100}
                            className=" h-[150px] w-[160px] grid-cols-1  rounded-lg mx-auto "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


