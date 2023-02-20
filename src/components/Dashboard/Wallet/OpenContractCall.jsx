import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";

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
import React from "react";
import { principalCV } from "@stacks/transactions/dist/clarity/types/principalCV";
import { stringCV } from "@stacks/transactions/dist/clarity/types/stringCV";
import { userSession } from "../Navbar";

export const OpenContractCall = ({
  recipient,
  balances,
  doContractCall,
  stxAddress,setResponse,getRes,
  contractAddress = "ST27XGZFXEJ0DTJMFX9PTZ3BFVA1XDF5RXK7G6N1Q",
  contractName = "blood-fuse-payment-system",
  functionName = "send-many"
}) => {

  let a = [];
  let Pustx = 0;
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
    // return Pustx
  });
  console.log(Pustx);
  if (Pustx > balances * 1000000) {
    setResponse("insufficient balance")
    getRes()
    return ("insufficient balance");
  } else {
    
    console.log("stxAddress",stxAddress)
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
       
        setResponse(balances - Pustx);
        getRes()
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
        setResponse("Transaction was canceled");
        getRes()
        
      },
    });
  }
};
