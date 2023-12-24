import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

    cookies().delete('jwt_token')

    return NextResponse.json(
        {mess:'로그아웃 완료!'},
        {status:200}
    )
}