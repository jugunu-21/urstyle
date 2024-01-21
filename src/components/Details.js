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
   
      <div className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
      <img className="rounded-t-lg align-middle mr-10 p-4" src={selectedItem.image_url} alt="" />
                  <div className="hidden sm:ml-6 sm:block">
                    
                    <div className="flex space-x-4">
                    <div className={classNames(
                           selectedItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>{selectedItem.name}</div>

                    <div className={classNames(
                           selectedItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>{selectedItem.price}</div>
                    </div>
                  </div>
      
      
      
    </div>
  );
};

export default Details;





