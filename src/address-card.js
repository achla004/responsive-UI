import React, { useState } from "react";

const AddressCard = () => {
 
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [addressOne,setAddressOne] = useState("");
  const [addressTwo,setAddressTwo] = useState("");
  return (
    <div className="sm:hidden md:block">
      <div className="m-6">
        <p>Billing Address</p>
      </div>
      <div className="m-4 flex">
        <input className="ml-2" type="checkbox"/> <p className="ml-2">Same as Home Address</p>
        
       
      </div>
      <div className="m-4 flex">
        <div className="w-1/2">
        <p>First Name:</p>
      <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} className="border-2"/>
      </div> 
      <div className="w-1/2">
      <p>Last Name:</p>
      <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} className="border-2 "/>
        
       
      </div>
       
      </div>
      <div className="m-4 flex">
        <div className="w-1/2">
      <p>Address Line1:</p>
      <input type="text" value={addressOne} onChange={(e)=> setAddressOne(e.target.value)} className="border-2"/>
      </div>
      <div className="w-1/2">
      <p>Address Line1:</p>
      <input type="text" value={addressTwo} onChange={(e)=> setAddressTwo(e.target.value)} className="border-2"/>
      </div>
        
       
      </div>
    </div>
  );
};

export default AddressCard;
