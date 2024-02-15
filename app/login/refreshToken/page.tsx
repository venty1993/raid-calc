'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function refreshToken() {

    const router = useRouter()

    useEffect(()=>{
        fetch('/api/refreshToken',{
            method: 'post'
        })
        .then(res => {
            if(res.status === 200) {
                router.push('/main');
            }
        })
    },[])

    return (
        <div>
            토큰을 새로고침 할 화면이야
        </div>
    )
}