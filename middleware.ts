import { cookies } from "next/headers";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import * as jose from 'jose';
import { useUserStore } from "./util/loginState";

export async function middleware(request: NextRequest, event:NextFetchEvent) {

    const bearerToken = request.cookies.get('jwt_access_token')
    const accessToken = jose.decodeJwt(bearerToken?.value as string)

    event.waitUntil(
        fetch('http://localhost:3000/api/myLogin',{
            method: 'POST',
            body: JSON.stringify({'token' : accessToken})
        })
    )

    if(request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.next()
    }


    
    
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SERVER_TOKEN)
        const verifiedToken = await jose.jwtVerify(bearerToken?.value as string, secret)
    }catch {
        
        const refreshToken = request.cookies.get('jwt_refresh_token')
        
        try{
            // 리프레시 토큰이 유효한경우 DB조회를 위해 리다이렉트
            const secret = new TextEncoder().encode(process.env.JWT_SERVER_TOKEN_REFRESH)
            const verifiedToken = await jose.jwtVerify(refreshToken?.value as string, secret)
            return NextResponse.redirect(new URL('/login/refreshToken', request.url))

        }catch {
            // 리프레시토큰이 유효하지 않은경우 홈으로 이동
            return NextResponse.redirect(new URL('/', request.url))
        }


    }

     // 액세스토큰이 없으면 홈으로 이동
     if(!bearerToken) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher : '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)' ,
}