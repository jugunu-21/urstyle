import Image from 'next/image';
import { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// Define the background styling for the main image
const backgroundStyle = (url: string) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
});

export default function InteractiveImage({ look }: { look: string }) {
    const lookdetail = shopLookdata.find((item) => item.look === look) || {
        look: '',
        image: '',
        individualImages: [
            {
                relativePlace: { top: '50%', left: '50%' },
                image: '',
            },
        ],
    };
    return (
        <div
            className="relative"
            style={backgroundStyle(lookdetail.image)}
        >
            {lookdetail.individualImages.map((item, index) => (
                <Popover key={index}>
                    <PopoverTrigger
                        className="absolute w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-700 transition"
                        style={{
                            top: item.relativePlace.top,
                            left: item.relativePlace.left,
                            transform: 'translate(-50%, -50%)',
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

const shopLookdata = [
    {
        look: "Casual Look",
        image: "/pexels-sensorysoft-20356188.jpg",
        individualImages: [
            { relativePlace: { top: '10%', left: '20%' }, image: '/accessory1.jpg' },
            { relativePlace: { top: '20%', left: '40%' }, image: '/accessory2.jpg' },
            // { relativePlace: { top: '80%', left: '30%' }, image: '/accessory3.jpg' },
            { relativePlace: { top: '42%', left: '63%' }, image: '/accessory4.jpg' }
        ]
    },
    // Add other looks as needed...
];
