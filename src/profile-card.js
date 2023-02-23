import Button from "@mui/material/Button";
import React, { useState } from "react";
import mask from "./mask.png";


const ProfileCard = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [graduationYear,setGraduationYear] = useState("");
    const [dob,setDob] = useState("");
  return (
    <div className={`flex m-2 xl:flex-row flex-col`}>
      <div className="flex flex-row xl:justify-around justify-center mt-2">
        <div className="flex items-center justify-center">
        <img src={mask} alt="mask" className="ml-4 w-28 h-28 " />
        </div>
        <div className="flex flex-col justify-center ml-2">
          <p className="text-xl text-[#000000]">John Smith</p>
          <p className="text-xs text-slate-400">Main St. Farmington, CA 123</p>
        </div>
      </div>
      <div className="flex flex-col justify-center xl:border-l-2 p-2 ml-2">
        <div className="flex justify-center mt-2">
          <span className="self-center">FirstName:</span>
          <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} className="border-2 ml-2"/>
        </div>
        <div className="flex justify-center mt-2">
          <span className="self-center">LastName:</span>
          <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} className="border-2 ml-2"/>
        </div>
        <div className="xl:flex lg:hidden justify-center mt-2 ">
          <span className="self-center">Email:</span>
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="border-2 ml-10"/>
        </div>
      </div>
      <div className="flex flex-col justify-center p-2 ml-2">
        <div className="flex justify-center mt-2">
          <span className="self-center">Phone:</span>
          <input type="number" value={number} onChange={(e)=> setDob(e.target.value)} className="border-2 ml-10"/>
        </div>
        <div className="flex justify-center mt-2">
          <span className="self-center">Graduation Year:</span>
          <input type="date" value={graduationYear} onChange={(e)=> setGraduationYear(e.target.value)} className="border-2 ml-2"/>
        </div>
        <div className="xl:flex lg:hidden justify-center mt-2">
          <span className="self-center">Date of Birth:</span>
          <input type="date" value={dob} onChange={(e)=> setEmail(e.target.value)} className="border-2 ml-10"/>
        </div>
      </div>
      <div className="flex xl:flex-col lg:flex-row justify-center p-2 ml-2">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0C611A",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
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
        }}
        size="medium"
      >
        Change Password
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "##FF3A3A ",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
        }}
        size="medium"
      >
        Leave Family
      </Button>

      </div>
    </div>
  );
};

export default ProfileCard;
