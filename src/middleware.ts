import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isAuthPath = path === "/auth"||path==='/adminAuth';
    const isUserPath = path === "/"||path==="/cart";
    const isAdminPath = path ==='/AdminPage';
    const token = request.cookies.get("token")?.value || "";
    // console.log(token);
    if (isAuthPath && token) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if ((isUserPath||isAdminPath) && !token) {
      return NextResponse.redirect(new URL("/auth", request.nextUrl));
    }
  }
  
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: [
      "/",
      "/history",
      "/cart",
      "/adminAuth",
      "/AdminPage",
    ],
  };