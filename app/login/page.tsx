import { useRouter } from "next/navigation";

export default async function Login({
    params,
    searchParams,
}: {
    params: {slug: string}
    searchParams: { [key:string]:string|string[]|undefined}
}) {

    const { code } = searchParams

    if(code) {

        const params = new URLSearchParams();

            params.append('client_id', process.env.DISCORD_CLIENT_ID as string)
            params.append('client_secret', process.env.DISCORD_CLIENT_SECRET as string)
            params.append('grant_type', 'authorization_code',)
            params.append('code', code as string)
            params.append('redirect_uri', 'http://localhost:3000/login')
            params.append('scope','identify')

        const response = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        const responseData = await response.json();

        const userResponse = await fetch('https://discordapp.com/api/users/@me', {
            headers: {
                authorization: `Bearer ${responseData.access_token}`
            }
        })

        console.log(userResponse)
        
    }

    return (
        <div>
            {}
        </div>
        )
}