import { NextResponse } from 'next/server';
import toast from 'react-hot-toast';
export default function middleware(request) {
  console.log("inside of middleware");
  const cookies = request.headers.get('Cookie');
  const jwtToken = cookies ? cookies.split('; ').find(row => row.startsWith('jwtToken')).split('=')[1] : null;
  console.log(jwtToken, "JWT Token inside of middleware ");
  const intendedRoute = request.nextUrl.pathname;
 console.log("rouete",intendedRoute)
 const adminRoutes = [
  '/admin/product',
  '/admin/product/productUpdate',
  '/admin/product/productFetch',
  '/admin/product/productAdd',
  // Add more routes as needed
];
const authRoutes=[
'/signin','/signup'
]
const isAuthRoute = authRoutes.some(route => new RegExp(route).test(intendedRoute));

const isAdminRoute = adminRoutes.some(route => new RegExp(route).test(intendedRoute));

  if (jwtToken !== null && isAdminRoute) {
    console.log(`Intended route: ${intendedRoute}`);
    return NextResponse.next();
  } else if (jwtToken !== null && isAuthRoute) {
    // toast.message("already a user")
    const url = request.nextUrl.clone();
    url.pathname = `/signout${intendedRoute}`;
    return NextResponse.rewrite(url);
  } 
  else if (jwtToken == null && isAdminRoute) {
    // toast.success("need to signin first")
    const url = request.nextUrl.clone();
    toast.success("Need to signin or signup first")
    url.pathname = `/signin`;
    return NextResponse.rewrite(url);
  } 
  else {
    console.log("User is not authenticated");
    return NextResponse.next();
  }
}

// app/middleware/auth.js
export const config = {
  matcher: ['/signin', '/signup','/admin/:path*'] 
};