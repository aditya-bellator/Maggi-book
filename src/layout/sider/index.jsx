import { Link } from "react-router-dom";
// import Accordian from "../../component/Accordian"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import "./styles.scss";
import { useState } from "react";

const Sider = () => {
  const fruits = [
    {
      id: 1,
      icon: <AccessAlarmsIcon />,
      name: "InPlay",
    },
    {
      id: 2,
      icon: <AccessAlarmsIcon />,
      name: "Cricket",
    },
    {
      id: 3,
      icon: <AccessAlarmsIcon />,
      name: "Tennis",
    },
  ];
  const [togle, setTogle] = useState(false);
  const [togle1, setTogle1] = useState({});
  console.log(togle1)
  return (
    <div className="main-sider">
      <div className="logo">
        <img src={""} alt="logo" />
      </div>
      <div className="menu-links">
        <ul>
          <Link>
            <li>DASHBOARD</li>
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
                  <li onClick={() => setTogle1((prev)=>{
                    const name = fruit?.name
                    return{
                      ...prev,[name]:!togle1[fruit?.name]
                    }
                  })} key={fruit}>
                    <span>{fruit.icon}</span>
                    {fruit.name}
                  </li>
                  {togle1[fruit?.name]? (
                    <ul>

                      <li>List1</li>
                      
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
