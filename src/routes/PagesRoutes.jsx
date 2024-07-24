import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout/index.jsx"
import Home from "../Pages/home/Home.jsx";
import { home } from "./PagesUrl.jsx";
import SportsDetails from "../Pages/sportsdetails/SportsDetails.jsx";
import Cuming from "../Pages/cuming/Cuming.jsx";




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

        }
        
      
   
      ],
    },
   
  ]);