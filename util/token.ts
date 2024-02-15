import { SignJWT } from "jose";


export const signJWT = async (payload: object) => {
    const iat = Math.floor(Date.now() / 1000)
    const accessExp = iat + 60 * 15;
    const refreshExp = iat + 60 * 60 * 24 * 14;

    const jwtAccessToken = await new SignJWT({...payload})
        .setProtectedHeader({alg : 'HS256' , typ : 'JWT'})
        .setExpirationTime(accessExp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SERVER_TOKEN))

    const jwtRefreshToken = await new SignJWT({...payload})
        .setProtectedHeader({alg : 'HS256' , typ : 'JWT'})
        .setExpirationTime(refreshExp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SERVER_TOKEN_REFRESH))

    return { jwtAccessToken , jwtRefreshToken, accessExp, refreshExp};
}


export const refreshJWT = async (payload: object) => {
    const iat = Math.floor(Date.now() / 1000)
    const accessExp = iat + 60 * 60 * 3;
    const jwtAccessToken = await new SignJWT({...payload})
        .setProtectedHeader({alg : 'HS256' , typ : 'JWT'})
        .setExpirationTime(accessExp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SERVER_TOKEN))

        return { jwtAccessToken , accessExp};
}