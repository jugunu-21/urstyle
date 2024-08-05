import React from "react";
import Link from "next/link";
import findkeyword from "./findKeyword";
export default function Sitelink({ sitelink, setsitelink }:{ sitelink:string; setsitelink :string}) {
  return (
    <div className="h-8 w-24 ">
      <Link
        href={sitelink}
        className=" pl-4 w-full h-full font-medium rounded-lg bg-black bg-cover flex items-center justify-center hover:border-2 hover:border-gray-200 "
        style={{
          backgroundImage: `url(${findkeyword({
            string: setsitelink,
          })})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional: Display a placeholder or text if no image is found */}
        {!findkeyword({ string: setsitelink }) && (
          <span className="text-white">Image not available</span>
        )}
      </Link>
    </div>
  );
}
