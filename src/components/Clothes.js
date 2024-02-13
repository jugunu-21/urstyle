import React from "react";
import itemsData from "../items.json";
import * as images from './Features/image'; // Adjust the path accordingly

// You can now access individual images like this:
// images.image1, images.image2, images.image3


import { Link } from "react-router-dom";
// import Details from './Details';

export default function Clothes() {
  const smallicon = [
   
    {
      url:images.image1,
      des: 'Free shipping'
    },
    {
      url:images.image2,
      des:'  Online order'
    },
    {
      url: images.image3,
      des:'Save money'
    },
    {
      url:images.image4,
      des: ' Promotions'
    },
    {
      url:images.image5,
      des: '  Happy Sell'
    },
    {
      url: images.image6 ,
      des:'  24/7 Support'
    }
  ]
  // const [selectedItem, setSelectedItem] = useState(null);

  // const onItemClick = (item) => {
  //   setSelectedItem(item);

  return (
    <div className="m-6">
      <div
        className="pl-20 flex justify-center lg:mr-4 rounded-lg  bg-slate-300 opacity-50 "
        style={{
          backgroundImage: `url('https://aliciafarrell.com/wp-content/uploads/2022/08/Screenshot-2022-08-17-at-10.57.53-am-1206x540.png')`,
        }}
      >
        <div className=" my-28  lg:my-42   font-serif  text-cyan-700 text-5xl md:text-9xl bg-white">
          URSTYLE
        </div>
      </div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 ">
        {itemsData.map((item, index) => (
          <div
            key={index}
            className=" my-2 my- max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-500 dark:border-gray-700 "
          >
            {item.upper && item.upper.image_url && (
              <div className="">
                <img
                  className="max-w-64 max-h-64 rounded-lg align-middle ml-10 hover:border-teal-900 hover:border-2 "
                  src={item.upper.image_url}
                  alt=""
                />

                <div className="text-white font-semibold text-center">
                  {" "}
                  {item.upper.price}{" "}
                </div>
              </div>
            )}

            <br />

            {item.lower && item.lower.image_url && (
              <div className="">
                <img
                  className="max-w-64 max-h-64 rounded-lg align-middle ml-10 hover:border-teal-900  hover:border-2"
                  src={item.lower.image_url}
                  alt=""
                />
                <div className="text-white font-semibold text-center">
                  {item.lower.price}
                </div>
              </div>
            )}

            <br />

            {item.lower && item.upper && (
              <div className="flex justify-end">
                {/* Centering the link horizontally */}
                <Link
                  to={`/details/${item.upper?.id}/${item.lower?.id}`}
                  className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" m-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-2 p-4">
      {smallicon.map((item,index) => <div key={index} >
        <div className=  " border-2 rounded-lg m-2 ">
          <img
            src={item.url}
            alt=""
          />
          <div className=" pb-2 text-center pr-2">{item.des} </div>
        </div>
    
      </div>  )}
      </div>
     
      
    </div>
  );
}
