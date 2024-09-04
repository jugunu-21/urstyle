import React from 'react';
import icon from "@/public/iconsData"
import Image from 'next/image';
export default function benefit() {
  return (
    <div>
     <div className=" m-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-2 p-4 ">
    {icon.map((item, index) => (
    
            <div key={index}>
              <div className="  border-2 border-blue-300 rounded-lg m-2 ">
            
              <Image
              width={100}
              height={100} src={item.url} alt="" />
                <div className=" m-2 pb-2 text-center pr-2 bg-blue-200 rounded-lg">
                  {item.des}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
