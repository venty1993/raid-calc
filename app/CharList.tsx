export default function CharList() {
    return (
        <li className='w-96 h-56 text-white p-4 flex flex-col justify-between'>
            <div className='justify-between flex'>
                <a href="" className='text-xl font-bold'>븐대장</a>
                <button className='p-1 px-3 text-red-400 border-red-400 border-solid border'>공격대 제외</button>
            </div>
            <div className='flex justify-between'>
                <p>1621</p>
                <p>레몬버터</p>
                <p>치명타 적중</p>
            </div>
            <ul className='flex flex-col gap-1'>
                <li className='flex justify-between'>
                    <div className='flex gap-2'>
                        <p className='font-bold'>상아탑</p>
                        <p className='text-white'>하드</p>
                        <p className='text-yellow-300'>14,500</p>
                    </div>
                    <button className='p-1 px-3 text-red-400 border-red-400 border-solid border'>제외</button>
                </li>
                <li className='flex justify-between'>
                    <div className='flex gap-2'>
                        <p className='font-bold'>상아탑</p>
                        <p className='text-white'>하드</p>
                        <p className='text-yellow-300'>14,500</p>
                    </div>
                    <button className='p-1 px-3 text-red-400 border-red-400 border-solid border'>제외</button>
                </li>
                <li className='flex justify-between'>
                    <div className='flex gap-2'>
                        <p className='font-bold'>상아탑</p>
                        <p className='text-white'>하드</p>
                        <p className='text-yellow-300'>14,500</p>
                    </div>
                    <button className='p-1 px-3 text-red-400 border-red-400 border-solid border'>제외</button>
                </li>
            </ul>
        </li>
    )
}