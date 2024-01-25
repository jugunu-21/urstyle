
import classNames from 'classnames';
import { useParams } from 'react-router-dom';


import React from 'react';


import itemsData from '../items.json';

const Details = () => {
  const { upperId, lowerId } = useParams();

  const upperItemId = upperId;
  const lowerItemId = lowerId;

  const upperItem = itemsData.find((item) => item.upper.id === upperItemId);
  const lowerItem = itemsData.find((item) => item.lower.id === lowerItemId);

  if (!upperItem || !lowerItem) {
    return <div>Item not found</div>;
  }

  const itemsArray = [
    {
      
        id: upperItem.upper.id,
        name: upperItem.upper.name,
        link: upperItem.upper.link,
        image_url: upperItem.upper.image_url,
        price: upperItem.upper.price,
      },
     {
        id: lowerItem.lower.id,
        name: lowerItem.lower.name,
        link: lowerItem.lower.link,
        image_url: lowerItem.lower.image_url,
        price: lowerItem.lower.price,
      },
  
  ];

  return (
    <div>
      {itemsArray.map((item, index) => (
        <div key={index} className="my-4 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-500 dark:border-gray-700">
          <img className="rounded-t-lg align-middle mr-10 p-4" src={item.image_url} alt="" />
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <div
                className={classNames(
                  item.current ? 'bg-emerald-950 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </div>
              <div
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.price}
              </div>
              <br />
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;



