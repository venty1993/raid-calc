import { NextResponse } from "next/server";

export async function POST(req:Request, res:Response) {


    // jwt 엑세스 토큰을 이용해 내 사이트에서 로그인하는 코드 작성할 차례야
    
    return NextResponse.json(
        {status: 200}
    )
}