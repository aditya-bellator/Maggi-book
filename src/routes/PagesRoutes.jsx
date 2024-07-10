import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout/index.jsx"
import Home from "../Pages/home/Home.jsx";
import { home } from "./PagesUrl.jsx";



export const router = createBrowserRouter([
    {
      path: home,
      element: <MainLayout/>,
      children: [
        {
          path: home,
          element: <Home/>,
        },
      
   
      ],
    },
   
  ]);