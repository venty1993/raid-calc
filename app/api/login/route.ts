
import { UserStore, userDataInterface } from "@/types/types";
import { NextResponse } from "next/server";
import database from 'util/database'
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'


export async function POST(request: Request) {
  const resBody = await request.json();
  const code = resBody.code;

  const params = new URLSearchParams();

  params.append("client_id", process.env.DISCORD_CLIENT_ID as string);
  params.append("client_secret", process.env.DISCORD_CLIENT_SECRET as string);
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("redirect_uri", "http://localhost:3000/Oauth");
  params.append("scope", "identify");

  //액세스 토큰 요청
  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const responseData = await response.json(); // 액세스토큰 json화


  const userDataResponse = await fetch("https://discordapp.com/api/users/@me", {
    headers: {
      authorization: `Bearer ${responseData.access_token}`,
    },
  });
  const data = await userDataResponse.json();

  console.log(data)

  const findData = await database.findDocument('user',{'id' : data.id})

  if(!findData[0]){
    // DB에 등록된 정보가 없는 상황
    database.insertDocument('user', {
      'id' : data.id,
      'username' : data.username,
      'avatar' : data.avatar,
      'global_name' : data.global_name
    })
  }
  
  const sevneDay = 7*24*60*60;
  const token = jwt.sign({id : data.id}, process.env.JWT_SERVER_TOKEN as string , {expiresIn: sevneDay})
  cookies().set('jwt_token',token, {expires : Date.now() + sevneDay * 1000});

  return NextResponse.json(
    {token : token},
    {status : 200}
  )
}
