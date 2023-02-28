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
import MenuCard from "./menu-card";
import ProfileCard from "./profile-card";



function App() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isMenu,setMenu] = useState(false)

  return (
    <div className={`${isMenu ? "bg-black bg-contain":"bg-white"}`}>
      {isMenu ? <div className='bg-black bg-contain'><MenuCard setMenu={setMenu}/> </div>:<>
      <AppBarModule isMenu={isMenu} setMenu={setMenu}/>
      <HeaderModule />
      <div className='sm:block md:hidden m-6 cursor-pointer'>
      <Tabs value={value} onChange={handleChange} 
          textColor="inherit" TabIndicatorProps={{
            sx: { backgroundColor: "#F8991F",
          }
          }}
          inkBarStyle={{background: '#F8991F'}}>
    <Tab label="Profile"value="1"  style={{ color: value === "1" ? "#F8991F" : "#7D7D7D"}}/>
    <Tab label="Wallet" value="2"  style={{ color: value === "2" ? "#F8991F" : "#7D7D7D"}}/>
    <Tab label="Activities" value="3"  style={{ color: value === "3" ? "#F8991F" : "#7D7D7D"}}/>
    <Tab label="Invitations" value="4" style={{ color: value === "4" ? "#F8991F" : "#7D7D7D"}}/>
  </Tabs>
  </div>
      <div className="mx-4 xl:my-2 my-10">
        <div className="grid xl:grid-cols-4 xl:grid-rows-4 xl:gap-5 md:gap-6 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 gap-4 sm:grid-rows-2">
          <div className={`${value !== "1" ? "hidden md:grid": "grid"} xl:col-span-3 bg-[#F5F6F8] order-2 md:order-1 xl:order-none rounded-md`}><ProfileCard/></div>
          <div className={`${value !== "1" ? "hidden md:grid": "grid"} xl:row-span-2 xl:col-span-1  bg-[#F5F6F8] sm:order-1 md:order-2 xl:order-none xl:ml-2 rounded-md`}><FamilyCard/></div>
          <div className={`${value !== "2" ? "hidden md:grid": "grid"} xl:col-span-2  md:bg-[#F5F6F8] sm:bg-white md:order-3 lg:order-3 xl:order-none md:rounded-md rounded-none`}><AccountCard/></div>
          <div className={`${value !== "3" ? "hidden md:grid": "grid"} xl:col-span-1 xl:row-span-3 md:order-5 lg:order-5 xl:order-none md:bg-[#F5F6F8] rounded-md`}><ActivityCard/></div>
          <div className="hidden md:grid xl:col-span-2  xl:row-span-2  bg-[#F5F6F8] md:order-4 lg:order-4 xl:order-none rounded-md"><AddressCard/></div>
          <div className={`${value !== "4" ? "hidden md:grid": "grid"} xl:row-span-2 xl:col-span-1 md:order-6 lg:order-6 xl:order-none md:bg-[#F5F6F8] xl:ml-2 rounded-md`}><InvitationCard/></div>
        </div>
      </div>
      </>
}
    </div>
  );
}

export default App;
