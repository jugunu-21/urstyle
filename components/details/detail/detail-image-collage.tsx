import React from 'react';

interface CartItem {
  id: number;
  name: string;
  code: string;
  link: string;
  image_url: string;
  price: string;
  review: {
    image: string;
    rname: string;
    date: string;
    content: string;
    rating: number;
  }[];
  description: string;
}

interface FilteredItems {
  cart: CartItem[];
}

interface Props {
  filteredItems: FilteredItems;
}
import Image from 'next/image';
function DetailCollage({ filteredItems }: Props) {

  return (
    <div className="h-[340px] w-[450px] m-auto px-2 items-center">
      <div className="flex flex-col flex-wrap h-96 m-2">
        {filteredItems.cart.map((cart, cartIndex) => {
          const code = parseInt(cart.code);
          return (
            <div key={cartIndex}>
              {code === 3 && (
                <Image
                  width={100}
                  height={100}
                  className="max-h-[300px] h-full w-full  rounded-lg"
                  src={cart.image_url}
                  alt=""
                />
              )}
              {code === 1 && (
                <div className="">
                  <Image
                    width={100}
                    height={100}
                    className="max-h-[100px] w-auto rounded-lg"
                    src={cart.image_url}
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

export { DetailCollage };
