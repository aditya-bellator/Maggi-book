import React, { useState } from "react";
import "./style.scss";
import Speaker from "../../assets/speaker.svg";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from "@mui/material";
import logos from "../../assets/logo.png";
import { siderHandlerRef } from "../../common/MainLayout";
import { Link, useLocation } from "react-router-dom";
import SetBetValue from "../../component/setBetValue/SetBetValue";
import ChangePassword from "../../component/changepassword/ChangePassword"
export const SubNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const {pathname} = useLocation();
  const locationArray = ["/Live-Casino","/AccountStatement","/CurrentBets","/ActivityLog","/Slots","/FantasyGame","/Lottery"]
  const checkLocation = locationArray.includes(pathname)

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
    handleClose(); // Close the menu
  };

  const handleCloseChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);

  };
  return (
    <div className="sub-nav">
        {checkLocation && (
       <div className="logo">
        <img src={logos} alt="logo" />
      </div>
         )}




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
        {!checkLocation ? (
          <div className="menu-icon" onClick={siderHandlerRef}>
            <MenuIcon />
          </div>) : (<div className="menu-icon">
            <Link to={"/"}>
            <HomeIcon/>
            </Link>
          </div>
        )}
          <div className="logo-icon">
            <Link to={"/"}>
              <img src={logos} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="pts-sec">
          <div className="pts">
            <p>
              pts: <span>0.0</span>
              <span>0.0</span>
            </p>
          </div>
          <div className="demo">
            <div className="demouser">
              <p onClick={handleClick}>
                <PersonIcon />
              </p>
              <p onClick={handleClick}>
                Demo <KeyboardArrowDownIcon />
              </p>
            </div>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Link to="/Profile">
                <MenuItem onClick={handleClose} disableRipple>
                  Profile
                </MenuItem>
              </Link>
              <Link to="/AccountStatement">
                <MenuItem onClick={handleClose} disableRipple>
                  Account Statement
                </MenuItem>
              </Link>
              <Link to="/CurrentBets">
                <MenuItem onClick={handleClose} disableRipple>
                  Current Bets
                </MenuItem>
              </Link>
              <Link to="/ActivityLog">
                <MenuItem onClick={handleClose} disableRipple>
                  Activity Log
                </MenuItem>
              </Link>
              <Link to="">
              <MenuItem onClick={()=>{
                handleClose()
                handleOpenModal()}} disableRipple>
                Set Button Value
              </MenuItem>
              </Link>
              <Link to="">
              <MenuItem onClick={()=>{
                handleClose()
                handleOpenChangePasswordModal()}} disableRipple>
                Change Password
              </MenuItem>
              </Link>
              <Divider sx={{ my: 0.5 }} />
              <Link to="">
                <MenuItem onClick={handleClose} disableRipple>
                  Log out
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </div>
      </div>
      {isModalOpen && <SetBetValue onClose={handleCloseModal} />}
      {isChangePasswordModalOpen && <ChangePassword onClose={handleCloseChangePasswordModal} />}
    </div>
  );
};
