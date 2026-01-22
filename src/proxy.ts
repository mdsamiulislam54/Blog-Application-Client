import { NextRequest, NextResponse } from "next/server";
import { userSession } from "./services/user.service";
import { roles } from "./constants/roles";


export default async function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    let isAdmin = false;
    let isAuthenticated = false;
    const { data } = await userSession.getSession();


    if (data && data.user) {
        isAuthenticated = true;
        if (data.user.role === roles.ADMIN) {
            isAdmin = true;
        }
    }
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    if (isAdmin && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/admin-dashboard', req.url));
    }
    if (!isAdmin && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/user-dashboard', req.url));
    }
   
    console.log("Pathname:", pathname);
    return NextResponse.next();
}


export const config = {
    matcher: ['/about', '/dashboard/:path*','/user-dashboard/:path*','/admin-dashboard/:path*'],
};