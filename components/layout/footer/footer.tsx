"use client"
import React from "react";
import Newsletter from "./news-letter/news-letter";

export default function Footer() {
  return (
    <div>
   <Newsletter/>
      <div className=" p-4 bg-gray-900 text-white text-sm pt-10">
      <div className=" font-serif text-cyan-300 font-extrabold">
              {" "}
              URSTYLE{" "}
            </div>
        <div className=" text-sm  grid grid-cols-5 sm:grid-cols-3  sm:space-x-4  ">
          <div className="pt-2  col-span-3 sm:col-span-1">
           
            <div className="font-bold">Contact</div>
            <div className="flex   ">
              <div className="font-semibold ">Address:</div>
              <div className="text-wrap">Chuaras, Sringar, Uttarakhand</div>
            </div>

            <div className="flex  ">
              <div className="font-semibold">phone:</div>
              <div className="text-wrap">+6306441401/ (+91)0123456789</div>
            
            </div>
            <div>
              <span className="font-semibold text-wrap">hours:</span>10:00-18:00, mon-sat
            </div>
          </div>
          <div className="pt-2  col-span-2 sm:col-span-1">
            <div className="font-bold">About</div>
            <div>About us</div>
            <div>Delivery Information</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Contact us</div>
          </div>
          <div className="pt-2  col-span-3 sm:col-span-1">
            <div className="font-bold">My Account</div>
            <div>Sign In</div>
            <div>View Cart</div>
            <div>My Wishlist</div>
            <div>Track My Order</div>
            <div>Help</div>
          </div>

        </div>
       
      </div>
      <div className="pl-6 pt-4 pb-10">© 2023-2024 urstyle.com </div>
    </div>
  );
}
