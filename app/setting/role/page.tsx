'use client'

import Logo from 'app/logo'
import GroupsIcon from '@mui/icons-material/Groups';
import CastleIcon from '@mui/icons-material/Castle';
import database from '@/util/database';
import useUserStore from '@/app/store/page';
import { useRouter } from 'next/navigation';

export default function Role() {
    const { id } = useUserStore();
    const router = useRouter();

    const handleRoleSelect = async (type: string) => {
        // if(id){
            console.log(id)
            fetch(`/api/setRole?type=${type}&id=${id}`)
            .then(()=>{
                if(type === 'reader'){
                    router.push('/setting/getAPI')
                }
            })
            
        // }else{
            // router.push('/')
        // }
    }

    return(
        <div className="h-screen font-['Pretendard-Regular'] bg-[#484848] flex justify-center items-center flex-col text-white gap-8">
            <Logo></Logo>
            <p className='heading text-2xl'>당신의 역할은 무엇인가요?</p>
            <div className='flex gap-4'>
                <button className='w-96 h-96 border-white border-solid border-2 rounded-lg' onClick={()=>{handleRoleSelect('reader')}}>
                    <CastleIcon className='w-36 h-36'></CastleIcon>
                    <p className='heading text-3xl'>공대장</p>
                </button>
                <button className='w-96 h-96 border-white border-solid border-2 rounded-lg' onClick={()=>{handleRoleSelect('follower')}}>
                    <GroupsIcon className='w-36 h-36'></GroupsIcon>
                    <p className='heading text-3xl'>구성원</p>
                </button>
            </div>
            <p className='text-lg'>나중에 변경할 수 있으니 너무 고민하지 않아도 괜찮아요</p>
        </div>
    )
}