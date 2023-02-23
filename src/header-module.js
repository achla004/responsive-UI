import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

const HeaderModule = () => {
  return (
    <div className="flex justify-between ml-0 my-6 mr-6">
      <Typography sx={{ ml: 3 }} className="uppercase text-xl">
        My Account
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#232E3E",
          borderRadius: "4px",
          textTransform: "none",
        }}
        size="medium"
      >
        View Button
      </Button>
    </div>
  );
};

export default HeaderModule;
