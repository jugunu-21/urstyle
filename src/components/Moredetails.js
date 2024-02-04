import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function Moredetails() {
  const { id, itemsArrayString } = useParams();
  const itemId = id;
  const decodedItemsArray = JSON.parse(decodeURIComponent(itemsArrayString));

  if (!decodedItemsArray || !Array.isArray(decodedItemsArray)) {
    return <div>Error: Invalid data format</div>;
  }

  const finalItem = decodedItemsArray.find((item) => item.id === itemId);

  if (!finalItem) {
    return <div>Item not found</div>;
  }
  const Customers_Review = () => <div>Home Page</div>;
  const FAQ = () => <div> Page</div>;
  const License = () => <div>Contact Page</div>;

  return (
    
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-4  space-x-4 -space-y-1 ">
      <div className="lg:col-span-1  lg:row-span-2 ">
        <div
          className="sm:overflow-hidden sm:rounded-lg"
          style={{ height: "600px" }}
        >
          <img
            src={finalItem.image_url}
            className=" object-cover object-center "
            alt=""
          />
        </div>
      </div>
      <div className="lg:col-span-1  lg:row-span-4 pr-10 ">
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              <svg
                className="text-gray-900 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-900 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-900 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-900 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-200 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {/* <p className="sr-only">4 out of 5 stars</p>
            <Link
              to="#"
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              117 reviews
            </Link> */}
          </div>
        </div>
        <div>
          <h1 className="pt-4 pb-2 text-3xl font-bold">
            Application UI Icon Pack
          </h1>
          <h1 className="pb-4 text-gray-500">
            Version 1.0 (Updated June 5, 2021)
          </h1>
          <div className="space-y-6">
            <p className="text-base text-gray-500">
              The Basic Tee 6-Pack allows you to fully express your vibrant
              personality with three grayscale options. Feeling adventurous? Put
              on a heather gray tee. Want to be a trendsetter? Try our exclusive
              colorway: &quot;Black&quot;. Need to add an extra pop of color to
              your outfit? Our white tee has you covered.
            </p>
          </div>
        </div>

        <div className=" md:inline-flex ">
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-20 md:mx-2 "
          >
            Pay$220
          </button>
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-20  "
          >
            Preview
          </button>
          <div className="my-4 border-t border-gray-700"></div>
        </div>
        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              <li className="text-gray-500">
                <span className="text-gray-500">Hand cut and sewn locally</span>
              </li>
              <li className="text-gray-500">
                <span className="text-gray-500">
                  Dyed with our proprietary colors
                </span>
              </li>
              <li className="text-gray-500">
                <span className="text-gray-500">Pre-washed &amp; pre-shrunk</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">License</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-500">
              The 6-Pack includes two black, two white, and two heather gray
              Basic Tees. Sign up for our subscription service and be the first
              to get new, exciting colors, like our upcoming &quot;Charcoal
              Gray&quot; limited release.
            </p>
          </div>
        </div>
        <div className=" mt-10 pb-10 ">
          <h2 className="text-sm font-medium text-gray-900 pb-4 ">Share </h2>
          <div className=" inline-flex  space-x-6 ">
            <Link to="#" className="aspect-square size-5 ">
              <img
                src="https://1.bp.blogspot.com/-qYwreqeIN6w/XN0LzjGE2GI/AAAAAAAAAmA/PV1m0NfGuxUEXFBS8Ge4VMXWE34XzrfYgCPcBGAYYCw/s20/facebook-logo-Grey-%2Bhigh%2Bresolution.png"
                alt=""
              />
            </Link>
            <Link to="#" className="aspect-square size-5 ">
              <img
                src="https://www.iconninja.com/files/611/75/580/instagram-icon.png"
                alt=""
                srcset=""
              />
            </Link>
            <Link to="#" className="aspect-square size-8 text-zinc-500 ">
              <img
                src="https://logowik.com/content/uploads/images/twitter-x-line9741.logowik.com.webp"
                alt=""
              />
            </Link>
           
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 lg:row-span-2 pt-10 ">
        <div className="inline-flex space-x-5">
          <Link to="/">
            <p>Customers Review</p>
          </Link>
          <Link to="/FAQ">
            <p>FAQ</p>
          </Link>
          <Link to="/License">
            <p>License</p>
          </Link>

          <Routes>

            <Route path="/" exact component={<Customers_Review />} />
            <Route path="/FAQ" component={<FAQ />} />
            <Route path="/License" component={<License />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
