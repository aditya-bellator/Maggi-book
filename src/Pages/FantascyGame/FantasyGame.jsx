import React, { useState } from 'react'
import GameCard from '../../component/game-card/GameCard'
import {arry} from "../../common/MainLayout/json/json";
import "./style.scss"
import { useMediaQuery } from '../../useMediaQuery';
import { avi, di, go, hi, ho, mi, mr, pi } from '../../assets';
const FantasyGame = () => {
    const findData = arry?.filter((elm)=>elm?.name == "fantasy game")
    const [activeTab, setActiveTab] = useState(0);
    const isMobile = useMediaQuery("(max-width:780px)")
    return (
      <>
      <div className="live-casino">
  
           { findData?.map((item)=>{
               return(
                   <div className="fantacy-sec"  key={item?.name}>
              {/* <h1>{item?.name}</h1> */}
              <div className="fantacy-game">
                {item?.img?.map((elm, i)=>{
                    return(
                        
                        <GameCard img={elm?.img} setActiveTab={setActiveTab} index={i} activeTab={activeTab}  name={elm?.imageName} key={elm?.imageName}/>
                      )
                  })}
              </div>
            </div>
                )
              })}
              </div>


              <div className="fantacy-game-icon">

                <img src={avi} alt="avi" />
                <img src={di} alt="di" />
                <img src={go} alt="go" />
                <img src={hi} alt="hi" />
                <img src={ho} alt="ho" />
                <img src={mi} alt="mi" />
                <img src={mr} alt="mr" />
                <img src={pi} alt="pi" />
              </div>

      </>
    )
  }

export default FantasyGame