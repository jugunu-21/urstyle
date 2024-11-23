import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';
import toast from 'react-hot-toast';

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', '/sign-up/verify-phone-number'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
    // const cookies = request.headers.get('Cookie');
    // // const jwtToken = cookies ? cookies.split('; ').find(row => row.startsWith('jwtToken')).split('=')[1] : null;
    // const jwtToken = cookies?.includes('jwtToken') ? cookies.split('; ').find(row => row.startsWith('jwtToken'))?.split('=')[1] : null;

    // const intendedRoute = request.nextUrl.pathname;
    // const adminRoutes = [
    //   '/admin/product',
    //   '/admin/product/productupdate',
    //   '/admin/product/productFetch',
    //   '/admin/product/productadd',
    //   // Add more routes as needed
    // ];
    // const authRoutes = [
    //   '/sign-in', '/sign-up'
    // ]
    // const isAuthRoute = authRoutes.some(route => new RegExp(route).test(intendedRoute));

    // const isAdminRoute = adminRoutes.some(route => new RegExp(route).test(intendedRoute));

    // if (jwtToken && isAdminRoute) {
    //   return NextResponse.next();
    // } else if (jwtToken != null && isAuthRoute) {

    //   const url = request.nextUrl.clone();
    //   url.pathname = `/sign-out${intendedRoute}`;
    //   return NextResponse.rewrite(url);
    // }
    // else if (jwtToken != null && isAdminRoute) {
    //   const url = request.nextUrl.clone();
    //   toast.success("Need to signin or signup first")
    //   url.pathname = `/sign-in`;
    //   return NextResponse.rewrite(url);
    // }
    // else {
    //   // console.log("User is not authenticated");
    //   return NextResponse.next();
    // }
  }
}
)

export const config = {
  matcher: ['/sign-in', '/sign-up', '/admin/:path*']
};