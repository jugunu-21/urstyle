// app/middleware/auth.js
import { NextResponse } from 'next/server';
// import cookie from 'cookie';

export default async function middleware(request) {
  // const cookies = cookie.parse(request.headers.get('Cookie') || '');
  // const sessionId = cookies.sessionId;
  
  console.log(sessionId,"sessionId")

  // if (typeof window!== 'undefined') {
  //   const accessToken = localStorage.getItem('accessToken');
  
  //   const verified = fetch(process.env.NEXT_PUBLIC_ME_API, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${accessToken}` // Corrected here
  //     }
  //   })
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  //  .catch(error => console.error('Error:', error));
  // }
 
 
  if (!sessionId) {
    // User is authenticated, proceed with the request
    console.log("sessionId", sessionId);
    return NextResponse.next();

  } else {
    // User is not authenticated, redirect to sign-in page
    console.log("User is not authenticated");
    console.log("sessionId",sessionId);
    return NextResponse.redirect('http://localhost:3000/signout');// Redirect to the sign-in page
  }
}

// app/middleware/auth.js
export const config = {
  matcher: ['/signin', '/signup'], // Specify paths for sign-in and sign-up pages
};
