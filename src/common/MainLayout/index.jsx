
import Sider from '../../layout/sider';
import Navbar from '../../layout/navbar';
import { Outlet } from 'react-router-dom';
////styles
import "./styles.scss"

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <div className="layout-nav-col">
        <Navbar/>
      </div>
      <div className="main-layout-col mt-[.3125rem] mr-[.3125rem]">

      <div className="main-layout-sider">
        <Sider/>
      </div>
      <div className="main-layout-content">
      <Outlet/>
      </div>
      </div>
      </div>
  )
}

export default MainLayout