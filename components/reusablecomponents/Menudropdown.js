"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Menudropdown({ name, dropdata, onfilterchange }) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className=" border-white">
       {name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdata.map((item, index) => (
          <div key={index} className="cursor-pointer">
             <DropdownMenuItem onClick={() => onfilterchange(item.link)}>
              {item.name}
              </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
