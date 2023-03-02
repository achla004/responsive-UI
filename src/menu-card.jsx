import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import component from "./Component.png";
import logout from "./logout.png";
import mask from "./profile.jpg";
import profit from "./profit.png";
import teamwork from "./teamwork.png";




const MenuCard = (props) => {
    const {setMenu} = props;
    const [expanded, setExpanded] = useState(true);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="bg-[#232E3E] bg-contain h-screen">
            <div className='p-4'>
                <div className='flex justify-between'>
                    <p className='text-white text-lg ml-3 font-sans'>LOGO</p>
                    <div className='w-7 rounded-sm h-7 bg-white flex justify-center items-center self-center' onClick={() =>setMenu(false) }>
                <CloseIcon style={{ width: "14px",height: "14px", }}/>
                          </div>

                </div>
                <div className="flex flex-row mt-4">
        <div className="flex items-center justify-center ml-4">
        <img src={mask} alt="mask" className="w-[86px] h-[86px] bg-transparent opacity-100" />
        </div>
        <div className="flex flex-col justify-center ml-4 font-sans">
          <p className="text-xl text-white font-sans">John Smith</p>
          <p className="text-xs text-white font-sans">Main St. Farmington, CA 123</p>
        </div>
      </div>
    
      <Accordion expanded={expanded} onChange={()=>setExpanded(!expanded)} sx={{ backgroundColor:"#232E3E",border:"none",boxShadow:"none",marginTop:"50px !important" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: "#FFFFFF"
        }}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ height:"12px !important",minHeight:"12px !important",borderBlock:"none" }}
        >
          <img src={component} alt="profit" className='w-5 h-5'/>
          <Typography sx={{ width: '33%', flexShrink: 0,color:"white",marginLeft:"8px" }}>
          Menu 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='flex flex-col !border-l-2 !border-t-0 border-[#F8991F] ml-2 h-[68px]'>
        <div className='flex items-center mt-2'>
        <hr class="h-[2px] w-[20px] bg-[#F8991F] border-0"></hr><span className='text-[#FFFFFF] text-base font-sans'>Sub Menu 1</span>
        </div>
        <div className='flex items-center'>
        <hr class="h-[2px] w-[20px] bg-[#F8991F] border-0"></hr><span className='text-[#FFFFFF] text-base font-sans'>Sub Menu 2</span>
        </div>
        <div className='flex items-center'>
        <hr class="h-[2px] w-[20px] bg-[#F8991F] border-0"></hr><span className='text-[#FFFFFF] text-base font-sans'>Sub Menu 3</span>
        </div>
        </div>
        </AccordionDetails>
      </Accordion>
      <div className='flex mt-6 ml-4'>
        <img src={profit} alt="profit" className='w-5 h-5'/>
        <p className="text-white text-base font-sans ml-2">Menu 2</p>
      </div>
      <div className='flex mt-4 ml-4'>
      <img src={teamwork} alt="teamwork" className='w-5 h-5'/>
      <p className="text-white text-base font-sans ml-2">Menu 3</p>
      </div>
      <div className='flex mt-4 ml-4'>
      <img src={logout} alt="logout" className='w-5 h-5'/>
      <p className="text-white text-base font-sans ml-2">Logout</p>
      </div>

            </div>

        </div>
    )
}
export default MenuCard;