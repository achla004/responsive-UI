import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import mask from "./mask.png";

export default function AppBarModule(props) {
  const {isMenu,setMenu} = props;
  return (
    <AppBar position="">
      <Toolbar className="bg-gray-900 flex justify-between">
        <div className="flex">
          <div className="mr-2 xl:hidden" onClick={()=> setMenu(true)}>
          <MenuIcon style={{color:"#F8991F" }}/>
          </div>
          <Typography
            color="white"
            sx={{ mr: 2 }}
            className="text-white uppercase text-xl ml-4 self-center items-center"
          >
            Logo
          </Typography>
          <Typography sx={{ ml: 12 }} className="text-white text-base ml-4 xl:block hidden">
            Menu 1
          </Typography>
          <Typography sx={{ ml: 6 }} className="text-white text-base ml-4 xl:block hidden">
            Menu 2
          </Typography>
          <Typography sx={{ ml: 6 }} className="text-white text-base ml-4 xl:block hidden">
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
