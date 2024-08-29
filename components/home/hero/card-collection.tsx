
import { Card} from "@/components/home/cards/card";
export function Collection() {
    return (
        <div className=" justify-center items-center border-2 border-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="border-2 border-green-500  mx-14 my-2 sm:m-0">
                <div className="col-span-1 border-2 border-red-500" >
                    <Card/>
                </div>
            </div>
        )
        )}</div>
    )
}