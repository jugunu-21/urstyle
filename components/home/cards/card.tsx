
import { GoHeartFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
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
    const backgroundStyle = (url: string) => ({
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
    });
    return (
        <div className=" border-2 border-gray-800   my-4 p-2  ">
            <div>{productColl.name}</div>

            <div className=" relative h-72 md:h-80  border-2 border-gray-800 grid grid-cols-3">
                {productColl.products.map((product, index) => (
                    <div key={product.id} className={`border-2 border-gray-800 ${index===0?'col-span-2 grid-rows-3':'col-span-1 grid-rows-3'} my-2`}>
                       <div style={backgroundStyle(product.image)} className={`border-gray-800 m-2${index===0?'row-span-3':'row-span-1'}`}>{index}</div>
                        </div>
                ))}
                {/* <div className="col-span-2" >
                    <div className="border-2 border-gray-800   my-2">1
                    </div>
                </div>
                <div className=" col-span-1 grid grid-rows-3">
                    <div className="row-span-1 border-2 border-gray-800 m-2">
                        2
                    </div>
                    <div className="row-span-1 border-2 border-gray-800 m-2">
                        3
                    </div>

                    <div className="row-span-1 border-2 border-gray-800 m-2">
                        4
                    </div>
                </div> */}
                <div className="absolute bottom-10 right-4 "><FiPlus className=" h-8 w-8    p-1" /></div>
                <button className="absolute bottom-0  right-1  " onClick={()=>{return null}}>
                    <GoHeartFill  fill="false" style={{ backgroundColor: 'ffffff' }} className="aspect-square rounded-full  text-red-500 h-8 w-8 bg-background border-2 border-green-700  p-1" />
                </button>
            </div>
            <div className="flex h-24 border-2 border-green-500 my-2 space-x-4">
                {/* <div className="w-8 h-8 aspect-square rounded-full border-2 border-blue-500 justify-start">h</div>
                <div className="justify-between w-8 border-2 border-red-800">2nd</div>
                <div className="justify-end w-8 border-2 border-red-800">2nd</div> */}
                <div>{productColl.description}</div>
            </div>
        </div>
    )
}