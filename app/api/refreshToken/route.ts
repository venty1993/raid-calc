import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jose from 'jose';
import database from "@/util/database";
import { refreshJWT } from "@/util/token";


export async function POST(req:Request, res:Response) {
    const refreshToken = cookies().get('jwt_refresh_token')?.value;
    console.log(refreshToken)

    const secret = new TextEncoder().encode(process.env.JWT_SERVER_TOKEN_REFRESH)
    try{
        const verifiedToken = await jose.jwtVerify(refreshToken as string, secret)
    }catch{
        console.log('잘못된 접근')
    }
    try {
        const user = await database.findDocument('user',{ 'refresh_token' : refreshToken})
        const token = await refreshJWT({id: user[0].id})
        cookies().set('jwt_access_token',token.jwtAccessToken, {expires : token.accessExp*1000});
        console.log('액세스 토큰 재발급 성공!')
    }catch(error){
        return NextResponse.json(
            {error : error},
            {status:400}
        )
    }
    
    return NextResponse.json(
        {status:200}
    )
}