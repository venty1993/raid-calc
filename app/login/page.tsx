'use client'

import { redirect } from 'next/navigation'
import {useUserStore} from '@/util/loginState'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Logo from 'app/logo'





export default function Login({
    params,
    searchParams,
}: {
    params: {slug: string}
    searchParams: { [key:string]:string|string[]|undefined}
}) {
    
    const { code } = searchParams;
    const { id, username, avatar, global_name, setData } = useUserStore(input => input);
    const router = useRouter();
    
    useEffect(()=>{
    if(code){
            fetch(`api/login?code=${code}`)
            .then(res => res.json())
            .then(getData => {
                console.log(getData);
                localLogin.saveUserIDToLocalStorage(getData.data.id)
                console.log(localLogin.getUserIDFromLocalStorage())

                if(setData!==undefined){
                    setData(getData.data)
                }

                getData.isNewcomer?router.push('setting'):router.push('main');
            })    
        }
    },[code])   
        return(
        <div className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center flex-col text-white gap-8">
            <Logo></Logo>
            <div className='animate-spin h-10 w-10 border-4 border-[#FFFFFF80] rounded-full border-t-white'></div>
            <p className='heading'>로그인중...</p>
        </div>
    )
    
    

}