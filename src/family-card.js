import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import mask from "./mask.png";
import person from "./person .svg";



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
    ]
    const [familyDetail,setFamilyDetail] = useState(familyData);
   
  return (
    <div className="px-6 py-5">
        <div className="flex justify-between mb-1">
           <p className="text-[#000000] text-lg font-sans">Family</p> 
           <div>
           <SearchIcon fontSize="small"/>
           <Button
        variant="contained"
        sx={{
          backgroundColor: "#0C611A",
          borderRadius: "4px",
          textTransform: "none",
          marginLeft:"10px"
          
        }}
        size="small"
      >
        Add New
      </Button>
      </div>
        </div>
        <ol class="relative md:border-r-2 md:border-gray-200"> 
      <li class="">            
        <span class="absolute md:flex hidden items-center justify-center w-4 h-4 bg-gray-500 mt-5 rounded-full -right-2 ring-white dark:ring-gray-900">
       
        </span>
       

    
       
       
        {familyDetail?.map((family) => 
            <div className={`flex h-14 justify-between mt-4 md:mr-5 rounded-md ${family?.isAdmin ? "bg-[#F8991F]" : "bg-[#DEE8FF]"}` }>
                <div className="flex justify-center items-center">
                <img src={mask} alt="mask" className="ml-4 w-8 h-8" />
                <span className={`${family?.isAdmin ? "text-[#FFFFFF]" : "text-[#000000]"} font-sans ml-2 text-base`}>{family?.name}</span>

                    </div>
                    <div className='flex'>

                    <div className={`${family?.isAdmin ? "!bg-white ml-2 mr-1 my-2" : "!bg-[#CAD7F5] mx-2 my-2"} w-[70px] h-6 flex justify-center items-center rounded-sm self-center`} >
                        <div className={` border border-slate-50 flex justify-center rounded-sm items-center w-[70px] h-6`}>
                        <p className={`p-2 text-sm text-[#202020] items-center`}>{family?.isAdmin? "ADMIN" : "MEMBER"}</p>
                        </div>
                        </div>
                        {family?.isAdmin && 
                        <div className='w-6 rounded-sm h-6 bg-white flex justify-center items-center self-center ml-1 mr-2'>
                          <img src={person} alt="person" className='w-3 '/>
                          </div>}
                          </div>
                
                </div>
        )}
        </li>
      
      
      </ol>
     
    </div>
  );
};

export default FamilyCard;
