import { NextResponse } from "next/server";
import  { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; // here we decalde the path name

  // Now those who have tokens (means those who have logged in) should not see the login and signup paths , so make them public
  const isPublicPath = path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || null;

  // if the path is public and user has tokens, then
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  // if there is no token , so redirect to the login/signup page
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}
// See "Matching Paths" below to learn more
export const config = {
  // paths were we want to match the middleware
    matcher: [
    '/',
    '/profile',
    '/login',
    '/signup'
  ]
};



