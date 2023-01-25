import React from 'react'
import Tabs from '../tabs'
import { AiOutlineUser } from 'react-icons/ai'
import { SlSettings } from 'react-icons/sl'
import { TbMessageCircle2 } from 'react-icons/tb'

export default function Header() {

  return (
    // INTRANET HEADER
    <header className="bg-[#1c4595] text-white h-[80px] flex mt-8 px-10 items-center justify-between">
      <div className="relative text-center" style={{top: '13px'}}>
        <div className="bg-blue-400 border-2 border-[#2c5392] h-[100px] w-[150px] flex items-center justify-center">
         <h3 className='text-2xl font-black w-[100px]' >
          SUPER APP
          </h3> 
        </div>
        <h3 className='text-[#1c4595] text-xl font-bold'>Smart Screen</h3>
      </div>
     {/*  <div className="flex"> */}
        <div className=" flex gap-7">
        <Tabs/>
          <div className="flex flex-col items-center cursor-pointer">
            <TbMessageCircle2 className="text-2xl" />
            Help
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <SlSettings className="text-2xl" />
            Settings
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <AiOutlineUser className="text-2xl" />
            User
          </div>
        {/* </div> */}
      </div>
    </header>
  )
}
