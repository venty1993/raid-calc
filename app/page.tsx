"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import Logo from 'app/logo'
import useUserStore from './store/page';
import { useRouter } from 'next/navigation';
import localLogin from '../util/localLogin'
import { useEffect } from 'react';


export default function Home() {
  const {avatar,global_name,id,username,setData} = useUserStore()
  const router = useRouter()

  useEffect(()=>{

    

    checkLocalStorage()
    async function checkLocalStorage() {
      try{
        // 로컬스토리지 아이디 가져오기
        const localID = localLogin.getUserIDFromLocalStorage();
        // 로컬스토리지에 아이디가 있으면?
        if(localID){
          // 로컬스토리지 ID로 데이터베이스 조회
          const res = await fetch(`api/checkUserInfo?id=${localID}`)
          const resData = await res.json();
          if(setData!== undefined){
            setData(resData.data)
          }
          if(resData.checkInfo==='role'){
            router.push('setting/role')
          }else if(resData.checkInfo==='api'){
            router.push('setting/getAPI')
          }else if(resData.checkInfo==='character'){
            router.push('setting/character')
          }
        }
      } catch(error) {
        console.log(error);
      }
      
      
    }
  },[])
  

  return (
    <main className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center">
      <div className='flex items-center flex-col'>
        <Logo></Logo>
        <p className='text-center mb-8 text-white'>디스코드로 간편하게 로그인해서<br /> 로스트아크 공격대를 효율적으로 구성해보세요</p>
        <Button className='bg-[#404eed] font-["DNFBitBitv2"]' variant='contained' href='https://discord.com/api/oauth2/authorize?client_id=1184447201611620422&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=identify'>디스코드로 시작하기</Button>

      </div>
    </main>
  )
}
