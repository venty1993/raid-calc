"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Logo from 'app/logo'
import {useUserStore} from '@/util/loginState';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { userDataInterface } from '@/types/types';


export default function Home() {

  const {id} = useUserStore()
  const router = useRouter()




    // const checkLogin = async () => {
    //   try {
          // const localId = JSON.parse(localStorage.hi)
    
          // console.log(window.localStorage)
          // const res = await fetch('api/checkAndLogin',{
          //   method:'POST',
          //   body : JSON.stringify({
          //     'id' : id
          //   })
          // })
          // const resData = await res.json()
          // const params: userDataInterface = {
          //   id: resData.id,
          //   api: resData.api,
          //   avatar: resData.avatar,
          //   charList: resData.charList,
          //   global_name: resData.global_name,
          //   username: resData.username
    
          // }
          // if(!setData)
          //   throw new Error('setData가 정의되지 않았다.')
    
          // setData(params);
    
          // if(!id){
            
          // }
            
          
    
  //       }catch(error) {
    
  //       }
        
  //     }
  //     checkLogin();
  // },[])
  

  return (
    <main className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center">
      <div className='flex items-center flex-col'>

        <Logo></Logo>
        <p className='text-center mb-8 text-white'>디스코드로 간편하게 로그인해서<br /> 로스트아크 공격대를 효율적으로 구성해보세요</p>
        <Button className='bg-[#404eed] font-["DNFBitBitv2"]' variant='contained' href='https://discord.com/api/oauth2/authorize?client_id=1184447201611620422&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2FOauth&scope=identify'>디스코드로 시작하기</Button>

      </div>
    </main>
  )
}
