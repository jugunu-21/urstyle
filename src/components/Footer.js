import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://cm1.narvii.com/6520/3b103973169af1af80f04d5e06842fb47be23c15_00.jpg')`,
        }}
        >
        <div className=" py-8 px-24 lg:flex">
          <div className=" ">
            <div className="font-serif text-black text-3xl">
              sign up for urstyle
            </div>
            <div className=" text-xl font-mono text-black">
              Get E-mail updates about our latest clothes collection and
              <span className="text-orange-700">special offer </span>
            </div>
          </div>
          <div className=" flex">
            <textarea
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="your email address"
              className=" w-64 h-10 bg-white text-slate-950"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="10"
              rows="1"
              placeholder="sing up"
              className="w-32 h-10 bg-red-100 text-slate-950"
            ></textarea>
          </div>
        </div>
      </div>
      <div className=" bg-gray-900 text-white text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-4 pt-10">
        <div className="p-4">
         
          <div className=" font-serif text-cyan-300 font-extrabold"> URSTYLE </div>
          <div  className="font-bold ">contact</div>
          <div> <span className="font-semibold">addrses:</span> chuaras,sringar,uttarakhand</div>
          <div> <span className="font-semibold">phone:</span>+6306441401/(+91)0123456789</div>
          <div><span className="font-semibold">hours:</span>10:00-18:00,mon-sat</div>
        </div>
        <div>
     
          <div className="font-bold">About</div>
          <div>About us</div>
          <div>Delivery Information</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>Contact us</div>
        </div>
        <div>
          <div className="font-bold">My Account</div>
          <div>Sign In</div>
          <div>View Cart</div>
          <div>My Wishlist</div>
          <div>Track My Order</div>
          <div>Help</div>
        </div>
        <div >
          <div className="font-bold ">Follow us</div>
          <div>From App Store or Google Play</div>
          <div className="flex space-x-4 pt-10">
            {/* Other content */}
            <div className=" md:flex items-center">
              <img
                className="object-contain h-10"
                src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"
                alt="App Store Logo"
              />
              <img
                className="object-contain h-10"
                src="https://i1.wp.com/www.oispice.com/wp-content/uploads/2020/07/Google-Play-Store-app.jpg?fit=1200%2C675&ssl=1"
                alt="Google Play Store Logo"
              />
            </div>
          </div>

          <div>Secured Payment Gateway</div>
        </div>
          </div>
          <div className="pl-6 pt-4" >© 2023-2024 urstyle.com    </div>
    </div>
  );
}
