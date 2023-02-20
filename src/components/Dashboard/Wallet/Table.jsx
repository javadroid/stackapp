import React, { useEffect, useState } from "react";
import { userSession } from "../Navbar";
import axios from "axios";
import historyData from "./Record";

const Table = ({ indexOfFirstRecord,indexOfLastRecord,stxIsConnect }) => {
let [recordMain, setrecordMain] = useState(historyData)


let [NGN, setNGN] = useState(0)
const stxApi='https://stacks-node-api.testnet.stacks.co'
let [stxAddress, setstxAddress] = useState("")
  useEffect(() => {
    
    if(userSession.isUserSignedIn()){
      stxAddress=(userSession.loadUserData().profile.stxAddress.testnet)
      setstxAddress(userSession.loadUserData().profile.stxAddress.testnet) 
      setrecordMain(recordMain.slice(indexOfFirstRecord, indexOfLastRecord))
      recordMain=recordMain.slice(indexOfFirstRecord, indexOfLastRecord);
      getBalances()
    }else if(!userSession.isUserSignedIn()){
      
    }
    
  }, [stxIsConnect])
    
  function getBalances  (){

    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=blockstack&vs_currencies=ngn`
      )
      .then(function (response) { 
        let num =parseFloat(response.data.blockstack.ngn)
        setNGN(num)
        NGN=num
      })
    axios
      .get(
        `${stxApi}/extended/v1/address/${stxAddress}/transactions`
      )
      .then(function (response) { 

        axios
      .get(
        `${stxApi}/extended/v1/address/${stxAddress}/mempool`
      )
      .then(function (mempool) { 

          renderTranstions(response.data.results,mempool.data.results)
          console.log("blockstack",stxAddress,mempool.data.results);
          console.log("blockstack",stxAddress,response.data.results);
      });
          
        
      });
  };

  function renderTranstions(data,peendind){
      const r=[]
      // console.log("recording",data)
    for (let i = 0; i < data.length; i++) {
      
      if(data[i].contract_call){
 const records={}
        console.log("11111",data[i])
      records["id"]=data[i]?.tx_id.substring(56)
      records["transactionType"]="Payment"
      records["date"]=`${(data[i]?.parent_burn_block_time_iso).split('T')[0]}  `
      records["amount"]=`${(data[i]?.post_conditions[0]?.amount/ 1000000).toFixed(2)}STX`
      records["ngn"]=((data[i]?.post_conditions[0]?.amount/ 1000000)*NGN).toFixed(2)
      records["receiverAddress"]=`${(data[i]?.contract_call?.function_args[0]).repr.split('to')[1].split(')')[0].substring(0,15)}...`
      console.log("first",data[i]?.post_conditions[0]?.repr)
      records["paymentType"]=data[i]?.tx_type
      records["status"]=data[i]?.tx_status==='success'?"Completed":"Cancelled"
      r.push(records)
      const s=''
      
      }
  
    }

    setrecordMain(r)
    recordMain=r
    // console.log("record",records,r)
    
  }
  // User is currently on this page

  return (
    <div className="overflow-x-auto  relative py-4 bg-white rounded md:items-start">
      <table className="w-full text-sm text-left whitespace-nowrap text-gray-500 ">
        <thead className="text-xs  text-gray-700 border-b   ">
          <tr>
            <th scope="col" className="py-3 px-6   bg-white ">
              <input
                id="default-radio-1"
                type="checkbox"
                value=""
                name="default-radio"
                className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 focus:ring-rose-600  "
              />
            </th>
            <th scope="col" className="py-3 px-6   z-10  bg-white ">
              Transaction ID
            </th>
            <th scope="col" className="py-3 px-6">
              Transaction Type
            </th>
            <th scope="col" className="py-3 px-6">
              Transaction Date
            </th>
            <th scope="col" className="py-3 px-6">
              Transaction Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Receiver Address
            </th>
            <th scope="col" className="py-3 px-6">
              Payment Type
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="hover:bg-[#dadada]">
          {recordMain.map((history, index) => {
            return (
              <tr
                className="py-6 text-[#BFBFBF] hover:bg-gray-200  hover:text-black bg-white "
                key={index}
              >
                <th
                  scope="row"
                  className="py-5 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 focus:ring-rose-600  "
                  />
                </th>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium  whitespace-nowrap "
                >
                  {history.id}
                </th>
                <td className=" py-4 px-6 text-black ">
                  {" "}
                  {history.transactionType}
                </td>
                <td className="py-4  px-6 "> {history.date}</td>
                <td className="py-4 px-6  text-black">
                  {" "}
                  {history.amount} ≈ {" "}
                  <span className="font-semibold font-sans">{"₦"}</span>
                {history.ngn}</td>
                <td className="py-4 px-6 ">{history.receiverAddress}</td>
                <td className="py-4 px-6 text-black">{history.paymentType}</td>
                <td className="py-4 px-6">
                  <span
                    className={`py-2 px-4 rounded-md font-semibold  ${
                      history.status === "Completed"
                        ? "text-[#44C13C] bg-[#F8FDF7] px-3"
                        : history.status === "Cancelled"
                        ? "text-[#F01E1E] bg-[#FEF5F5]"
                        : "text-[#F5B81D] bg-[#FFFCF5] px-6"
                    }`}
                  >
                    {history.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
