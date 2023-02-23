import React, { useState } from "react";
import mastercard from "./mastercard.png";

const AccountCard = () => {
  const accountData = [
    {
      accountNumber: "***5967",
      address: "7/20",
    },
    {
      accountNumber: "***5967",
      expiryDate: "7/20",
    },
  ];
  const [accountDetail, setAccountDetail] = useState(accountData);

  return (
    <div className="">
      <div className="m-6">
        <p>Bank Account</p>
      </div>
      <div className="m-4  ml-0 flex">
        {accountDetail?.map((account) => (
          <div className="flex xl:flex-row xl:justify-around sm:flex-col  w-1/2 h-16 border rounded-md bg-white ml-4">
            <div className="flex flex-row">
            <img
              src={mastercard}
              alt="mask"
              className="ml-4 w-14 h-14 justify-center"
            />
           
            <div className="flex flex-col justify-center ml-2">
              <p className="text-xl text-[#000000]">{account?.accountNumber}</p>
              <p className="text-xs text-slate-400">
                Expires {account?.expiryDate}
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountCard;
