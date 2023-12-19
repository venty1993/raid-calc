import { NextResponse } from "next/server";
import database from "../../../util/database"
import { redirect } from "next/navigation";
import { UserStore } from "@/types/types";

export async function GET(request:Request) {
    let status = 'problem';
    try{

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        
        const user = await database.findDocument('user', {id: id})
        if(!user[0]){
            throw new Error("유저데이터가 없어요");
            
        }
        
        if(user[0]){
            const userData:UserStore = {
                id: user[0].id,
                username: user[0].username,
                avatar: user[0].avatar,
                global_name: user[0].global_name,
                api:user[0].api,
                charList:user[0].charList,

            }
            
            if(user[0].role==='reader' && !user[0].api){
                status = 'api'
            }else if(!user[0].role){
                status = 'role'
            }else if(!user[0].character){
                status = 'character'
            }
            
            console.log(userData)
        }
        status = 'complate'

        return NextResponse.json(
            { checkInfo: status, data:user[0]},
            { status: 200 }
            
            );
    } catch(error) {
        console.log(error)
        return NextResponse.json(
            { error : '유저 데이터를 가져오는데 실패했습니다.'},
            {status: 500}
        )
    }
} 
