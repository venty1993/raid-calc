'use client'
import Logo from "@/app/logo"
import useUserStore from "@/app/store/page"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"


export default function GetAPI() {

    const {global_name,id} = useUserStore()
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleButtonClick = () =>{
        if(inputRef.current) {
            const inputValue = inputRef.current.value;
            const fetchData = async () => {
                const setAPICode = await fetch(`/api/setAPI?key=${inputValue}&id=${id}`);
            }
            fetchData()
        }
    }

    const goBack = () => {
        router.back();
    }

    return (
        <div className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center relative flex-col gap-16">
            <button className="absolute normal-button" onClick={goBack}>이전으로</button>
            <Logo></Logo>
            <p className="text-white heading text-2xl text-center">
                공대원들의 캐릭터 정보를 갱신하기 위해 <span className="text-yellow-400">{global_name}</span>님의 로스트아크 API가 필요해요
                <br/>
                아래 방법을 따라 API키를 발급받아주세요
            </p>
            <ul className="flex gap-32 heading text-white">
                <li className="flex flex-col items-center gap-8 text-xl w-[360px]">
                    <p>1</p>
                    <p>로스트아크 개발자 사이트에 접속하기</p>
                    <a href="https://developer-lostark.game.onstove.com/" className="normal-button text-base"  target="_blank">접속하기</a>
                </li>
                <li className="flex flex-col items-center gap-8 text-xl w-[360px]">
                    <p>2</p>
                    <p>"Get Access To Lostark API" <br/>를 클릭해 STOVE 계정으로 로그인</p>
                </li>
                <li className="flex flex-col items-center gap-8 text-xl w-[360px]">
                    <p>3</p>
                    <p>클라이언트 생성하기</p>
                    <button className="normal-button text-base">방법 자세히 보기</button>
                </li>
            </ul>
            <div className="flex gap-4">
                <input type="text" ref={inputRef} className="w-96 text-center block api-input" placeholder="발급받은 API KEY를 복사해서 여기에 붙여넣어주세요"/> <button onClick={handleButtonClick} className="normal-button text-xl">등록하기</button>
            </div>
        </div>
    )
}