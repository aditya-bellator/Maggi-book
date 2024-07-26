import React from 'react'
import "./style.scss"
import Speaker from "../../assets/speaker.svg"
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from '@mui/icons-material/Home';
import { Menu } from '@mui/material';
import logos from "../../assets/logo.png"
import { siderHandlerRef } from '../../common/MainLayout';
import { Link } from 'react-router-dom';
export const SubNav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="sub-nav">
        <div className="sub-col-left">
            <div className="marquee-sec">
            <marquee>WELCOME</marquee>
          
            </div>
            <div className="icon-speak">
                <img src={Speaker} alt="speak" />
            </div>
        </div>
        <div className="sub-col-right">
          <div className="logo-menu">
            <div className="menu-icon" onClick={siderHandlerRef}>
<HomeIcon/>
            </div>

            <div className="logo-icon">
             <Link to={"/"}>
              <img src={logos} alt="logo" />
             </Link>
           
            </div>
          </div>
          <div className="pts-sec">

         
            <div className="pts">
                <p>

                pts: <span>0.0</span><span>0.0</span> 
                </p>
            </div>
            <div className="demo">
                <div className='demouser'>

                <p onClick={handleClick}> 
                    <PersonIcon />
                    </p>
                    <p onClick={handleClick}>Demo <KeyboardArrowDownIcon />
                    </p>
                   
                </div>
            <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          
         <Link to="/Profile"> Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Account Statement
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Current Bets
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Activity Log
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Set Button Velue
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Change Password
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          Log out
        </MenuItem>
      </Menu>

            </div>
            </div>
        </div>
    </div>
  )
}
