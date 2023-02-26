import Button from "@mui/material/Button";
import React, { useState } from "react";
import mastercard from "./mastercard.png";


const AccountCard = () => {
  const accountData = [
    {
      accountNumber: "**** **** ****5967",
      expiryDate: "7/20",
    },
    {
      accountNumber: "**** **** **** 5967",
      expiryDate: "7/20",
    },
  ];
  const [accountDetail, setAccountDetail] = useState(accountData);

  return (
    <div className="md:mr-5 md:ml-3 ml-0 md:my-5 my-0">
     <p className="ml-2 text-[#000000] text-lg font-sans hidden md:block">Bank Account</p>
     <div className="flex md:mt-5 mt-0 xl:flex-row flex-col">
        {accountDetail?.map((account) => (
          <div className="flex sm:flex-col justify-between md:justify-center md:w-64 sm:w-full h-16 rounded-md md:bg-white bg-[#F5F6F8] m-2">
            <div className="flex flex-row justify-center md:justify-start">
            <img
              src={mastercard}
              alt="mask"
              className="ml-3.5 w-14 h-14 self-center"
            />
           
            <div className="flex flex-col justify-center ml-2 self-center">
              <p className="text-base text-[#000000] items-center">{account?.accountNumber}</p>
              <p className="text-xs text-slate-400 items-center">
                Expires {account?.expiryDate}
              </p>
            </div>
            </div>
            <div className="flex self-center mr-4 md:hidden">
            <Button
        variant="contained"
        sx={{
          backgroundColor: "#0C611A",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
          width:"66px",
          fontSize:"12px",
          height:"30px",
        }}
        size="small"
      >
        Edit
      </Button>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountCard;
