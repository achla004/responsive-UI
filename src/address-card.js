import React, { useState } from "react";

const AddressCard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  return (
    <div className="sm:hidden md:block">
      <div className="m-6">
        <p className="text-[#000000] text-lg font-sans">Billing Address</p>
      </div>
      <div className="m-4 flex">
        <input className="ml-2 w-5 h-5" type="checkbox" />{" "}
        <p className="ml-2 justify-center items-center text-sm font-sans self-center">
          Same as Home Address
        </p>
      </div>
      <div className="m-4 flex">
        <div className="w-1/2">
          <p className="text-[#202020] text-xs font-sans">First Name:</p>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
        <div className="w-1/2 ml-2">
          <p className="text-[#202020] text-xs font-sans">Last Name:</p>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
      </div>
      <div className="m-4 flex">
        <div className="xl:w-1/2 w-full">
          <p className="text-[#202020] text-xs font-sans">Address Line 1:</p>
          <input
            type="text"
            value={addressOne}
            onChange={(e) => setAddressOne(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
        <div className="w-1/2 ml-2 hidden xl:block">
          <p className="text-[#202020] text-xs font-sans">Address Line 2:</p>
          <input
            type="text"
            value={addressTwo}
            onChange={(e) => setAddressTwo(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
      </div>
      <div className="m-4 flex">
        <div className="xl:w-1/4 w-1/2">
          <p className="text-[#202020] text-xs font-sans">Country:</p>
          <input
            type="text"
            value={addressOne}
            onChange={(e) => setAddressOne(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
        <div className="xl:w-1/4 w-1/2 ml-2">
          <p className="text-[#202020] text-xs font-sans">State/Province/Region:</p>
          <input
            type="text"
            value={addressTwo}
            onChange={(e) => setAddressTwo(e.target.value)}
            className="rounded w-full h-9"
          />
      </div>
        <div className="w-1/4 ml-2 hidden xl:block">
          <p className="text-[#202020] text-xs font-sans">City:</p>
          <input
            type="text"
            value={addressOne}
            onChange={(e) => setAddressOne(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
        <div className="w-1/4 ml-2 hidden xl:block">
          <p className="text-[#202020] text-xs font-sans">Zip Code:</p>
          <input
            type="text"
            value={addressTwo}
            onChange={(e) => setAddressTwo(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
        </div>
        <div className="m-4 flex xl:hidden">
        <div className="w-1/2">
          <p className="text-[#202020] text-xs font-sans">City:</p>
          <input
            type="text"
            value={addressOne}
            onChange={(e) => setAddressOne(e.target.value)}
            className="rounded w-full h-9"
          />
        </div>
        <div className="w-1/2 ml-2">
          <p className="text-[#202020] text-xs font-sans">Zip Code:</p>
          <input
            type="text"
            value={addressTwo}
            onChange={(e) => setAddressTwo(e.target.value)}
            className="rounded w-full h-9"
          />
      </div>
      </div>
      
    </div>
  );
};

export default AddressCard;
