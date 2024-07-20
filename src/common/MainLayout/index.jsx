
import Sider from '../../layout/sider';
import Navbar from '../../layout/navbar';
import { Outlet } from 'react-router-dom';
////styles
import "./styles.scss"
import { useEffect, useState } from 'react';
export let siderHandlerRef;
const MainLayout = () => {
  const [activeSider, setActiveSider] = useState(false)

  const siderOpenHandler = ()=>{
    console.log("first")
    setActiveSider(!activeSider)
  }
siderHandlerRef = siderOpenHandler


useEffect(() => {
  if(activeSider){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflowY = 'scroll';

  }
}, [activeSider])

  return (
    <div className='main-layout'>
      <div className="layout-nav-col">
        <Navbar />
      </div>
      <div className="main-layout-col mt-[.3125rem] mr-[.3125rem]">

      <div className={`${activeSider?"main-layout-sider-active":"main-layout-sider"}`} onClick={()=>setActiveSider(false)}>
      {/* {activeSider &&  */}
       <Sider/>
      {/* }  */}
      </div>
      <div className="main-layout-content">
      <Outlet />
      </div>
      </div>
      </div>
  )
}

export default MainLayout