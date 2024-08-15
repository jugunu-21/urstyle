import React from "react";

export default function findkeyword(params:{string:string}) {
  const { string } = params;
  const pattern = /\b(amazon|flipkart|mesho)\b/gi;
  const matches = string.match(pattern);

  if (matches && matches.includes("amazon")) {
    return "https://www.citypng.com/public/uploads/preview/-115963234920bla0rqz8j.png"; // Image URL for Amazon
  } else {
    return ""; // Return empty string for no image
  }
}
