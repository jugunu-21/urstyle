import React from 'react';
import { IProduct } from '../interface';

import Image from 'next/image';
function ImageCollage({ products }: { products: IProduct[] }) {

  return (
    <div className="h-[340px] w-[450px] m-auto px-2 items-center ">
      <div className="flex flex-col flex-wrap h-96 m-2 ">
      {products.map((cart, cartIndex) => {
          const subCategory = parseInt(cart.subCategory);
          return (
            <div key={cartIndex}>
              {subCategory === 13 && (
                <Image
                  width={100}
                  height={100}
                  className="max-h-[300px] h-full w-full  rounded-lg "
                  src={cart.image}
                  alt="sorry cannot find the image"
                />
              )}
              {subCategory === 11 && (
                <div className="">
                  <Image
                    width={100}
                    height={100}
                    className="max-h-[100px] w-auto rounded-lg"
                    src={cart.image}
                    alt=""
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export {  ImageCollage };
