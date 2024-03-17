import React, { useState } from "react";
import { RxLetterCaseUppercase } from "react-icons/rx";
import { useRouter } from "next/router";

import Link from "next/link";
import avgg from "@/Components/datas/avgg";
import findkeyword from "@/Components/reusablecomponents/findkeyword";
import Star from "@/Components/reusablecomponents/Star";
import itemsData from "@/public/items"
const Customersreview = (props) => {
  const reviewData = props.reviewData;
  return (
    <div className="my-8">
      {reviewData.map((review, index) => (
        <div key={index} className="my-6  text-sm  ">
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={review.image}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="font-medium  ">{review.rname}</div>
              <div className=" ">{review.date}</div>
              <div className="flex items-center my-2">
              <Star len={review.rating }/>
              </div>
              <div className="mt-2">{review.content}</div>
            </div>
          </div>
          {index !== reviewData.length - 1 && (
            <div className="my-4 border-t border-gray-200"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="  ">
      <div className="py-4">
        <h4 className=" py-1   font-semibold ">What format are these icons?</h4>
        <p className=" ">
          The icons are in SVG (Scalable Vector Graphic) format. They can be
          imported into your design tool of choice and used directly in code.
        </p>
      </div>
      <div className="py-2">
        <h4 className=" py-1    font-semibold ">
          Can I use the icons at different sizes?
        </h4>
        <p className="">
          Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be
          scaled to different sizes as needed. We don't recommend going smaller
          than 20 x 20 or larger than 64 x 64 to retain legibility and visual
          balance.
        </p>
      </div>
      <div className="py-2">
        <h4 className=" py-1   font-semibold ">
          Do I have to add attribution to my projects?
        </h4>
        <p className="">
          No. You are allowed to use these icons freely in your personal and
          professional work. If you enjoy the icon pack, feel free to tell
          others!
        </p>
      </div>
    </div>
  );
};
const License = () => (
  <div className="  ">
    <div className="py-2">
      <h4 className=" py-1   font-semibold ">Overview</h4>
      <p>
        For personal and professional use. You cannot resell or redistribute
        these icons in their original or modified state.
      </p>
      <ul className=" py-1 ml-4 list-disc  ">
        <li>
          <span>You're allowed to use the icons in unlimited projects.</span>
        </li>
        <li>
          <span>Attribution is not required to use the icons.</span>
        </li>
      </ul>
    </div>
    <div className="py-2">
      <h6 className="   font-semibold">What you can do with it </h6>
      <ul className=" py-1 list-disc ml-4">
        <li>
          Use them freely in your personal and professional work. Make them your
          own.
        </li>
        <li> liChange the colors to suit your project or brand.</li>
      </ul>
    </div>
    <div className="py-2">
      <h6 className="    font-semibold">What you can't do with it</h6>
      <ul className=" py-1 list-disc ml-4">
        <li>
          Don't be greedy. Selling or distributing these icons in their original
          or modified state is prohibited.
        </li>
        <li>
          Don't be evil. These icons cannot be used on websites or applications
          that promote illegal or immoral beliefs or activities.
        </li>
      </ul>
    </div>
  </div>
);
export default function Moredetails() {
  const [selectedContent, setSelectedContent] = useState("customers");
  // const router = useRouter();
  // const {
  //   query: { itemid,groupid },
  // } = router;
  // const props = {
  //   itemid,
  //groupid,
  // };

  // const itemId = props.itemid;
  const groupId = 2;
  const cartId =21 ;
// const finalItem= itemsData[groupId].cart[itemId]
  // const group = itemsData.find(group => group.id === groupId)
  // const finalItem = group.cart.find(cart => cart.id === cartId)
  const finalItem=itemsData.find(group=>parseInt(group.id)===groupId).cart.find(cart=>parseInt(cart.id)===cartId)
 
  if (!finalItem) {
    return <div>Item not found</div>;
  }
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / reviews.length;
  };
  return (
    <div className=" text-slate-900 p-4 lg:grid lg:grid-cols-2 lg:grid-rows-4  space-x-4 -space-y-1 bg-stone-200">
      <div className="lg:col-span-1  lg:row-span-2 ">
        <div
          className="  rounded-lg overflow-hidden"
          style={{ height: "600px" }}
        >
          <img
            src={finalItem.image_url}
            className=" object-cover object-center h-full w-full hover:border-4 hover:border-stone-300"
            alt=""
          />
        </div>
      </div>
      <div className="lg:col-span-1  lg:row-span-4 pr-10 ">
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <h1 className="pt-4 pb-2 text-3xl font-bold">{finalItem.name}</h1>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex">
                <Star len={calculateAverageRating(finalItem.review) }/>
              </div>
            </div>
           
          </div>
        </div>
        <div>
          <div className="font-bold my-2"> Total Price : {finalItem.price}</div>
          <h1 className="pb-4  ">Your look should talk rather than you</h1>
          <div className="space-y-6">
            <p className="text-base  ">{finalItem.description}</p>
          </div>
        </div>

        <div className="h-8 w-28 my-2 ">
          <Link
            href={finalItem.link}
            className="w-full h-full font-medium rounded-lg bg-black bg-cover flex items-center justify-center hover:border-2 hover:border-gray-200
                         "
            style={{
              backgroundImage: `url(${findkeyword({ string: finalItem.image_url })})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Optional: Display a placeholder or text if no image is found */}
            {!findkeyword({ string: finalItem.image_url }) && (
              <span className="text-white">Image not available</span>
            )}
          </Link>
        </div>
        <div className="my-2 border-t border-gray-200  "></div>

        <div className="mt-2">
          <h3 className="text-sm m text-gray-900   font-bold">Highlights</h3>

          <div className="mt-4">
            <ul className="list-disc space-y-2 pl-4 text-sm">
              <li>
                <span className=" ">Hand cut and sewn locally</span>
              </li>
              <li className=" ">
                <span className=" ">Dyed with our proprietary colors</span>
              </li>
              <li className=" ">
                <span className=" ">Pre-washed &amp; pre-shrunk</span>
              </li>
            </ul>
          </div>
          <div className="my-4 border-t border-gray-200 "></div>
        </div>
        <div className="mt-10">
          <h2 className="text-sm text-gray-900   font-bold">License</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm  ">
              The 6-Pack includes two black, two white, and two heather gray
              Basic Tees. Sign up for our subscription service and be the first
              to get new, exciting colors, like our upcoming &quot;Charcoal
              Gray&quot; limited release.
            </p>
          </div>
        </div>
        <div className="my-4 border-t border-gray-200 "></div>
        <div className=" mt-10 pb-10 ">
          <h2 className="text-sm  text-gray-900   font-bold pb-4 ">Share </h2>
          <div className=" flex  space-x-6  ">
            <Link href="#" className="aspect-square size-5  ">
              <img
                src="https://1.bp.blogspot.com/-qYwreqeIN6w/XN0LzjGE2GI/AAAAAAAAAmA/PV1m0NfGuxUEXFBS8Ge4VMXWE34XzrfYgCPcBGAYYCw/s20/facebook-logo-Grey-%2Bhigh%2Bresolution.png"
                alt=""
              />
            </Link>
            <Link href="#" className="aspect-square size-5 ">
              <img
                src="https://www.iconninja.com/files/611/75/580/instagram-icon.png"
                alt=""
                f
                srcset=""
              />
            </Link>
            <Link href="#" className="aspect-square size-8   ">
              <img
                className="rounded-full"
                src="https://logowik.com/content/uploads/images/twitter-x-line9741.logowik.com.webp"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 lg:row-span-4 pt-10 ">
        <div className="  inline-flex space-x-5  ">
          <button
            className="border border-transparent group  hover:border-b-gray-500   focus:border-b-black "
            onClick={() => setSelectedContent("customers")}
          >
            Customers Review
          </button>
          <button
            className="border border-transparent group hover:border-b-gray-700
          focus:outline-none focus:border-b-black"
            onClick={() => setSelectedContent("FAQ")}
          >
            FAQ
          </button>
          <button
            className="border border-transparent group hover:border-b-gray-700 focus:outline-none focus:border-b-black"
            onClick={() => setSelectedContent("License")}
          >
            License
          </button>
        </div>

        <div className="my-4 border-t border-gray-200 "></div>
        <div>
          {selectedContent === "customers" && (
            <Customersreview reviewData={finalItem.review} />
          )}
        </div>

        <div>{selectedContent === "FAQ" && <FAQ />}</div>
        <div>{selectedContent === "License" && <License />}</div>
      </div>
    </div>
  );
}
