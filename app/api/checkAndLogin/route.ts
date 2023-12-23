import { userDataInterface } from "@/types/types";
import database from "@/util/database";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
    try {
        const body = await request.json();
    
        if(!body.id){
            // router.push('/login');
        }else{
            const userDataRes:userDataInterface = await database.findDocument('user', {id: body.id})
            console.log(userDataRes);

            return NextResponse.json(
                { userDataRes : userDataRes},
                {status: 200}
            )
        }
    } catch(error) {
        console.log(error, '에러발생');
        return NextResponse.json(
            { 'error' : error},
            {status:500}
        )
    }
 

}