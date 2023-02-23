import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from "react";
import AccountCard from "./account-card";
import ActivityCard from "./activity-card";
import AddressCard from "./address-card";
import AppBarModule from "./app-bar-module";
import "./App.css";
import FamilyCard from "./family-card";
import HeaderModule from "./header-module";
import InvitationCard from "./invitation-card";
import ProfileCard from "./profile-card";


function App() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <AppBarModule />
      <HeaderModule />
      <div className='sm:block md:hidden m-6'>
      <Tabs value={value} onChange={handleChange} >
    <Tab label="Profile"value="1"  />
    <Tab label="Wallet" value="2"  />
    <Tab label="Activities" value="3"  />
    <Tab label="Invitations" value="4" />
  </Tabs>
  </div>
      <div className="m-4">
        <div className="grid xl:grid-cols-4 xl:grid-rows-4 xl:gap-4 md:gap-6 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:gap-2">
          <div className={`${value !== "1" ? "hidden md:grid": "grid"} xl:col-span-3 bg-[#F5F6F8]`}><ProfileCard value={value}/></div>
          <div className={`${value !== "1" ? "hidden md:grid": "grid"} xl:row-span-2 xl:col-span-1  bg-[#F5F6F8]`}><FamilyCard value={value}/></div>
          <div className={`${value !== "2" ? "hidden md:grid": "grid"} xl:col-span-2  bg-[#F5F6F8] `}><AccountCard/></div>
          <div className={`${value !== "3" ? "hidden md:grid": "grid"} xl:col-span-1 xl:row-span-3  bg-[#F5F6F8]`}><ActivityCard/></div>
          <div className="hidden md:grid xl:col-span-2  xl:row-span-2  bg-[#F5F6F8]"><AddressCard/></div>
          <div className={`${value !== "4" ? "hidden md:grid": "grid"} xl:row-span-2 xl:col-span-1   bg-[#F5F6F8]`}><InvitationCard/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
