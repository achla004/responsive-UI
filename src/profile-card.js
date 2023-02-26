import Button from "@mui/material/Button";
import React, { useState } from "react";
import mask from "./profile.jpg";


const ProfileCard = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [graduationYear,setGraduationYear] = useState("");
    const [dob,setDob] = useState("");
  return (
    <div className={`flex m-2 xl:flex-row flex-col`}>
      <div className="flex flex-row xl:justify-around xl:justify-center mt-2">
        <div className="flex items-center justify-center ml-4">
        <img src={mask} alt="mask" className="w-24 h-24 bg-transparent opacity-100" />
        </div>
        <div className="flex flex-col justify-center ml-4 font-sans">
          <p className="text-xl text-[#000000] font-sans">John Smith</p>
          <p className="text-xs text-[#818181] font-sans">Main St. Farmington, CA 123</p>
        </div>
      </div>
      <div className="flex xl:flex-col xl:justify-center xl:border-l xl:p-2 xl:ml-2">
        <div className="flex xl:justify-center xl:flex-row flex-col mt-2 ml-1 xl:ml-0">
          <span className="xl:self-center w-20 text-sm font-sans">FirstName:</span>
          <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} className="border-2 font-sans xl:w-60 md:w-36 sm:w-1/2 rounded"/>
        </div>
        <div className="flex xl:justify-center xl:flex-row flex-col mt-2 ml-3 xl:ml-0">
          <span className="xl:self-center w-20 text-sm font-sans text-[#202020]">LastName:</span>
          <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} className="border-2 font-sans xl:w-60 md:w-36 sm:w-1/2 rounded"/>
        </div>
        <div className="xl:flex hidden xl:justify-center xl:flex-row mt-2">
          <span className="xl:self-center w-20 text-sm font-sans text-[#202020]">Email:</span>
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="border-2 font-sans xl:w-60 w-36 rounded"/>
        </div>
        <div className="md:flex hidden flex-col xl:hidden mt-2 ml-3 xl:ml-0">
          <span className="w-28 font-sans text-sm font-sans text-[#202020]">Graduation Year:</span>
          <input type="date" value={graduationYear} onChange={(e)=> setGraduationYear(e.target.value)} className="border-2 font-sans w-36 rounded"/>
        </div>
      </div>
      <div className="flex xl:flex-col xl:justify-center xl:p-2 xl:ml-2">
        <div className="flex xl:justify-center xl:flex-row flex-col mt-2">
          <span className="xl:self-center w-28 text-sm font-sans text-[#202020]">Phone:</span>
          <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} className="border-2 font-sans xl:w-40 md:w-56 sm:w-1/2 rounded"/>
        </div>
        <div className="flex md:hidden xl:flex xl:justify-center flex-col xl:flex-row mt-2 ml-3 xl:ml-0">
          <span className="xl:self-center w-28 font-sans text-sm text-[#202020]">Graduation Year:</span>
          <input type="date" value={graduationYear} onChange={(e)=> setGraduationYear(e.target.value)} className="border-2 font-sans xl:w-40 md:w-56 sm:w-1/2 rounded"/>
        </div>
        <div className="hidden md:flex xl:justify-center xl:flex-row flex-col mt-2">
          <span className="xl:self-center font-sans w-28 text-sm text-[#202020]">Date of Birth:</span>
          <input type="date" value={dob} onChange={(e)=> setDob(e.target.value)} className="border-2 xl:w-40 w-56 rounded font-sans" placeholder="dd/mm/yyyy"/>
        </div>
      </div>
      <div className="md:flex xl:flex-col lg:flex-row justify-center xl:p-2 xl:ml-2 mt-8 xl:mt-0 hidden">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0C611A",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
          width:"146px",
          fontSize:"12px",
        }}
        size="medium"
      >
        Save Changes
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#232E3E",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
          width:"146px",
          fontSize:"12px",
        }}
        size="medium"
      >
        Change Password
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF3A3A ",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
          width:"146px",
          fontSize:"12px",
        }}
        size="medium"
      >
        Leave Family
      </Button>

      </div>
      <div className="flex xl:flex-col lg:flex-row md:justify-center xl:p-2 xl:ml-2 mt-8 xl:mt-0 md:hidden mb-2">
     
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#232E3E",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
          width:"146px",
          fontSize:"12px",
        }}
        size="medium"
      >
        Edit Profile
      </Button>
      

      </div>
    </div>
  );
};

export default ProfileCard;
