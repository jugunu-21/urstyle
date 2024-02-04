import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>contact</h1>
    </div>
  );
}
// import React from 'react';
// import { useParams } from 'react-router-dom';

// export default function Moredetails() {
//   const { id, itemsArrayString } = useParams();
//   const itemId = id;
//   const decodedItemsArray = JSON.parse(decodeURIComponent(itemsArrayString));

//   if (!decodedItemsArray || !Array.isArray(decodedItemsArray)) {
//     return <div>Error: Invalid data format</div>;
//   }

//   const finalItem = decodedItemsArray.find((item) => item.id === itemId);

//   if (!finalItem) {
//     return <div>Item not found</div>;
//   }

//   return (
//     <div className="lg:flex">
//       <div className="lg:w-1/2">
//         <div className="">
//           {/* Image gallery */}
//           <div className=" mx-auto mt-6 max-w-8xl sm:px-6 lg:grid lg:max-w-10xl lg:grid-cols-3 lg:gap-x-8 lg:pl-8">
//             <div className=" aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
//               <img
//                 src={finalItem.image_url}
//                 alt="/"
//                 className="  h-full w-full object-cover object-center"
//               />
//             </div>
//           </div>

//           {/* Product info */}
//           <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8  lg:pt-16">
//             <div className="lg:col-span-3  lg:border-gray-200 lg:pr-8">
//               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">{finalItem.name}</h1>
//             </div>
//           </div>
//           <div className=" ml-6 lg:row-span-3 lg:mt-0">
//             <h2 className="sr-only">Product information</h2>
//             <p className="  text-2xl tracking-tight text-gray-900">{finalItem.price}</p>

//             {/* Reviews */}
//             <div className="mt-6">
//               <h3 className="sr-only">Reviews</h3>
//               <div className="flex items-center">
//                 <div className="flex items-center">
//                   <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                     117 reviews
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-10">
//               <a
//                 href={finalItem.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Read more
//               </a>
//             </div>
//             </div>

           
//           </div>

//         </div>
//       </div>

//       {/* Right Box */}
//       <div className="lg:w-1/2">
      
          

//           {/* Options */}
         

//           <div className="ml-6 py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//             {/* Description and details */}
//             <div>
//               <h3 className='text-2xl'>Description</h3>
//               <div className="space-y-6">
//                 <p className="text-base text-gray-900">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro sapiente? Incidunt, autem facilis! Praesentium reprehenderit ipsam enim necessitatibus optio sunt provident qui eum eveniet cumque impedit nostrum, consequuntur saepe.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
//               <div className="mt-4">
//                 <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                   <li className="text-gray-400">
//                     <span className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
//                   </li>
//                   <li className="text-gray-400">
//                     <span className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
//                   </li>
//                   <li className="text-gray-400">
//                     <span className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</span>
//                   </li>
//                   <li className="text-gray-400">
//                     <span className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <form className="mt-10">
//               {/* Colors */}
//               <button
//                 type="submit"
//                 className="  my-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Add to bag
//               </button>
//             </form>
        
//         </div>
//       </div>
//     </div>
//   );
// }