import React from 'react';




import { useParams } from 'react-router-dom';

import classNames from 'classnames';





export default function Moredetails() {
  

  const { id,itemsArrayString } = useParams();

 
  const itemId = id;
  const decodedItemsArray = JSON.parse(decodeURIComponent(itemsArrayString))
  
  if (!decodedItemsArray || !Array.isArray(decodedItemsArray)) {
    return <div>Error: Invalid data format</div>;
  }
// eslint-disable-next-line no-unused-vars
const finalItem = decodedItemsArray.find((item) => item.id === itemId);


  if (!finalItem) {
    return <div>Item not found</div>;
   }
  return (
    <div className="my-4 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-500 dark:border-gray-700">
    <img className="rounded-t-lg align-middle mr-10 p-4" src={finalItem.image_url} alt="" />
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <div
          className={classNames(
            finalItem.current ? 'bg-emerald-950 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium'
          )}
        >
          {finalItem.name}
        </div>
        <div
          className={classNames(
            finalItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium'
          )}
        >
          {finalItem.price}
        </div>
        <br />
      </div>
      <a
          href={finalItem.link}
        target="_blank"
        rel="noopener noreferrer"
        className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
      
        </a>
      </div>
    </div>

  );
}
