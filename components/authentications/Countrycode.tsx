// Countrycode.tsx
import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
// import { useState } from 'react';
interface CountrycodeProps {
  setCountryCode: (countryCode: string) => void;
}

const Countrycode: React.FC<CountrycodeProps> = ({ setCountryCode }) => {
  // const [selectedcountrycode, setSelectedcountrycode]=useState("Theme")
  return (
  
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="91" onClick={() =>  setCountryCode("91")}>India</SelectItem>
          <SelectItem value="90" onClick={() =>  setCountryCode("90")}>Africa</SelectItem>
          <SelectItem value="19" onClick={() =>  setCountryCode("19")}>Nepal</SelectItem>
        </SelectContent>
      </Select>

  );
};

export default Countrycode;
