import database from "@/util/database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const key: string|null = searchParams.get("key");
    const id: string|null = searchParams.get("id");
    console.log(key)



    // const updateData = await database.updateDocument('user',{'id': id},{role:type})
    // console.log(updateData)
    checkAPI(key as string)


    async function checkAPI(key: string){
        const url = `https://developer-lostark.game.onstove.com/news/notices`
        const res = await fetch(url, {
            headers:{
                'accept': 'application/json',
                'authorization': `bearer ${key}`
            }
        })

        if(res.ok){
            database.updateDocument('user',{'id':id},{api:key})
        }else {
            console.log('실패')
        }
        // const resData = await res.json();
        
    }




    return NextResponse.json({},{ status: 200 })   
}