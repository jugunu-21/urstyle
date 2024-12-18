import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { WebsiteButtons } from '@/components/reusable-components/website-button';
import { IProduct } from '../interface';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
const backgroundStyle = (url: string) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100%'
});
function IndividualProductDetail({ products, collectionId }: {
  products: IProduct[], collectionId: string
}) {
  return (
    <>
      {products.map((item, itemIndex) => (
        <Card key={itemIndex} className='m-2' >
          <CardContent className='m-2'>
            <Button variant="outline" className=' h-[400] sm:h-60 w-full  m-4 hover:bg-[#f5d4e1]'>
              {item && (
                <div className=" sm:flex w-full  ">
                  <Image
                    width={250}
                    height={100}
                    className=" h-60 object-cover align-middle p-4"
                    src={item.image}
                    alt=""
                  />
                  <div className=" p-2 ml-8 w-full text-left">
                    <div className=" text-[16px] font-bold">
                      {item.name}
                    </div>
                    <div className="font-semibold text-base my-1">Rs. {item.price}</div>
                    <div className="mb-2 overflow-hidden whitespace-normal text-base">{item.description}</div>

                    <WebsiteButtons webLink={item.webLink} link={item.link} />

                    <div className=" h-10 w-28 ">
                      <Link
                        href={item.link}
                        target='_blank'
                        className=" flex  py-1 px-3 items-center   rounded-lg bg-stone-100 text-[#ff0366] font-bold text-lg hover:bg-stone-200 border-2 hover:border-[#f5a5c5] "
                      >
                        Details
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2} // Corrected property name
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Button>
          </CardContent>
        </Card >
      ))
      }
    </>
  );
}

export default IndividualProductDetail;
