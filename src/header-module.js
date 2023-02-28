import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import menu from "./menu.svg";

const HeaderModule = () => {
  return (
    <div className="xl:flex md:hidden flex justify-between my-6 w-full">
      <Typography sx={{ ml: 3 }} className="uppercase text-xl text-[#000000] flex justify-center items-center">
        My Account
      </Typography>
      <div className="hidden xl:flex bg-[#CEF2DA] w-[374px] h-[37px] rounded-sm flex justify-center"
      >
        <p className="text-[#0C611A] text-lg flex items-center">Success Message Here</p>
        </div>
      <div className="xl:block hidden">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#232E3E",
          borderRadius: "4px",
          textTransform: "none",
          marginRight: "16px"
        }}
        size="medium"
      >
        View Button
      </Button>
      </div>
      <div className="flex justify-center md:hidden mr-4">
      <img src={menu} alt="menu" className="flex items-center self-center"/>
      </div>
    </div>
  );
};

export default HeaderModule;
