import database from "@/util/database";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        // 로그아웃시 리프레쉬토큰을 DB에 블랙리스트로 저장해 리프레시 토큰 탈취 방지
        const refreshToken = cookies().get('jwt_refresh_token')
        const updateBlacklist = await database.insertDocument('blacklist', {key : refreshToken?.value, 'create_time' : new Date() });
        
        cookies().delete('jwt_access_token')
        cookies().delete('jwt_refresh_token')

        console.log(cookies().get('jwt_access_token'))
        console.log(cookies().get('jwt_refresh_token'))
        
        console.log('로그아웃 실행됨')
    } catch {
        return NextResponse.json(
            {mess:'로그아웃 실패'},
            {status:400}
        )
    }

    return NextResponse.json(
        {mess:'로그아웃 완료!'},
        {status:200}
    )
}