import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import mask from "./mask.png";

export default function AppBarModule() {
  return (
    <AppBar position="">
      <Toolbar className="bg-gray-900 flex justify-between">
        <div className="flex">
          <Typography
            color="white"
            sx={{ mr: 2 }}
            className="text-white uppercase text-xl ml-4"
          >
            Logo
          </Typography>
          <Typography sx={{ ml: 12 }} className="text-white text-base ml-4">
            Menu 1
          </Typography>
          <Typography sx={{ ml: 6 }} className="text-white text-base ml-4">
            Menu 2
          </Typography>
          <Typography sx={{ ml: 6 }} className="text-white text-base ml-4">
            Menu 3
          </Typography>
        </div>
        <div className="flex">
          <NotificationsNoneIcon className="self-center" />
          <img src={mask} alt="mask" className="ml-4 w-8 h-8" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
