import React from 'react';

interface ProductProps {
  image: string;
  id: string;
  pid: number;
  name: string;
  code: string;
  price: string;
  link: string;
  review: Record<string, unknown>[];
  description: string;
}

import Image from 'next/image';
function ImageCollage({ products }: { products: ProductProps[] }) {

  return (
    <div className="h-[340px] w-[450px] m-auto px-2 items-center border-2 border-green-400">
      <div className="flex flex-col flex-wrap h-96 m-2 border-2 border-green-400">
      {products.map((cart, cartIndex) => {
          const code = parseInt(cart.code);
          return (
            <div key={cartIndex}>
              {code === 13 && (
                <Image
                  width={100}
                  height={100}
                  className="max-h-[300px] h-full w-full  rounded-lg border-2 border-green-400"
                  src={cart.image}
                  alt="sorry cannot find the image"
                />
              )}
              {code === 11 && (
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
