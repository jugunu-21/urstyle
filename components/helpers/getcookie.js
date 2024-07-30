// import React from 'react';

//  export default function getJwtTokenFromCookies() {
//   const cookies = document.cookie ? document.cookie.split('; ') : [];

//   const jwtCookie = cookies.find(cookie => cookie.startsWith('jwtToken'));
//   if (!jwtCookie) {
//     return null;
//   }

//   const [_, token] = jwtCookie.split('=');
//   return token;
// }
import Cookies from 'js-cookie';

export default function getJwtTokenFromCookies() {
  // Check if window is defined (client-side)
  if (typeof window !== 'undefined') {
    
    const cookies = Cookies.get('jwtToken');
    return cookies ? cookies : null;
  }
  // Server-side scenario
  return null;
}