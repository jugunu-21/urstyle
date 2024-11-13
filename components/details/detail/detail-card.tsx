import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Sitelink from '@/components/reusable-components/site-link';
import { IProduct } from '../interface';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
      {products.map((cart, cartIndex) => (
        <Card key={cartIndex} className='m-2' >
          <CardContent>
            <Button variant="outline" className='  h-60 w-full'>
              {cart && (
                <div className="flex  m-2 w-full  items-start justify-start ">
                  <Image
                    width={240}
                    height={100}
                    className=" h-60 object-cover align-middle border-2 "
                    src={cart.image}
                    alt=""
                  />
                  <div className=" p-2  w-full text-left">
                    <div className=" font-bold">
                      {cart.name}
                    </div>
                    <div className="font-semibold my-1">{cart.price}</div>
                    <div className="mb-2">{cart.description}</div>
                    <div className="h-8 w-28 my-2">
                      <Sitelink setsitelink={cart.image} sitelink={cart.link} />
                    </div>
                    <div className=" flex my-2 items-center space-x-3 font-medium">
                      <Link
                        href={`/more-details/${collectionId}/${cart.id}`}
                        // rel="noopener noreferrer"
                        className=" flex   items-center   rounded-lg bg-stone-300 hover:bg-stone-400 p-1  "
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
