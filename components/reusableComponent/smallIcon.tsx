import React from 'react';

export default function smallicon({icon}:{icon:{des:string,url:string}[]}) {
  return (
    <div>
      <div className=" m-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-2 p-4 ">
      {icon.map((item, index) => (
            <div key={index}>
              <div className="  border-2 border-blue-300 rounded-lg m-2 ">
            
                <img src={item.url} alt="" />
                <div className=" m-2 pb-2 text-center pr-2 bg-blue-200 rounded-lg">
                  {item.des}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
