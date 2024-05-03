// "use client "

import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Countrydata from "./ContextCountryCode";
const Countrycode = () => {
  const { selectedCountryCode, setSelectedCountryCode } =
    useContext(Countrydata);
    const handleValueChange = (newValue) => {
      console.log("New value:", newValue); // Debugging line
      setSelectedCountryCode(newValue)
        // console.log(selectedCountryCode);
    };
  return (
    <Select  onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="91"
          // onClick={() => setSelectedCountryCode("91")}
        >
          India
        </SelectItem>
        <SelectItem
          value="90"
          // onClick={() => {
          //   console.log("Africa clicked"); // Debugging line
          //   setSelectedCountryCode("90");
          // }}
        >
          Africa
        </SelectItem>
        <SelectItem value="19"
          
          // onClick={() => setSelectedCountryCode("19")}
        >
          Nepal
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Countrycode;
