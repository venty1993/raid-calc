import Image from 'next/image'
import '../app/CharList'
import CharList from '../app/CharList'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';



export default function Home() {

  

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://venty:Q11I2igGYt2tv0Ei@cluster0.wqunpna.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
    
//     const database = client.db('raid-calc');
//     const collection = database.collection('user');

//     const result = await collection.insertOne({
//       name:'븐대장',
//       age : 31,
//     })


//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

  const tempIcon = 'w-12 h-12 block flex justify-center items-center'

  return (
    
    <main className="h-screen font-['Pretendard-Regular']">
      <header className='h-20 p-4 bg-stone-600 flex justify-between relative items-center'>
        <a href="#" className='text-stone-900 text-2xl font-["DNFBitBitv2"]'>공대계산기<span className='font-["Pretendard-Regular"] text-sm text-yellow-400'>beta</span></a>
        <h1 className='text-white text-xl font-bold absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>븐대장의 공격대</h1>
        <ul className='flex'>
          <li><button className={tempIcon}><MenuTwoToneIcon></MenuTwoToneIcon></button></li>
          <li><button className={tempIcon}><AddIcon></AddIcon></button></li>
          <li><button className={tempIcon}><SettingsIcon></SettingsIcon></button></li>
        </ul>
      </header>
      <section className='flex h-[calc(100vh-80px)] relative'>
        <ul className='bg-stone-800 overflow-y-scroll bar shrink-0'>
          <CharList></CharList>
          <CharList></CharList>
          <CharList></CharList>
          <CharList></CharList>
          <CharList></CharList>
          <CharList></CharList>
        </ul>
        <div className='w-full'>
          <ul className='w-full flex h-20 text-white bg-stone-900'>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>전체</li>
            <li className='w-full flex justify-center items-center bg-white text-stone-900 rounded-t-2xl'>전체</li>
            <li className='w-full flex justify-center items-center bg-stone-900'>MY</li>
          </ul>
          
        </div>
        <div className='shrink-0 w-[400px] bg-stone-700 mr-24 p-4 text-white pt-6'>
          <h2 className='font-bold text-2xl text-center mb-4'>깐부리스트</h2>
          <ul className='flex flex-col gap-2'>
            <li className='flex justify-between gap-3 items-center'>
              <div className='rounded-full bg-stone-500 w-16 h-16 shrink-0'></div>
              <p className='w-full text-lg'>븐대장과 덕진마미</p>
              <p className='text-lg'>2</p>
            </li>
            <li className='flex justify-between gap-3 items-center'>
              <div className='rounded-full bg-stone-500 w-16 h-16 shrink-0'></div>
              <p className='w-full text-lg'>븐대장과 덕진마미</p>
              <p className='text-lg'>2</p>
            </li>
            <li className='flex justify-between gap-3 items-center'>
              <div className='rounded-full bg-stone-500 w-16 h-16 shrink-0'></div>
              <p className='w-full text-lg'>븐대장과 덕진마미</p>
              <p className='text-lg'>2</p>
            </li>
          </ul>
        </div>
        <div className='absolute w-24 bg-stone-800 right-0 h-full'>
          <ul className='p-4 flex flex-col gap-2'>
            <li className='rounded-full bg-stone-500 w-16 h-16'></li>
            <li className='rounded-full bg-stone-500 w-16 h-16'></li>
            <li className='rounded-full bg-stone-500 w-16 h-16'></li>
            <li className='rounded-full bg-stone-500 w-16 h-16'></li>
            <li className='rounded-full bg-stone-500 w-16 h-16'></li>
            <li className='rounded-full bg-stone-500 w-16 h-16'></li>
            <li className='rounded-full bg-stone-500 w-16 h-16 flex justify-center items-center'><AddIcon></AddIcon></li>
          </ul>
        </div>

      </section>
    </main>
  )
}
