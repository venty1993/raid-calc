
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import database from '../../../util/database'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  console.log("code", code);

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

  console.log(data);
  if (findData.length > 0) {
    return NextResponse.json(
      { isNewcomer: false, id: data.id},
      { status: 200 }
    );
  } else {
    const insertData = await database.insertDocument("user", {
      id: data.id,
      username: data.username,
      avatar: data.avatar,
      global_name: data.global_name,
    });
    console.log(insertData);
    return NextResponse.json(
      { isNewcomer: true },
      { status: 200 }
    );
  }
}
