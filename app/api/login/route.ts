
import { UserStore } from "@/types/types";
import localLogin from "@/util/localLogin";
import { NextResponse } from "next/server";
import database from 'util/database'


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const params = new URLSearchParams();

  params.append("client_id", process.env.DISCORD_CLIENT_ID as string);
  params.append("client_secret", process.env.DISCORD_CLIENT_SECRET as string);
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("redirect_uri", "http://localhost:3000/login");
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
  const findData = await database.findDocument("user", { 'id': data.id });

  const userData:UserStore = {
    id: data.id,
    username: data.username,
    avatar: data.avatar,
    global_name: data.global_name,
    api:null,
    charList:[]
  }


  if (findData.length > 0 && findData[0].role)  {
    return NextResponse.json(
      { isNewcomer: false, data: userData},
      { status: 200 }
    );
  } else {
    const insertData = await database.insertDocument("user", userData);
    console.log(insertData);
    return NextResponse.json(
      { isNewcomer: true ,data: userData},
      { status: 200 }
    );
  }
}
