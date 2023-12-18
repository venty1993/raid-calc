'use client'
import Logo from 'app/logo'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Setting() {
    
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('setting/role')
        },5000)
    },[])
    return (
        <div className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center">
            <div className="flex flex-col text-white items-center gap-12 text-center">
                <Logo></Logo>
                <div className="flex flex-col gap-8">
                    <p className="appear-contents">반갑습니다 모험가님!</p>
                    <p className="appear-contents">레이드 계산기를 처음 이용하시기 위해서는 몇가지 설정이 필요해요</p>
                    <p className="appear-contents">오래 걸리진 않으니 템포 따라오세요!</p>
                </div>
            </div>
        </div>
    )
}