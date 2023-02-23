import Button from "@mui/material/Button";
import React, { useState } from "react";
import mask from "./mask.png";



const ActivityCard = () => {
  const activityData = [
    {
      name: "john Smith",
      isAdmin: true,
      field: "Account Type"
    },
    {
      name: "john Smith",
      isAdmin: false,
      field: "Account Type"
    },
    {
      name: "Dianee Russell",
      isAdmin: false,
      field: "Family Member"
    },
    {
      name: "Lisa Smith",
      isAdmin: false,
      field: "Mobile Number"
    },
    {
      name: "Sean Michaletz",
      isAdmin: false,
      field: "Email"
    },
    {
        name: "john Smith",
        isAdmin: true,
        field: "Account Type"
      },
      {
        name: "john Smith",
        isAdmin: false,
        field: "Account Type"
      },
      {
        name: "Dianee Russell",
        isAdmin: false,
        field: "Family Member"
      },
      {
        name: "Lisa Smith",
        isAdmin: false,
        field: "Mobile Number"
      },
      {
        name: "Sean Michaletz",
        isAdmin: false,
        field: "Email"
      },
  ];
  const [activityDetail, setActivityDetail] = useState(activityData);

  return (
    <div className="">
      <div className="flex justify-between m-4">
        <p>Activities</p>
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
        View All
      </Button>
      </div>
      <div className="m-4">
      <ol class="relative border-l border-gray-200 ml-4"> 
      {activityDetail?.map((activity) => (
        <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <img src={mask} alt="mask" />
        </span>
        <p className="">
              {activity?.name} updated her <span className="text-[#F8991F]">{activity?.field}</span>
            </p>

    </li>
      ))}
      </ol>
      </div>



    </div>
  );
};

export default ActivityCard;
