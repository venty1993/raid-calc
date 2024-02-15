import { NextResponse } from "next/server";
import database from 'util/database'
import { cookies } from 'next/headers'
import { signJWT } from "@/util/token";


export async function POST(request: Request, res:Response) {
  const resBody = await request.json();
  const code = resBody.code;

  const params = new URLSearchParams();

  params.append("client_id", process.env.DISCORD_CLIENT_ID as string);
  params.append("client_secret", process.env.DISCORD_CLIENT_SECRET as string);
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("redirect_uri", "http://localhost:3000/login/Oauth");
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


  const findData = await database.findDocument('user',{'id' : data.id})

  // DB에 등록된 정보가 없는 경우 DISCORD로부터 받은 데이터를 DB에 저장한다.
  if(!findData[0]){
    database.insertDocument('user', {
      'id' : data.id,
      'username' : data.username,
      'avatar' : data.avatar,
      'global_name' : data.global_name
    })
  }
  

  const token = await signJWT({id: data.id})
  cookies().set('jwt_access_token',token.jwtAccessToken, {expires : token.accessExp*1000});
  cookies().set('jwt_refresh_token',token.jwtRefreshToken, {expires : token.refreshExp*1000});
  // res.setHeader('Set-Cookie',token);

  database.updateDocument('user', {'id' : data.id}, {'refresh_token' : token.jwtRefreshToken})

  return NextResponse.json(
    {token : token},
    {status : 200}
  )
}
