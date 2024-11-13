import React from 'react';
import { IProduct } from '../interface';

import Image from 'next/image';
function ImageCollage({ products }: { products: IProduct[] }) {
  const backgroundStyle = (url: string) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  });
  return (
    <div className="h-[360px] max-w-[420px] m-auto p-2 items-center ">
      <div className="flex flex-col flex-wrap h-96 m-2 ">

        <div className=" h-80 grid grid-cols-3 ">
          <div className="col-span-2 rounded-lg  " style={backgroundStyle(products[0].image)}>
          </div>
          <div className=" col-span-1 grid grid-rows-3  rounded-lg " >
            {products[1] ? <div className=" mx-2 ">
              <div className="row-span-1 rounded-lg " style={backgroundStyle(products[1]?.image)}>
              </div>
            </div> : <>
              <div className="bg-red-100 h-full  mx-2 mt-2 ">
                <div className="row-span-1 rounded-lg  "></div>

              </div>
            </>}
            {products[2] ? <div className=" mx-2 mt-2">
              <div className="row-span-1 rounded-lg  " style={backgroundStyle(products[2]?.image)}>
              </div>
            </div> : <>
              <div className="bg-red-100 rounded-lg  mx-2 mt-2 ">
                <div className="row-span-1 rounded-lg  "></div>

              </div>

            </>}
            {products[3] ? <div className=" mx-2 mt-2 ">
              <div className="row-span-1  rounded-lg " style={backgroundStyle(products[3]?.image)}>
              </div>
            </div> : <>
              <div className="mx-2 mt-2 ">
                <div className="bg-red-100    row-span-1 rounded-lg  h-full w-full  "></div>

              </div>

            </>}

          </div>{products.length > 4 && <div className="absolute bottom-10 right-4 "></div>}
        </div>
      </div>

    </div>

  );
}

export { ImageCollage };
