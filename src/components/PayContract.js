import React, { useEffect, useState } from "react";
import { uintCV } from "micro-stacks/clarity";
import {
  useOpenContractCall,
  useAccount,
  useOpenStxTokenTransfer,
} from "@micro-stacks/react";
import { FungibleConditionCode } from "micro-stacks/transactions";
import {
  makeStandardSTXPostCondition,
  standardPrincipalCV,
} from "@blockstack/stacks-transactions";
import axios from "axios";


/**
 * PayContract
 *
 * @version 1.0.0
 * @author [Javadroid](https://github.com/javadroid)
 */

export default function PayContract() {
  /**
   *
   * @micro-stacks/react exports a hook that you will use to call contract functions: useOpenContractCall.
   *
   *  @param {string} contractAddress: The principal that deployed the contract you want to interact with.
   *  @param {string} contractName: The name of the contract.
   *  @param {string} functionName: The specific function that you want to call.
   *  @param {array[]} functionArgs: An array of either hex-encoded ClarityValue or ClarityValue values.
   * 
   * 
   *  @param {string} stxinput: The amount of uSTX to be trasferred
   *  @param {string} memo: the memo sent to the blockchain
   *  @param {string} address: The recievers address
   *
   *  @
   */

  const { openStxTokenTransfer, isRequestPending } = useOpenStxTokenTransfer();
  const { openContractCall } = useOpenContractCall();
  const [response, setResponse] = useState(null);

  const { stxAddress } = useAccount();
  const [stxinput, setStxinput] = useState("");
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");
  const [balances, setBalance] = useState(0);

  useEffect(() => {
    getBalances();
  }, [balances]);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // get stx balance
  const getBalances = async () => {
    const principal = stxAddress;
    console.log(principal);
    axios
      .get(
        `https://stacks-node-api.testnet.stacks.co/extended/v1/address/${principal}/balances`
      )
      .then(function (response) {
        setBalance(parseInt(response.data.stx.balance) / 1000000);
        console.log(response.data.stx.balance);
      });
  };

  // get transaction status
  const getTransactionStatus = async (e) => {
    axios
      .get(`https://stacks-node-api.testnet.stacks.co/extended/v1/tx/${e}`)
      .then((e) => {
        setResponse(e.data.tx_status)
      });
  };

  const handleTokenTransfer = async () => {
    setResponse(null)
    await openStxTokenTransfer({
      recipient: address,
      amount: parseInt(stxinput + "n"),
      memo: memo,
    }).then(async (e) => {
    //  await sleep(50000)
      getTransactionStatus(e.txId);
    });
  };

  // const handleOpenContractCall = async () => {
  //   const postConditions = [
  //     makeStandardSTXPostCondition(
  //       stxAddress,
  //       FungibleConditionCode.LessEqual,
  //       stxinput
  //     ),
  //   ];
  //   const s = parseInt(stxinput);
  //   const functionArgs = [uintCV(s), standardPrincipalCV(address)];

  //   // await openContractCall({
  //   //   contractAddress: "ST27XGZFXEJ0DTJMFX9PTZ3BFVA1XDF5RXK7G6N1Q",
  //   //   contractName: "blood-fuse",
  //   //   functionName: "make_payment",
  //   //   functionArgs,
  //   //   postConditions,
  //   //   attachment: memo,
  //   //   onFinish: async (data) => {
  //   //     console.log("finished contract call!", data);
  //   //     setResponse(data);
  //   //   },
  //   //   onCancel: () => {
  //   //     console.log("popup closed!");
  //   //   },
  //   // });
  // };

  return (
    <>
      <br />
      <h1>{balances} STX</h1>

      <h3>{response}</h3>
      <br />
      <input
        type="number"
        id="sendnumber"
        onChange={(event) => setStxinput(event.target.value)}
        placeholder="amount of stx"
      />
      <div>
        <input
          type="text"
          id="mem0"
          placeholder="memo"
          onChange={(event) => setMemo(event.target.value)}
        />
        <input
          type="text"
          id="address"
          placeholder="address"
          onChange={(event) => setAddress(event.target.value)}
        />
        <br />
      </div>
      <button onClick={handleTokenTransfer}> buys</button>
    </>
  );
}
