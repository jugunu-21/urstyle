import React from 'react';
import itemsData from '../../public/items.json';
export default function avgg({ groupid }) {
  let sum = 0;
  let array = [];
  let totalrating = 0;
  let avg = 0;
  const group = itemsData[groupid];
  if (!group || !group.cart) {
      console.error(`Group with ID ${groupid} not found or cart is missing.`);
      return { total: 0, allids: [], avgRating: 0 };
  }

  group.cart.forEach((cart) => {
      const priceWithoutCurrency = cart.price.replace("₹", "");
      const price = parseInt(priceWithoutCurrency);

      sum += price;
      let id = cart.id;
      array.push(id);

      cart.review.forEach((review) => {
          let rating = parseInt(review.rating);
          totalrating += rating;
      });
  });

  const reviewLength = group.cart.reduce((acc, cart) => acc + cart.review.length, 0);
  if (reviewLength > 0) {
      avg = Math.floor(totalrating / reviewLength);
  }

  return { total: sum, allids: array, avgRating: avg };
}
