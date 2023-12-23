'use client'
import Image from 'next/image'
import CharListContents from '../CharListContents'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import RaidContents from '../RaidContents';

import {useUserStore} from '@/util/loginState'



export default function Home() {
  const {id,avatar,global_name,username} = useUserStore()

  const tempIcon = 'w-12 h-12 block flex justify-center items-center'
  const temp = 'w-full flex justify-center items-center bg-stone-900'

  return (
    
    <main className="h-screen font-['Pretendard-Regular']">
      <header className='h-16 p-4 bg-stone-600 flex justify-between relative items-center'>
        <a href="#" className='text-stone-900 text-2xl font-["DNFBitBitv2"]'>레이드계산기<span className='font-["Pretendard-Regular"] text-sm text-yellow-400'>beta</span></a>
        <h1 className='text-white text-xl font-bold absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>id: {id} 유저네임:{username}</h1>
        <ul className='flex'>
          <li><button className={tempIcon}><MenuTwoToneIcon></MenuTwoToneIcon></button></li>
          <li><button className={tempIcon}><AddIcon></AddIcon></button></li>
          <li><button className={tempIcon}><SettingsIcon></SettingsIcon></button></li>
        </ul>
      </header>
      <section className='flex h-[calc(100vh-64px)] relative'>
        <ul className='bg-stone-800 overflow-y-scroll bar shrink-0'>
          <CharListContents></CharListContents>
          <CharListContents></CharListContents>
          <CharListContents></CharListContents>
          <CharListContents></CharListContents>
          <CharListContents></CharListContents>
          <CharListContents></CharListContents>
        </ul>
        <div className='w-full relative'>
          <ul className='w-full flex h-16 text-white bg-stone-900'>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>발탄</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>비아키스</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>쿠크세이튼</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>아브렐슈드</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>일리아칸</li>
            <li className='w-full flex justify-center items-center bg-white text-stone-900 rounded-t-2xl'>카멘</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>카양겔</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>상아탑</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>MY</li>
          </ul>
          <div className='h-[calc(100%-64px)] overflow-y-scroll'>
            <div className='h-[calc(100%-64px)] absolute w-80 bg-stone-700 p-4 rounded-r-lg -translate-x-[95%] -z-10 duration-200  text-white'>
              <h2 className='font-bold text-xl text-center mb-6'>대기실</h2>
              <ul>
                <li className='bg-stone-600 p-4 rounded-lg py-2'>
                  <div>
                    <div className='flex justify-between'>
                      <h3>캐릭터이름</h3>
                      <p>레벨</p>
                    </div>
                    <div className='flex justify-between'>
                      <p>직업</p>
                      <p>시너지정보</p>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
            <ul className='grid grid-cols-2 2xl:grid-cols-3  p-4 pl-8 gap-4'>
              <RaidContents></RaidContents>
              <RaidContents></RaidContents>
              <RaidContents></RaidContents>
              <RaidContents></RaidContents>
              <RaidContents></RaidContents>
              <RaidContents></RaidContents>
              <RaidContents></RaidContents>
            </ul>
          </div>
        </div>
        <div className='shrink-0 w-80 bg-stone-700 mr-24 p-4 text-white pt-6'>
          <h2 className='font-bold text-2xl text-center mb-4'>깐부리스트</h2>
          <ul className='flex flex-col gap-2'>
            <li className='flex justify-between gap-3 items-center'>
              <div className='rounded-full bg-stone-500 w-12 h-12 shrink-0'></div>
              <p className='w-full text-lg'>븐대장과 덕진마미</p>
              <p className='text-lg'>2</p>
            </li>
            <li className='flex justify-between gap-3 items-center'>
              <div className='rounded-full bg-stone-500 w-12 h-12 shrink-0'></div>
              <p className='w-full text-lg'>븐대장과 덕진마미</p>
              <p className='text-lg'>2</p>
            </li>
            <li className='flex justify-between gap-3 items-center'>
              <div className='rounded-full bg-stone-500 w-12 h-12 shrink-0'></div>
              <p className='w-full text-lg'>븐대장과 덕진마미</p>
              <p className='text-lg'>2</p>
            </li>
          </ul>
        </div>
        <div className='absolute w-24 bg-stone-800 right-0 h-full'>
          <ul className='p-4 flex flex-col gap-2'>
            <li className='rounded-full bg-stone-500 w-12 h-12'></li>
            <li className='rounded-full bg-stone-500 w-12 h-12'></li>
            <li className='rounded-full bg-stone-500 w-12 h-12'></li>
            <li className='rounded-full bg-stone-500 w-12 h-12'></li>
            <li className='rounded-full bg-stone-500 w-12 h-12'></li>
            <li className='rounded-full bg-stone-500 w-12 h-12'></li>
            <li className='rounded-full bg-stone-500 w-12 h-12 flex justify-center items-center'><AddIcon></AddIcon></li>
          </ul>
          

          
        </div>

      </section>
    </main>
  )
}
