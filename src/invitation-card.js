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
   
   
  ];
  const [invitationDetail, setInvitationDetail] = useState(invitationData);

  return (
    <div className="md:px-6 md:py-5">
      <div className="flex justify-between mb-1">
        <p className="text-[#000000] text-lg font-sans">Invitation</p>
      </div>
  
        <ol class="relative md:border-r-2 md:border-gray-200"> 
      <li class="">            
        <span class="absolute md:flex hidden items-center justify-center w-4 h-4 bg-gray-500 mt-5 rounded-full -right-2 ring-white dark:ring-gray-900">
       
        </span>
      {invitationDetail?.map((invitation) => (
        <div className={`flex justify-between bg-[#DEE8FF] mt-4 md:mr-5 py-2 rounded-md`}>
          <div className="flex justify-center items-center">
            <img src={mask} alt="mask" className="ml-4 w-8 h-8" />
            <p className="ml-2 ">
              <span className="text-[#F8991F] text-sm font-sans">{invitation?.name}</span> have
              invited you to become his family member
            </p>
          </div>
          <div className='flex'>
          <div className='w-4 rounded-sm h-4 bg-white flex justify-center items-center self-center ml-1 !bg-[#0C611A]'>
    <CheckIcon style={{ width: "13px",height: "10px",color:"white" }}/>
                          </div>
                          <div className='w-4 rounded-sm h-4 bg-white flex justify-center items-center self-center ml-1 mr-4 !bg-[#FF3A3A]'>
    <CloseIcon style={{ width: "13px",height: "10px", color:"white" }}/>
                          </div>
                          </div>
        </div>
      ))}
        </li>
      
      
      </ol>
    </div>
  );
};

export default InvitationCard;
