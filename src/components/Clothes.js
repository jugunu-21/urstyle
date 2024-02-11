import React from "react";
import itemsData from "../items.json"; // Adjust the path based on your project structure

import { Link } from "react-router-dom";
// import Details from './Details';

export default function Clothes() {
  // const [selectedItem, setSelectedItem] = useState(null);

  // const onItemClick = (item) => {
  //   setSelectedItem(item);




  return (
    <div className="m-6">
        <div className= "pl-20 flex justify-center lg:mr-4 rounded-lg  bg-slate-300 opacity-50 " style={{
        backgroundImage: `url('https://aliciafarrell.com/wp-content/uploads/2022/08/Screenshot-2022-08-17-at-10.57.53-am-1206x540.png')`
      }}>
        <div className=" my-32  lg:my-52   font-serif  text-cyan-700 text-5xl md:text-9xl bg-white">URSTYLE</div>
    
      </div>  
    <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  file:selection:placeholder:  forced-color-adjust-none">

      {itemsData.map((item, index) => (
        <div key={index} className=" my-4 py-2 bg-gray-200  max-w-sm ">
          {item.upper && item.upper.image_url && (
            <div className="w-64 h-80 overflow-hidden bg-gray-200" >
              <img
                className="object-contain w-full h-full rounded-lg  ml-10 bg-white "
                src={item.upper.image_url}
                alt=""
              />
              

              <div className="text-slate-950"> {item.upper.price} </div>
            </div>
          )}

          <br />

          {item.lower && item.lower.image_url && (
            <div className="w-64 h-80 overflow-hidden">
              <img
                className="object-contain w-full h-full rounded-lg  ml-10 bg-white"
                src={item.lower.image_url}
                alt=""
              />
              <div className="text-slate-950 text-center">
                {" "}
                {item.lower.price}{" "}
              </div>
            </div>
          )}

          <br />

          {item.lower && item.upper && (
          <div className="flex justify-end"> {/* Centering the link horizontally */}
            <Link
              to={`/details/${item.upper?.id}/${item.lower?.id}`}
              className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>
  );
}
