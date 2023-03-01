import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";
import mask from "./mask.png";

const InvitationCard = () => {
  const invitationData = [
    {
      name: "john Smith",
      isAdmin: true,
    },
    {
      name: "john Smith",
      isAdmin: false,
    },
    {
      name: "john Smith",
      isAdmin: true,
    },
    {
      name: "john Smith",
      isAdmin: false,
    },
   
   
  ];
  const [invitationDetail, setInvitationDetail] = useState(invitationData);
  const [activeTab, setActiveTab] = useState("2");


  return (
    <div className=" elative md:pb-5 overflow-scroll h-96 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <div className="flex justify-between mb-1 md:pt-5 md:px-6 md:pb-2 top-0 left-0 right-0 sticky z-50 md:bg-[#F5F6F8]">
        <p className="text-[#000000] text-lg font-sans">Invitation</p>
        <div className="relative ml-10 flex">
          <div className={`${activeTab === "2" ? "right-9": "left-9"} absolute rotate-45 -bottom-1.5 w-4 h-4 border-solid border bg-[#F8991F] border-[#F8991F]`}></div>
        <div className={`${activeTab === "1" ? "z-10 bg-[#F8991F] rounded-full" : "z-1 bg-[#DBDBDB] rounded-l-full pr-2"} absolute  w-[90px] flex justify-center h-[30px]`} onClick={() => setActiveTab("1")}>
         <p className={`${activeTab === "1" ?"text-[#FFFFFF]" : "text-[#232E3E]"} text-sm font-sans flex items-center`}>Sent (15)</p>
        </div>
        <div className={`${activeTab === "2" ? "z-10 bg-[#F8991F] rounded-full" : "z-1 bg-[#DBDBDB] rounded-r-full pl-2"} relative ml-20 w-[100px] flex justify-center h-[30px]`} onClick={() => setActiveTab("2")}>
        <p className={`${activeTab === "2" ?"text-[#FFFFFF]" : "text-[#232E3E]"} text-sm font-sans flex items-center`}>Received (5)</p>
        </div>
        </div>
      </div>
  
        <ol class="relative md:border-r-2 md:border-gray-200 md:mx-6"> 
      <li class="">            
        <span class="absolute md:flex hidden items-center justify-center w-4 h-4 bg-gray-500 mt-5 rounded-full -right-2 ring-white dark:ring-gray-900">
       
        </span>
      {invitationDetail?.map((invitation) => (
        <>
        {activeTab === "1" ? 
        <div className={`bg-[#DEE8FF] mt-4 md:mr-5 py-2 rounded-md p-4`}>
        <span className='text-[#F8991F] text-sm font-sans'>You </span>
        <span className='text-[#171717] text-sm font-sans'>have invited johnsmith@gmail.com to become family member.</span>
        </div>
         : 
        <div className={`flex justify-between bg-[#DEE8FF] mt-4 md:mr-5 py-2 rounded-md`}>
          <div className="flex justify-center items-center">
            <img src={mask} alt="mask" className="ml-4 w-[35px] h-[35px]" />
            <p className="ml-2 ">
              <span className="text-[#F8991F] text-sm font-sans">{invitation?.name}</span> have
              invited you to become his family member
            </p>
          </div>
          <div className='flex'>
          <div className='w-7 rounded-sm h-7 bg-white flex justify-center items-center self-center ml-1 !bg-[#0C611A]'>
    <CheckIcon style={{ width: "13px",height: "10px",color:"white" }}/>
                          </div>
                          <div className='w-7 rounded-sm h-7 bg-white flex justify-center items-center self-center ml-1 mr-4 !bg-[#FF3A3A]'>
    <CloseIcon style={{ width: "13px",height: "10px", color:"white" }}/>
                          </div>
                          </div>
        </div>
      }
      </>
      ))}
        </li>
      
      
      </ol>
    </div>
  );
};

export default InvitationCard;
