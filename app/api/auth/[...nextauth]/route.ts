import NextAuth from "next-auth/next";
import Discord from "next-auth/providers/discord";


const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIDENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };