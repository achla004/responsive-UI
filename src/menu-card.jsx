import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import component from "./Component.png";
import logout from "./logout.png";
import mask from "./profile.jpg";
import profit from "./profit.png";
import teamwork from "./teamwork.png";




const MenuCard = (props) => {
    const {setMenu} = props;
    return (
        <div className="bg-[#232E3E] bg-contain">
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
      <div className='flex mt-6 ml-4 justify-between'>
        <div className='flex'>
        <img src={component} alt="profit" className='w-5 h-5'/>
        <p className="text-[#F8991F] text-base font-sans ml-2">Menu 1</p>
        </div>
        <KeyboardArrowUpIcon style={{color: "#FFFFFF",marginRight:"32px"
      }}/>
      </div>
      <div className='flex flex-col border-l-2 border-[#F8991F] ml-6 h-[68px]'>
        <div className='flex items-center mt-2'>
        <hr class="h-[2px] w-[20px] bg-[#F8991F] border-0"></hr><span className='text-[#FFFFFF] text-base font-sans'>Sub Menu 1</span>
        </div>
        <div className='flex items-center'>
        <hr class="h-[2px] w-[20px] bg-[#F8991F] border-0"></hr><span className='text-[#FFFFFF] text-base font-sans'>Sub Menu 2</span>
        </div>
        <div className='flex items-center'>
        <hr class="h-[2px] w-[20px] bg-[#F8991F] border-0"></hr><span className='text-[#FFFFFF] text-base font-sans'>Sub Menu 3</span>
        </div>
<div>

</div>
        

      </div>
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