import { Link } from "react-router-dom";
// import Accordian from "../../component/Accordian"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import MenuIcon from '@mui/icons-material/Menu';

import logos from "../../assets/logo.png"

import "./styles.scss";
import { useState } from "react";
import { colors } from "@mui/material";

const Sider = () => {
  const fruits = [
    {
      id: 1,
      icon: <AccessAlarmsIcon />,
      name: "InPlay",
      iconColor:"white",
      BackgroundColor:""
      

    },
    {
      id: 2,
      icon: <AccessAlarmsIcon />,
      name: "Cricket",
      iconColor:"rgb(3, 179, 127)",
      BackgroundColor:""
    },
    {
      id: 3,
      icon: <AccessAlarmsIcon />,
      name: "Tennis",
      iconColor:"rgb(32, 50, 123)",
      BackgroundColor:""
    },
  ];
  const [togle, setTogle] = useState(false);
  const [togle1, setTogle1] = useState({});
  return (
    <div className="main-sider" onClick={(e)=>e.stopPropagation()}>
      <div className="logo">
        <img src={logos} alt="logo" />
        <div className="icon-menu">
<MenuIcon/>
        </div>
      </div>
      <div className="menu-links">
        <ul>
          <Link>
            <li> DASHBOARD</li>
          </Link>
          <Link>
            <li>LIVE CASINO</li>
          </Link>
          <Link>
            <li onClick={() => setTogle(!togle)} className="togle-list">
              ALL SPORTS <KeyboardArrowDownIcon />
            </li>
          </Link>
          {togle ? (
            <ul>
              {fruits.map((fruit) => (
                <div key={fruit}>
                  <li style={{background:fruit.BackgroundColor}} onClick={() => setTogle1((prev)=>{
                    const name = fruit?.name
                    return{
                      ...prev,[name]:!togle1[fruit?.name]
                    }
                  })} key={fruit}>
                    
                      <span style={{color:fruit.iconColor,}}>{fruit.icon}</span>
                   {fruit.name} 
                    
                    <span><KeyboardArrowDownIcon /></span>
                  </li>
                  {togle1[fruit?.name]? (
                    <ul>

                      <li style={{borderBottom:"none"}}>List11</li>
                      <li style={{borderBottom:"none"}}>List11</li>
                      <li style={{borderBottom:"none"}}>List11</li>
                      <li style={{borderBottom:"none"}}>List11</li>
                      <li style={{borderBottom:"none"}}>List11</li>
                    
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </ul>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sider;
