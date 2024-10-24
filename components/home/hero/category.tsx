import * as React from "react"
import { fashionCategory } from "@/public/category"
import { Button } from "@/components/ui/button"
import Image from "next/image";
export function Category({ setCategoryQuery }: { setCategoryQuery: (category: string) => void }) {
  const scrollbarRef = React.useRef(null);
  return (
    <div className="  flex h-32 overflow-x-auto w-full gap-1">
      <Button onClick={() => setCategoryQuery('')} className="h-32 rounded-2xl aspect-square flex flex-col justify-center items-center bg-white hover:bg-white">
        <div className="aspect-square rounded-full border-2 border-y-red-300 overflow-hidden">
          <img src="/f1.png" alt="Background Image" className="w-full h-full object-cover" />
        </div>
        <div className="mt-4 text-xs font-semibold text-red-300">Urstyle</div>
      </Button>
      <div
        className="  border-[1px] border-stone-800 mt-1 mb-6 "

      ></div>
      <div className="flex gap-1 ">
        {fashionCategory.map((fashion, index) => (
          <Button key={index} className="h-28 w-20 flex flex-col items-center focus:bg-slate-200 rounded-2xl bg-white hover:bg-slate-100">
            <div className="w-16 h-16 ">
              <Image
                src={fashion.image}
                alt="Image"
                width={84}
                height={84}
                className=" w-16 h-16 rounded-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>

            <div className="mt-2 text-xs font-semibold text-center text-black">
              {fashion.look.split(' ')[0]}
            </div>
          </Button>


        ))}
      </div>
    </div>


  )
}
