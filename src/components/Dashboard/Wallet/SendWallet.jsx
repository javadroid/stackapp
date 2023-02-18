import React from 'react'
import { XIcon } from '@heroicons/react/solid'

const SendWallet = ({setSend}) => {
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,.30)]  z-30">
          <div className="w-[30rem] h-[30rem] bg-white shadow-lg shadow-slate-500 gap-5 flex flex-col justify-center items-center">
              <XIcon onClick={()=>setSend(false)} className="h-6 w-6 absolute top-0 right-0" aria-hidden="true" />

             <input type='text' className='outline-none w-1/2 border-none bg-[#F0F0F0]' placeholder='Amount'/>
              <input type='text' className='outline-none w-1/2 border-none bg-[#F0F0F0]' placeholder='Wallet Address' />
              <div className='flex justify-center items-center gap-4 w-[10rem]'>
                <button className="bg-[#44C13C] border-none p-2 w-[7rem] text-white rounded-sm">Send</button>
                <button className="bg-[#F00530] border-none p-2 w-[7rem] text-white rounded-sm">Cancel</button>
              </div>
              

              
               

          </div>
     </div>
  )
}

export default SendWallet