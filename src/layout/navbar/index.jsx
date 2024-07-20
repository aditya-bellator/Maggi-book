import  { useState } from 'react'
import "./styled.scss"
import { Link } from 'react-router-dom'
import Login from "../../Pages/login/Login"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const navArray = ["Lottery","SportsBook1","Exchange","Live Casino","Slots","Fantasy Game"]

  const handlTabClick = (i)=>{
    setActiveTab(i)
    if (i === 0 || i === 3 || i === 4 || i === 5) {
      setModalOpen(true)
    }
  };
  const closeModal=()=>{
    setModalOpen(false)
  }
  return (
    <div className='nav-main'>
      <ul className='menu-list'>
        {navArray?.map((item,i)=><Link to={""} key={item}><li className={i == activeTab ?`active`:""} onClick={()=>handlTabClick(i)}>{item}</li></Link>)}
        
    
      </ul>
      <Login isOpen={isModalOpen}onClose={closeModal} />
    </div>
  )
}

export default Navbar
