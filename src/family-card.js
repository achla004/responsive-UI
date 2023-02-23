import Button from "@mui/material/Button";
import React, { useState } from "react";
import mask from "./mask.png";



const FamilyCard = () => {
    const familyData = [{
        name: "john Smith",
        isAdmin: true,
    },
    {
        name: "john Smith",
        isAdmin: false,
    },
    {
        name: "Dianee Russell",
        isAdmin: false,
    },
    {
        name: "Lisa Smith",
        isAdmin: false,
    },
    {
        name: "Sean Michaletz",
        isAdmin: false,
    }]
    const [familyDetail,setFamilyDetail] = useState(familyData);
   
  return (
    <div className="">
        <div className="flex justify-between m-4">
           <p>Family</p> 
           <Button
        variant="contained"
        sx={{
          backgroundColor: "#0C611A",
          borderRadius: "4px",
          textTransform: "none",
          margin:"2px",
        }}
        size="small"
      >
        Add Now
      </Button>
        </div>
        {familyDetail?.map((family) => 
            <div className={`flex h-14 justify-between m-4 ${family?.isAdmin ? "bg-[#F8991F]" : "bg-[#DEE8FF]"}` }>
                <div className="flex justify-center items-center">
                <img src={mask} alt="mask" className="ml-4 w-8 h-8" />
                <span className="ml-2">{family?.name}</span>

                    </div>

                    <div className={`w-18 m-2 flex justify-center items-center`} >
                        <div className={`p-2 border border-slate-50 rounded-sm  items-center ${family?.isAdmin ? "text-[##FFFFFF]" : "text-[#CAD7F5]"}}`}>
                        <p className="text-sm text-[#202020]">{family?.isAdmin? "ADMIN" : "MEMBER"}</p>
                        </div>
                        </div>
                
                </div>
        )}
     
    </div>
  );
};

export default FamilyCard;
