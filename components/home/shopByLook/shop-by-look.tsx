import Image from 'next/image';
import { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { fashionCategory } from '@/public/category';

// Define the background styling for the main image
const backgroundStyle = (url: string) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',

    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
});

export default function InteractiveImage({ look }: { look: string }) {
    const lookdetail = fashionCategory.find((item) => item.look === look) || {
        look: '',
        image: '/business-look.jpg',
        individualImages: [
            {
                relativePlace: { top: '25%', left: '52%' },
                image: '',
            },
            {
                relativePlace: { top: '34%', left: '40%' },
                image: '',
            },
            {
                relativePlace: { top: '70%', left: '53%' },
                image: '',
            },
        ],
    };
    return (
        <div
            className="relative rounded-lg  "
            style={backgroundStyle(lookdetail.image)}
        >
            {lookdetail.individualImages.map((item, index) => (
                <Popover key={index}>
                    <PopoverTrigger
                        className="absolute w-6 h-6 bg-blue-700 rounded-full cursor-pointer hover:bg-blue-900 transition border-[6px] border-blue-500 opacity-70"
                        style={{
                            top: item.relativePlace.top,
                            left: item.relativePlace.left,
                            transform: 'translate(-50%, -50%)',
                            // Adjust the blur radius and color as needed
                        }}
                    />
                    <PopoverContent className="h-32 w-32 p-2 bg-white shadow-md rounded-lg">
                        <Image
                            src={item.image}
                            alt="Accessory detail"
                            layout="fill"
                            className="object-contain rounded-md"
                        />
                    </PopoverContent>
                </Popover>
            ))}
        </div>
    );
}


