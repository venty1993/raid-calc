'use client'

import Logo from "@/app/logo"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Logout() {

    const router = useRouter()
    useEffect(()=>{
        fetch('/api/logout')
        .then(res => {
            if(res.status === 200) {
                router.push('/')
            }
        })
      
    },[])
    return(

        <div className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center flex-col text-white gap-8">
            <Logo></Logo>
            <div className='animate-spin h-10 w-10 border-4 border-[#FFFFFF80] rounded-full border-t-white'></div>
            <p className='heading'>안전하게 로그아웃중...</p>
        </div>
    )
}