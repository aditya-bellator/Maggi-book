import React, { useRef, useState } from "react";
import "./styles.scss";
import VerticalMode from "../../component/slider-sec/VerticalMode";
import SimpleSlider from "../../component/slider-sec/SimpleSlider/SimpleSlider";
import { Game } from "../../component/Game/Game";
import { GameTitle } from "../../component/Game/game-title/GameTitle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { SubNav } from "../../layout/subnav/SubNav";

const Home = () => {
  const matchArray = [
    { name: "In Play", color: "gray", icon: <AccessAlarmsIcon />  },
    { name: "Cricket", color: "rgb(32, 50, 123)", icon: <SportsCricketIcon /> },
    { name: "Tennis", color: "rgb(241, 133, 33)", icon: <SportsBaseballIcon /> },
    { name: "Football", color: "rgb(3, 179, 127)", icon: <SportsSoccerIcon /> },
    { name: "Horse Racing", color: "rgb(158, 64, 37)", icon: <AccessAlarmsIcon /> },
  ];

  const [selectedGame, setSelectedGame] = useState("In Play");
  const [selectedGameIcon, setSelectedGameIcon] = useState(<AccessAlarmsIcon />);
  
  const [color, setColor] = useState("gray");
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -200, // Adjust the value to control the scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust the value to control the scroll distance
      behavior: "smooth",
    });
  };

  // Extract names from matchArray
  const names = matchArray.map(item => {item.name});
  const icon = matchArray.map(item => {item.icon});

  return (
    <>
    <SubNav/>
    <section>
      <div className="main-left-container">
        <div className="hero-sec">
          <SimpleSlider />
        </div>
        <div className="tabs">
          <div className="horizontal-scroll-container">
            <button onClick={scrollLeft} className="scroll-button left">
              {"<"}
            </button>
            <div className="scroll-content" ref={scrollContainerRef}>
              {matchArray?.map((item) => {
                return (
                  <div
                  className="item"
                  key={item?.name}
                  style={{
                    backgroundColor: item?.name === selectedGame ? item?.color : "",
                  }}
                  onClick={() => {
                    
                    setSelectedGameIcon(item?.icon);
                    setSelectedGame(item?.name);
                    setColor(item?.color);
                  }}
                  >
                    <span className="tab-name-icon"> {item?.icon}</span>{item?.name}
                  </div>
                );
              })}
            </div>
            <button onClick={scrollRight} className="scroll-button right">
              {">"}
            </button>
          </div>
          <div
            style={{ width: "100%", backgroundColor: color }}
          >
            <GameTitle names={[selectedGame]} icon={[selectedGameIcon]} />
            <div className="games-col">
              {selectedGame && (
                <>
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                  <Game />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="main-right-container">
        <p>Our Casino</p>
        <div className="game-slider">
          <VerticalMode />
        </div>
      </div>
    </section>
              </>
  );
};

export default Home;
