import Button from "@mui/material/Button";
import React, { useState } from "react";
import profile from "./user.svg";

const ActivityCard = () => {
  const activityData = [
    {
      name: "john Smith",
      isAdmin: true,
      field: "Account Type",
      date: "5 October 11:46 AM",
    },
    {
      name: "john Smith",
      isAdmin: false,
      field: "Account Type",
      date: "5 October 11:46 AM",
    },
    {
      name: "Dianee Russell",
      isAdmin: false,
      field: "Family Member",
      date: "5 October 11:46 AM",
    },
    {
      name: "Lisa Smith",
      isAdmin: false,
      field: "Mobile Number",
      date: "5 October 11:46 AM",
    },
    {
      name: "Sean Michaletz",
      isAdmin: false,
      field: "Email",
      date: "5 October 11:46 AM",
    },
   
   
   
    
   
  ];
  const [activityDetail, setActivityDetail] = useState(activityData);

  return (
    <div className="">
      <div className="justify-between m-4 hidden md:flex">
        <p className="text-[#000000] text-lg">Activities</p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0C611A",
            borderRadius: "4px",
            textTransform: "none",
            margin: "2px",
          }}
          size="medium"
        >
          View All
        </Button>
      </div>
      <div className="mx-4 md:my-y">
        <ol class="relative border-l border-gray-200 ml-2">
          {activityDetail?.map((activity) => (
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-7 h-7 bg-[#DEE8FF] rounded-full -left-3 ring-white ">
                <img src={profile} alt="mask" />
              </span>
              <div className="ml-4 flex flex-col">
                <p className="text-sm font-sans">
                  {activity?.name} updated her{" "}
                  <span className="text-[#F8991F]">{activity?.field}</span>
                </p>
                <p className="text-xs font-sans text-[#C7C7C7] mt-1">
                  {activity?.date}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ActivityCard;
