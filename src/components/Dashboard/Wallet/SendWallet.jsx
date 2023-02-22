import React from 'react'
import { XIcon } from '@heroicons/react/solid'

import {
  AnchorMode,
  bufferCV,
  falseCV,
  FungibleConditionCode,
  intCV,
  listCV,
  makeStandardSTXPostCondition,
  PostConditionMode,
  stringUtf8CV,
  trueCV,
  tupleCV,
  uintCV,
} from "@stacks/transactions";
import { useEffect, useState } from "react";
import axios from "axios";
import { stxApi } from './Wallet';
import { userSession } from '../Navbar';
import { principalCV } from "@stacks/transactions/dist/clarity/types/principalCV";
import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";

function SendWallet  ({setSend})  {
  let [recipient, setRecipient] = useState([]);
  let [recipientAddress, setRecipientAddress] = useState('');
  const { doContractCall, doSTXTransfer } = useConnect();
  const [demo, setDemo] = useState([]);
  const [balances, setBalance] = useState(0);
  const [stxInput, setStxInput] = useState(0);
  const [response, setResponse] = useState('');
  let [stxAddress, setstxAddress] = useState("")
     
 
  useEffect(() => {
    stxAddress=(userSession.loadUserData().profile.stxAddress.testnet)
    setstxAddress(userSession.loadUserData().profile.stxAddress.testnet)
    getBalances()
  }, [balances])
  
  const sendOne = async () => {
    recipient = [{
      ustx: 1000000*stxInput,
      to: recipientAddress,
      memo: `Bloodfuse-${Date.now()}`,
    }];
    
  
    OpenContractCall(recipient)
     
  };

  function getBalances  (){
    axios
      .get(
        `${stxApi}/extended/v1/address/${stxAddress}/balances`
      )
      .then(function (response) { 
          setBalance(parseInt(response.data.stx.balance) );
      });
  };

  function OpenContractCall(
    recipient,
    contractAddress = "ST27XGZFXEJ0DTJMFX9PTZ3BFVA1XDF5RXK7G6N1Q",
    contractName = "blood-fuse-payment-system",
    functionName = "send-many"
  ){
  
      
    let a = [];
    let Pustx = 0;
    let addresses=[]
    recipient.forEach((e) => {
      console.log(e);
      const ustxN = parseInt(e.ustx);
      const v = tupleCV({
        ustx: uintCV(ustxN),
        to: principalCV(e.to),
        memo: stringUtf8CV(e.memo),
      });
  
      a.push(v);
    });
  
    recipient.forEach((e) => {
      Pustx += e.ustx;
      addresses.push(e.to)
    });
    console.log(Pustx);
    if (Pustx > balances) {
      setResponse("insufficient balance");
     
      
    } else if(addresses.includes(stxAddress)){
      setResponse("You can't send STX to yourself ");
    } else{
      setResponse("");
      doContractCall({
        network: new StacksTestnet(),
        anchorMode: AnchorMode.Any,
        contractAddress,
        contractName,
        functionName,
        functionArgs: [listCV(a)],
        postConditionMode: PostConditionMode.Deny,
        postConditions: [
          makeStandardSTXPostCondition(
            stxAddress,
            FungibleConditionCode.LessEqual,
            Pustx
          ),
        ],
        onFinish: (data) => {
         
          setBalance(balances - Pustx);
          setSend(false)
        },
        onCancel: () => {
          setResponse("Transaction was canceled");
          console.log("onCancel:", "Transaction was canceled");
        },
      });
    }
  }
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,.30)]  z-30">
          <div className="w-[30rem] h-[30rem] bg-white shadow-lg shadow-slate-500 gap-5 flex flex-col justify-center items-center">
              <XIcon onClick={()=>setSend(false)} className="h-6 w-6 absolute top-0 right-0" aria-hidden="true" />
              <div>{response}</div>
             <input onChange={(e)=>setStxInput(e.target.value)} type='text' className='outline-none w-1/2 border-none bg-[#F0F0F0]' placeholder='Amount'/>
              <input onChange={(e)=>setRecipientAddress(e.target.value)} type='text' className='outline-none w-1/2 border-none bg-[#F0F0F0]' placeholder='Wallet Address' />
              <div className='flex justify-center items-center gap-4 w-[10rem]'>
                <button onClick={()=>sendOne()} className="bg-[#44C13C] border-none p-2 w-[7rem] text-white rounded-sm">Send</button>
                <button onClick={()=>setSend(false)}  className="bg-[#F00530] border-none p-2 w-[7rem] text-white rounded-sm">Cancel</button>
              </div>

          </div>
     </div>
  )
}

export default SendWallet