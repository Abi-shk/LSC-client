import React from 'react'
import { user } from '../assets/data'

function Chat() {
  return (
    <div className='bg-primary flex '>
        {/*  LEFT */}
        <div className='w-3/4 h-screen flex flex-col max-lg:w-full'>
          <div className='w-full h-[100px] bg-blue  flex items-center px-5'>
          <img
              src={user?.profileUrl ?? NoProfile}
              alt={user?.email}
              className='w-20 h-20 object-cover rounded-full flex items-center'
            />
            <p className='text-3xl font-bold px-5 text-white'>Gokul Keezhur</p>
            <div className='w-[10px] h-[10px] rounded-full bg-online mt-2'></div>
          </div>
          <div className='w-full mt-2 flex-1 bg-ascent-2/10 flex flex-col justify-end items-end  h-full'>
            <div className=' flex flex-row-reverse gap-3 px-3 my-3'>
              <div className='h-full mt-auto'>
                <img className='w-8 h-8 rounded-full aspect-square ' src={user?.profileUrl ?? NoProfile} alt="" />
              </div>
              <div className='bg-blue p-2 rounded-l-lg rounded-br-lg text-white text-lg max-w-[80%]'>
               <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam consectetur autem laboriosam sint? In cum dolore natus quis distinctio quidem deserunt sed incidunt repudiandae ipsum. Aliquam voluptas minima veniam porro.</p>
                <p className='text-end px-2 text-sm italic text-white/50'>(15-02-2024) 12:45 Am</p>
              </div>
      
            </div>
            <div className=' flex  gap-3 px-3 my-3 self-start'>
              <div className='h-full mt-auto'>
                <img className='w-8 h-8 rounded-full aspect-square ' src={user?.profileUrl ?? NoProfile} alt="" />
              </div>
              <div className='bg-ascent-2/10 p-2 rounded-r-lg rounded-bl-lg max-w-[80%] min-w-[70%] text-lg text-ascent-1'>
               <p className='w-full'>HELLO WORLD HIII HEYYY Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nobis veniam excepturi nihil! Sit, iure ipsa quod eum  </p>
                <p className='text-end px-2 text-sm italic text-ascent-1/40'>(15-02-2024) 12:45 Am</p> </div>
            </div>

            </div> 

          <div className='w-full  h-[100px] flex bg-secondary  items-center px-4 gap-3 bg-ascent-2/10'>
            <textarea name="" id="" cols="" rows="1" placeholder='Type here.......' className='w-full h-14 rounded-md text-lg p-2 border-2 border-black dark:border-none'></textarea>
            <button className='h-14 px-8 bg-blue rounded-lg text-white cursor-pointer hover:bg-blue/75'>Send</button>
          </div>
          
        </div>
        {/* RIGHT */}
        <div className='flex flex-col w-1/4 gap-2 py-5 text-ascent-1 px-3 max-lg:hidden min-w-[300px]' >
          <h1 className='text-center font-semibold text-lg my-4'>Recent Messages</h1>
          <div className='flex h-14  px-4 items-center justify-between bg-ascent-2/10 py-10 rounded-full'>
            <div className='flex gap-4 items-center '>
          <img className='w-12 h-12 rounded-full aspect-square ' src={user?.profileUrl ?? NoProfile} alt="" />
          
            <p className='text-2xl font-bold'>
              Akarsh P V
            </p>
    
            </div>
            <div className='w-[10px] h-[10px] rounded-full bg-online mt-2 mr-5'></div>
          </div>

          <div className='flex h-14  px-4 items-center justify-between bg-ascent-2/10 py-10 rounded-full'>
            <div className='flex gap-4 items-center '>
          <img className='w-12 h-12 rounded-full aspect-square ' src={user?.profileUrl ?? NoProfile} alt="" />
          
            <p className='text-2xl font-bold'>
              Akarsh P V
            </p>
    
            </div>
            <div className='w-[10px] h-[10px] rounded-full bg-online mt-2 mr-5'></div>
          </div>

          <div className='flex h-14  px-4 items-center justify-between bg-ascent-2/10 py-10 rounded-full'>
            <div className='flex gap-4 items-center '>
          <img className='w-12 h-12 rounded-full aspect-square ' src={user?.profileUrl ?? NoProfile} alt="" />
          
            <p className='text-2xl font-bold'>
              Akarsh P V
            </p>
    
            </div>
            <div className='w-[10px] h-[10px] rounded-full bg-online mt-2 mr-5'></div>
          </div>

        </div>
    </div>
  )
}

export default Chat

