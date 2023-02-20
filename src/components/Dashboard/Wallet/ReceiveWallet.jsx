import { XIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { FiCopy } from 'react-icons/fi'

import QRCode from "qrcode.react";
import { userSession } from '../Navbar';
const ReceiveWallet = ({setReceive}) => {
     let [stxAddress, setstxAddress] = useState("")
     useEffect(() => {
    
          if(userSession.isUserSignedIn()){
            stxAddress=(userSession.loadUserData().profile.stxAddress.testnet)
            setstxAddress(userSession.loadUserData().profile.stxAddress.testnet) 
            
          }else if(!userSession.isUserSignedIn()){
              
              setstxAddress("")
          }
        }, [])

        function copySTXaddress(){
          navigator.clipboard.writeText(stxAddress);
        }
  return (
     
      <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,.30)]  z-30">
          <div className="w-[30rem] h-[30rem] bg-white shadow-lg shadow-slate-500 flex flex-col justify-center items-center">
              <XIcon onClick={()=>setReceive(false)} className="h-6 w-6 absolute top-0 right-0" aria-hidden="true" />

              {/* <img src={qrcode} alt="Stack QRCode" className='w-[15rem] h-[15rem] ' /> */}
              <QRCode 
               value={stxAddress} 
               size={200} 
               bgColor="#FFFFFF" 
               fgColor="#000000" 
               level="H"
               />
               <div className="flex justify-start items-center gap-4 flex-wrap py-4">
               <span className="text-gray-500">{stxAddress.substring(0,15)}...</span>
            <FiCopy onClick={copySTXaddress} className="ml-2 text-[#BFBFBF]" />
               </div>

               <div className='flex justify-center items-center gap-4 w-[10rem]'>
              
                <button onClick={()=>setReceive(false)}  className="bg-[#F00530] border-none p-2 w-[7rem] text-white rounded-sm">Cancel</button>
              </div>

          </div>
     </div>
  )
}

export default ReceiveWallet