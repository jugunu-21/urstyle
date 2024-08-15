// "use client "

import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Countrycodedata} from "./ContextCountryCode";
const Countrycode = () => {
  const { selectedCountryCode, setSelectedCountryCode } =
    useContext(Countrycodedata);
  const handleValueChange = (newValue) => {
    console.log("New value:", newValue); // Debugging line
    setSelectedCountryCode(newValue);
    // console.log(selectedCountryCode);
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="91"
          // onClick={() => setSelectedCountryCode("91")}
        >
          India
        </SelectItem>
        <SelectItem
          value="1"
          // onClick={() => {
          //   console.log("Africa clicked"); // Debugging line
          //   setSelectedCountryCode("90");
          // }}
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

export default Countrycode;
