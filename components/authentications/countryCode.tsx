
import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface CountrycodeProps {
  setSelectedCountryCode: (value: string) => void;
}

const Countrycode = ( {setSelectedCountryCode}:CountrycodeProps) => {
  
  const handleValueChange = (newValue: string) => {
    console.log("New value:", newValue);
    setSelectedCountryCode(newValue);
   
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="91"
        >
          India
        </SelectItem>
        <SelectItem
          value="1"
        >
          Austria
        </SelectItem>
        <SelectItem
          value="977"
        >
          Nepal
        </SelectItem>
        <SelectItem
          value="55"
        >
          Brazil
        </SelectItem>
        <SelectItem
          value="10"
        >
         Canada
        </SelectItem>
        <SelectItem
          value="86"
        >
          China
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export {Countrycode};
