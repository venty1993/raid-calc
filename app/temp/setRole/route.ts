import database from "@/util/database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const id = searchParams.get('id');
    console.log(type, id)
    const updateData = await database.updateDocument('user',{'id': id},{role:type})
    console.log(updateData)


    
    return NextResponse.json({test:type},{ status: 200 })   
}