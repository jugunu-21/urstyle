
import { GoHeartFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
// In a separate file, e.g., types.ts
export interface Product {
    code: string;
    name: string;
    link: string;
    description: string;
    pid: number;
    price: string;
    image: string;
    id: string;
    review: Record<string, unknown>[];
}

export interface ProductCollection {
    name: string;
    description: string;
    products: Product[];
}
export const Card = ({ productColl }: { productColl: ProductCollection }) => {
    const jwtToken=useToken().token
    const backgroundStyle = (url: string) => ({
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
    });
    return (
        <div className="my-4 p-2  ">
            <div>{productColl.name}</div>

            <div className=" relative h-72 md:h-80    grid grid-cols-3">
                {/* {productColl.products.map((product, index) => (
                    <div key={product.id} className={`  ${index === 0 ? 'col-span-2' : ''}${index === 1 ? 'col-span-1 grid-rows-3  ' : ''}  my-2`}>
                        <div style={backgroundStyle(product.image)} className={` ${index === 0 ? 'h-full py-2 border-violet-800 row-span-1' : 'row-span-1 p-2 border-sky-500'}`}>{index}

                        </div>
                    </div>
                ))} */}
                <div className="col-span-2" style={backgroundStyle(productColl.products[0].image)}>

                </div>
                <div className=" col-span-1 grid grid-rows-3 ">
                    <div className=" mx-2 mb-2">
                        <div className="row-span-1   " style={backgroundStyle(productColl.products[1].image)}>

                        </div>
                    </div>
                    <div className=" mx-2 my-1">
                        <div className="row-span-1  " style={backgroundStyle(productColl.products[2]?.image)}>

                        </div>
                    </div>
                    <div className=" mx-2 mt-2">
                        <div className="row-span-1  " style={backgroundStyle(productColl.products[3]?.image)}>

                        </div>
                    </div>
                </div>{productColl.products.length > 4 && <div className="absolute bottom-10 right-4 "><FiPlus className=" h-8 w-8    p-1" /></div>}
                {jwtToken!=null  &&
                    <button className="absolute bottom-0  right-1 " onClick={() => { return null }}>
                        <GoHeartFill fill="#ff8000" className="aspect-square rounded-full h-8 w-8  p-1  bg-white" />
                    </button>
                }

            </div>
            <div className="flex h-24  border-green-500 my-2 space-x-4">
                {/* <div className="w-8 h-8 aspect-square rounded-full  border-blue-500 justify-start">h</div>
                <div className="justify-between w-8  border-red-800">2nd</div>
                <div className="justify-end w-8  border-red-800">2nd</div> */}
                <div>{productColl.description}</div>
            </div>
        </div>
    )
}