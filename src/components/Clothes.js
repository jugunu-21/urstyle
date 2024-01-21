import React from 'react';
import itemsData from 'C:/Users/LENOVO/Documents/urstyle/src/items.json';
import { Link } from 'react-router-dom';
// import Details from './Details';

export default function Clothes() {

  // const [selectedItem, setSelectedItem] = useState(null);

  // const onItemClick = (item) => {
  //   setSelectedItem(item);

  // };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {itemsData.map((item, index) => (
        <div key={index} className="my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="max-w-64 max-h-64 rounded-t-lg align-middle ml-10 " src={item.image_url} alt="" />
          <Link to={item.Link} target="_blank" rel="noopener noreferrer" className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />

          </Link>
          <br />
          <Link
            
            to={`/details/${item.id}`} // Update the path as needed based on your route configuration
            className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />

            </svg>
          </Link>
        </div>
      ))}
     
    </div>
  );
}






