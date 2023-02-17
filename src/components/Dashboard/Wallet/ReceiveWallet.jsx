import { XIcon } from '@heroicons/react/solid'
import React from 'react'
import { FiCopy } from 'react-icons/fi'
import qrcode from '../../../assets/images/QRcode.png'
const ReceiveWallet = () => {
  return (
      <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,.30)]  z-30">
          <div className="w-[30rem] h-[30rem] bg-white shadow-lg shadow-slate-500 flex flex-col justify-center items-center">
              <XIcon className="h-6 w-6 absolute top-0 right-0" aria-hidden="true" />

              <img src={qrcode} alt="Stack QRCode" className='w-[15rem] h-[15rem] ' />
              
               <div className="flex justify-start items-center gap-4 flex-wrap py-4">
                    <span className="text-gray-500">Q0GP2DPPE4H9N0G...</span>
                    <FiCopy className="ml-2 text-[#BFBFBF]" />
               </div>

          </div>
     </div>
  )
}

export default ReceiveWallet