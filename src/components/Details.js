import React from 'react';
import classNames from 'classnames';

import itemsData from '../items.json';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const itemId = id;
  const selectedItem = itemsData.find((item) => item.id === itemId);


  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
   
      <div className="my-4 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-500 dark:border-gray-700">
   
      <img className="rounded-t-lg align-middle mr-10 p-4" src={selectedItem.image_url} alt="" />
                  <div className="hidden sm:ml-6 sm:block">
                    
                    <div className="flex space-x-4">
                    <div className={classNames(
                           selectedItem.current ? 'bg-emerald-950 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>{selectedItem.name}</div>

                    <div className={classNames(
                           selectedItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>{selectedItem.price}</div>
                      <br />
                  
                         </div>
                        
                         <a
  href={selectedItem.link}
  target="_blank"
  rel="noopener noreferrer"
  className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Read more
  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
  </svg>
</a>

                  </div>
      
      
      
    </div>
  );
};

export default Details;

