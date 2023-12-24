'use client'

import { useEffect } from "react"

export default function Logout() {
    useEffect(()=>{
        fetch('api/logout')
    },[])
    return(

        <div>
            로그아웃했어
        </div>
    )
}