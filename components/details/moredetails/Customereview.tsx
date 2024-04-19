import React from 'react';
import Star from "@/components/reusablecomponents/Star";

interface Review {
  image: string;
  rname: string;
  date: string;
  content: string;
  rating: number;
}

interface Props {
  reviewData: Review[];
}

const Customereview: React.FC<Props> = ({ reviewData }) => {
  return (
    <div className="my-8">
      {reviewData.map((review, index) => (
        <div key={index} className="my-6  text-sm  ">
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={review.image}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="font-medium">{review.rname}</div>
              <div>{review.date}</div>
              <div className="flex items-center my-2">
                <Star len={review.rating} />
              </div>
              <div className="mt-2">{review.content}</div>
            </div>
          </div>
          {index !== reviewData.length - 1 && (
            <div className="my-4 border-t border-gray-200"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Customereview;
