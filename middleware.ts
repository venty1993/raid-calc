import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import database from "./util/database";

export function middleware(request: NextRequest) {

    if(request.nextUrl.pathname.startsWith('/Oauth')) {
        return
    }

    if(!cookies().get('jwt_token')){
        console.log('토큰이 없다네')
        console.log(cookies().get('jwt_token'));
        return NextResponse.redirect(new URL('/', request.url))
    }

}

export const config = {
    matcher : '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)' ,
}