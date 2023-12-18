"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';

// ✅ add the use client directive for UI event handlers


export default function Home() {
  return (
    <main className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center">
      <div className='flex items-center flex-col'>
        <a href="#" className='text-white text-4xl font-["DNFBitBitv2"] mb-4'>레이드계산기<span className='font-["Pretendard-Regular"] text-sm text-yellow-400'>beta</span></a>
        <p className='text-center mb-8 text-white'>디스코드로 간편하게 로그인해서<br /> 로스트아크 공격대를 효율적으로 구성해보세요</p>
        <Button className='bg-[#404eed] font-["DNFBitBitv2"]' variant='contained' href='https://discord.com/api/oauth2/authorize?client_id=1184447201611620422&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=identify'>디스코드로 시작하기</Button>

      </div>
    </main>
  )
}
