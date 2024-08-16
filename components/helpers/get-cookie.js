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
    const cookies = Cookies.get('jwtToken');
    console.log("cookie",cookies)
    return cookies ? cookies : null;
}