import React, { useState } from "react";
import mask from "./mask.png";

const InvitationCard = () => {
  const invitationData = [
    {
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
    },
  ];
  const [invitationDetail, setInvitationDetail] = useState(invitationData);

  return (
    <div className="">
      <div className="m-4">
        <p>Invitation</p>
      </div>
      {invitationDetail?.map((invitation) => (
        <div className={`flex h-14 justify-between m-4 bg-[#DEE8FF]`}>
          <div className="flex justify-center items-center mr-8">
            <img src={mask} alt="mask" className="ml-4 w-8 h-8" />
            <p className="ml-2">
              <span className="text-[#F8991F]">{invitation?.name}</span> have
              invited you to become his family member
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvitationCard;
