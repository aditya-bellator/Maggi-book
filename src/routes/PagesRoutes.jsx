import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout/index.jsx"
import Home from "../Pages/home/Home.jsx";
import { home } from "./PagesUrl.jsx";
import SportsDetails from "../Pages/sportsdetails/SportsDetails.jsx";
import Cuming from "../Pages/cuming/Cuming.jsx";
import LiveCasino from "../Pages/Live-casino/LiveCasino.jsx";
import FantasyGame from "../Pages/FantascyGame/FantasyGame.jsx";
import Slots from "../Pages/Slots/Slots.jsx";
import Lottery from "../Pages/Lottery/Lottery.jsx";




export const router = createBrowserRouter([
    {
      path: home,
      element: <MainLayout/>,
      children: [
        {
          path: home,
          element: <Home/>,
        },
        {
          path: "/sports/details",
          element: <SportsDetails />,

        },
        {
          path: "/cuming",
          element: <Cuming />,

        },
        {
          path: "/Live-Casino",
          element: <LiveCasino />,

        },
        {
          path: "/Slots",
          element: <Slots />,

        },
        {
          path: "/FantasyGame",
          element: <FantasyGame />,

        },
        {
          path: "/Lottery",
          element: <Lottery />,

        },
        
      
   
      ],
    },
   
  ]);