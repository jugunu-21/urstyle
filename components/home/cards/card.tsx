
import { GoHeartFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
export const Card = () => {
    return (
        <div className=" border-2 border-gray-800   my-4 p-2  ">
            <div>hey</div>
            <div className=" relative h-72 md:h-80  border-2 border-gray-800 grid grid-cols-3">
                <div className="border-2 border-gray-800 col-span-2 my-2"></div>
                <div className=" col-span-1 grid grid-rows-3">
                    <div className="row-span-1 border-2 border-gray-800 m-2">
                        1
                    </div>
                    <div className="row-span-1 border-2 border-gray-800 m-2">
                        2
                    </div>

                    <div className="row-span-1 border-2 border-gray-800 m-2">
                        3
                    </div>
                </div>
                <div className="absolute bottom-10 right-4 "><FiPlus className=" h-8 w-8    p-1"  /></div>
                <div className="absolute bottom-0  right-1  "><GoHeartFill fill="false" style={{ backgroundColor: 'ffffff'}} className="aspect-square rounded-full  text-red-500 h-8 w-8 bg-background border-2 border-green-700  p-1"  /></div>
            </div>
           
        </div>
    )

}